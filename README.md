
crear las tablas en desarrollo

npx prisma migrate dev

le damos un nombre "init"


# Guía de Instalación y Configuración de Prisma

## Instalación en Desarrollo

1. **Instalar Prisma**

   Ejecuta el siguiente comando para instalar Prisma como una dependencia de desarrollo:

   ```bash
   npm install prisma -D
   ```

2. **Inicializar Prisma con base de datos SQLite**

   Inicializa Prisma con el proveedor de datos SQLite:

   ```bash
   npx prisma init --datasource-provider sqlite
   ```

## Configuración de Esquema

1. **Definir el Modelo en `schema.prisma`**

   En el archivo `schema.prisma`, define el modelo de usuario como sigue:

   ```prisma
   model User {
     // id: Identificador único, autoincremental
     id Int @id @default(autoincrement())
     
     // email: Campo único
     email String @unique
     
     // name: Campo obligatorio
     name String
     
     // lastname: Campo opcional
     lastname String?
   }
   ```

2. **Crear Tablas en Desarrollo**

   Ejecuta el siguiente comando para crear las tablas en la base de datos de desarrollo:

   ```bash
   npx prisma migrate dev
   ```
   
   Se te pedirá que ingreses un nombre para la migración. Puedes usar un nombre como "init" para esta primera migración. Alternativamente, si prefieres proporcionar el nombre de la migración directamente, ejecuta el siguiente comando:

   ```bash
   npx prisma migrate dev --name init
   ```

## Añadir Nuevos Modelos

1. **Actualizar el Esquema en `schema.prisma`**

   Añade el siguiente modelo para los posts en el archivo `schema.prisma`:

   ```prisma
   model Post {
     id Int @id @default(autoincrement())
     title String @unique
     content String?
     authorId Int
     author User @relation(fields: [authorId], references: [id])
   }
   ```
   
2. **Crear Migraciones para los Nuevos Modelos**

   Ejecuta el siguiente comando para crear una migración para los nuevos modelos:

   ```bash
   npx prisma migrate dev --name post-user-relacion
   ```

## Interfaz Gráfica

Para levantar una interfaz gráfica y gestionar los datos, utiliza el siguiente comando:

   ```bash
   npx prisma studio
   ```

## Cambio a Base de Datos de Producción (PostgreSQL)

1. **Eliminar la Carpeta de Migraciones y el Archivo `dev.db`**

   Borra la carpeta `migrations` y el archivo `dev.db` que se encuentran en la carpeta `prisma`.

2. **Actualizar `schema.prisma` para PostgreSQL**

   Modifica el proveedor en `schema.prisma` para PostgreSQL:

   ```prisma
   datasource db {
     provider = "postgresql" // <-- aquí
     url      = env("DATABASE_URL")
   }
   ```
   
3. **Configurar la URL de la Base de Datos en el Archivo `.env`**

   Agrega la configuración de PostgreSQL en el archivo `.env`:

   ```env
   DATABASE_URL="postgresql://usuario:contraseña@url_del_host:puerto/nombre_db"
   ```

4. **Ejecutar Migraciones para Aplicar Cambios**

   Ejecuta el siguiente comando para aplicar los cambios a la base de datos:

   ```bash
   npx prisma migrate dev --name init
   ```
   
## Despliegue en Producción

Cuando estés listo para desplegar a producción, utiliza el siguiente comando:

   ```bash
   npx prisma migrate deploy
   ```
   
## Regenerar el Cliente de Prisma

Si cambiaste de ordenador o realizaste cambios importantes, puede que necesites regenerar el cliente de Prisma. Ejecuta el siguiente comando:

   ```bash
   npx prisma generate
   ```

Esto creará los archivos necesarios para el autocompletado y las funcionalidades de Prisma.
