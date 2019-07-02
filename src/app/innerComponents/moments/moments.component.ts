import { Component, OnInit } from '@angular/core';
import { FakerService } from 'src/app/services/faker.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-moments',
  templateUrl: './moments.component.html',
  styleUrls: ['./moments.component.css']
})
export class MomentsComponent implements OnInit {

  moments$;
  show = false;

  constructor(private fs: FakerService) { }

  ngOnInit() {
    this.moments$ = this.fs.getMoments();
    setTimeout(() => {
      this.show = true;  
    }, 10);
  }

}
