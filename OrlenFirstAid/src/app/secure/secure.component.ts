import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-secure',
  templateUrl: './secure.component.html',
  styleUrls: ['./secure.component.scss']
})
export class SecureComponent implements OnInit {

  title: string;

  constructor() { }

  ngOnInit() {
    this.title = 'Zabezpiecz miejsce wypadku';
  }

}
