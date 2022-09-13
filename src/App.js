import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const currentAge = useSelector((state) => state.rootReducer);

  return (
    <div className="App">
      <h1> age-{currentAge}</h1>
    </div>
  );
}

export default App;
