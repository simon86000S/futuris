import React from "react";
import main from "../../assets/img/main.webp";
import ingeneer from "../../assets/img/ingeneer.jpeg";
import background from "../../assets/img/background.jpg";
import qrcode from "../../assets/img/pexel.png";
import "./article.scss";
import men from '../../assets/img/men.jpg';
import men2 from "../../assets/img/men2.jpg"

function Article() {
  return (
    <div className="article">
      <div className="cadre">
        <div className="menu">
        
       < nav className="navigation">
            <ul>
              <li>Menu</li>
              <li>portfolio</li>
              <li>works</li>
              <li>contact</li>
            </ul>
           
            <div className="text">
              <h1>Intelligence Artificiel</h1>
              <p>Machine learning vs. Deep learning</p>
            </div>
            <img className="ingeneer" src={ingeneer}/>
            <img className="qrcode" src={qrcode}/>
          </nav>
          
        </div>
         
        <div className="page2">
          <img src={background}></img>
        </div>

        <div className="page3">
          <div className="presentation">
            <h1>IA</h1>
           <p>Conscience, sentiments et raisonnements typiques de l'humanité ne sont pas encore à portée de l'intelligence artificielle... pour l'instant.</p> 

          </div>

        </div>
      </div>
    </div>
  );
}

export default Article;
