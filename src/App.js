import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import "./App.css";
import LoginContainer from "./components/Login/LoginContainer";
import SignUpContainer from "./components/SignUp/SignUpContainer";
import reducer from "./store/reducer"

const store = createStore(reducer)

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Combine reducers
        </p>
        <Provider store={store}>
          <LoginContainer/>
          <SignUpContainer/>
        </Provider>
      </header>
    </div>
  );
}

export default App;
