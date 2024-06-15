import { HttpStatus, NotFoundException } from "@nestjs/common";

export class HttpResponse {
  statusCode?: HttpStatus;
  message: string;
  data: any;

  constructor(data: any, message: string, statusCode: HttpStatus = HttpStatus.OK) {
      this.statusCode = statusCode;
      this.message = message;
      this.data = data;
  }
}
