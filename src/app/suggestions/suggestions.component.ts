import { Component, OnInit } from '@angular/core';
import { Suggestion } from '../suggestion';

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

  constructor() { 
  }

  ngOnInit(): void {
  }

  onSelect(selectedSuggestion: Suggestion): void {
    this.selectedSuggestion = selectedSuggestion;
  }
}
