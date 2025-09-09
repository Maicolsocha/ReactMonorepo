
import './app.css'
import { XFollowCard } from './XFolllowCard'

export function App(){
    

    const users =[
        {
            userName: 'MaicolSocha',
            name: 'Maicol Fernando Socha Jimenes',
            isFollowing: false
        },
        {
            userName: 'elmichi',
            name: 'Rumiador Benevolente',
            isFollowing: true
        },
        {
            userName: 'elprofe',
            name: 'Nwrix Leadro Profe',
            isFollowing: false
        }
    ]
    
    return (
        <div className="App">
            {
                users.map(user =>{
                    const {userName, name, isFollowing} = user
                    return(
                        <XFollowCard userName={userName}
                            key={userName}
                            isFollowing={isFollowing}>
                            {name}
                        </XFollowCard>
                    )
                })
            }
        </div>
    )
}