export class HttpError extends Error {
  status;

  constructor(status, message = "Something went wrong.") {
    super(message);
    this.status = status;
  }
}
