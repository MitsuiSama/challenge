import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { UserService } from '../user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  private user;
  private firstName;
  private lastName;

  constructor(private route: ActivatedRoute,
    private userService: UserService,
    private router: Router) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.userService.getUser(id).subscribe((user) => {
      this.user = user[0];
    });
    this.firstName = this.user.firstName;
    this.lastName = this.user.lastName;
  }

  shouldSave(): boolean {
    if ((this.firstName === this.user.firstName && this.lastName == this.user.lastName)
      || this.firstName.trim() === "" || this.lastName.trim() === "") {
      return false;
    }
    return true;
  }

  canCanel(): boolean {
    if (this.firstName == this.user.firstName && this.lastName == this.user.lastName) {
      return false;
    }

    return true;
  }

  save() {
    if (confirm("Are you sure you want to save the changes?")) {
      this.user.firstName = this.firstName;
      this.user.lastName = this.lastName;
      this.goBack();
    }

  }

  cancel() {
    if(confirm(" Changes will be lost. Are you sure you want to cancel?")){
      this.firstName = this.user.firstName;
    this.lastName = this.user.lastName;
    }
  }

  private goBack() {
    this.router.navigateByUrl("/detail/" + this.user.id);
  }



}
