import React,{useRef,useEffect} from "react";
import { Link } from "react-router-dom";
import "../Contact/Contact.scss";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
gsap.registerPlugin(Draggable);

function Contact() {
  const form = useRef(null)
  
  useEffect(() => {
    Draggable.create(form.current, {
      type: "x,y",
      
      edgeResistance: 0.65,
 bounds:'.App',
      inertia: true,
    });
   
  }, []);



  return (
    <div  className="FormContact" ref={form}>
      {" "}
      <div className="Form" id="Form">
        <div className="desc">
        <h1>Nous contacter</h1>
      <h2>Entreprise robotEVA</h2>
     <p>Mailing Address:
Umbrella Corporation
545 S Birdneck RD STE 202B
Virginia Beach, VA 23451</p>
<p>Office Phone:
757-227-4610</p>


<p>General Email:
sales@ucwrg.com
</p>
<p>Dealers email FFL to:
ffl@ucwrg.com</p>

<p>Hours of Communication:
10:00AM-10:00PM EST, M-F</p>

        </div>
      
      
      
        <Link to="/">
          {" "}
          <button>Fermer</button>
        </Link>{" "}
      </div>{" "}
    </div>
  );
}

export default Contact;
