import { Injectable } from '@angular/core';
import { Istd } from '../modules/student.interface';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() { }

  stdArr: Array<Istd> =  [
    {
      firstname: 'Rohan',
      lastname: 'Panchal',
      contact: 1234567890,
      email: 'rohan@gmail.com',
      id : 1
    },
    {
      firstname: 'Shreshth',
      lastname: 'Singe',
      contact: 1987654321,
      email: 'nikhil@gmail.com',
      id : 2
    },
    {
      firstname: 'Aditya',
      lastname: 'Waghmare',
      contact: 987678987,
      email: 'adiwagh@gmail.com',
      id : 3
    }
  ]

  fetchAllstd(){
    return this.stdArr
  }

  createStdInfo(std: Istd){
    this.stdArr.push(std)
  }

  removeStd(id: number){
    let getIndex = this.stdArr.findIndex(std => std.id === id);
    this.stdArr.splice(getIndex, 1)
  }
}
