import { Component, OnInit } from '@angular/core';
import { FakerService } from 'src/app/services/faker.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  statuses$;

  constructor(private fs: FakerService) {

   }

  ngOnInit() {
      this.statuses$ = this.fs.getFeed();
      this.statuses$.subscribe(val => console.log('emit'))
  }

}
