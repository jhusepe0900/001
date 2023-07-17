import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {User} from '../../../servicios/user';
import {LoginuserService} from '../../../servicios/loginService/loginuser.service';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

    user: User = new User();
    constructor(
      private router: Router,
      private route: ActivatedRoute,
      private loginUserService: LoginuserService
    ) { }

    // On Forgotpassword link click
    // tslint:disable-next-line:typedef
    onForgotpassword() {
      this.router.navigate(['forgot-password'], { relativeTo: this.route.parent });
    }
    // On Signup link click
    // tslint:disable-next-line:typedef
    onSignup() {
      this.router.navigate(['sign-up'], { relativeTo: this.route.parent });
    }
  // tslint:disable-next-line:typedef
    userLogin(){
      this.loginUserService.loginUser(this.user).subscribe(
        data => {
          console.log(this.user);
          // @ts-ignore
          if (data.message === 'No se encontraron resultados'){
            alert('Intente de nuevo');
          }
          else{
            console.log(data);
            window.localStorage.setItem('idUsuario', data[0].usuario);
            window.localStorage.setItem('params', JSON.stringify(data[0]));
            this.irDashboard();
          }
        },
        error => alert('Intente de nuevo')
      );
    }
  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  irDashboard(){
    this.router.navigate(['/ecommerce/orders']);
  }
}
