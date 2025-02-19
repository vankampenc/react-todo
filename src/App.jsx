import "./App.css";
import TodoContainer from "./components/TodoContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeContainer from "./components/HomeContainer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeContainer></HomeContainer>}></Route>
        <Route
          path="/todos"
          element={<TodoContainer tableName="Todo List"></TodoContainer>}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
