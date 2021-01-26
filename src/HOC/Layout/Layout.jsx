import React from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import Header from "../../components/Header/Header";
import SquareGrid from "../../components/SquareGrid/SquareGrid";
import SquareFlex from "../../components/SquareFlex/SquareFlex";
import Calculator from "../../components/Calculator/Calculator";
import ShowResult from "../../components/Result/Result";

export default function Layout() {
  return (
    <BrowserRouter>
      <Header>
        <Route path="/" exact component={() => <Redirect to="/calculator" />} />
        <Route path="/calculator" exact component={Calculator} />
        <Route path="/css-grid" exact component={SquareGrid} />
        <Route path="/css-flex" exact component={SquareFlex} />
        <Route path="/show-result" exact component={ShowResult} />
      </Header>
    </BrowserRouter>
  );
}
