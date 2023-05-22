import { Component, VERSION, Version } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'baby';
  name='Angular' +VERSION.major;
  // data binding
  user={
    name : "Hoàng Văn Hiệu",
    age:20
  };
  handler(){
    console.log("Clicker");
  }
}
