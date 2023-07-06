import { Router, Response, Request } from "express"
import Formulario from "../controller/FormularioController"
import FormularioController from "../controller/FormularioController"

class FormularioRouter {
  router: Router
  miFormularioController: FormularioController

  constructor() {
    this.router = Router()
    this.miFormularioController = new FormularioController()
    this.routes()
  }

  private routes(): void {
    this.router.get(//obtener informacion
      '/formulario/:formulario',//necesito pasar una variable, la ruta formulario y va a guardar la variable en el obj formulario
      (req: Request, res: Response) => {
        this.miFormularioController.obtenerDefinicion(req, res)
      }
    );
  }
}

export default new FormularioRouter().router;