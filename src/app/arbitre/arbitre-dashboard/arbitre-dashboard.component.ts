import { Component, inject } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-arbitre-dashboard',
  templateUrl: './arbitre-dashboard.component.html',
  styleUrls: ['./arbitre-dashboard.component.css']
})
export class ArbitreDashboardComponent {

  backEndURL = "http://localhost:8080/arbitres";
  arbitres:any
event: any;

constructor(private http: HttpClient, private ms: NgbModal , private router:Router){}


ngOnInit(){
  this.http.get(this.backEndURL).subscribe(data=>{
    console.log(data);
    this.arbitres = data
  })
}

}
