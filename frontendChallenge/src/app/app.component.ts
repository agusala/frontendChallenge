import { Component } from '@angular/core';
import { User } from './shared/models/user';
import { Session } from './auth/model/session';
import { SessionService } from './auth/session.service';
import { AuthService } from './auth/auth.servece';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showNavBar: boolean = false;
  public showMenu = false;
  public user: User = new User('', '', '', '',);

  constructor(
    private sessionService: SessionService,
    private authService: AuthService,
  ) {}

  ngOnInit() {
    this.sessionService.observeSession().subscribe({
      next: (session:Session) => {
        if (session) {
          if (session.user) {
            this.user = User.adapt(session.user);
          }
        }

        this.showMenu = this.sessionService.isAuthenticated();
      },
    });

  }
  ngOnDestroy() {}

  LogoutSession(): void {
    this.authService.logout();
    window.location.replace('/login');
  }
}