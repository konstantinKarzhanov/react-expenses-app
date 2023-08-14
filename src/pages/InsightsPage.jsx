import React from "react";
import Insights from "../components/Insights";
import Header from "../components/Header";
import Main from "../components/Main";
import { InsightContextProvider } from "../context/InsightsContext";
import Footer from "../components/Footer";
import Insights2 from "../components/Insights2";
import "../styles/insights.css";

const InsightsPage = () => {
  return (
    <>
      <Header mainTitleHandle="expenses" />
      <Main>
        <InsightContextProvider>
          <Insights2 />
        </InsightContextProvider>
      </Main>
      <Footer />
    </>
  );
};

export default InsightsPage;
