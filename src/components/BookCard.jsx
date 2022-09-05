

export default function BookCard(props) {
  
  return (
    <div className="card shadow-sm m-1 border-none">
      <div className="card-body">
        <h5 className="card-title text fw-bold">{props.bookProp["NOME"]}</h5>
        <h6 className="card-subtitle text mb-2">{props.bookProp["AUTOR"]}</h6>
        
      </div>
      <div class="card-footer fw-bolder">{props.bookProp["GÊNERO"]}</div>
    </div> 
  )
}