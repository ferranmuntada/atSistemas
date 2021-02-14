import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dog-card',
  templateUrl: './dog-card.component.html',
  styleUrls: ['./dog-card.component.scss']
})
export class DogCardComponent implements OnInit {

  @Input() dog = '';

  constructor() { }

  ngOnInit(): void {
  }

}
