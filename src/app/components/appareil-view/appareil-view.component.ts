import { Component, OnInit,Input } from '@angular/core';
import { AppareilService } from 'src/app/services/appareil.service';

import { Appareil } from '../../models/appareil';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit {
  @Input() appareil?: Appareil
  @Input() indexOfAppareil: number =0;

  constructor( private appareilService: AppareilService) { }
   
  ngOnInit(): void {
  }
  onSwitchOnOne() {
    this.appareilService.switchOnOne(this.indexOfAppareil);
  }
  
  onSwitchOffOne() {
    this.appareilService.switchOffOne(this.indexOfAppareil);
  }
}
