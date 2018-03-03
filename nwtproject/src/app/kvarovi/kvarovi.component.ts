import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';

import { Kvar } from '../model/kvar.model';
import { KvarService } from './kvarovi.service';
import { KomentarService } from '../komentari/komentari.service';

@Component({
  selector: 'kvarovi-list',
  templateUrl: './kvarovi.component.html',
  styleUrls: ['./kvarovi.component.css']
})
export class KvaroviComponent implements OnInit {

  kvarovi: Kvar[];

  subscription: Subscription;

  constructor(private kvarService: KvarService,private komentarService: KomentarService, private router: Router) {
    this.subscription = kvarService.RegenerateData$.subscribe(() =>
      this.getKvarovi()
    );
  }

  ngOnInit(): void {
    this.getKvarovi();
  }

  getKvarovi() {
    this.kvarService.getKvarovi().then(kvarovi =>
      this.kvarovi = kvarovi);
  }

  gotoAdd(): void {
    this.router.navigate(['/addKvar']);
  }

  gotoEdit(kvar: Kvar): void {
    this.router.navigate(['/editKvar', kvar.id]);
  }

  deleteKvar(kvaroviId: number): void {
    this.kvarService.deleteKvar(kvaroviId).then(
      () => this.getKvarovi()
    );
  }
}
