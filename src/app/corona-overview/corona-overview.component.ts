import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-corona-overview',
  templateUrl: './corona-overview.component.html',
  styleUrls: ['./corona-overview.component.css']
})
export class CoronaOverviewComponent implements OnInit {
  @Input() confirmedCases: string;
  @Input() deadCases: string;
  @Input() recoveredCases: string;
  constructor() {
  }

  ngOnInit(): void {
  }

}
