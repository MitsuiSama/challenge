import { Observable } from 'rxjs/Rx';

import { FormControl } from '@angular/forms';
import { UserService } from './../user.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { SafeUrl, DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  private users;
  private big;
  private selectedList
  private sub: Subscription;
  private userControl: FormControl;
  private hide = [];

  constructor(private userService: UserService,private sanitizer: DomSanitizer) {
  }


  ngOnInit() {
    this.big = false;
    this.selectedList = [];
    this.userControl = new FormControl();
    this.userControl.valueChanges
      .subscribe((changes) => {
        this.search(changes);
      });
    this.userService.getUsers().subscribe((users) => {
      this.users = users;
    });
  }

  private search(toSearch) {
    if (toSearch.trim()) {
      let comparator = new RegExp(toSearch.trim(), 'i');
      for (let user of this.users) {
        if (comparator.test(user.firstName)) {
          this.hide[user.id] = false;
        } else {
          this.hide[user.id] = true;
        }
      }
    } else {
      this.hide = [];
    }
  }


  private delete(id,automated?) {
    if(!automated){
      if(confirm("Are you sure you want to delete the selected user? This operation cannot be undone.")){
        this.users = this.users.filter(item => item.id !== id);
      }
    }else{
      this.users = this.users.filter(item => item.id !== id);      
    }
    
  }


  private massDelete() {
    if (confirm("Are you sure you want to delete all selected users? This operation cannot be undone.")) {

      for (let item of this.selectedList) {
        this.delete(item,1);
      }
      this.selectedList = [];
    }
  }

  private addToDeleteList(id) {
    
    if (this.selectedList.indexOf(id) != -1) {
      this.selectedList = this.selectedList.filter(identificador => identificador != id);
    } else {
      this.selectedList.push(id);
    }
  }

  private download(){
    let downloadList = [];
    for(let id of this.selectedList){
      for(let user of this.users){
        if(id == user.id){
          downloadList.push(user);
        }
      }
    }
    console.log(downloadList);
    
    if(downloadList){
      let json = JSON.stringify(downloadList)
      let blob = new Blob([json], { type: 'text/json' });
      let url= window.URL.createObjectURL(blob);
      var a = document.createElement("a");
      a.href = url;
      a.download = "users.json";
      a.click();
      //window.open(url);
    }
  }

  onResize(event:any){
    if(event.target.innerWidth >= 1024){
      this.big = true;
    }else{
      this.big = false;
    }
    
  }

}
