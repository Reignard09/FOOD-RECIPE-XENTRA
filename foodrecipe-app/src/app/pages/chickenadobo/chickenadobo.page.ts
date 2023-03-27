import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chickenadobo',
  templateUrl: './chickenadobo.page.html',
  styleUrls: ['./chickenadobo.page.scss'],
})
export class ChickenadoboPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  karekare(){
    this.router.navigate(['karekare']);
  }
}
