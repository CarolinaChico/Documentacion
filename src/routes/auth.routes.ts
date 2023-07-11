import express, {Router, Request, Response} from 'express'
import AuthController from '../controller/AutController'
import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'

dotenv.config()

class AuthRouter {

	router: Router
	authController : AuthController


	constructor(){
		this.router = Router()
		this.authController = new AuthController()
		this.routes()
	}


	private routes(){


		this.router.post('/registrar_usuario', (req:Request, res:Response)=>{
			this.authController.registrarUsuario(req, res)
		})


		this.router.post('/login', async (req: Request, res: Response) =>{

			const usuariodb:any = await this.authController.traerUsuario(req, res)
			
			const { usuario, contrasena } = req.body


			if(usuariodb != null ){
				
				if( usuariodb.usuario === usuario &&  usuariodb.contrasena === contrasena){
	
	
					const payload = {
						id: usuariodb.idUsuario,
						username: usuariodb.usuario
					}
	
					const options = {
						expiresIn: '2h'
					}
	
					const secretKey = process.env.SECRET_KEY
	
	
					if(typeof secretKey == 'string'){
						const token = jwt.sign(payload, secretKey, options)
						res.json({token})
					}
	
	
				}else {
					res.status(401)
					res.json({mensaje: 'Contraseña incorrecta'})			
				}
			}else {
				res.json({mensaje: 'Nombre de usuario incorrecto'})
			}


		})
		


	}


}

export default AuthRouter