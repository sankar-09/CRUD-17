import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, PartialObserver } from 'rxjs';
import { tick } from '@angular/core/testing';


@Injectable({
  providedIn: 'root'
})
export class ApiserviceService  implements OnInit {

  constructor( private _http: HttpClient) { }
  ngOnInit(): void {  }

  //get All Data
  apiUrl='http://localhost:3000';

  getAllData(): Observable<any> {
    return this._http.get(`${this.apiUrl}/getusers`);
  }
  

    //Get Single Date
    getSingleData(id:any):Observable<any>{
      let ids = id;
      return this._http.get(`${this.apiUrl}/get_single_user/${ids}`);
    }


  //Create Data
  createData(data:any): Observable<any> {
    console.log(data,'createapi = >');
    return this._http.post(`${this.apiUrl}/postuser`,data);
  }

  //Delete Single Data
  deleteData(id:any):Observable<any>{
    let ids = id;
    return this._http.delete(`${this.apiUrl}/deleteuser/${ids}`);
  }

  //Update Data
  UpdateData(data:any,id:any):Observable<any>{
    let ids = id;
    return this._http.put(`${this.apiUrl}/putuser/${ids}`,data);
  }

}
