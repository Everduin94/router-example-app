import { Component, OnInit } from '@angular/core';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons/faEnvelope'
import {faBell} from '@fortawesome/free-solid-svg-icons/faBell'
import {faHome} from '@fortawesome/free-solid-svg-icons/faHome'
import {faDoorOpen} from '@fortawesome/free-solid-svg-icons/faDoorOpen'
import {faBolt} from '@fortawesome/free-solid-svg-icons/faBolt'

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.css']
})
export class ShellComponent implements OnInit {

  envelope = faEnvelope;
  bell = faBell;
  home = faHome;
  door = faDoorOpen;
  bolt = faBolt;

  constructor() { }

  ngOnInit() {
  }

}
