import { Component, OnInit,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-addteacher',
  templateUrl: './addteacher.component.html',
  styleUrls: ['./addteacher.component.css']
})
export class AddteacherComponent implements OnInit {
  genders = ['male', 'female', 'other'];
  @ViewChild('f') signupForm: NgForm;
  user = {
    name: '',
    email: '',
    phone: '',
    course: '',
    
    gender: ''
  };
  submitted = false;

  constructor() { }

  ngOnInit() {
  }
 
  
  onSubmit() {
    this.submitted = true;
    this.user.name = this.signupForm.value.userData.name;
    this.user.email = this.signupForm.value.userData.email;
    this.user.phone = this.signupForm.value.userData.phone;
    this.user.course = this.signupForm.value.course;
    
    this.user.gender = this.signupForm.value.gender;

    this.signupForm.reset();
  }
  
  
}



