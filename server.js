import { fastify } from "fastify";
import { DatabaseMemory } from "./database-memory.js";

const server = fastify();

const database = new DatabaseMemory()

server.get('/animes', () => {
    return database.list()
})

server.post('/animes', (req, res) => {
    const { name, gender, note, seasons, episodes, description, } = req.body

    database.create({
        name,
        gender,
        note,
        seasons,
        episodes,
        descr


    })

    return res.status(201).send()
})

server.put('/animes/:id', (req, res) => {
   const id = req.params.id
   const { nome, idade, matriculado, time } = req.body

   database.update(id, {
       nome,
       idade,
       matriculado,
       time
   })

   res.status(204).send()
})

server.delete('/animes/:id', (req, res) => {
    const id = req.params.id
    database.delete(id)
    return res.status(200).send()
})

server.listen({
    port: 3333
})