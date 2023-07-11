import { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'


class AuthController {

	private prismaClient: PrismaClient


	constructor(){
		this.prismaClient = new PrismaClient()
	}


	async registrarUsuario( req:Request, res:Response ){

		try {
        
			const { usuario, contrasena, nombre, apellido, fechaNacimiento } = req.body

			const nuevoUsuario = await this.prismaClient.usuario.create(
				{
					data: {
						usuario,
						contrasena,
						nombre,
						apellido,
						fechaNacimiento,
					}
				}
			)

			res.json(nuevoUsuario)


		}catch (error:any) {
      
			res.json({error: error.message})

		}
    

	}


	async traerUsuario( req:Request, res:Response ) {
		try {
			
			const { usuario } = req.body


			const usuarioData = await this.prismaClient.usuario.findUnique({
				where:{
					usuario: usuario
				}
			})


			return usuarioData


		} catch (error:any) {
			res.json({error: error.message})
		}
	}

}

export default AuthController