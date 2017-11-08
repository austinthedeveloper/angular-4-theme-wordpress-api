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
  public contactForm: {name: string, email: string, message: string};
  private contactId = '327';
  processing: boolean;
  public patterns;
  public message: {type: string, message: string};

  constructor(private route: ActivatedRoute, private contactService: ContactService) { }

  ngOnInit() {
    this.patterns = PATTERNS;
    this.data = this.route.snapshot.data['detail'];
  }

  getForm() {
    this.contactService.getForm(this.contactId)
    .subscribe(
      (res) => {
        res = this.contactService.mapForm(res.properties.form);
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
        this.message = {
          type: 'success',
          message: 'Your Contact Request has been successfully sent'
        };
        form.reset();
      },
      (err) => {
        this.processing = false;
        this.message = {
          type: 'danger',
          message: err.message || 'Something has gone wrong. Please try again later'
        };
        console.log('err', err);
      });
  }

}
