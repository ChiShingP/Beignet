import React, {useState} from "react";
//This component is responsible for the Create field.
function Create(props){
  //Creating the object and its hook
    const [dough, setDough] = useState({
        title: "",
        note: "",
        max: "",
        current: "Float64Array"
      });
      //Gets the input and the field which the input was entered
      function handleChange(event) {
        const { name, value } = event.target;
      //Assigning the correct value to the correct object property
        setDough(prevBeignet => {
          return {
            ...prevBeignet,
            [name]: value
          };
        });
      }
      //Adding the beignet to be displayed and clears the current input fields
      function fryBeignet(event) {
        props.onAdd(dough);
        setDough({
          title: "",
          note: "",
          current:"",
          max:""
        });
        event.preventDefault();
      }
    
      return (
        <div>
          <form>
            <input
              name="title"
              onChange={handleChange}
              value={dough.title}
              placeholder="Title"
            />
            <textarea
              name="note"
              onChange={handleChange}
              value={dough.note}
              placeholder="Take a note..."
              rows="1"
            />
            <input
            name="current"              
            onChange={handleChange}
              value={dough.current}
              placeholder="Current Usage" />
                          <input
            name="max"              
            onChange={handleChange}
              value={dough.max}
              placeholder="Budget" />
            <button onClick={fryBeignet}>Add</button>
          </form>
        </div>
      );
    
}

export default Create;