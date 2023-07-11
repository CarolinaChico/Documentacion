import swaggerUi from 'swagger-ui-express'
import { swaggerSpec } from './swagger.conf'
import express,{Application, Request, Response} from 'express'

import PacienteRouter from './routes/Paciente.routes'
import MedicoRouter from './routes/Medico.routes'
import FormularioRoutes from './routes/Formulario.routes'
import cors from 'cors'
import CitaRoutes from './routes/Cita.routes'


/**
 * Clase principal de la API. Define las rutas de la API
 * 
 * @author Carolina Chico Moreno
 * @description Clase inicial de ejemplo para manejar rutas y documentación
 */
class App{
  public app:any
  private server:any
  

  constructor(){
    //lo que quiero q se ejute al inicio
	/**
         * Express es la biblioteca para definir API en el ecosistema de Node.js
         */
        this.app=express()
        this.app.use(express.json())//caacidad de generar archivos json ára dar respuesta
        this.app.use(
			'/api-docs',//donde quiero ubicar la doc de swagger dentro de este servidor q esta definido, la ruta
			swaggerUi.serve,//servido donde se va a publicar
			swaggerUi.setup(swaggerSpec)//de donde voy a sacar los datos de configuracion
		)

		this.app.use(cors())
		this.routes()// definir los puntos de entrada
        

  }

  private routes():void{
        
	this.app.use('/', PacienteRouter)
	this.app.use('/', MedicoRouter)
	this.app.use('/', FormularioRoutes)
	this.app.use('/', CitaRoutes)
	this.app.get(
		'/',
		(req:Request, res:Response)=>{
			res.send('Bienvenidos a la IPS AteneaIPS')
		}
	)
	
	}
  
  public start():void{

		this.server=this.app.listen(
			3000,
			()=>{console.log('El servidor está escuchando en el puerto 3000')}
		)
	}

	public close():void{
		this.server.close()
	}

}

export default App


