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

  emailRegEx: RegExp
  emailIsInvalid: boolean

  phoneRegEx: RegExp
  phoneIsInvalid: boolean


  validateEmail(emailInput) {
    this.emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g
    if (!this.emailRegEx.test(emailInput.value)) {
      console.log('emailIsInvalid - regex nie zgodny ' + this.emailIsInvalid)
      return this.emailIsInvalid = true
    } else {
      console.log('emailIsInvalid - regex ZGODNY ' + this.emailIsInvalid)
      return this.emailIsInvalid = false
    }
  }


  validatePhone(phoneInput) {
    this.phoneRegEx = /^(\+)*(\d(\ )*(-)*)+$/g
    if (!this.phoneRegEx.test(phoneInput.value)) {
      return this.phoneIsInvalid = true
    } else {
      return this.phoneIsInvalid = false
    }
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
