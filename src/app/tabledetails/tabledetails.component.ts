import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tabledetails',
  templateUrl: './tabledetails.component.html',
  styleUrls: ['./tabledetails.component.scss']
})
export class TabledetailsComponent implements OnInit {

  @Input() tableDetails : any;

  constructor() { }

  ngOnInit(): void {
  }

}
