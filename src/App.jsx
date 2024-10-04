import "./App.css";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";

function App() {
  return (
    <div className="p-4 h-screen flex item-center justify-center">
      {/* <Login /> */}
      <Home />
    </div>
  );
}

export default App;
