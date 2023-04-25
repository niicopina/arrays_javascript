import express from 'express'

let server = express()
let PORT = 8080
let ready = () => console.log('servidor ready on port: '+ PORT)

server.listen(PORT, ready)
server.use(express.urlencoded({extended:true}))