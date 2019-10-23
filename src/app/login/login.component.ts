import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Route, Router } from '@angular/router';
import { UserResponse } from '../user-resp';
import { AuthServiceService } from '../auth-service.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  id:any;
  pass:any
  constructor(private http:HttpClient,private router: Router,private service: AuthServiceService) { }
  login(loginForm: NgForm){
    this.http.post<UserResponse>(`http://localhost:8080/lms/user/login/${this.id}/${this.pass}`,loginForm.value).subscribe(response=>{
      if(response.role === 'admin'){
        alert("admin login successful")
        this.service.isAdminLoggedIn=true
        this.router.navigate(['/'])
      }else if(response.role==='owner'){
        this.router.navigate(['/'])
        this.service.isLibrarianLoggedIn=true
        alert("librarian login successful")
      }else if(response.role==='user'){
        alert("Stuent login successful")
        this.router.navigate(['/'])
        this.service.isStudentLoggedIn=true
    
      }else{
        alert('Invalid Credentials');
      }
    })
  }

  ngOnInit() {
    console.log('hiiii');
  }

}
