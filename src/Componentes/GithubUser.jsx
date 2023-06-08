import  './Estilos/githubuser.css'
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { NavLink } from 'react-router-dom'


const GithubUser = (props) => {

    const {avatar,
        github,
        github_name,
        name,
        public_repos,
        followers,
        following
    } = props
 
    

  return (
    <div>
        <div className="card-user col-6 rounded-4">
            <div className='photo'>
                <img className='avatar rounded-top rounded-4' src={avatar} alt={github} />
            </div>
            <div className='info text-center'>
                <h2 className='username'>{github_name} </h2>
                <NavLink className= 'enlace text-white text-decoration-none fs-4' to={`/${github_name}/repositorios`}> Repositorios: {public_repos} </NavLink>
                <NavLink className= 'enlace text-white text-decoration-none fs-4' to='/seguidores'> Seigudores: {followers} </NavLink>
                <NavLink className= 'enlace text-white text-decoration-none fs-4' to='/seguidos'> Seguidos: {following} </NavLink>
                
            </div>
            
        </div>
    </div>
  )
}

export default GithubUser