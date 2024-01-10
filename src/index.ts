import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    const voile = await prisma.voile.create({data:{
             name:"25VB3.3"
        }})

    console.log(voile)


    await prisma.parameter.create({data:{
            name:"Kp",
            value:0.1,
            voile: {connect: voile}
        }})

    await prisma.parameter.create({data:{
            name:"Ki",
            value:0.1,
            voile: {connect: voile}
        }})

    await prisma.parameter.create({data:{
            name:"Kd",
            value:0.1,
            voile: {connect: voile}
        }})

    const allParameters = await prisma.parameter.findMany()
    console.log(allParameters)

    const parametersCurrentKite = await prisma.parameter.findMany({where:{voile:voile}})
    console.log(parametersCurrentKite)



}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })