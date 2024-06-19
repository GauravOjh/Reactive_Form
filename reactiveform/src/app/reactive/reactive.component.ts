import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { emit } from 'process';

@Component({
  selector: 'app-reactive',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './reactive.component.html',
  styleUrl: './reactive.component.css'
})
export class ReactiveComponent implements OnInit {
  myForm!: FormGroup;

  ngOnInit(): void {
    this.myForm = new FormGroup({
      name: new FormControl('Gaurav',Validators.required),
      email: new FormControl(null,[Validators.required,Validators.email]),
      readTerm: new FormControl(false)
    });
  }
accept(){
  debugger;
  this.myForm.setValue({
    name:'Gaurav',
    email:null,
    readTerm:true
  })
}

  onSubmit(){
    this.myForm.reset();
  }
}
