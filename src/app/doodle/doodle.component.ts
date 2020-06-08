import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../service/doodle/user.service';
import { User, UserDetail } from '../service/doodle/user';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-doodle',
  templateUrl: './doodle.component.html',
  styleUrls: ['./doodle.component.css']
})
export class DoodleComponent implements OnInit {
  users: UserDetail[];
  user: User;

idDelete = '';
  constructor(
    private userService: UserService,
    private router: Router,
    private activatedRoute: ActivatedRoute
    ) {

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params) => {
        console.log(params);
      }
    );
    this.userService.getUsers().subscribe(
      (response) => {
        this.users = response;
        console.log(this.users);
      },
      (error) => {

      }
    );
  }

    createUser(data: User) {
    this.userService.addUser(data);
  }

  voir(id: string){
    const link = ['admin/user', id];
    this.router.navigate(link);
  }
  deleteUser1(id: string){
    this.idDelete = id;

  }
  deleteUser(){
    console.log(this.idDelete);
    this.userService.deleteUser(this.idDelete).subscribe(
      (response) => {
        this.userService.getUsers().subscribe(
          (response1) => {
            this.users = response1;
          },
          (error) => {

          }
        );
      }
    );

  }
}
