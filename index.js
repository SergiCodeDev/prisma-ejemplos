import { PrismaClient } from "@prisma/client";

const prismadb = new PrismaClient() // conexion db

async function main() {
    // crear dato en USER
    // await prismadb.user.create({
    //     data: {
    //         name: "uno",
    //         email: "uno@uno.com"
    //     }
    // })
    // tambien puede devolver algo al acabar
    const newUser = await prismadb.user.create({
        data: {
            name: "uno",
            email: "uno@uno.com"
        }
    })
    console.log(newUser) // contiene los datos del nuevo usuario
}

main() // node index.js