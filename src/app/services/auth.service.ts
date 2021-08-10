import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { IUser } from '../interface';
import { throwError } from 'rxjs';


@Injectable({
    providedIn: 'root'
})

export class AuthService implements OnInit{

    url = 'http://localhost:5000/api';
    token: string;
    error: HttpErrorResponse;

    constructor(
        private http: HttpClient,
        public router: Router
    ) { }

    ngOnInit(){
        this.handleError(this.error)
    }

    login(user: IUser){
         this.http.post(this.url + '/authenticate', user)
             .subscribe((res:any) => {
                  if(res.token){
                     localStorage.setItem("ourToken",res.token)
                     this.router.navigate(['/form-builder'])
                  }

    })

}
    logout(){
      localStorage.removeItem('ourToken')
    }
    public get logIn():boolean{
        return (localStorage.getItem('ourToken') !== null)
    }

    public handleError(error: HttpErrorResponse){
        if(error.error.errorMessage){
            window.alert('You do not have a permission!')
        }
        return throwError(error)
    }
}
