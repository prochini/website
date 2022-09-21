import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  slides: any[] = new Array(3).fill({id: -1, src: '', title: '', subtitle: ''});

  constructor() { }

  ngOnInit(): void {
    this.slides[0] = {
      src: './assets/img/caleb-russell-JmuyB_LibRo-unsplash.jpg',
    };
    this.slides[1] = {
      src: './assets/img/joey-csunyo-2EGuIR00UTk-unsplash.jpg',
    }
    this.slides[2] = {
      src: './assets/img/photoholgic-1GFUOji-yck-unsplash.jpg',
    }
    this.slides[3] = {
      src: './assets/img/victor-hM0jUUU5eDg-unsplash.jpg',
    }
  }

  
}
