export class Industry{
    constructor(
      public nombre:string,
      public codigo:string,
      public id?:string,
    ){}
  
    public static adapt(item: any): Industry {
      return new Industry(
        item.nombre,
        item.codigo,
        item.id,
      );
    }
  }