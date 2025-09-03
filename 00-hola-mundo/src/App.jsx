
import './app.css'
import { XFollowCard } from './XFolllowCard'

export function App(){
    
    const format = (userName) => `@${userName}`
    
    return (
        <div className="App">
            <XFollowCard formatUserName={format}  userName="maicolsocha" initialIsFollowing={true}>
                Maicol Fernando Socha Jimenes
            </XFollowCard>
            <XFollowCard formatUserName={format}  userName="elmichi" >
                Rumiador Benevolente
            </XFollowCard>
            <XFollowCard formatUserName={format}  userName="elprofe">
                Nwrix Leadro Profe
            </XFollowCard>
        </div>
    )
}