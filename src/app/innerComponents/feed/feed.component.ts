import { Component, OnInit } from '@angular/core';
import { FakerService } from 'src/app/services/faker.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  statuses$;
  show = false;

  constructor(private fs: FakerService) {

   }

  ngOnInit() {
      this.statuses$ = this.fs.getFeed();
      setTimeout(() => {
        this.show = true;  
      }, 10);
      
  }

}
