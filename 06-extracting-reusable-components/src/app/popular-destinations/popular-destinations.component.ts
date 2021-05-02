import { Component, Input, OnInit } from '@angular/core';
import { Destination } from '../app.component';

@Component({
  selector: 'app-popular-destinations',
  templateUrl: './popular-destinations.component.html',
  styleUrls: ['./popular-destinations.component.scss']
})
export class PopularDestinationsComponent implements OnInit {

  @Input() destination: Destination;
  constructor() { }

  ngOnInit(): void {
  }

}
