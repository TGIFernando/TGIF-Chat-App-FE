import './App.css';
import { Route } from "react-router-dom"

import Join from "./components/Join"
import Chat from "./components/Chat"


function App() {
  return (
    <div className="App">
      <Route path="/" exact component={Join}/>
      <Route path="/chat" component={Chat}/>
    </div>
  );
}

export default App;
