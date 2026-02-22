"use client";

import dynamic from "next/dynamic";

const LeafletMapInner = dynamic(
  () => import("./LeafletMapInner"),
  { ssr: false }
);

export default function LeafletMap() {
  return <LeafletMapInner />;
}