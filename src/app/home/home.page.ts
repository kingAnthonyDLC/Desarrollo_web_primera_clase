import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent,
  IonAccordionGroup,
  IonAccordion,
  IonItem,
  IonLabel
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: 
  [IonHeader, IonToolbar, 
    IonTitle, IonContent,
    IonAccordionGroup, IonAccordion,
    IonLabel, IonItem
  ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],


})
export class HomePage {
  constructor() {}

  message: string | null = null;

  showMessage() {
    this.message = '¡Felicidades! Has creado tu primera app con ionic';
  }

}