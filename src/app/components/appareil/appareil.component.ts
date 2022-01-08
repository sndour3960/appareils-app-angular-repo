import { Component, OnInit } from '@angular/core';
import { Appareil } from 'src/app/models/appareil';
import { AppareilService } from 'src/app/services/appareil.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {
  appareils?: Appareil[];

  constructor(private appareilService: AppareilService) { }

  ngOnInit(): void {
    this.appareils = this.appareilService.getAppareils();
  }

  onSwitchOnAll() {
    this.appareilService.switchOnAll();
  }
  
  onSwitchOffAll() {
    this.appareilService.switchOffAll();
  }

}
