export class Sale{
    constructor(
      public fecha:Date,
      public client_id:string,
      public importe_total:string,
      public observaciones?:string,
      public id?:string,
    ){}
  
    public static adapt(item: any): Sale {
      return new Sale(
        item.fecha,
        item.client_id,
        item.importe_total,
        item.observaciones,
      );
    }
  }