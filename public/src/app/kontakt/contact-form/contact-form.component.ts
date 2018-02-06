import { Component, OnInit } from '@angular/core';

import { MessageService } from '../message.service'


@Component({
  selector: 'okomed-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})

export class ContactFormComponent {

  constructor(private messageService: MessageService) {
  }


  phoneRegEx: RegExp

  validatePhone(phoneInput) {
    this.phoneRegEx = /^(\d){7,}/g
    console.log(this.phoneRegEx.test(phoneInput.value))

    // if (phoneInput.value  !== '555') {
    //   alert('zly numer')
    // }

    // this.phoneRegEx = /\d/g
    // if (!this.phoneRegEx.test(phoneInput.value)) {
    //   alert('zly numer')
    // }
  }


  sendMessage(messageForm) {
    this.messageService.addNewMessageToMESSAGES(messageForm).subscribe((message) => {
      console.log('message posted')
    })
  }


  getComments() {
    this.messageService.makeGetRequest().subscribe(data => {
      console.log(data)
    })
  }


}
