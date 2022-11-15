export interface IMovie {
  id:number,
  title:string,
  year:string,
  synopsis:string,
  origin:string,// FR,US, UK etc.
/*   distribution:[
    {lastname:string, firstname:string}
  ], */
  createdAt:string,
  deletedAt:null | string,
  updatedAt:string,
  }
  // User, objet simple
  export interface ISingleMovie{
    data:IMovie
  }
  // Users List, array
  export interface IAllMovies{
    data:IMovie[]
  }
