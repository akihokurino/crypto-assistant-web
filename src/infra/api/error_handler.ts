import {AppError, ErrorType} from "../../domain/model/app_error";

export function handleError(response: Response): Response {
  if (400 <= response.status && response.status < 500) {
    throw new AppError(ErrorType.API_REQUEST_404, "");
  }
  if (500 <= response.status && response.status < 600) {
    throw new AppError(ErrorType.API_REQUEST_500, "");
  }
  return response;
}