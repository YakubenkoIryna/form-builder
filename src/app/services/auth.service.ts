import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {IUser} from "../interface";
import {throwError} from "rxjs";
import {Router} from "@angular/router";

@Injectable({
    providedIn: 'root'
})

export class AuthService {

    url = 'http://localhost:5000/api';
    token;

    constructor(
        private http: HttpClient,
        private router:Router
    ) { }

    login(user: IUser){
         let route = this.router
         this.http.post(this.url + '/authenticate', user)
             .subscribe({
                 next(res:any){
                 localStorage.setItem("ourToken",res.token)
                 route.navigate(['/form-builder'])
                 },
                 error(err){
                     alert(err.error.errorMessage)
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
