import Home from "./components/home/Home";
import "./App.css";
import { getPosts, getUsers } from "./redux/postSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
    dispatch(getUsers());
  }, []);
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
