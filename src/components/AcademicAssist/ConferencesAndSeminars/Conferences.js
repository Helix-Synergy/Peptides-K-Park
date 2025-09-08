import React from "react";
import AutoScrollingCarousel from "./AutoScrollingCarousel";
import featuredConferenceData from "../../../data/conferenceData"; // move your array to a data file
import hybridEventsData from "../../../data/hybridsData1";
import webinarsData from "../../../data/webinarsData1";

const Conferences = () => {
  return (
    <div>
      {/* Featured Conferences */}
      <AutoScrollingCarousel
        data={featuredConferenceData}
        speed={50}
        direction="left"
        title="Featured Conferences"
      />

      {/* Hybrids */}
      <div
        className="text-white relative overflow-hidden"
        style={{
          background: "linear-gradient(to right, #ffffffff, #ffffffff)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
        //   boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.5)",
          backdropFilter: "blur(15px)",
          overflow: "hidden",
          color: "brown",
        }}
      >
        <AutoScrollingCarousel
          data={hybridEventsData}
          speed={50}
          direction="left"
          title="Upcoming Hybrids"
        />
      </div>

      {/* Webinars */}
      <div
        className="text-white relative overflow-hidden"
        style={{
          background: 'white',
          border: "1px solid rgba(255, 255, 255, 0.1)",
        //   boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.5)",
          backdropFilter: "blur(15px)",
          overflow: "hidden",
          color: "brown",
        }}
      >
        <AutoScrollingCarousel
          data={webinarsData}
          speed={55}
          direction="right"
          title="Upcoming Webinars"
        />
      </div>
    </div>
  );
};

export default Conferences;
