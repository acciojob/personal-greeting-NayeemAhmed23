
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {
  const [name, setName] = useState("");


    function getName (e) {
        setName(e.target.value);
    }
  return (
    <div>
        {/* Do not remove the main div */}
        <form>
              <input type="text" onChange={getName} />
          </form>
          <p>{name !== "" && `Hello ${name}!`}</p>
    </div>
  )
}

export default App
