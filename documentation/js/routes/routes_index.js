var ROUTES_INDEX = {"name":"<root>","kind":"module","className":"AppModule","children":[{"name":"routes","filename":"src/app/app-routing.module.ts","module":"AppRoutingModule","children":[{"path":"","loadChildren":"./public/public.module#PublicModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/public/public-routing.module.ts","module":"PublicRoutingModule","children":[{"path":"","component":"PlayoutComponent","children":[{"path":"","redirectTo":"home","pathMatch":"full"},{"path":"home","component":"HomeComponent"},{"path":"contact","component":"ContactComponent"},{"path":"movies","component":"MoviesComponent"}]}],"kind":"module"}],"module":"PublicModule"}]},{"path":"admin","loadChildren":"./admin/admin.module#AdminModule","canActivate":["AuthGuard"],"children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/admin/admin-routing.module.ts","module":"AdminRoutingModule","children":[{"path":"","component":"AlayoutComponent","children":[{"path":"","redirectTo":"dashboard","pathMatch":"full"},{"path":"dashboard","component":"DashboardComponent"},{"path":"user","loadChildren":"./user/user.module#UserModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/admin/user/user-routing.module.ts","module":"UserRoutingModule","children":[{"path":"","component":"UserindexComponent"},{"path":"edit/:uid","component":"UsereditComponent"},{"path":"add","component":"UseraddComponent"},{"path":"delete/:uid","component":"UserdeleteComponent"}],"kind":"module"}],"module":"UserModule"}]},{"path":"movies","loadChildren":"./movies/movies.module#MoviesModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/admin/movies/movies-routing.module.ts","module":"MoviesRoutingModule","children":[{"path":"","component":"MoviesindexComponent"},{"path":"edit/:id","component":"MovieseditComponent"},{"path":"add","component":"MoviesaddComponent"},{"path":"delete/:id","component":"MoviesdeleteComponent"}],"kind":"module"}],"module":"MoviesModule"}]}]}],"kind":"module"}],"module":"AdminModule"}]},{"path":"auth","loadChildren":"./auth/auth.module#AuthModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/auth/auth-routing.module.ts","module":"AuthRoutingModule","children":[{"path":"","redirectTo":"login","pathMatch":"full"},{"path":"login","component":"LoginComponent"},{"path":"logout","component":"LogoutComponent"}],"kind":"module"}],"module":"AuthModule"}]},{"path":"**","component":"PageNotFoundComponent"}],"kind":"module"}]}
