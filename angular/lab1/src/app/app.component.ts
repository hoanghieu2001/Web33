import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name ='Angular' + VERSION.major
  show=false;
  // databinding
  // title = 'lab1';
  user={
    name:"Hiệu",
    age:18,
  }
  // even binding
  // handler(){
  //   console.log('clicked');
  // }
}
