export class User {
  username: string | null | undefined
  password: string | null | undefined

  constructor(username: string | null | undefined, password: string | null | undefined) {
    this.username = username;
    this.password = password;
  }
}
