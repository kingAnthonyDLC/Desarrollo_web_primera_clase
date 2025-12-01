import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule, ɵnormalizeQueryParams } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardSubtitle, IonCardTitle, IonButton, IonCardHeader } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonCardHeader, IonCardTitle, IonCardSubtitle],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PrincipalPage implements OnInit {
  productos =[
    {
      id: 1,
      titulo: "Decoración de Boda en Salinas",
      precio: 150,
      descripcion: "Card boda clase 26NOV",
      imagen: "assets/img/boda.jpg"
    },
    {
      id: 2,
      titulo: "Graduacion",
      precio: 150,
      descripcion: "Card graduacion clase 26NOV",
      imagen: "assets/img/Grad.jpg"
    },
    {
      id: 3,
      titulo: "¡Feliz Cumpleaños!",
      precio: 150,
      descripcion: "Card cumpleaños clase 26NOV",
      imagen: "assets/img/cumpleaños2.jpg"
    },
    {
      id: 4,
      titulo: "¡Feliz Navidad!",
      precio: 150,
      descripcion: "Card navidad clase 26NOV",
      imagen: "assets/img/navidad6.jpg"
    },
    {
      id: 5,
      titulo: "JKC eventos y decoraciones",
      precio: 150,
      descripcion: "Card principal",
      imagen: "assets/img/LOGO1.png"
    }
  ]

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }
    
  
  ngOnInit() {
  }


  ircasa() {
  this.router.navigate(['/home']);    
  
}
  
  irvermas(producto: any){
    this.router.navigate(['/vermas'], {queryParams: producto});
  }
}
