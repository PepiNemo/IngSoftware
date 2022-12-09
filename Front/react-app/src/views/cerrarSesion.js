import { useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import {Principal} from './Principal'

import { unSuscription } from "../Suscription/main.js"

import { RolContext } from "../context/rolContext"

export const CerrarSesion = () => {
    const navigate = useNavigate()
    const {setRol} = useContext(RolContext)

    useEffect(() => {
        const url = "http://localhost:3300/api/logout"
    
        const options = {
            method: 'POST',
            credentials: 'include',
            headers: { 'Content-type': 'application/json' },
        }
    
        fetch(url, options)
            .then(response => {
                if (!response.ok) {
                    response.json().then(json => alert(json.message))
                    navigate("/")
                } else {
                    response.json().then(async(json) => {
                        await unSuscription();
                        setRol("Normal")
                        alert(json.message)
                    })
                    navigate("/")
                }
            })
    }, [])

    return <Principal />
}