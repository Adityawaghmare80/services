import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { Istd } from '../../modules/student.interface';

@Component({
  selector: 'app-std-table',
  templateUrl: './std-table.component.html',
  styleUrls: ['./std-table.component.scss']
})
export class StdTableComponent implements OnInit {
  studentArr! : Array<Istd>
  constructor(
    private _stdService : StudentService
  ) { }

  ngOnInit(): void {
   this.studentArr = this._stdService.fetchAllstd();
  }

  onDelete(id: number){
    this._stdService.removeStd(id)
  }

}
