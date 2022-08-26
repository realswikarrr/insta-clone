/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import Feed from "../components/feed";
import Story from "../components/story";

const Home: NextPage = () => {
  return (
    <div className="flex">
      <section>
        {/* Top Story Header */}
        <Story />

        {/* Feed */}
        <Feed />
        <Feed />
      </section>
    </div>
  );
};

export default Home;
