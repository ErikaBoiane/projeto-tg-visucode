import Fastify from 'fastify'

const server = Fastify()

import cors from '@fastify/cors'
import {AppUser, AppProduct} from './routes_user'

server.register(AppUser)
server.register(AppProduct)
server.register(cors)

server.listen({
    port: 3333,
})
.then( () => {
    console.log('Http Server running')
})




