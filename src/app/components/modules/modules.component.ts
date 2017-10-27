import { RetroService } from './../../services/Retro.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modules',
  templateUrl: './modules.component.html',
  styleUrls: ['./modules.component.scss']
})
export class ModulesComponent implements OnInit {

  activeCount = {
    count: 0,
    from: 0,
    duration: 1
  };

  truncateWord = 'Austin The Developer Writes Code';

  constructor(private retroService: RetroService) { }

  ngOnInit() {
    this.getUser();
  }

  getUser(user: string = 'foleykoontz') {
    this.retroService.getUserRankAndScore(user)
    .subscribe(
      (res) => console.log,
      (err) => console.log
    );
  }
}
