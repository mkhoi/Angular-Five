import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/Rx";
import { User } from "./user";
import { UserService } from "./userService";
@Component({
    selector: "users",
    templateUrl: "src/users.html"
})
export class Users implements OnInit{
    private users: Observable<User[]>;
    constructor (private userService: UserService) { }

    private getUsers(): void {
        this.users = this.userService.getUsers();
    }

    public ngOnInit (): void {
        this.getUsers();
    }
}