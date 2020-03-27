import { Component } from '@angular/core';
import './../assets/smtp.js';

declare let Email: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EmailSender';
}
