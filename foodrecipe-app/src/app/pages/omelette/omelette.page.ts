import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-omelette',
  templateUrl: './omelette.page.html',
  styleUrls: ['./omelette.page.scss'],
})
export class OmelettePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  spaghetti(){
    this.router.navigate(['spaghetti']);

  }
}
