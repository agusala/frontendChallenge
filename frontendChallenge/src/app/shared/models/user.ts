export class User{
    constructor(
  
      public userName:string,
      public name?:string,
      public password? :string,
      public id? :string,
    ){}
  
    public static adapt(item: any): User {
      return new User(
        item.id,
        item.userName,
        item.name,
        item.password,
      );
    }
  }