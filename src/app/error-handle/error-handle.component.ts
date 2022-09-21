import { Component, OnInit } from '@angular/core';
import { cilChild} from '@coreui/icons';
@Component({
  selector: 'app-error-handle',
  templateUrl: './error-handle.component.html',
  styleUrls: ['./error-handle.component.css']
})
export class ErrorHandleComponent implements OnInit {
  icons = { cilChild };
  constructor() { }

  ngOnInit(): void {
  }

}
