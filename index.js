import { PrismaClient } from "@prisma/client";

const prismadb = new PrismaClient() // conexion db

async function main() {
    // crear dato en USER
    // await prismadb.user.create({
    //     data: {
    //         // trucazo autocompletado vscode control + espacio
    //         name: "uno",
    //         email: "uno@uno.com"
    //     }
    // })

    // tambien puede devolver algo al acabar
    // const newUser = await prismadb.user.create({
    //     data: {
    //         name: "uno",
    //         email: "uno@uno.com"
    //     }
    // })
    // console.log(newUser) // contiene los datos del nuevo usuario

    // listar todos los usuarios
    // const users = await prismadb.user.findMany()
    // console.log(users)

    // obtener un usuario pasandole un parametro y retorna el primero que coincida
    // const user = await prismadb.user.findFirst({
    //     where: {
    //         id: 2
    //     }
    // })
    // console.log(user)

    // const user = await prismadb.user.findFirst({
    //     where: { // los dos coincidan
    //         email: 'dos@codedev.com',
    //         name: 'dos',
    //     }
    // })
    // console.log(user)

    // const user = await prismadb.user.findFirst({
    //     where: {
    //         OR: [ // que coincidan UNO O OTRO (primero que encuentre devolvera)
    //             {id: 1},
    //             {email: 'dos@codedev.com'}
    //         ]
    //     }
    // })
    // console.log(user)

    // const user = await prismadb.user.findFirst({
    //     where: {
    //         AND: [ // que coincidan los dos, sino devuelve null
    //             {id: 1},
    //             {email: 'uno@uno.com'}
    //         ]
    //     }
    // })
    // console.log(user)

    // eliminar usuario y devuelve el usuario que elimino
    // const user = await prismadb.user.delete({
    //     where: {
    //         id: 3
    //     }
    // })
    // console.log(user)

    // controlar error si el id no existe al eliminar
    // try {
    //     const user = await prismadb.user.delete({
    //         where: {
    //             id: 100
    //         }
    //     })
    //     console.log(user)
    // } catch (error) {
    //     console.log(error)
    //     if (error.code === "P2025") {
    //         console.log("Usuario no encontrado")
    //     }
    // }

    // actualizar buscando por un campo unico
    // const user = await prismadb.user.update({
    //     where: {
    //         id: 6
    //         // email tambien es unico email String @unique
    //     },
    //     data: {
    //         lastname: "de dormir",
    //         // mas campos a la vez
    //     }
    // })
    // console.log(user)

    // actualizar buscando por un campo
    // const resultado = await prismadb.user.updateMany({
    //     where: {
    //         // name: ani // si hubieran 2 los cogeria todos los que tengan el mismo nombre
    //         OR: [
    //             {id:6},
    //             {name: "ani"}
    //         ]
    //     },
    //     data: {
    //         lastname: "de dormir de nit",
    //     }
    // })
    // console.log(resultado) // { count: 2 }

    //deleteMany seria igual que delete y updateMany

    // buscar un dato si existe lo edita y sino lo crea, crear/actualizar
    // const user = await prismadb.user.upsert({
    //     where: {
    //         email: 'anisa@codedev.com'
    //     },
    //     create: {
    //         email: 'anisa@codedev.com',
    //         name: "Anisa",
    //         lastname: "Landi"
    //     },
    //     update: {
    //         lastname: "Landi"
    //     }
    // })
    // console.log(user)

    // crear post
    // const newPost = await prismadb.post.create({
    //     data: {
    //         title: "Primer Post",
    //         content: "contenido del post",
    //         // authorId: 8 // no verifica si existe
    //         author: {
    //             connect: {
    //                 id: 8 // user.id
    //             }
    //         }
    //     }
    // })
    // console.log(newPost)

    // crear usuario y post a la vez
    // const newUser = await prismadb.user.create({
    //     data: {
    //         name: "Sam",
    //         email: "sam@codedev.com",
    //         posts: {
    //             create: {
    //                 title: "Nuevo post",
    //                 content: "crear usuario y post a la vez"
    //             }
    //         }
    //     }
    // })
    // console.log(newUser) // devuelve el usuario creado

    // listar usuarios y sus posts
    const usersAndPosts = await prismadb.user.findMany({
        include: {
            posts: true
        }
    })
    console.log(usersAndPosts)
}

main() // node index.js