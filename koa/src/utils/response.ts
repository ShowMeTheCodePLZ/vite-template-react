export const baseResponse = <T>(data: T, code?: number, msg?: number) =>
  JSON.stringify({
    code: code === undefined ? 200 : code,
    msg: msg === undefined ? null : msg,
    data: data,
  });
