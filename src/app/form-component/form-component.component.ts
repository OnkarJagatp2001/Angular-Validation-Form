import { Component } from '@angular/core';

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.css']
})
export class FormComponentComponent {
// num = 20141261;

submit(login: any){
  console.log("Form Submitted",login)
}
}
