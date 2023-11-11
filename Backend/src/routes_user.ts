import { z } from 'zod'
import { prisma } from './lib/prisma'
import { FastifyInstance } from 'fastify'

export async function AppUser(server: FastifyInstance) {
    server.get('/register', async () => {
        const users = await prisma.user.findMany()
        return users
    })

server.get('/user/:id', async (request) => {
    const idParam = z.object({
        id: z.string().uuid()
    })

    const { id } = idParam.parse(request.params)
    const user = prisma.user.findFirst({
        where: {
            id
        }
    })
    return user
})
server.post('/user', async (request) => {
    // Cria um objeto Zod para definir o esquema de dados do frontend
    const userBody = z.object({
        name: z.string(),
        email: z.string().email(),
        password: z.string(),
        isAdmin: z.boolean()
    });

    // Recupera os dados do frontend
    const { name, email, password, isAdmin} = userBody.parse(request.body);

    // Verifica se o e-mail já está em uso
    const existingUser = await prisma.user.findFirst({
        where: {
            email: email
        }
    });

    if (existingUser) {
        // E-mail já em uso, retornar uma resposta de erro
        return {
            error: 'E-mail já cadastrado'
        };
    } else {
        // Insere o usuário no banco de dados
        const newUser = await prisma.user.create({
            data: {
                name: name,
                email: email,
                password: password,
                isAdmin: isAdmin,
                created_at: new Date()
            }
        });

        return newUser;
    }
});

// rota para editar um cadastro
server.put('/user/id/:id', async (request) => {
    // objeto zod para o id
    const idParam = z.object({
        id: z.string().uuid()
    })
    // objeto zod para o body
    const putBody = z.object({
        name: z.string(),
        email: z.string(),
        password: z.string(),
        isAdmin: z.boolean()
    })
    // recupera dados do frontend com o params
    const {id} = idParam.parse(request.params)
    // recupera dados do frontend com o body
    const {name, email, password, isAdmin} = putBody.parse(request.body)
    // atualiza o cadastro no banco de dados
    const userUpdated = await prisma.user.update({
        where: {
            id: id
        },
        data: {
            name,
            email,
            password,
            isAdmin
        }
    })
    return userUpdated
})

// rota para remover um cadastro
server.delete('/user/id/:id', async (request) => {
    // objeto zod para o id
    const idParam = z.object({
        id: z.string().uuid()
    })
    // recupera dados do frontend com o params
    const {id} = idParam.parse(request.params)
    // remove do banco de dados
    const userRemoved = await prisma.user.delete({
        where: {
            id
        }
    })
    return userRemoved
})

}

export async function AppProduct(server: FastifyInstance) {
    server.get('/product', async () => {
        const products = await prisma.product.findMany()
        return products
    })

server.get('/product/:id', async (request) => {
    const idParam = z.object({
        id: z.string().uuid()
    })

    const { id } = idParam.parse(request.params)
    const product = prisma.product.findFirst({
        where: {
            id
        }
    })
    return product
})
server.post('/product', async (request) => {
    // Cria um objeto Zod para definir o esquema de dados do frontend
    const productBody = z.object({
        name: z.string(),
        ingredient : z.string(),
        quantity: z.number(),
        energetic: z.number(),
        protein: z.string(),
        carb: z.string(),
        fat: z.string(),
        sodium: z.string(),
        cod_barras: z.number()

    });

    // Recupera os dados do frontend
    const { name, ingredient, quantity, energetic, protein, carb, fat, sodium, cod_barras} = productBody.parse(request.body);
     // insere o produto no banco de dados
     const newProduct = prisma.product.create({
         data: {
             name: name,
             ingredient: ingredient,
             quantity: quantity,
             energetic: energetic,
             protein: protein,
             carb: carb,
             fat: fat,
             sodium: sodium,
             created_at: new Date(),
             cod_barras: cod_barras
         }
     })
     return newProduct
});

// rota para editar um produto
server.put('/product/id/:id', async (request) => {
    // objeto zod para o id
    const idParam = z.object({
        id: z.string().uuid()
    })
    // objeto zod para o body
    const putBody = z.object({
        name: z.string(),
        ingredient : z.string(),
        quantity: z.number(),
        energetic: z.number(),
        protein: z.string(),
        carb: z.string(),
        fat: z.string(),
        sodium: z.string(),
        cod_barras: z.number()
        
    })

    // recupera dados do frontend com o params
    const {id} = idParam.parse(request.params)
    // recupera dados do frontend com o body
    const {name, ingredient, quantity, energetic, protein, carb, fat, sodium, cod_barras} = putBody.parse(request.body)
    // atualiza o produto no banco de dados
    const productUpdated = await prisma.product.update({
        where: {
            id: id
        },
        data: {
            name,
            ingredient,
            quantity,
            energetic,
            protein,
            carb,
            fat,
            sodium,
            cod_barras
        }
    })
    return productUpdated
})

// rota para remover um produto
server.delete('/product/id/:id', async (request) => {
    // objeto zod para o id
    const idParam = z.object({
        id: z.string().uuid()
    })
    // recupera dados do frontend com o params
    const {id} = idParam.parse(request.params)
    // remove do banco de dados
    const productRemoved = await prisma.product.delete({
        where: {
            id
        }
    })
    return productRemoved
})

}
