import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-slick',
  templateUrl: './slick.component.html',
  styles: [
  ]
})
export class SlickComponent implements OnInit {

  @Input() tag: string;

  // tslint:disable-next-line: max-line-length
  @Input() images = [0, 1, 10, 100, 1000, 1001, 1002, 1003, 1004, 1005, 1006, 1020, 1008, 1009, 1010, 1011, 1012, 1013, 1014, 1015, 1016, 1021, 1018, 1019, 102].map((n) => `https://picsum.photos/id/${n}/300/300`);

  constructor() {
  }

  ngOnInit(): void {
  }

}
