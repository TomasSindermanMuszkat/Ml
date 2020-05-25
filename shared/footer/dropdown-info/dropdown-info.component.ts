import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dropdown-info',
  templateUrl: './dropdown-info.component.html',
  styles: [
  ]
})
export class DropdownInfoComponent implements OnInit {

  @Input() tag: string;
  @Input() title: string;
  @Input() id: string;

  constructor() { }

  ngOnInit(): void {
  }

}
