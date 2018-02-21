import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { StanService } from '../stanovi/stan.service';
import { Stan } from '../model/stan.model';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-stan-detail',
  templateUrl: './stan-detail.component.html',
  styleUrls: ['./stan-detail.component.css']
})
export class StanDetailComponent implements OnInit {
    stan: Stan;

  mode: string;    

  constructor(private stanService: StanService, private route: ActivatedRoute, private location: Location) {
    this.stan = new Stan({ // if we add a new student, create an empty student
        ime: '',
        adresa: '',
        zgrada: '',
      });

    this.mode = 'ADD'
  }

  ngOnInit() {
    if (this.route.snapshot.params['id']) {
      this.mode = 'EDIT'; 
      // fetch student if we edit the existing student
      this.route.params
        .switchMap((params: Params) => 
          this.stanService.getStan(+params['id'])) // convert to number
        .subscribe(stan => {
          this.stan = this.stan;
          }
        );
    } 
  }

  save(): void {
    this.mode == 'ADD' ? this.add() : this.edit();    
  }

  private add(): void {
    this.stanService.addStan(this.stan)
      .then(stan => {
        this.stanService.announceChange();
        this.goBack();
      });
  }

  private edit(): void {
    this.stanService.editStan(this.stan)
      .then(stan => {
        this.stanService.announceChange();
        this.goBack();
      });
  }

  goBack(): void {
    this.location.back();
  }

}
