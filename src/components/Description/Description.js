import React, { useEffect, useState } from "react";
import "../Description/Description.scss";
import gsap from "gsap";
import TextPlugin from "gsap/TextPlugin";

function Description() {
  gsap.registerPlugin(TextPlugin);
  useEffect(() => {
   

    gsap.to("#quote", {
      duration: 15,
      text: {
        value:
          "L'intelligence artificielle est un processus d'imitation de lintelligence humaine qui repose sur la création et l'application d'algorithmes exécutés dans un environnement informatique dynamique. Son but est de permettre à des ordinateurs de penser et d'agir comme des êtres humains.",
        delimiter: " ",
      },

      easy: "none",
    });
  }, []);

  return (
    <div className="desc-homepage">
      <h1 >L'intelligence artificielle (IA) </h1>
      <div id="quote"></div>
    </div>
  );
}

export default Description;
