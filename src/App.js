import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, NavBar, CreatePost } from "./components";
import { Signin, Signup } from "./feature";
import { useSelector } from "react-redux";

function App() {
  const { isLoggedIn } = useSelector((state) => state.auth);
      console.log("appppppppp", isLoggedIn) 
  return (
  
    <Router>
      <Switch>
        {isLoggedIn ? (
          <>
            <NavBar />
            <Route path="/Home" exact component={Home} />
            <Route path="/CreatePost" exact component={CreatePost} />
          </>
        ) : (
          <>
            <Route path="/" exact component={Signin} />

            <Route path="/Signup" exact component={Signup} />
          </>
        )}
      </Switch>
    </Router>
  );
}

export default App;
