import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input()
  'post': any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    if (this.route.snapshot.data['detail']) {
      this.post = this.route.snapshot.data['detail'];
    }
  }

}
