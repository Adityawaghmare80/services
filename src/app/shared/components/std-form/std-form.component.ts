import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { first } from 'rxjs';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-std-form',
  templateUrl: './std-form.component.html',
  styleUrls: ['./std-form.component.scss']
})
export class StdFormComponent implements OnInit {

  constructor(
    private _stdService: StudentService
  ) { }

  ngOnInit(): void {
  }

  onStdAdd(stdForm: NgForm) {
    if (stdForm.valid) {
      let obj = stdForm.value
      console.log(obj)
      this._stdService.createStdInfo(obj)
      stdForm.resetForm()
    }
  }

}
