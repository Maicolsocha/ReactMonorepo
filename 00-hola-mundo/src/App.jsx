import { Fragment } from 'react'
import './app.css'
import { XFollowCard } from './XFolllowCard'

export function App(){
    return (
        <div class="App">
            <XFollowCard userName="maicolsocha" name="Maicol Fernando Socha Jimenes"/>
            <XFollowCard userName="elmichi" name="Rumiador Bene"/>
            <XFollowCard userName="elprofe" name="Nwrix Leadro Profe"/>
        </div>
    )
}