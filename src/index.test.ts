//1. Importar las biblotecas

import request from 'supertest'//permite hacer peticiones
import App from './App'// lo que yo quiero probar, importar la calse APP de la carpeta en donde esta el archivo Router
// las reglas de prueba
describe( // crear una agrupacion de reglas que me describan, modulos de prueba 
	'GET /', // se va ahacer get de la ruta principal /
	()=>{
        
		let app:App    // se crea un objeto de la clase app, porq es el q tengo q probar    
        
        beforeAll( // lo q ocurre antes de q inicie la prueba
            ()=>{
                app=new App()
                app.start()//inicialice el servidor
            }
        )

        afterAll(
            ()=>{
                app.close()
            }           
        )

        test(
            'Debe devolver un mensaje',
            async ()=>{// cuando se usa nodejs debe ser async, porque voy a hacer unas peticiones a una api y debe ser asincronas
                const res = await request(app.app).get('/')//de la variable appa quiero probar el objeto app. el / es la ruta si queiro otra poner /paciente o la q corresponda y punto lso metodos q quiero probar
                expect (res.statusCode).toEqual(200) // se espera que el codigo de respuesta devuelva 200
                expect (res.text).toEqual('Bienvenidos a la IPS AteneaIPS')// se espera q la respuesta tenga un texto si es un json se pone .json
            }
        )
	}
)