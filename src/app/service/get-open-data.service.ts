import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppService } from './app.service';


@Injectable({
  providedIn: 'root'
})
export class GetOpenDataService extends AppService {

  constructor(http:HttpClient) {
    super(http,"https://data.coa.gov.tw/Service/OpenData/ODwsv/ODwsvAttractions.aspx");

    
  }
}
