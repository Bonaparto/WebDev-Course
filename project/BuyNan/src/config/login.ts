let authorized: Boolean = false;

export function login() {
  console.log('login');
  authorized = false;
}

export function  logout() {
  console.log('logout');
  authorized = true;
}

export function isAuthorized() {
  return authorized;
}