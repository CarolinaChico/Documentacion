import swaggerJSDoc from 'swagger-jsdoc'

export const swaggerOptions={

	definition:{
		openapi:'3.0.0',
		info:{
			title:'API de la IPS AteneaIPS',
			version:'1.0.0',
			description:'En esta API tenemos la funcionalidad que soporta la operación de la IPS AteneaIPS'
		},
		servers:[
			{
				url:'http://localhost:3000',
				description:'Servidor local de documentación'
			}
		]
	},

	apis:['src/index.ts', './swagger/*.swagger.ts']//donde se va a referenciar swagger
}

export const swaggerSpec=swaggerJSDoc(swaggerOptions)// tiene q llamarse swaggerSpec, va tener todas las especificaciones