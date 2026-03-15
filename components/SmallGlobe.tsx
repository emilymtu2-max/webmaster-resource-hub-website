"use client"; // <-- important, this makes it run only on the client

import Globe from "react-globe.gl";

type SmallGlobeProps = {
  showCaption?: boolean;
  className?: string;
  width?: number;
  height?: number;
};

export default function SmallGlobe({
  showCaption = true,
  className = "",
  width = 600,
  height = 400,
}: SmallGlobeProps) {
  return (
    <div className={`mx-auto h-96 max-w-4xl ${className}`.trim()}>
      <Globe
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
        backgroundColor="rgba(0,0,0,0)"
        width={width}
        height={height}
      />
      {showCaption ? (
        <p className="mt-6 text-center text-xl text-base-content/70">
          Explore global connections and resources interactively.
        </p>
      ) : null}
    </div>
  );
}
