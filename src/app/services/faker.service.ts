import { Injectable } from '@angular/core';
import faker from 'faker';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FakerService {

  faker = faker;

  feedCache$;
  messageCache$;
  notificationCache$;
  momentsCache$;


  constructor() { }


  getFeed() {
    if (this.feedCache$) return this.feedCache$;

    console.log(this.faker);
    const dataArray = [];
    for (let index = 1; index < 25; index++) {
      const userName = this.faker.internet.userName();
      const content = this.faker.hacker.phrase();
      const date = this.faker.date.recent();
      const data = { name, userName, content, date, index };
      dataArray.push(data);
    }

    this.feedCache$ = of(dataArray);
    console.log(this.feedCache$)
    return this.feedCache$
  }

  getMessages() {
    if (this.messageCache$) return this.messageCache$;

    const dataArray = [];
    for (let index = 1; index < 25; index++) {
      const userName = this.faker.internet.userName();
      const content = this.faker.company.catchPhrase();
      const date = this.faker.date.recent();

      const data = { userName, content, date, index };
      dataArray.push(data);
    }

    this.messageCache$ = of(dataArray);
    return this.messageCache$;
  }

  getNotifications() {
    if (this.notificationCache$) return this.notificationCache$;

    const dataArray = [];
    for (let index = 1; index < 25; index++) {
      const userName = this.faker.internet.userName();
      const data = { userName, index };
      dataArray.push(data);
    }

    this.notificationCache$ = of(dataArray);
    return this.notificationCache$;
  }


  getMoments() {
    if (this.momentsCache$) return this.momentsCache$;

    const dataArray = [];
    const transport = this.faker.image.transport();
    const nature = this.faker.image.nature();
    const food = this.faker.image.food();
    for (let index = 1; index < 4; index++) {
      let image;
      if (index == 1) image = transport;
      else if (index == 2) image = nature;
      else image = food;
      const data = { image, index };
      dataArray.push(data);
    }

    this.momentsCache$ = of(dataArray);
    return this.momentsCache$;
  }
}
