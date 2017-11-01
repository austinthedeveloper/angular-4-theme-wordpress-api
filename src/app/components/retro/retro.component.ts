import { RetroService } from './../../services/Retro.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-retro',
  templateUrl: './retro.component.html',
  styleUrls: ['./retro.component.scss']
})
export class RetroComponent implements OnInit {

  @Input()
  'data' = this.route.snapshot.data['detail'];
  @Input()
  'personal' = this.route.snapshot.data['personal'];

  processing: boolean;
  message: string;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private retroService: RetroService) { }

  ngOnInit() {
  }

  search(user: string) {
    this.processing = true;
    this.message = null;
    this.retroService.getUserRankAndScore(user)
      .subscribe(
        (res) => {
          if (res.Score === 0 && res.Rank === '1') {
            this.message = 'No User Found';
            this.processing = false;
          } else {
            this.router.navigateByUrl(`/retro/user/${user}`);
          }
        },
        (err) => { });
  }

}
