import { Component, OnInit } from '@angular/core';
import { FakerService } from 'src/app/services/faker.service';
import { map, first, tap, switchMap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-message-detail',
  templateUrl: './message-detail.component.html',
  styleUrls: ['./message-detail.component.css']
})
export class MessageDetailComponent implements OnInit {

  singleMessage$;

  constructor(private fs: FakerService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.singleMessage$ = this.route.paramMap.pipe(
      switchMap(params => {
        const id = params.get('id');
        return this.fs.messageCache$.pipe(map(val => val[+id - 1]), tap(console.log))
      })
    );
  }

}
