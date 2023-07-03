import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
let Home = React.lazy(() => import("./pages/Home"));
let PageNotFound = React.lazy(() => import("./pages/PageNotFound"));
let CreatePost = React.lazy(()=>import ("./components/post/CreatePost"));
let EditPost = React.lazy(() => import("./components/post/EditPost"));
const App = () => {
  return (
    <Suspense fallback={<div>Loading.....</div>}>
      <div className="App">
        <Router>
          <Navbar />
          <ToastContainer theme="light"/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create-post" element={<CreatePost/>} />
            <Route path="/edit-post/:id" element={<EditPost />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Router>
      </div>
    </Suspense>
  );
};

export default App;
