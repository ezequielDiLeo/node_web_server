//VARIABLES DE ENTORNO
//DECLARAMOS EL GET Y REQUIRED DE PORT Y PUBLIC_PATH

require('dotenv').config()
const { get } = require('env-var');

const envs = {
    PORT: get('PORT').required().asPortNumber(),
    PUBLIC_PATH: get('PUBLIC_PATH').default('public').asString()
}

module.exports = {
    envs
}