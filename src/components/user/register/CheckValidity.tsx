export function phoneCheck(phone: string): boolean {
  const reg = /^[0-9]{3}-[0-9]{4}-[0-9]{4}/;
  return reg.test(phone);
}

export function emailCheck(email: string): boolean {
  const reg = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
  return reg.test(email);
}

export function passwordCheck(pw: string): boolean {
  const reg =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[~?!@#$%^&*_-]).{8,16}$/;
  return reg.test(pw);
}
