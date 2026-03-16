"use client";

import dynamic from "next/dynamic";

const LeafletMapInner = dynamic(() => import("./LeafletMapInner"), {
  ssr: false, // Disable SSR to fix "window is not defined"
});

export default function LeafletMap(props: any) {
  return <LeafletMapInner {...props} />;
}