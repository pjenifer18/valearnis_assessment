import React, { useEffect, useState } from "react";
import "../../assets/css/style.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  useEffect(() => {
    const isLoggedIn = sessionStorage.getItem("isLoggedIn");
    navigate(isLoggedIn ? "/landing" : "/login");
  }, []);
  const handleLogin = () => {
    if (state.email === "admin@gmail.com" && state.password === "admin") {
      sessionStorage.setItem("isLoggedIn", true);
      navigate("/landing");
    }
  };
  return (
    <section>
      <div className="row">
        <div
          className="form-section col-md-12 col-sm-12 tab-100"
          style={{ height: "100vh" }}
        >
          <div className="container" style={{ width: "40%" }}>
            {/* sign up form */}
            <div id="show-login" className="from-top wrapper">
              {/* signup heading */}
              <div className="signup signup-heading">
                <h2>sign in</h2>
              </div>
              {/* signup/login form inner */}
              <form method="post">
                <div className="form-field">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="example@site.com"
                    onChange={(e) =>
                      setState({ ...state, email: e.target.value })
                    }
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Min. 8 Characters"
                    onChange={(e) =>
                      setState({ ...state, password: e.target.value })
                    }
                  />
                </div>
                {/* login field */}
                <div className="login agree-notif">
                  <label htmlFor="remember">
                    <input type="checkbox" name="remember" id="remember" />
                    <span>Remember me</span>
                  </label>
                </div>
                {/* signup field */}
                <div className="signup signup-submit">
                  <button className="shine" onClick={handleLogin}>
                    Login
                  </button>
                </div>
              </form>
              {/* signup field */}
              <div className="signup login-notif">
                Already have an Account?{" "}
                <span className="show-hide">Sign in</span>
              </div>
              {/* login field */}
              <div className="login login-notif">
                New Member? <span className="show-hide">Sign up</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
