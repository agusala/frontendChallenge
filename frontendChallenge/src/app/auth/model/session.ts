import { User } from "src/app/shared/models/user";



export class Session {
  public user = new User('', '', '', '',);


  constructor(public token: string, user?: User) {
    if(user)
    this.user = user;

  }
}