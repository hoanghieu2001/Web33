import { Component } from '@angular/core';
import { CommonService } from '../Service/common.service';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.scss']
})
export class TemplateDrivenFormComponent {
  // form in ra tuổi và tên nhập vào input
  public name = '';
  public age = '';
  constructor(private common:CommonService) {

  }
  ngOnInit(): void{ }
  public submitForm(): void{
    // console.log('submit form:name =' +this.name);
    this.common.submitData({name:this.name,age:this.age})
  }
}
