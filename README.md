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

añadir a schema.prisma

model Post {
  id Int @id @default(autoincrement())
  title String @unique
  content String?
  authorId Int
  author User @relation(fields: [authorId], references: [id])
}

ejecutar 

npx prisma migrate dev --name post-user-relacion