import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lab4_if-else';
  name = 'Angular'+ VERSION.major;
  show=false
  
  user={
    name:"Hiệu",
    age:19,
  }
}
