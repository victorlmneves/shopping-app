//URL
//export const API_URL = 'http://localhost:8080'; // local
export const API_URL = 'https://url/backend' // tst

//JWT
export const TOKEN_KEY = 'jwtToken'
export const USER_INFO = 'userInfo'

//OAuth2
export const USERNAME = 'username'
// Local
//export const PASSWORD = "secret";
// Production
export const PASSWORD = 'password'
export const SCOPE = 'read write'
export const GRANT_TYPE_PASSWORD = 'password'
export const GRANT_TYPE_REFRESH_TOKEN = 'refresh_token'
export const INVALID_TOKEN = 'invalid_token'

export const AUTHORIZATION = {
  username: USERNAME,
  password: PASSWORD,
}

export const AUTH_HEADER = {
  'Content-Type': 'application/x-www-form-urlencoded',
}

export const JSON_HEADER = {
  'Content-Type': 'application/json',
}

export const FORM_DATA_HEADER = {
  'Content-Type': 'multipart/form-data',
}
