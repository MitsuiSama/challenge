import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  private user;

  constructor(private route:ActivatedRoute,private userService:UserService) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.userService.getUser(id).subscribe((user) =>{
      this.user = user[0];
    });
  }

}
