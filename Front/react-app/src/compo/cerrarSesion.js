import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import Prin from './Principal'

import { unSuscription } from "../Suscription/main.js"

export const CerrarSesion = () => {
    const navigate = useNavigate()
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
                    response.json().then(async(json) => {await unSuscription();alert(json.message)})
                    navigate("/")
                }
            })
    }, [])

    return <Prin />
}