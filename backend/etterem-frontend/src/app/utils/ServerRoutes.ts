export class Routes {
  static LOGIN: String = 'user/login';
  static REGISTER: String = 'user/register';
  static CARTE: String = 'carte/all';
  static ORDERS: String = 'order/all';
  static ADDORDER: String = 'order/add';
  static UPDATEORDER: String = 'order/update';
  static DELETEORDER: String = 'order/delete';
  static DELETERESERVATION: String='reservation/delete';
  static RESERVATIONS: String='reservation/all';
  static RESERVATIONADD: String='reservation/add';
  static RATINGADD: String='rating/add';
  static RATINGGET: String='rating/get';
}

export class Server {
  private static address: String = 'localhost';
  private static port: String = '4200';
  private static prefix: String = 'api';

  static routeTo(route: String) {
    return `http://${Server.address}:${Server.port}/${Server.prefix}/${route}`
  }
}
