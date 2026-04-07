"use client";

import React from "react";
import portfolioData from "../profile.json";

import PortfolioNav from "./components/nav";
import PortfolioHero from "./components/hero";
import PortfolioAbout from "./components/about";
import PortfolioExperience from "./components/experience";
import PortfolioProjects from "./components/projects";
import PortfolioSkills from "./components/skills";
import PortfolioContact from "./components/contact";
import PortfolioFooter from "./components/footer";
import PortfolioCommunity from "./components/community";
import PortfolioEducation from "./components/education";

export default function DeployedPortfolio() {
  const data = portfolioData;

  if (!data) return <div className="text-white p-10">Loading Portfolio...</div>;

  return (
    <div style={{ minHeight: "100vh", background: "#090806", color: "#FAFAF5", scrollBehavior: "smooth" }}>
      <PortfolioNav data={data} />
      <PortfolioHero data={data} />
      <PortfolioAbout data={data} />
      <PortfolioEducation data={data} />
      <PortfolioExperience data={data} />
      <PortfolioProjects data={data} />
      <PortfolioSkills data={data} />
      <PortfolioCommunity data={data} />
      <PortfolioContact data={data} />
      <PortfolioFooter data={data} />
    </div>
  );
}
