import { webPush } from "../configs/webPush.js"
import { modelSubscription } from "../models/suscription.model.js"


export const Subscription= async (req, res) => {
    try{
        const SubsAnterior = await modelSubscription.findOne({Id_Conductor:req.session.userId })
        if(SubsAnterior?.Id_Conductor){
            await modelSubscription.deleteOne({Id_Conductor:req.session.userId })
        }

        await modelSubscription.create({
            Id_Conductor: req.session.userId,
            pushSubscription: JSON.stringify(req.body)
           
        })
        return res.status(200).json({message: "Subscripto correctamente"})
    }catch(e){
        return res.status(400).json({error: e})
    }
}


export const SendNotification = async(Prioridad=1) => {
    const Subscription = await modelSubscription.findOne()
    //console.log(Subscription)
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

