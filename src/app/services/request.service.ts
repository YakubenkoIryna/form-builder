import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IFormElements, IUser } from '../interfaces/interface';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class RequestService {
    constructor(private http: HttpClient) {
    }

    getObjects(): Observable<IFormElements[]> {
        return this.http.get<IFormElements[]>('http://localhost:3000/components');
    }

    loginUser(user: IUser): Observable<object>{
        return this.http.post('http://localhost:5000/api/authenticate', user);
    }

}
