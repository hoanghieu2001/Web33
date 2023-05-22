// import { Component, Input } from '@angular/core';

//  @Component({
//   selector: 'hello',
//   template: `<h1>Hello{{name}}!</h1>`,
//   styles:[`h1{font-family:lato;}`]
//  })

//  export class HelloComponent  {
//   @Input() name:any;
//   constructor() { }

//   ngOnInit() {
//     console.log("Thành công");
//    }
//    ngOnDestroy(){
//     console.log("Thất bại");
//    }

//  }
import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1>Hello{{name}}!</h1>`,
  styles: [`h1{font-family:Lato ;}`]
})
export class HelloComponent {
  @Input() name: any;

  ngOnInit() {
    console.log('Hello init');
  }
  ngOnDestroy() {
    console.log('Hello Destroy');
  }
}
