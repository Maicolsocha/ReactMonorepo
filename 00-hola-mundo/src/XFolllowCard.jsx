export function XFollowCard({ userName, name, isFollowing }) {
  return (
    <aside className="card">
        <div className="usuario">
            <img src={`https://unavatar.io/x/${userName}`} alt="icono usuario" />
            <div className="usuario-nombre">
                <strong>{name}</strong>
                <span>{userName}</span>
            </div>
        </div>
        <div className="btn-seguir">
            <button>Seguir</button>
        </div>
    </aside>
  )
}