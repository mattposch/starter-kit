import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collapse',
  templateUrl: './collapse.component.html',
})
export class CollapseComponent implements OnInit {

  isCollapsed = false;

  constructor() { }

  ngOnInit() { }


  collapsed(event: any): void {
    console.log(event);
  }

  expanded(event: any): void {
    console.log(event);
  }

}
