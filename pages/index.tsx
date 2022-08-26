/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import Story from "../components/story";

const Home: NextPage = () => {
  return (
    <div className="flex">
      <section>
        {/* Top Story Header */}
        <Story />

        {/* Feed */}
        <div>
          <h1>Hello</h1>
        </div>
      </section>
    </div>
  );
};

export default Home;
