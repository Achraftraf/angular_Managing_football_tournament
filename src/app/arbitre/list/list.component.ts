import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmComponent } from '../confirm/confirm.component';

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
event: any;

constructor(private http: HttpClient, private ms: NgbModal){}
  ngOnInit(){
    this.http.get(this.backEndURL).subscribe(data=>{
      console.log(data);
      this.arbitres = data
    })
  }
  supprimer(event:MouseEvent){
    this.ms.open(ConfirmComponent).result.then(data=>{
      if(data == "ok"){
        const element=event.target as  HTMLElement
        this.http.delete(this.backEndURL+"/"+element.id).subscribe(data=>{
          element.parentElement?.parentElement?.remove()
        })
      }
        })
  //   const element=event.target as  HTMLElement

  //   // document.getElementById(element.id)?.remove()
  //   // console.log(element.id)
  //   this.http.delete(this.backEndURL+"/"+element.id).subscribe(data=>{
  // // this.ngOnInit()
  // element.parentElement?.parentElement?.remove()
  //   })
  
  }
}
