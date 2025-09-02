
import './app.css'
import { XFollowCard } from './XFolllowCard'

export function App(){
    
    const format = (userName) => `@${userName}`
    
    return (
        <div class="App">
            <XFollowCard formatUserName={format} isFollowing={false} userName="maicolsocha" >
                Maicol Fernando Socha Jimenes
            </XFollowCard>
            <XFollowCard formatUserName={format} isFollowing userName="elmichi" >
                Rumiador Benevolente
            </XFollowCard>
            <XFollowCard formatUserName={format} isFollowing userName="elprofe">
                Nwrix Leadro Profe
            </XFollowCard>
        </div>
    )
}