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

  constructor(private fs: FakerService) { }

  ngOnInit() {
    this.moments$ = this.fs.getMoments().pipe(tap(console.log));
  }

}
