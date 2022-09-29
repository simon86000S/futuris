import React, { useRef, useEffect } from "react";
import "../Description/Description.scss";
import gsap from "gsap-trial";
import { SplitText } from "gsap-trial/SplitText";
 
function Description() {
  const para = useRef(null);
  gsap.registerPlugin(SplitText);


  useEffect(() => {
    let mySplitText = new SplitText("#quote", { type: "words,chars" }),
    chars = mySplitText.chars;
    gsap.set("#quote", { perspective: 400, opacity: 1 });

    gsap.from(chars, {
      duration: 0.8,
      opacity: 0,
      scale: 0,
      y: 80,
      rotationX: 180,
      transformOrigin: "0% 50% -50",
      ease: "back",
      stagger: 0.02,
      delay: 0.3
    });
    
   
  }, []);

  return (
    <div ref={para} className="desc-homepage">
      <h1>L'intelligence artificielle (IA) </h1>
      <div id="quote">
        L'intelligence artificielle est un processus d'imitation de
        l'intelligence humaine qui repose sur la création et l'application
        d'algorithmes exécutés dans un environnement informatique dynamique. <br></br>Son
        but est de permettre à des ordinateurs de penser et d'agir comme des
        êtres humains.{" "}
      
    </div>
    </div>
  );
}

export default Description;
