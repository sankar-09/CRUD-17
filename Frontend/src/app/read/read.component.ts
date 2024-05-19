import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-read',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './read.component.html',
  styleUrl: './read.component.css'
})
export class ReadComponent implements OnInit {

  constructor(private service:ApiserviceService){}
  
  readData:any;
  successmsg:any;

  ngOnInit(): void {
    this.GetAllData();
}


//Get All Data
GetAllData(){
  this.service.getAllData().subscribe ((res)=>{
    console.log(res,"res == >");
    this.readData = res.data;
  });
}

//Delete By Id
deleteId(id:any){
  console.log(id,'deleted id == > ');
  this.service.deleteData(id).subscribe((res)=>{
    console.log(res,"deleted id == >");
    this.successmsg = res.message;
    this.GetAllData();
  });
}

}