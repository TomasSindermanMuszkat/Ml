import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-advertisement',
  templateUrl: './advertisement.component.html',
  styleUrls: []
})
export class AdvertisementComponent implements OnInit {

  @Input() titleMain: string;
  @Input() title1: string;
  @Input() title2: string;

  constructor() { }

  ngOnInit(): void {
  }

}
