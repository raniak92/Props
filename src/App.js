import logo from "./logo.svg";
import "./App.css";
import CompoProfile from "./profile/compoprofile";
import ComposantsProfile from "./profile/composantsprofile";
import Header from "./profile/Header";

function App() {
  return (
    <div className="App">
      <CompoProfile />
      <ComposantsProfile />
      <Header />
    </div>
  );
}

export default App;
