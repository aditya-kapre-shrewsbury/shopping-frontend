import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SuggestionsService {

  sugg: Sugg | undefined;

  constructor(private http: HttpClient) { }

  makeCall(): void {
    console.log("going to make http call")
    this.http.get<Sugg>("http://localhost:9090/v1/suggestions/14226")
    .subscribe(data => {
      this.sugg = {
      id: data.id,
      suggestions: data.suggestions
    }
    this.callBackFunction();
  });
  }

  callBackFunction() {
    console.log("data retrieved id=%s", this.sugg?.id)
  }
}

export interface Sugg {
  id: string;
  suggestions: string | null
}