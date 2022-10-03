import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from './pages/Register'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { useSelector,useDispatch } from 'react-redux'
import { useEffect } from "react";
import { userRequest } from "./axios";
import { setUser } from "./redux/reducers/auth";
import { saveQ1,saveQ2,saveQ3,saveQ4,saveQ5, } from "./redux/reducers/question";

function App() {

  const user = useSelector(state => state.auth.currentUser)
  const dispatch = useDispatch();
  useEffect(() => {
    const verifyUser = async () => {
      // console.log("run")
      try {
        const res = await userRequest.get('/verifyUser')
        console.log(res.data)
        dispatch(setUser(res.data))
        dispatch(saveQ1(res.data.questions.q1))
        dispatch(saveQ2(res.data.questions.q2))
        dispatch(saveQ3(res.data.questions.q3))
        dispatch(saveQ4(res.data.questions.q4))
        dispatch(saveQ5(res.data.questions.q5))
      } catch (err) {
        console.log(err)
      }
    }
    verifyUser();
  }, [dispatch])

  // console.log(user);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/register" element={user ? <Home /> : <Register />} />
          <Route path="/login" element={user ? <Home /> : <Login />} />
          <Route exact path="/" element={user ? <Home /> : <Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
