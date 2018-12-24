import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-update-details',
  templateUrl: './update-details.component.html',
  styleUrls: ['./update-details.component.scss']
})
export class UpdateDetailsComponent implements OnInit {

firstCrud: FormGroup;

  constructor(
    private fb: FormBuilder,
    private crudService: CrudService
  ) { 
    this.firstCrud = this.fb.group({
      name : [],
      position: [],
      office: [],
      number: []
    });
  }

  ngOnInit() {
    this.crudService.getEmployee().subscribe(res => {
      console.log(res);
    },err => {
      console.log(err);
    }
    );
  }
  firstDataSave() {
    this.crudService.createEmployee(this.firstCrud.value).subscribe(res => {});
  }
}
