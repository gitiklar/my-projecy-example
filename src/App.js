import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Entry from "./pages/entry";
import HomeContainer from "./pages/homeContainer";
import TableAndCalculations from "./components/tableAndCalculations";

import store from "./redux/store";
import "./styles/app.scss";

export default () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<HomeContainer />} />
          <Route
            path="/table"
            element={
              <HomeContainer>
                <TableAndCalculations />
              </HomeContainer>
            }
          />
          <Route path="/" element={<Entry />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};
