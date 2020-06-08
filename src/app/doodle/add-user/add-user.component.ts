import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../../service/doodle/user.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  errorMessage = '';
  constructor(
    private userService: UserService,
    private route: Router

    ) { }

  ngOnInit(): void {
  }

  addFakeUser(formulaire: NgForm){
    this.userService.addUser(formulaire.value);
    // tslint:disable-next-line:no-shadowed-variable
    const link = ['admin/user'];
    this.route.navigate(link);
  }
  addUser(formulaire: NgForm){
    this.userService.addUser(formulaire.value).subscribe(
      (response) => {
        const link1 = ['admin/user'];
        this.route.navigate(link1);
      },
      (error) => {
        this.errorMessage = 'erreur';
      }
    );

  }
}
