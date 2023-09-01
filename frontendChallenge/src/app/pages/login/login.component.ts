import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'; 
import { User } from 'src/app/shared/models/user';
import { UserService } from 'src/app/shared/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  showNavBar: boolean = false;

  public formLogin!: FormGroup;
  public user: User;

  constructor(
    public userService: UserService,
    private router: Router 
  ) {
    this.user = new User('', '');
  }

  ngOnInit(): void {
    this.formLogin = new FormGroup({
      userName: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });

    
  }

  onSubmit() {
    if (this.formLogin.valid) {
      let user = {
        userName: this.formLogin.value.userName,
        password: this.formLogin.value.password
      }

      this.userService.login(user).then(
        (data: any) => {
          console.log(data);

          this.router.navigate(['/clients']); 
        },
        (error: any) => {
          console.log(error);
        }
      );
    }
  }
}