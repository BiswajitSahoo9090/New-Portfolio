import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from '../footer/footer.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FooterComponent,ReactiveFormsModule,NavbarComponent,CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  userForm:any;

  constructor(public formbuilder:FormBuilder){

  }
  ngOnInit(){
    this.userForm=this.formbuilder.group({
      name: [null],
      email: [null],
      message: [null],
    });
  }
  onSubmit(){
    console.log("Form Submitted",this.userForm.value);
  }
}
