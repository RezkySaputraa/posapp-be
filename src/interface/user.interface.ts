// export interface IRegisterUser {
//   username: string;
//   email: string;
//   password: string;
// }

export interface IRegisterUser {
  title: string;
  desc: string;
}

export interface IResponseUser {
  title: string;
  desc: string;
  createdAt: Date;
  updatedAt: Date;
}
