import { Component, OnInit } from '@angular/core';
import { Subscription, observable } from 'rxjs';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { user } from 'src/app/intercefes/user';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css'],
})
export class ListUsersComponent implements OnInit {
  private user$: Subscription;
  public user: Array<any> = [];
  User: user;
  users = [];
  p: number = 1;
  total = user.length;
  tableSizes = [5, 10, 20, 50];
  public loading = false;
  constructor(
    private UserService: UserService,
    private spinner: NgxSpinnerService,
    private router: Router
  ) {}

  ngOnInit() {
    /** spinner starts on init */
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 1000);

    this.user$ = this.UserService.user$.subscribe((Observable) => {
      this.user = Observable;
    });
    console.log(this.getUsers());
    this.getUsers;
  }
  ngOnDestroy() {
    this.user$.unsubscribe();
  }

  getUsers() {
    this.UserService.getUserList().subscribe();
    //this.UserServices.GetusrList().subcribe(
    // data=> {console.log(data)}
    //)
  }

  getUser(id) {
    console.log('id', id);
    this.UserService.getUser(id).subscribe((respuest) => {
      (this.User = respuest), console.log(respuest);
    });
    console.log('marcell');
  }

  deleteUser(user, i) {
    if (window.confirm('Do you want to delete User?')) {
      this.UserService.deleteUser(user.id).subscribe();
    }
  }

  SelectedUser(id: string) {
    this.router.navigate(['/users', id]);
  }
}
