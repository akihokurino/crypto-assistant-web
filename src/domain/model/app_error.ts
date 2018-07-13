class AppError implements Error {
  public type: ErrorType;
  public name: string;
  public message: string;

  constructor(type: ErrorType, message: string) {
    this.type = type;
    this.name = type;
    this.message = message;
  }

  public toString() {
    return this.name + ': ' + this.message;
  }
}

enum ErrorType {
  API_REQUEST_404 = "api request 404",
  API_REQUEST_500 = "api request 500",
}

export { AppError, ErrorType };