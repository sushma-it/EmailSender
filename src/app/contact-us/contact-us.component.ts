import { Component, OnInit } from '@angular/core';

import emailjs, { EmailJSResponseStatus } from 'emailjs-com';


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  constructor() { }

  public sendEmail(e: Event) {
    e.preventDefault();
    emailjs.sendForm('gmail', 'template_FVohBb7l', e.target as HTMLFormElement, 'user_mbRicy1cSmoFimudSQUtw')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }

  ngOnInit(): void {
  }

}
