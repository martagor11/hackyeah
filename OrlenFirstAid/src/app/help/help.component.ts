import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss']
})
export class HelpComponent implements OnInit {

  title: string;

  constructor() { }

  ngOnInit() {
    this.title = 'Wezwij pomoc';
  }

}
