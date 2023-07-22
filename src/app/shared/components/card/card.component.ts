import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  cards = [
    {
      title: 'Card 1',
      subtitle: 'Subtitle for Card 1',
      content: 'Content for Card 1',
      action: 'Action 1',
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
