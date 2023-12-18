export interface IAPIResponse<T = Object | []> {
    data?: T;
    message?: string;
  }