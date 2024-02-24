import "./App.css";
import "./components/form/Form.css";
import Banner from "./components/banner/Banner";
import Form from "./components/form/Form";

function App() {
  return (
    <div className="App">
      <div className="loginUI">
        <div className="banner">
          <Banner />
        </div>
        <div className="form_page">
          <Form />
        </div>
      </div>
    </div>
  );
}

export default App;
