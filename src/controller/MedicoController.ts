import { Request,Response } from "express"

import { PrismaClient } from "@prisma/client"

class MedicoController{
    private prisma:PrismaClient

    constructor(){
        this.prisma=new PrismaClient()
    }

    async obtenerMedicos(req:Request, res:Response){
        const medicos = await this.prisma.medico.findMany()
        res.json(medicos)//cree una respuesta de formato json devolviendome el json de todos los medicos
    }
}

export default MedicoController