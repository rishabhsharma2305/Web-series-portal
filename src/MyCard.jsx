import react from 'react';
import './index.css'
function Mycard(props) {
    return (
      <>
      <div className="cards">
        <div className= "card">
          <img src={props.image} alt="series" className="card_img"/>
          <div className="card_info">
            <h3 className= "card_title">{props.title}</h3>
            <a href= {props.redirect} target= "_blank">
              <button>Watch now</button>
            </a>
          </div>
        </div>
      </div>
      </>
    )
  }

  export default Mycard;