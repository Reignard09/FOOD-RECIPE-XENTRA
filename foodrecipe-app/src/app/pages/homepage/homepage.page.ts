import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.page.html',
  styleUrls: ['./homepage.page.scss'],
})
export class HomepagePage implements OnInit{


    accountTypes: Array<any>;
    
      constructor(private router: Router, private toastController: ToastController, private alertController: AlertController) { 
        this.accountTypes=[
          {name:"RECIPE 1", description:"Kaldereta", imageURL: "src=https://www.seriouseats.com/thmb/Ahvi-dWu-9xjE7iFsOlBxHtaONU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__20110114-goatstewcebu-primary_2-e88cf43a217b441581d6dfa2d345ca3f.jpg"},
          {name:"RECIPE 2", description:"Chicken Adobo"},
          {name:"RECIPE 3", description:"Kare - Kare"}
        ];
      }


  //constructor(){
 // this.recipes = [
   // {name:"Recipe1", description:"Kaldereta"},
    //{name:"Recipe2", description:"Chicken Adobo"}

  
    
 // ];
  
  ngOnInit() {
  }
  //async presentToast(recipe){
    //const toast = await this.toastController.create({
    //  message: 'You have choosed' + recipe.name,
   // })
 
  //constructor(private router: Router) { }
  
 kaldereta(){
    this.router.navigate(['kaldereta']);
  }

  //chickenadobo(){
   // this.router.navigate(['chickenadobo']);
  //}

  //karekare(){
   // this.router.navigate(['karekare']);
 // }

 // omelette(){
   // this.router.navigate(['omelette']);
  //}

 // spaghetti(){
   // this.router.navigate(['spaghetti']);
  //} 
//}

}
