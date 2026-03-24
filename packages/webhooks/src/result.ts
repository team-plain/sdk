type Data<T> = {
  data: T;
  error?: never;
};

type Err<U> = {
  data?: never;
  error: U;
};

export type Result<T, U> = NonNullable<Data<T> | Err<U>>;

export const isErr = <T, U>(result: Result<T, U>): result is Err<U> => {
  return !!result.error;
};
