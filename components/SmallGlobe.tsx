"use client"; // <-- important, this makes it run only on the client

import Globe from "react-globe.gl";

export default function SmallGlobe() {
  return (
    <div className="mx-auto max-w-4xl h-96">
      <Globe
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
        backgroundColor="rgba(0,0,0,0)"
        width={600}
        height={400}
      />
      <p className="mt-6 text-center text-xl text-base-content/70">
        Explore global connections and resources interactively.
      </p>
    </div>
  );
}