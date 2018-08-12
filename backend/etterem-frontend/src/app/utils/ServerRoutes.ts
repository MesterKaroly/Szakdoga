export class Routes {
  static LOGIN: String = 'user/login';
  static REGISTER: String = 'user/register';
  static CARTE: String = 'carte/all';
  static ORDERS: String = 'orders/all';
  static ADDORDER: String = 'order/add';
  static UPDATEORDER: String = 'order/update';
  static DELETEORDER: String = 'orders/delete';
}

export class Server {
  private static address: String = 'localhost';
  private static port: String = '4200';
  private static prefix: String = 'api';

  static routeTo(route: String) {
    return `http://${Server.address}:${Server.port}/${Server.prefix}/${route}`
  }
}
