import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-aliment-details',
  templateUrl: './aliment-details.component.html',
  styleUrls: ['./aliment-details.component.scss']
})
export class AlimentDetailsComponent implements OnInit {
  @Input() aliment;
  constructor() { }

  ngOnInit(): void {
  }

}
