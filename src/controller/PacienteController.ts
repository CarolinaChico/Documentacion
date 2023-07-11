import { Response, Request } from "express";
import { PrismaClient } from "@prisma/client";

class PacienteController{
    private prismaClient:PrismaClient

    constructor(){
        this.prismaClient=new PrismaClient()
    }

   /* async obtenerPacientes(req:Request, res:Response){
        const pacientes=await this.prismaClient.paciente.findMany()//hacer busqueda
        res.json(pacientes)
    }*/

    async obtenerPacientes(req: Request, res: Response): Promise<void> {
        try {
          const patients = await this.prismaClient.paciente.findMany();
          res.status(200).json(patients);
        } catch (error) {
          console.error(error);
          res.status(500).json({ error: 'Internal server error' });
        } finally {
          await this.prismaClient.$disconnect();
        }
      }

    async crearPaciente(req:Request, res:Response){
        try{
        const{
            cedula,
            nombre,
            apellido,
            fecha,
            telefono
        }=req.body// va a sacarlos desde el cuerpo de la peticion
        const fechaNacimiento= new Date(fecha)
        const paciente=await this.prismaClient.paciente.create(
            {
                data:{
                    cedula,
                    nombre,
                    apellido,
                    fechaNacimiento,
                    telefono
                }
            }
        )

        res.json(paciente)// respondame en un json lo que esta en el req.body (devolver el json que acabaron de enviar)
        } catch(e:any){
            res.status(400)
            res.json({error:e.message})
        }

    }

    
}

export default PacienteController