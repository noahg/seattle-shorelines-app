import { Component, OnInit } from '@angular/core';
import { EmailValidator } from '@angular/forms';

import { NewsletterService } from './../newsletter.service';

@Component({
  selector: 'newsletter-form',
  templateUrl: './newsletter-form.component.html',
  styleUrls: ['./newsletter-form.component.css'],
  providers: [NewsletterService]
})
export class NewsletterFormComponent implements OnInit {

  constructor(private newsletterService: NewsletterService) { }

  ngOnInit() {
  }

  submit(form){
    this.newsletterService.subscribe(form.value.email)
  }

}
