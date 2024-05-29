const express = require('express')
const path = require('path') //propio de Node para leer las capetas del explorer
const { start } = require('repl')

const startServer = (options) => {
    const { port, public_path = 'public' } = options//desestructuramos el puerto y la carpeta public

    const app = express()

    //para poder usar middlewares se usa la palabra use (express)
    app.use(express.static(public_path)) 
    //todo lo que esta en public es estatico y lo ponemos disponible

    app.get('*', (req, res) => {
        const indexPath = path.join(__dirname + `../../../${public_path}/index.html`)
        res.sendFile(indexPath)
    })

    app.listen(port, () =>{
        console.log(`escuchando en el puerto ${port}`)
    })

} //funcion 

module.exports = {
    startServer
}