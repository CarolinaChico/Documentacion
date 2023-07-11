import request from 'supertest'
import App from '../App'

describe('POST /crear_paciente', ()=>{
	let app : App



	beforeAll(()=>{
		app = new App()

		app.start()
	})


	afterAll(()=>{
		app.close()
	})

	test('La prueba debe verificar creación de pacientes, la respuesta debe tener un código de estado HTTP 200 ', 
  async()=>{
		const paciente = {
			cedula: 1037984177,
			nombre: "Johanna Carolina",
			apellido: "Chico Moreno",
			fecha: "01/01/1986",
			telefono: "623-56889",
		}

		const res = await request(app.app).post('/crear_paciente').send(paciente)
		expect(res.statusCode).toEqual(200)
		expect(res.headers['content-type']).toContain('application/json')
		expect(res.body).toHaveProperty('cedula', paciente.cedula)
		expect(res.body).toHaveProperty('nombre', paciente.nombre)
		expect(res.body).toHaveProperty('apellido', paciente.apellido)
		expect(res.body).toHaveProperty('fechaNacimiento', '1986-01-01T05:00:00.000Z')
		expect(res.body).toHaveProperty('telefono', paciente.telefono)

	} )

})