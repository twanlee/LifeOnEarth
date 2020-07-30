import { Component, OnInit } from '@angular/core';
import {DateUltilService} from './date-ultil.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {
  output = '';

  constructor(private dateUltilService: DateUltilService) { }

  ngOnInit(): void {
  }
  onChange(event){
    this.output = this.dateUltilService.getDiffToNow(event);
  }
}
