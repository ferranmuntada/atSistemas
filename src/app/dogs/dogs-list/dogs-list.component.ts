import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dogs-list',
  templateUrl: './dogs-list.component.html',
  styleUrls: ['./dogs-list.component.scss']
})
export class DogsListComponent implements OnInit {

  @Input() dogs: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
