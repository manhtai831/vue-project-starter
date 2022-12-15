export default class ApiModel {
  data;
  status;
  headers;

  constructor( data, status, headers ) {
    this.data = data;
    this.status = status;
    this.headers = headers;
  }


  isOk() {
    return this.status === 200;
  }
}
