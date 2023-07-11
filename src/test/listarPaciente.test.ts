import request from 'supertest'
import App from '../App'


describe('GET /pacientes', ()=>{

	let app: App

	beforeAll(()=>{
		app = new App()
		app.start()
	})

	afterAll(()=>{
		app.close()
	})

	test('test de listar paciente',
     async()=>{

		const res = await request(app.app).get('/pacientes')
		expect(res.statusCode).toEqual(200)
		expect(res.headers['content-type']).toContain('application/json')
		res.body.forEach((paciente: any)=>{
			expect(paciente).toHaveProperty('cedula')
			expect(paciente).toHaveProperty('nombre')
			expect(paciente).toHaveProperty('apellido')
			expect(paciente).toHaveProperty('fechaNacimiento')
			expect(paciente).toHaveProperty('telefono')
		})
	})

})