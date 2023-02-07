import React from "react";
import "./assets/css/animation.css";
import "./assets/css/bootstrap.min.css";
import "./assets/css/responsive.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Questions from "./features/questions/Questions";
import Login from "./features/auth/Login";
import { store } from "./app/store";
import { Provider } from "react-redux";
import Result from "./features/result/Result";
import PrivateRoute from "./features/auth/PrivateRoute";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route
            path="/landing"
            element={
              <PrivateRoute>
                <Questions />
              </PrivateRoute>
            }
          ></Route>
          <Route
            path="/result"
            element={
              <PrivateRoute>
                <Result />
              </PrivateRoute>
            }
          ></Route>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
