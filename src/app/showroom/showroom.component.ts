import { Component, OnInit } from '@angular/core';

import { environment } from '../../environments/environment';

@Component({
  selector: 'app-showroom',
  templateUrl: './showroom.component.html',
  styleUrls: ['./showroom.component.scss']
})
export class ShowroomComponent implements OnInit {

  version: string = environment.version;

  constructor() { }

  ngOnInit() { }
}
