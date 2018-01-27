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



  sendMessage(messageForm) {
    messageForm.date = new Date().toJSON().slice(0,10).replace(/-/g, '/')
    messageForm.time = new Date().toJSON().slice(11, 16)
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
