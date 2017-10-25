import { Injectable } from '@angular/core';
import { Jsonp, RequestOptions, URLSearchParams } from '@angular/http';

@Injectable()
export class NewsletterService {

  constructor(private jsonp: Jsonp) { }

  subscribe(email: string) {
    const base_url = 'https://seattleshorelines.us16.list-manage.com/subscribe/post-json';
    const body = {};

    const mailchimpUser = '2de1f8868da2b8dfa7c18c7a0';
    const mailchimpListId = '0b668e0503';

    let params = new URLSearchParams();
    params.set('u', mailchimpUser);
    params.set('id', mailchimpListId);
    params.set('subscribe', 'Subscribe');
    params.set('EMAIL', email);
    params.set('c', 'JSONP_CALLBACK');

    const options = new RequestOptions({ 
      params : params,
    });

    this.jsonp
      .request(base_url, options)
      .subscribe(res => console.log(res));

  }

}
