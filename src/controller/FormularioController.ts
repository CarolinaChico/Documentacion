import { Request, Response } from 'express'
import * as jsonSchema from '../json-schema.json'

type JsonSchema = Record<string, any>;

class FormularioController {

  obtenerDefinicion(req: Request, res: Response) {
    //extraer el nombre de formulario
    const { formulario } = req.params //parametros de la peticion para obtener la variable formulario
    const miEsquema: JsonSchema = jsonSchema//json conviertase en un obt timo schema
    if(miEsquema.definitions[formulario]){
        res.json(miEsquema.definitions[formulario])
    }else{
        res.status(400)
        res.json({error:`No se encontro el formulario ${formulario}`})
    }


    const schema: JsonSchema = jsonSchema;

    if (schema.definitions && schema.definitions[formulario]) {
      res.json(schema.definitions[formulario]);
    } else {
      res.status(404).json({ error: `Definition ${formulario} not found in JSON schema.` });
    }
  }

}
 export default FormularioController
