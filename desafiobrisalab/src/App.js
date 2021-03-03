import './App.css';
import Login from "./components/login/Login"
import Favorite from "./components/home/favorite/favorite"
import Search from "./components/home/search/search"
import Listining from "./components/home/listing/listining"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Home></Home> */}
        <Login></Login>
        {/* <Favorite></Favorite> */}
        {/* <Search></Search> */}
        {/* <Listining></Listining> */}
       
       
      </header>
    </div>
  );
}

export default App;
