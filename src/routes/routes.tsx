import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../page/auth";
import Auth from "../page/auth";
import Home from "../page/Home";
import MainPage from "../page/MainPage";
import QuizPage from "../page/Quiz";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<QuizPage />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/quiz" element={<QuizPage />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
