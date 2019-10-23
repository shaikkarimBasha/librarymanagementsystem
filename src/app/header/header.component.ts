import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private service: AuthServiceService,private router: Router) { }
  get isAdminsLoggedIn(){
    return this.service.isAdminsLoggedIn()
  }
  get isLibrariansLoggedIn(){
    return this.service.isLibrariansLoggedIn()
  }
  get isUsersLoggedIn(){
    return this.service.isStudentsLoggedIn()
  }

  logout(){
    this.service.isAdminLoggedIn=false
    this.service.isLibrarianLoggedIn=false
    this.service.isStudentLoggedIn=false
    this.router.navigate(["/"])
  }

  ngOnInit() {
  }

}
