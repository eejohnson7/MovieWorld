import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import Login from "./Login";
import Registration from "./Registration";
import UserProfile from "./UserProfile";
import Movies from "./Movies";
import MovieProfile from "./MovieProfile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/user-profile/:id" element={<UserProfile />} />
        <Route path="/movies/:id" element={<Movies />} />
        <Route path="/movie-profile/:title" element={<MovieProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;