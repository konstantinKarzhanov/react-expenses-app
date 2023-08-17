import React from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import "../styles/about.css";

function About() {
  return (
    <>
      <Header titleHandle="About" />
      <Main>
        <div className="about-container">
          <p className="info-text">
            This program is designed to take user inputs for overall budget as
            well as individual transactions. It will then take said transactions
            and categorize them so the user can see how much of their budget is
            currently used and what it has been spent on so far.
          </p>
          <div className="info-text">
            Code Authors:
            <ul>
              <li className="list-item">
                <p className="list-name">Matthew Davis</p>
                <p className="list-info">
                  Created Insights Page and Context file for Insights Page.
                  Styled Insights Page. Wrote Tests for the app
                </p>
              </li>
              <li className="list-item">
                <p className="list-name">Kostiantyn Karzhanov</p>
                <p className="list-info">
                  Created Expenses Page, Custom Hooks, Context files and
                  Navigation Menu. Styled Expenses and Categories Pages.
                </p>
              </li>
              <li className="list-item">
                <p className="list-name">Raymond Payne</p>
                <p className="list-info">Created Categories Page</p>
              </li>
              <li>
                <p className="list-name">Michael Sheridan</p>
                <p className="list-info">
                  Created About Page and overall styling
                </p>
              </li>
            </ul>
          </div>
        </div>
      </Main>
    </>
  );
}

export default About;
