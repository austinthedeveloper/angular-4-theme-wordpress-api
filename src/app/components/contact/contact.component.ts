import { PATTERNS } from './../../shared/patterns';
import { ContactService } from './../../services/Contact.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  public data: any;
  public contactForm = {
    name: '',
    email: '',
    message: ''
  };
  private contactId = '327';
  processing: boolean;
  public patterns;

  constructor(private route: ActivatedRoute, private contactService: ContactService) { }

  ngOnInit() {
    this.patterns = PATTERNS;
    this.data = this.route.snapshot.data['detail'];
    this.getForm();
  }

  getForm() {
    this.contactService.getForm(this.contactId)
    .subscribe(
      (res) => {
        res = this.contactService.mapForm(res.properties.form);
        console.log('res', res);
      },
      (err) => {
        console.log('err', err);
      });
  }

  postForm(form) {
    this.processing = true;
    const body = {
      'your-name': form.name,
      'your-email': form.email,
      'your-message': form.message || ''
    };
    this.contactService.postForm(this.contactId, body)
      .subscribe(
      (res) => {
        this.processing = false;
        console.log('res', res);
      },
      (err) => {
        this.processing = false;
        console.log('err', err);
      });
  }

}
