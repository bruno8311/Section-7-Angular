import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'; 
import { Gifs, SearchResponse } from '../interfaces/gifs.interfaces';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private gifList: Gifs[] = [];
  private _tagsHistory: string[] = [];
  private apiKey = 'myALFv1KpQUJ5UTx3NSaDZB8Q3Vj6MOv';
  private serviceUrl = 'https://api.giphy.com/v1/gifs/'

  constructor(
    private http: HttpClient
  ) {
    this.getItemStorage();
  }

  get tagsHistory() {
    return [...this._tagsHistory];
  }

  get gifsSearchList() {
    return [...this.gifList]
  }

  private organizeHistory( tag: string) {
    tag = tag.toLowerCase()
    if(this.tagsHistory.includes(tag)){
      this._tagsHistory = this._tagsHistory.filter(oldTag => oldTag !== tag);
    }
    this._tagsHistory.unshift(tag);
    this._tagsHistory = this._tagsHistory.splice(0,9);
    this.saveTagInStorage();
  }

  public searchTag(tag: string) {
    if(tag.length === 0) return;
    this.organizeHistory(tag);
    const httpParams = new HttpParams()
      .set('api_key',this.apiKey)
      .set('q',tag)
      .set('limit',10)
    this.http.get<SearchResponse>(`${this.serviceUrl}search`, {params: httpParams}).subscribe(
      resp => {
        this.gifList = resp.data;
      }
    )
  }

  public saveTagInStorage() {
    localStorage.setItem('gifs', JSON.stringify(this._tagsHistory))
  }

  public getItemStorage() {
    if(!localStorage.getItem('gifs')) return;
    this._tagsHistory =  JSON.parse(localStorage.getItem('gifs')!);
     if(this._tagsHistory.length === 0) return;
     this.searchTag(this._tagsHistory[0])
  }

}
