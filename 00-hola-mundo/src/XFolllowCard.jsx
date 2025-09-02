export function XFollowCard({ children, formatUserName, userName = 'unknow', isFollowing }) {
  const text = isFollowing ? 'Siguiendo' : 'Seguir'
  const buttonClass = isFollowing ? 'x-followCard-button is-following' : 'x-followCard-button'  
  
  return (
    <aside className="card">
        <div className="usuario">
            <img src={`https://unavatar.io/x/${userName}`} alt="icono usuario" />
            <div className="usuario-nombre">
                <strong>{children}</strong>
                <span>{formatUserName(userName)}</span>
            </div>
        </div>
        <div className="x-followCard-buttonContainer">
            <button className={buttonClass}>{text}</button>
        </div>
    </aside>
  )
}