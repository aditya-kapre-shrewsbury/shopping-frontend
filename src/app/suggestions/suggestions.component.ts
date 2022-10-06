import { Component, OnInit } from '@angular/core';
import { Suggestion } from '../suggestion';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-suggestions',
  templateUrl: './suggestions.component.html',
  styleUrls: ['./suggestions.component.css']
})
export class SuggestionsComponent implements OnInit {

  suggestions: Suggestion[] = [
    {name: "T-shirt", price: 12.89},
    {name: "Gloves", price: 23.67},
    {name: "Milk", price: 2.99},
    {name: "Snow remover", price: 10.87},
    {name: "Thermal", price: 42.25}
  ];

  selectedSuggestion?: Suggestion;

  sugg: Sugg | undefined;

  constructor(private http: HttpClient) { 
  }

  ngOnInit(): void {
  }

  onSelect(selectedSuggestion: Suggestion): void {
    this.selectedSuggestion = selectedSuggestion;
    this.makeCall();
  }

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