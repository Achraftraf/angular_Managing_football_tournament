import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  // arbitres = [
  //   {"idarbitre" :1,"nationality":"maroc","name" : "achraf"},
  //   {"idarbitre" :2,"nationality":"france","name" : "amine"},
  //   {"idarbitre" :3,"nationality":"USA","name" : "hakim"},
  //   {"idarbitre" :4,"nationality":"canada","name" : "ossama"},
  // ]
  backEndURL = "http://localhost:8080/arbitres";
  arbitres:any
  constructor (private http:HttpClient){}
  ngOnInit(){
    this.http.get(this.backEndURL).subscribe(data=>{
      console.log(data);
      this.arbitres = data
    })
  }
}
