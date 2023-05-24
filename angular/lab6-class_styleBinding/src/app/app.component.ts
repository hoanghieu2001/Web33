import { Component } from '@angular/core';
import { VERSION } from '@angular/platform-browser-dynamic';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'lab6-class_styleBinding';
  name = 'Angular' + VERSION.major
  isDanger = false;
  isWarning = false;
  users = {
    name: "Hiệu",
    age: 18
  }
}
