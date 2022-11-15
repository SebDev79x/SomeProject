export interface IUser {
id:number,
firstname:string,
lastname:string,
username:string,
email:string,
password:string,
createdAt:string,
deletedAt:null | string,
updatedAt:string,
}
// User, objet simple
export interface ISingleUser{
  data:IUser
}
// Users List, array
export interface IAllUsers{
  data:IUser[]
}
