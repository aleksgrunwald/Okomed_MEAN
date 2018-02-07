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

  blankPhoneAndEmailNotification: boolean
  blankNameAndSurnameNotification: boolean

  email: string
  phone: string


  validateEmail(emailInput) {
    console.log(this.email)
    if (emailInput.value === '') {
      return this.emailIsInvalid = false
    } else {

      this.emailRegEx = /^((([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,})))$/g
      if (!this.emailRegEx.test(emailInput.value)) {
        return this.emailIsInvalid = true
      } else {
        return this.emailIsInvalid = false
      }

    }
  }



  validatePhone(phoneInput) {
    if (phoneInput.value === '') {
      return this.phoneIsInvalid = false
    } else {

      this.phoneRegEx = /^(\+)*(\d(\ )*(-)*)+$/g
      if (!this.phoneRegEx.test(phoneInput.value)) {
        return this.phoneIsInvalid = true
      } else {
        return this.phoneIsInvalid = false
      }

    }
  }


  hideBlankPhoneAndEmailNotification() {
    return this.blankPhoneAndEmailNotification = false
  }


  sendMessage(messageForm) {
    console.log(messageForm)
    if (messageForm.userInfo.phone === null || messageForm.userInfo.phone === '' && messageForm.userInfo.email === null || messageForm.userInfo.email === '') {
      return this.blankPhoneAndEmailNotification = true
    } else {
      this.messageService.addNewMessageToMESSAGES(messageForm).subscribe((message) => {
        console.log('message posted')
      })
    }
  }


  getComments() {
    this.messageService.makeGetRequest().subscribe(data => {
      console.log(data)
    })
  }


}
