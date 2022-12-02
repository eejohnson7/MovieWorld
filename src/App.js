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
        <Route path="/movieworld" element={<Login />} />
        <Route path="/movieworld/registration" element={<Registration />} />
        <Route path="/movieworld/user-profile/:userId" element={<UserProfile />} />
        <Route path="/movieworld/movies/:userId" element={<Movies />} />
        <Route path="/movieworld/movie-profile/:userId/:movieId" element={<MovieProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;