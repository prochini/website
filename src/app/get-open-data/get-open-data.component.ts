import { GetOpenDataService } from './../service/get-open-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-open-data',
  templateUrl: './get-open-data.component.html',
  styleUrls: ['./get-open-data.component.css']
})
export class GetOpenDataComponent implements OnInit {

  items:any=[];
  constructor(private getOpenDataService: GetOpenDataService) {
    this.getOpenDataService.listData()
    .subscribe(res => {
      this.items = res;
      console.log(this.items);
      
    })
   }

  ngOnInit(): void {
  }

}
