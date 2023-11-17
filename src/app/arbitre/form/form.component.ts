import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  backEndURL = "http://localhost:8080/arbitres"
  formArbitre  = this.fb.group({
    idarbitre : [],
    nationality  : [],
    name: []
  })
  constructor(private router:Router,private fb:FormBuilder , private http:HttpClient){}

  addArbitre(){
    console.log(this.formArbitre.value)
    this.http.post(this.backEndURL,this.formArbitre.value).subscribe(data=>{
      console.log(data)
      this.router.navigate(['/arbitre/list'])
    })
  }

}
