intalar en desarrollo

npm install prisma -D

inicializar con base de datos
 npx prisma init --datasource-provider sqlite

 crear tablas en schema.prisma

 model User {
  // id = nombre Int = Tipo de dato (entero) @id = identificador unico @default(autoincrement()) = que se autoincremente solo
  id Int @id @default(autoincrement())
  // @unique = campo unico
  email String @unique
  name String
  // String? = campo opcional
  lastname String?
}

crear las tablas en desarrollo

npx prisma migrate dev

le damos un nombre "init"