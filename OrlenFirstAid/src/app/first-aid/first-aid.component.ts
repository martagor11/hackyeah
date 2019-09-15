import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-aid',
  templateUrl: './first-aid.component.html',
  styleUrls: ['./first-aid.component.scss']
})
export class FirstAidComponent implements OnInit {

  title: string;
  choices: string[];

  constructor() { }

  ngOnInit() {
    this.title = 'Pierwsza pomoc';
    this.choices = ['Zabezpiecz miejsce wypadku', 'Zadzwoń na nr 112', 'Udziel pierwszej pomocy'];
  }

}
