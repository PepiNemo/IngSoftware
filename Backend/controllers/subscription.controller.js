import { webPush } from "../configs/webPush.js"
import { modelSubscription } from "../models/suscription.model.js"

import { modelConductor } from "../models/conductor.model.js"


export const Subscription= async (req, res) => {
    try{

        const conductor = await modelConductor.findById(req.session.userId)

        if(conductor?.Prioridad ){
            const Prioridad = conductor.Prioridad
            const Suscription = await modelSubscription.findOneAndUpdate({Id_Conductor:req.session.userId },{
                Prioridad,
                pushSubscription: JSON.stringify(req.body)
            })
            if(!Suscription?.Prioridad){
                await modelSubscription.create({
                    Id_Conductor: req.session.userId,
                    Prioridad,
                    pushSubscription: JSON.stringify(req.body)
                   
                })
            }
            res.status(200).json({message: "Subscripto correctamente"})

        }

    
    }catch(e){
        res.status(400).json({error: e})
    }



}


export const SendNotification = async(Prioridad=1) => {
    const Subscription = await modelSubscription.findOne()
    const pushSubscription = JSON.parse(Subscription.pushSubscription)
    let payload;
    if(Prioridad == 1){
        payload = JSON.stringify({
            title: "Nuevo Viaje solicitado",
            message: `Conductor con prioridad ${Prioridad}, Revisa tus viajes solicitados para aceptar o rechazar, tienes 5 minutos`})
    }else{
        payload = JSON.stringify({
            title: "Siguiente conductor, Viaje solicitado.",
            message: `Conductor con prioridad ${Prioridad}, Revisa tus viajes solicitados para aceptar o rechazar, tienes 5 minutos`})
    }

    try {  
        await webPush.sendNotification(pushSubscription, payload)
    } catch (error) {
        console.log(error)
    }
}

