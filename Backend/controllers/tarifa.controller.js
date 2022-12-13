import { modelTarifa } from "../models/tarifa.model.js";

export const createTarifa = async (req, res) => {
    try {
        if (req.body?.Lugar && req.body?.Precio) {
            const tarifa = await modelTarifa.create({ ...req.body });
            (tarifa?.Lugar)
                ? res.status(201).json({ message: 'Se ha regisrado el conductor satisfactoriamente.' })
                : res.status(400).json({ message: 'No se ha podido registrar la Tarifa' })
        } else {
            res.status(400).json({ message: 'Debe indicar el Lugar y Precio de la tarifa a crear.' })

        }

    } catch (e) {
        return res.status(400).json({ error: e.message })
    }
}

export const readTarifa = async (req, res) => {
    try {
        if (Object.keys(req.body).length == 0) {
            return res.status(200).json(await modelTarifa.find().all())
        } else if (req.body?.Lugar || req.body?.Precio) {
            const tarifa = await modelTarifa.find({ ...req.body });
            (tarifa.length == 0)
                ? res.status(404).json({ message: "Tarifa no encontrada" })
                : res.status(200).json(tarifa)

        } else {
            return res.status(400).json({ message: "Debe indicar un parametro valido por el cual buscar." })
        }
    } catch (e) {
        return res.status(400).json({ error: e.message })
    }

}

export const updateTarifa = async (req, res) => {


    if (
        Object.keys(req.body).length == 0
        || !(req.body?.Lugar && req.body?.Precio)
        || !req.body?._id
    ) {
        return res.status(400).json({ message: "Debe indicar el identificador y valor de la Tarifa a actualizar." })
    }


    try {
        const updateTarifa = await modelTarifa.updateOne({ _id: req.body?._id }, { ...req.body })
        if (updateTarifa.matchedCount == 0) { return res.status(404).json({ message: "Tarifa no encontrada" }) }

        (updateTarifa.modifiedCount == 1)
            ? res.status(200).json({ message: "Se ha actualizado satisfactoriamente" })
            : res.status(202).json({ message: "El parametro ya tiene el valor a cambiar." })
    } catch (e) {
        return res.status(400).json({ error: e.message })
    }

}

export const deleteTarifa = async (req, res) => {

    if (
        Object.keys(req.body).length == 0
        || !req.body?._id
    ) {
        return res.status(400).json({ message: "Debe indicar el identificador de la Tarifa a actualizar." })
    } else {
        try {
            const removeTarifa = await modelTarifa.findByIdAndDelete(req.body._id);
            (removeTarifa?._id)
                ? res.status(200).json({ message: "Eliminado correctamente" })
                : res.status(404).json({ message: "No se ha encontrado la tarifa" })
        } catch (e) {
            return res.status(400).json({ error: e.message })
        }

    }

}
