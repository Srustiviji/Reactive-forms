import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }
   registerForm:any;
  ngOnInit(): void {
      this.registerForm=new FormGroup({
      "firstName":new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z]*')]),
      "lastName":new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z]*')]),
      "emailid":new FormControl(null,[Validators.required,Validators.email]),
      "phonenumber":new FormControl(null,[Validators.required,Validators.pattern('[0-9]*')])
    })
  }
  submitData()

  {console.log(this.registerForm.value);

      if (this.registerForm.valid){
        alert(`THANK YOU ${this.registerForm.value.firstName} `);
      }



  }
  get firstname() {return this.registerForm.get('firstName')};
  get lastname() {return this.registerForm.get('lastName')};
  get emailid() {return this.registerForm.get('emailid')};
  get phonenumber() {return this.registerForm.get('phonenumber')};
}



