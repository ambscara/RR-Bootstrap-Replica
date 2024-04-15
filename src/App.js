import './App.css';
import { Background } from "./Components/Background";
import { StoreListing } from "./Components/StoreListing"
import { TopBar } from "./Components/TopBar"




function App() {
  return (
    <div className="App">
      <TopBar />
      <Background />
      <StoreListing />
      <h1>Hello World</h1>
    </div>
  );
}


export default App;
