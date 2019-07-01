import { Component, OnInit } from '@angular/core';
import { FakerService } from 'src/app/services/faker.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  notifications$;

  constructor(private fs: FakerService) { }

  ngOnInit() {
    this.notifications$ = this.fs.getNotifications();
  }

}
