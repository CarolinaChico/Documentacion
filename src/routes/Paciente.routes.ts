import { Router, Response, Request } from "express"
import PacienteController from "../controller/PacienteController"

class PacienteRouter{
    //priema se debe crar los atibutos antes de utilizar
    router:Router
    pacienteController:PacienteController
    
    constructor(){
        this.router= Router()// no se necesita poner new porq Router es un objero especificio de express
        this.pacienteController= new PacienteController()
        this.routes()//llama las rutas

            }

            private routes():void{//definir las rutas
                this.router.get(
                    '/pacientes',
                    (req:Request, res:Response)=>{
                        this.pacienteController.obtenerPacientes(req,res)
                    }

                )
        
                this.router.post(
                    '/crear_paciente',
                    (req:Request, res:Response)=>{
                    this.pacienteController.crearPaciente(req,res)
                    }
                )
            }
            }

export default new PacienteRouter().router// en router estoy agregando los diferentes entrypoint de mi API o diferentes rutas
