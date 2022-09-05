import Navbar from '../components/Navbar'
import logo from '../assets/logo.png'
export default function Login() {

  function submitLogin() {

  }

  return (
    <>
      <Navbar />

      <section className="loginSection">
        <img src={logo} class="rounded mx-auto d-block" alt="logo" />
        <h1 className="text-center">
          Login
        </h1>
        <form>
          <div class="mb-3">
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Nome"/>
          </div>
          <div class="mb-3">
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Senha"/>
          </div>
          <button type="submit" class="btn btn-primary btn-block">Submit</button>
      </form>
      </section>
    </>
  )
}