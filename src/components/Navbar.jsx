import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <Link className="navbar-brand home" to="/">Biblioteca</Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
            Gênero
          </a>
          <div className="dropdown-menu">
            <a className="dropdown-item romance" href="#">ROMANCE</a>
            <a className="dropdown-item ficcao" href="#">FICÇÃO</a>
            <a className="dropdown-item contosBrasileiros" href="#">CONTOS BRASILEIROS</a>
            <a className="dropdown-item cronicasBrasileiras" href="#">CRÔNICAS BRASILEIRA</a>
            <a className="dropdown-item biografia" href="#">BIOGRAFIA</a>
            <a className="dropdown-item historiaDaLiteratura" href="#">HISTÓRIA DA LITERATURA</a>
            <a className="dropdown-item poesia" href="#">POESIA</a>
            <a className="dropdown-item poemas" href="#">POEMAS</a>
            <a className="dropdown-item infantojuvenil" href="#">INFANTOJUVENIL</a>
          </div>
        </li>
      </ul>
      <Link className="nav-item nav-link admin-button" to="/login">Admin</Link>
      <Link className="nav-item nav-link admin-button" to="/new-book">New Book</Link>
      {/* <form className="form-inline my-2 my-lg-0" id="formulario">
        <input className="form-control mr-sm-2" id="pesquisar" type="search" placeholder="Search" aria-label="Search" required>
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form> */}
    </div>
  </nav>
  )
}