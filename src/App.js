import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Navbar title="Util Title" textAbout="About us" />
      <div className="container my-3">
        <TextForm /*heading="Enter your words here: "*/ />
      </div>
    </>
  );
}

export default App;
