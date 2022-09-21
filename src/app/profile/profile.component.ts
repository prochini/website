import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  introduce="I'm a three years expericence software developer, enjoy learn and create new thing,also like to maintain legacy code."
  skill=["C#","Angular2","MYSQL"];
  hobbie=["game","read","music"];
}
