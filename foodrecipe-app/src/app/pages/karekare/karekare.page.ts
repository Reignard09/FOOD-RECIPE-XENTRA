import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-karekare',
  templateUrl: './karekare.page.html',
  styleUrls: ['./karekare.page.scss'],
})
export class KarekarePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {

  }
  omelette(){
    this.router.navigate(['omelette']);
  }

}
