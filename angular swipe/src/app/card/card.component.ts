import { Component, OnInit, Input } from '@angular/core';
import { trigger, keyframes, animate, transition } from "@angular/animations";
import * as kf from './keyframes';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  animations: [
    trigger('cardAnimator', [
      transition('* => swiperight', animate(750, keyframes(kf.swiperight))),
      transition('* => swipeleft', animate(750, keyframes(kf.swipeleft)))
    ])
  ]

})
export class CardComponent {

  public users: any[] = [
    {
      "id": 0,
      "picture": "./assets/images/pic1.jpg",
      "age": 23,
      "name": "Pragathi",
      "proff": "Doctor, Poosam, Hindu - Kayasta, Andhra Pradesh, India"
    },
    {
      "id": 1,
      "picture": "./assets/images/pic2.jpg",
      "age": 40,
      "name": "Katrina Potter",
      "proff": "Doctor, Poosam, Hindu - Kayasta, Andhra Pradesh, India"

    },
    {
      "id": 2,
      "picture": "./assets/images/pic3.jpg",
      "age": 35,
      "name": "Genevieve Hardy",
      "proff": "Doctor, Poosam, Hindu - Kayasta, Andhra Pradesh, India"
    },
    {
      "id": 3,
      "picture": "./assets/images/pic4.jpg",
      "age": 30,
      "name": "Cabrera Jefferson",
      "proff": "Doctor, Poosam, Hindu - Kayasta, Andhra Pradesh, India"
    },
    {
      "id": 4,
      "picture": "./assets/images/pic1.jpg",
      "age": 37,
      "name": "Guadalupe Keith",
      "proff": "Doctor, Poosam, Hindu - Kayasta, Andhra Pradesh, India"
    },
    {
      "id": 5,
      "picture": "./assets/images/pic2.jpg",
      "age": 21,
      "name": "Richardson Tillman",
      "proff": "Doctor, Poosam, Hindu - Kayasta, Andhra Pradesh, India"
    },
    {
      "id": 6,
      "picture": "./assets/images/pic3.jpg",
      "age": 25,
      "name": "Burton Wynn",
      "proff": "Doctor, Poosam, Hindu - Kayasta, Andhra Pradesh, India"
    },
    {
      "id": 7,
      "picture": "./assets/images/pic4.jpg",
      "age": 21,
      "name": "Eileen Higgins",
      "proff": "Doctor, Poosam, Hindu - Kayasta, Andhra Pradesh, India"
    },
    {
      "id": 8,
      "picture": "./assets/images/pic1.jpg",
      "age": 31,
      "name": "Angeline Gill",
      "proff": "Doctor, Poosam, Hindu - Kayasta, Andhra Pradesh, India"
    },
    {
      "id": 9,
      "picture": "./assets/images/pic4.jpg",
      "age": 37,
      "name": "Dejesus Mcintyre",
      "proff": "Doctor, Poosam, Hindu - Kayasta, Andhra Pradesh, India"
    }
  ]
  public index = 0;
  @Input()
  parentSubject: Subject<any>;



  animationState: string;
  constructor() { }

  ngOnInit() {
    this.parentSubject.subscribe(event => {
      this.startAnimation(event)
    });
  }

  startAnimation(state) {
    if (!this.animationState) {
      this.animationState = state;
    }
  }

  resetAnimationState(state) {
    this.animationState = '';
    this.index++;
  }


  ngOnDestroy() {
    this.parentSubject.unsubscribe();
  }

}