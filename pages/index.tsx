/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import Feed from "../components/feed";
import SideBar from "../components/sidebar";
import Story from "../components/story";

const Home: NextPage = () => {
  return (
    <div className="flex space-x-5">
      <section>
        {/* Top Story Header */}
        <Story />

        {/* Feed */}
        <Feed />
        <Feed />
      </section>
      <section className="w-full">
        <SideBar />
      </section>
    </div>
  );
};

export default Home;
