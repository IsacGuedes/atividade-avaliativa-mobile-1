import { Component } from '@angular/core';
import { IonImg, IonItem, IonList, IonIcon, IonButton, IonInput, IonCardHeader,IonCardSubtitle, IonCardTitle, IonCardContent, IonCard, IonButtons, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { locationOutline, lockClosed, walletOutline, calendarOutline, starOutline, starSharp, bedOutline } from 'ionicons/icons';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [ IonImg, IonItem, IonList, IonIcon, IonButton, IonInput, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonCard, IonButtons, IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage {
  constructor() {
    addIcons({locationOutline,bedOutline,walletOutline,calendarOutline,starSharp,starOutline,lockClosed});
  }
}
