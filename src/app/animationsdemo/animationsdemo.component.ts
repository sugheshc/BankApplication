import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animationsdemo',
  templateUrl: './animationsdemo.component.html',
  styleUrls: ['./animationsdemo.component.css'],
  animations:[
    trigger('openClose',[
      state('open',style({
        height:'500px',
        backgroundColor:'lightgreen'
      })),
      state('close',style({
        height:'200px',
        backgroundColor:'aqua'
      })),
      transition('open=>close',[
        animate('1s')
      ]),
      transition('close=>open',[
        animate('2s')
      ])
    ])
  ]
})
export class AnimationsdemoComponent implements OnInit {
  isOpen=true;
  constructor() { }

  ngOnInit(): void {
  }

  toggle(){
    this.isOpen = ! this.isOpen
  }

}
