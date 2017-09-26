import { WORDPRESS_CONTACT_URL } from './../shared/api';
import { Injectable } from '@angular/core';

@Injectable()
export class ContactService {
private url = `${WORDPRESS_CONTACT_URL}`;

constructor() { }

}
