import "./App.css";
import Button from "./components/Button";
import Heading from "./components/Heading";
import Information from "./components/Information";
import Link from "./components/Link";
import Lists from "./components/Lists";

function App() {
  return (
    <div className="main-container">
      <Heading />
      <Information />
      <br /> <br />
      <Lists />
      <br />
      <Link />
      <br /> <br />
      <Button />
    </div>
  );
}

export default App;
