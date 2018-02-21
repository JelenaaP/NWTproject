import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { DatePipe } from '@angular/common';

import { FirmaService } from '../firme/firma.service';
import { Firma } from '../model/firma.model';


import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-firma-detail',
  templateUrl: './firma-detail.component.html',
  styleUrls: ['./firma-detail.component.css']
})
export class FirmaDetailComponent implements OnInit {
  firma: Firma = new Firma({ // if we add a new course, create an empty course
    adresa: '',
    ime: '',
    telefon: 13567,
    email: '',
    webSite: ''
  });


  mode: string = 'ADD';

  constructor(private firmaService: FirmaService,
    private route: ActivatedRoute, private location: Location, private router: Router) {
    
    
  }

  ngOnInit() {
    if (this.route.snapshot.params['id']) {
      this.mode = 'EDIT';
      // fetch course if we edit the existing course
      this.route.params
        .switchMap((params: Params) =>
          this.firmaService.getFirma(+params['id']))
        .subscribe(firma => {
          this.firma = firma;
         
        });
    }
  }



  save(): void {
    this.mode == 'ADD' ? this.add() : this.edit();
  }

  private add(): void {
    this.firmaService.addFirma(this.firma)
      .then(firma => {
        this.firmaService.announceChange();
        this.goBack();
      });
  }

  private edit(): void {
    this.firmaService.editFirma(this.firma)
      .then(firma => {
        this.firmaService.announceChange();
        this.goBack();
      });
  }

  goBack(): void {
    this.location.back();
  }




}
