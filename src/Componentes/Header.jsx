import  './Estilos/header.css'
import { NavLink } from 'react-router-dom'

/* eslint-disable react/prop-types */
const Header = ({handleSubmit, handleChange}) => {
  return (

    <div className=''>  
        <nav className="navbar navbar-expand-lg bg-body-tertiary encabezado p-3">
            <div className="container-fluid">
                <NavLink className="text-md-center text-white fs-2 titulo text-decoration-none" to='/'>
                    {/* <h1 className="text-md-center text-white fs-2 titulo" >Seguidores GitHub</h1> */}
                    Seguidores GitHub
                </NavLink>
                <div className="collapse navbar-collapse  d-flex flex-row-reverse" id="navbarSupportedContent">
                    <form className="d-flex" role="search" onSubmit={handleSubmit}>
                        <input className="form-control me-2" type="search" 
                        placeholder="Search Username Github " 
                        aria-label="Search" 
                        name='username'
                        onChange={handleChange}/>
                        <button className="btn btn-primary buscar" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    </div>



/*  <div className='encabezado'>
        <h2>Github Seguidores  </h2>
        <form onSubmit={handleSubmit}>
            <input type="text" 
            placeholder="buscar"
            name='username'
            onChange={handleChange}/>
            <button>Enviar</button>
        </form>
    </div>  */
  )
}

export default Header