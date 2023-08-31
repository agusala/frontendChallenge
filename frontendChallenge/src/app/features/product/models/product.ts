export class Product{
    constructor(
      public nombre:string,
      public codigo :string,
      public precio :string,
      public rubro_id?:string,
      public id?:string,
    ){}
  
    public static adapt(item: any): Product {
      return new Product(
        item.nombre,
        item.rubro_id,
        item.codigo,
        item.precio,
      );
    }
  }