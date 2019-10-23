import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  isAdminLoggedIn=false
  isLibrarianLoggedIn=false
  isStudentLoggedIn=false
  constructor() { }

  isAdminsLoggedIn(){
    if(this.isAdminLoggedIn){
      return true
    }else{
      return false
    }
  }
  isLibrariansLoggedIn(){
    if(this.isLibrarianLoggedIn){
      return true
    }else{
      return false
    }
  }
  isStudentsLoggedIn(){
    if(this.isStudentLoggedIn){
      return true
    }else{
      return false
    }
  }

}
