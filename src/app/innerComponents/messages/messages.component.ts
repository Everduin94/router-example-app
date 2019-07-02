import { Component, OnInit } from '@angular/core';
import { FakerService } from 'src/app/services/faker.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  messages$;
  show = false;

  constructor(private fs: FakerService) { }

  ngOnInit() {
    this.messages$ = this.fs.getMessages();
    setTimeout(() => {
      this.show = true;  
    }, 10);
  }

}
