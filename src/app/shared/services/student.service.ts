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
      email: 'rohan@gmail.com'
    },
    {
      firstname: 'Shreshth',
      lastname: 'Singe',
      contact: 1987654321,
      email: 'nikhil@gmail.com'
    },
    {
      firstname: 'Aditya',
      lastname: 'Waghmare',
      contact: 987678987,
      email: 'adiwagh@gmail.com'
    }
  ]

  fetchAllstd(){
    return this.stdArr
  }

  createStdInfo(std: Istd){
    this.stdArr.push(std)
  }
}
