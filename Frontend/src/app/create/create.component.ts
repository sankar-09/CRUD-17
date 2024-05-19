import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiserviceService } from '../apiservice.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent implements OnInit {

  constructor (private service:ApiserviceService, private router:ActivatedRoute){}

  errormsg:any;
  successmsg:any;
  getparamid:any;

  ngOnInit(): void {
    this.getparamid = this.router.snapshot.paramMap.get('id');
    this.service.getSingleData(this.getparamid).subscribe((res)=>{
      console.log(res,'res = >');
      this.userForm.patchValue({
        id:res.data[0].id,
       fullname:res.data[0].fullname,
       email:res.data[0].email,
       mobile:res.data[0].mobile
      });

    });
  }
  


  userForm = new FormGroup({
    'id':new FormControl('',Validators.required),
    'fullname':new FormControl('',Validators.required),
    'email':new FormControl('',Validators.required),
    'mobile':new FormControl('',Validators.required)
  });

  //Create New User
  userSubmit()
  {
    if(this.userForm.valid){
      console.log(this.userForm.value);
      this.service.createData(this.userForm.value).subscribe((res)=>{
        console.log(res,'res == >');
        this.userForm.reset();
        this.successmsg = res.message;
      });
    }
    else{
      this.errormsg = 'Enter All Fields..!';
    }
  }


  //Update User
  userUpdate(){
    console.log(this.userForm.value,'UpdatedForm');

    if(this.userForm.valid){
      this.service.UpdateData(this.userForm.value,this.getparamid).subscribe((res)=>{
        console.log(res,'Updated Data');
        this.successmsg = res.message;
        this.userForm.reset();
      });
    }
    else{
      this.errormsg = 'Enter All Fields..!';
    }
  }
  
  }


