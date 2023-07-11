import { Response, Request } from "express";
import { PrismaClient } from "@prisma/client";

class CitaController{
    private prismaClient:PrismaClient

    constructor(){
        this.prismaClient=new PrismaClient()
    }

   /* async obtenerPacientes(req:Request, res:Response){
        const pacientes=await this.prismaClient.paciente.findMany()//hacer busqueda
        res.json(pacientes)
    }*/

    async obtenerCita(req: Request, res: Response): Promise<void> {
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

    

       

    
}

export default CitaController