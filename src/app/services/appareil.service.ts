import { Injectable } from '@angular/core';
import { Appareil } from '../models/appareil';

@Injectable({
  providedIn: 'root'
})
export class AppareilService {
    appareils : Appareil[] = [
      {
        id: 1,
        name: "Ordinateur",
        status: 'éteint'
      },
      {
        id: 2,
        name: "Téléphone",
        status: 'éteint'
      },
      {
        id: 3,
        name: "Machine à laver",
        status: 'allumé'
      }
    ];

    constructor() { }
      
  getAppareils(){
    return this.appareils;
  }
  switchOnAll(){
    this.appareils.forEach(appareil => appareil.status='allumé');
  }

  switchOffAll(){
    this.appareils.forEach(appareil => appareil.status='éteint');
  }

  switchOffOne(id:number){
  this.appareils[id].status='éteint';
  }
  switchOnOne(id:number){
    this.appareils[id].status='allumé';
   }
    

}
