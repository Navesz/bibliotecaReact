import Navbar from '../components/Navbar'

export default function NewBook() {

  function submitLogin() {

  }

  return (
    <>
      <Navbar />

      <section className="loginSection">
        <h1 className="text-center">
          Adicionar Livro
        </h1>
        <form>
          <div class="mb-3">
            {/* <label for="exampleInputEmail1" class="form-label">Nome</label> */}
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Nome' />
          </div>
          <div class="mb-3">
            {/* <label for="exampleInputPassword1" class="form-label">Autor</label> */}
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder='Autor' />
          </div>
          <div class="mb-3">
            {/* <label for="exampleInputPassword1" class="form-label">Gênero</label> */}
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder='Gênero' />
          </div>
          <button type="submit" class="btn btn-primary btn-block shadow">Adicionar</button>

          
      </form>
      </section>
    </>
  )
}