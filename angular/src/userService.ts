import { IUserService } from "./iuserService";
import { User } from "./user";
import { Observable } from "rxjs/Rx";
import { Http, Headers, RequestOptions, Response } from "@angular/http";
import { Injectable } from "@angular/core";

@Injectable()
export class UserService implements IUserService {

    private urlUser: string = "http://localhost:3056/api/users";
    private headers = new Headers({'Accept': 'application/json', 'Content-Type': 'application/json'});
    private options = new RequestOptions({headers: this.headers});
    constructor(private http: Http) {
        
    }

    private extractData (res: Response): any{
        let body = res.json();
        return body;
    }    
    private handleError(error: Response | any): any{
        console.error(error);
        return Observable.throw(error.json().error || 'Server Error');
    }
    public getUsers(): Observable<User[]> {
        let users = this.http.get(this.urlUser, this.options).map(this.extractData).catch(this.handleError);
        return users;
    }
}