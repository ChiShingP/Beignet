import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Beignet from "./Beignet";
import Create from "./Create";
import PopUpCreate from "./PopupCreate";

function App() {

    //Hook for beignet
  const [beignets, setBeignets] = useState([]);
    //New Beignet insertion, displays all previous beignet with new one
  function sellBeignet(newBeignet) {
    setBeignets(prevBeignet => {
      return [...prevBeignet, newBeignet];
    });
  }
  //delete a beignet
  function eatBeignet(id) {
    setBeignets(prevBeignet => {
      return prevBeignet.filter((newBeignet, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      {/* passes a function to diplay the beignet with beignet object */}

      {/* <Create onAdd={sellBeignet} /> */}
     
      <PopUpCreate onAdd={sellBeignet}/>
 
      {beignets.map((thisBeignet, index) => {
        return (
          <Beignet
            key={index}
            id={index}
            title={thisBeignet.title}
            note={thisBeignet.note}
            current={thisBeignet.current}
            max={thisBeignet.max}
            onDelete={eatBeignet}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
