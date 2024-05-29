//VARIABLES DE ENTORNO
//DECLARAMOS EL GET Y REQUIRED DE PORT Y PUBLIC_PATH

import env from 'dotenv'
env.config();
import envvar from 'env-var'

export const envs = {
    PORT: envvar.get('PORT').required().asPortNumber(),
    PUBLIC_PATH: envvar.get('PUBLIC_PATH').default('public').asString()
}

