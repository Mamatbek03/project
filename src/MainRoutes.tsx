import React from "react";
import { Route, Routes } from "react-router-dom";
import AddMeeting from "./components/SwaggerComponents/meetings/AddMeeting";

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/add-meeting" element={<AddMeeting />}></Route>
      </Routes>
    </div>
  );
};

export default MainRoutes;
