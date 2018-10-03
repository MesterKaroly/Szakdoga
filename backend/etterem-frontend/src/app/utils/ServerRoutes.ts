export class Routes {
  static LOGIN: String = 'user/login';
  static REGISTER: String = 'user/register';
  static LOGOUT:String='user/logout';
  static CARTE: String = 'carte/all';
  static ORDERS: String = 'order/all';
  static UPDATEORDER: String = 'order/update';
  static DELETEORDER: String = 'order/delete';
  static DELETERESERVATION: String='reservation/delete';
  static RESERVATIONS: String='reservation/all';
  static RESERVATIONADD: String='reservation/add';
  static GETRESERVATIONER:String='reservation/find';
  static RESERVATIONSAVE:String='reservation/save';
  static RATINGADD: String='rating/add';
  static RATINGGET: String='rating/all';
}

export class Server {
  private static address: String = 'localhost';
  private static port: String = '8080';
  private static prefix: String = 'api';

  static routeTo(route: String) {
    return `http://${Server.address}:${Server.port}/${Server.prefix}/${route}`
  }
}
