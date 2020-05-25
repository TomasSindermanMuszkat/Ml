import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dropdown-right',
  templateUrl: './dropdown-right.component.html',
  styles: [
  ]
})
export class DropdownRightComponent implements OnInit {

  @Input() tag: string;
  @Input() id: string;

  constructor() { }

  ngOnInit(): void {
  }

}
