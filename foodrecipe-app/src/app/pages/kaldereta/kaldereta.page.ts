import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kaldereta',
  templateUrl: './kaldereta.page.html',
  styleUrls: ['./kaldereta.page.scss'],
})
export class KalderetaPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  chickenadobo(){
    this.router.navigate(['chickenadobo']);
  }
}
