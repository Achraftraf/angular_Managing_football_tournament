import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  backEndURL = 'http://localhost:8080/arbitres';
  formArbitre = this.fb.group({
    idarbitre: [],
    nationality: [],
    name: [],
    file : [],
  });
  constructor(
    private activateRoute: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private http: HttpClient
  ) {}


  fileSelected(event: any ){
    const file = event.target.files[0]
  this.formArbitre.get('file')?.setValue(file)
  }

  addArbitre() {


    const formdata = new FormData()
    formdata.append('idarbitre', this.formArbitre.get('idarbitre')?.value+"")
    formdata.append('nationality', this.formArbitre.get('nationality')?.value+"")
    formdata.append('name', this.formArbitre.get('name')?.value+"")
    const file =  this.formArbitre.get('file')?.value
    if (file!=null)
    formdata.append('file', file)
    
    
    this.formArbitre.controls.idarbitre.enable(); // Enable the field before submission
    console.log(this.formArbitre.value);
    try {
      this.http
        .post(this.backEndURL, formdata)
        .subscribe((data) => {
          console.log(data);
          this.router.navigate(['/arbitre/list']);
        });
    } catch (error: any) {
      this.http
        .put(this.backEndURL, this.formArbitre.value)
        .subscribe((data) => {
          console.log(data);
          this.router.navigate(['/arbitre/list']);
        });
    }
  }

  ngOnInit() {
    this.activateRoute.queryParams.subscribe((data) => {
      if (data['arbitre'] != undefined) {
        const arbitre = JSON.parse(data['arbitre']);
        this.formArbitre.controls.idarbitre.setValue(arbitre.idarbitre);
        this.formArbitre.controls.nationality.setValue(arbitre.nationality);
        this.formArbitre.controls.name.setValue(arbitre.name);
        this.formArbitre.controls.idarbitre.disable(); // Uncomment this line to disable the field
      }
    });
  }

  // ---------------------------------------------------------------------------------------------------------

  //   addArbitre() {
  // this.formArbitre.controls.idarbitre.enable
  //     console.log(this.formArbitre.value);
  //     try {
  //     this.http
  //       .post(this.backEndURL, this.formArbitre.value)
  //       .subscribe((data) => {
  //         console.log(data);
  //         this.router.navigate(['/arbitre/list']);
  //       });
  //     } catch (error : any) {
  //       this.http
  //       .put(this.backEndURL, this.formArbitre.value)
  //       .subscribe((data) => {
  //         console.log(data);
  //         this.router.navigate(['/arbitre/list']);
  //       });
  //     }
  //   }

  // ngOnInit() {
  //   this.activateRoute.queryParams.subscribe((data) => {
  //     if (data['arbitre'] != undefined) {
  //       const arbitre = JSON.parse(data['arbitre']);
  //       // this.formArbitre.setValue(arbitre)
  //       this.formArbitre.controls.idarbitre.setValue(arbitre.idarbitre);
  //       this.formArbitre.controls.nationality.setValue(arbitre.nationality);
  //       this.formArbitre.controls.name.setValue(arbitre.name);
  //       // this.formArbitre.controls.idarbitre.disable()
  //     }
  //   });
  // }
}
// addOrUpdateArbitre() {
//   const arbitreId = this.formArbitre.controls.idarbitre.value; // Get the ID from the form

//   if (arbitreId) {
//     // If an ID exists, it's an update
//     this.http
//       .put(`${this.backEndURL}/${arbitreId}`, this.formArbitre.value)
//       .subscribe((data) => {
//         console.log(data);
//         this.router.navigate(['/arbitre/list']);
//       });
//   } else {
//     // If no ID, it's a new addition
//     this.http
//       .post(this.backEndURL, this.formArbitre.value)
//       .subscribe((data) => {
//         console.log(data);
//         this.router.navigate(['/arbitre/list']);
//       });
//   }
// }
