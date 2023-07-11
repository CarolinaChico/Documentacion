
import { Router, Response, Request } from "express"
import PacienteController from "../controller/CitaController"
import CitaController from "../controller/CitaController"

class CitaRouter{
    //priema se debe crar los atibutos antes de utilizar
    router:Router
    citaController:CitaController
    
    constructor(){
        this.router= Router()// no se necesita poner new porq Router es un objero especificio de express
        this.citaController= new CitaController()
        this.routes()//llama las rutas

            }

            private routes():void{//definir las rutas
                this.router.get(
                    '/citas',
                    (req:Request, res:Response)=>{
                        this.citaController.obtenerCita(req,res)
                    }

                )

              

               /* this.router.post(
                    '/crear_paciente', 
                    this.pacienteController.crearPaciente.bind(this.pacienteController));*/
            }
            }

export default new CitaRouter().router// en router estoy agregando los diferentes entrypoint de mi API o diferentes rutas
