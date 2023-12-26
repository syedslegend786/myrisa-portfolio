import { Header } from "@/components/header";
import React from "react";
import { Hero } from "./components/hero";
import { Introduction } from "./components/indroduction";
import { SideRightSVG } from "./components/side-right-svg";
import { SideLeftSVG } from "./components/side-left-svg";
import { PodCasts } from "./components/podcasts";
import { MyCourses } from "./components/my-courses";
import { FreeTraining } from "./components/free-training";
import WorkWithMe from "./components/work-with-me";
import TheBlog from "./components/the-blog";
import { BusinessTips } from "./components/bussiness-tips";
import { HelpUs } from "./components/help-us";
import { Footer } from "./components/footer";

const Home = () => {
  return (
    <>
      <Header />
      <div className="overflow-hidden">
        <div className="mt-7 lg:min-h-[900px] relative">
          <SideRightSVG className="lg:inline hidden absolute -bottom-40 -right-[300px] rotate-180 fill-brand-white-500" />
          <SideLeftSVG className="lg:inline hidden absolute -bottom-40 rotate-180 -left-[200px] fill-brand-pink-700" />
          <Hero />
        </div>
        <Introduction />
        <PodCasts />
        <MyCourses />
        <FreeTraining />
        <WorkWithMe />
        <TheBlog />
        <BusinessTips />
        <HelpUs />
        <Footer />
      </div>
    </>
  );
};

export default Home;
