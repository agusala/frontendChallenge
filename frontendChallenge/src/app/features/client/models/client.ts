export class Client{
    constructor(
      public nombre:string,
      public cuit:string,
      public email? :string,
      public domicilio? :string,
      public telefono? :string,
      public id?:string,
    ){}
  
    public static adapt(item: any): Client {
      return new Client(
        item.nombre,
        item.cuil,
        item.email,
        item.domicilio,
        item.telefono,
      );
    }
  }