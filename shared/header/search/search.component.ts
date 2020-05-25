import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit {

  @Input() inSearch: string;

  constructor() { }

  ngOnInit(): void {
  }

}
