"use client";

import { useEffect, useState } from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const metrics = [
  { start: 472000, end: 500000, label: "Lives Impacted", suffix: "k", divisor: 1000 },
  { start: 164, end: 200, label: "Resource Connections", suffix: "+", divisor: 1 },
  { start: 81, end: 100, label: "Community Partners", suffix: "+", divisor: 1 },
];

const chartData = [
  { month: "Jan", people: 320, resources: 38 },
  { month: "Feb", people: 410, resources: 52 },
  { month: "Mar", people: 460, resources: 61 },
  { month: "Apr", people: 520, resources: 75 },
  { month: "May", people: 610, resources: 88 },
  { month: "Jun", people: 670, resources: 97 },
  { month: "Jul", people: 720, resources: 109 },
  { month: "Aug", people: 760, resources: 118 },
  { month: "Sep", people: 835, resources: 132 },
  { month: "Oct", people: 910, resources: 147 },
  { month: "Nov", people: 980, resources: 161 },
  { month: "Dec", people: 1080, resources: 179 },
];

function formatMetricValue(
  value: number,
  suffix: string,
  divisor: number
) {
  if (divisor === 1000) {
    return `${Math.round(value / divisor)}${suffix}`;
  }

  return `${Math.round(value)}${suffix}`;
}

export default function ImpactSection() {
  const [metricValues, setMetricValues] = useState(metrics.map((metric) => metric.start));

  useEffect(() => {
    const durationMs = 1800;
    const pauseMs = 900;
    let frameId = 0;
    let startTime = 0;
    let direction: "up" | "down" = "up";
    let pauseUntil = 0;

    const tick = (timestamp: number) => {
      if (!startTime) {
        startTime = timestamp;
      }

      if (pauseUntil && timestamp < pauseUntil) {
        frameId = window.requestAnimationFrame(tick);
        return;
      }

      if (pauseUntil && timestamp >= pauseUntil) {
        pauseUntil = 0;
        startTime = timestamp;
      }

      const progress = Math.min((timestamp - startTime) / durationMs, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      setMetricValues(
        metrics.map((metric) => {
          const from = direction === "up" ? metric.start : metric.end;
          const to = direction === "up" ? metric.end : metric.start;
          return from + (to - from) * eased;
        })
      );

      if (progress >= 1) {
        direction = direction === "up" ? "down" : "up";
        pauseUntil = timestamp + pauseMs;
      }

      frameId = window.requestAnimationFrame(tick);
    };

    frameId = window.requestAnimationFrame(tick);

    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <section className="py-28">
      <div className="mx-auto flex w-full max-w-[92rem] flex-col gap-10 rounded-[2rem] bg-base-200 px-6 py-16 md:px-10 lg:px-14">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.15fr] lg:items-end">
          <div className="max-w-2xl space-y-3">
            <p className="text-lg font-medium text-primary">Impact</p>
            <h2 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              Creating Lasting Change Across The Pacific Northwest
            </h2>
          </div>
          <p className="max-w-3xl text-lg leading-8 text-base-content/75 md:text-xl lg:justify-self-end">
            PulseAsia connects people to legal, educational, career, cultural, and
            health support across the Pacific Northwest. By placing trusted resources
            in one accessible platform, we reduce the barriers to information for
            Asian American immigrants and make it easier to take meaningful steps
            toward stability, growth, and well-being.
          </p>
        </div>

        <div className="grid gap-10 border-t border-primary/15 pt-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <p className="max-w-xl text-lg leading-8 text-base-content/75 md:text-xl">
            Our mission is to create a user-friendly space where immigrants can
            discover resources tailored to their needs. We aim to promote community
            support and accessibility through services that are simple, inclusive,
            and impactful when help matters most.
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            {metrics.map((metric, index) => (
              <div key={metric.label} className="space-y-2">
                <div className="text-5xl font-semibold leading-none md:text-6xl">
                  {formatMetricValue(metricValues[index], metric.suffix, metric.divisor)}
                </div>
                <div className="text-lg text-primary md:text-xl">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[300px_1fr] lg:items-stretch">
          <img 
            src="/doodlered.png"
            alt="Community members celebrating together"
            className="h-[12rem] w-full object-contain md:h-[14rem] lg:h-[18rem]"
          />

          <div className="rounded-[1.75rem] bg-base-100 p-6 shadow-sm md:p-8">
            <div className="h-[360px] rounded-xl bg-base-200 p-4 md:h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  accessibilityLayer
                  data={chartData}
                  margin={{ top: 18, right: 18, left: 0, bottom: 8 }}
                >
                  <CartesianGrid vertical={false} stroke="rgb(120 113 108 / 0.18)" />
                  <XAxis
                    dataKey="month"
                    tickLine={false}
                    axisLine={false}
                    tickMargin={12}
                    stroke="rgb(87 83 78 / 0.7)"
                  />
                  <YAxis
                    tickLine={false}
                    axisLine={false}
                    tickMargin={12}
                    stroke="rgb(87 83 78 / 0.7)"
                  />
                  <Tooltip
                    cursor={{ stroke: "rgb(120 113 108 / 0.25)", strokeWidth: 1 }}
                    contentStyle={{
                      borderRadius: "1rem",
                      border: "1px solid rgb(120 113 108 / 0.18)",
                      backgroundColor: "rgb(255 251 235 / 0.96)",
                      color: "rgb(68 64 60)",
                    }}
                  />
                  <Legend wrapperStyle={{ paddingTop: "12px" }} />
                  <Line
                    type="monotone"
                    dataKey="people"
                    name="People Reached"
                    stroke="var(--chart-1)"
                    strokeWidth={4}
                    dot={{ r: 0 }}
                    activeDot={{ r: 6, fill: "var(--chart-1)" }}
                  />
                  <Line
                    type="monotone"
                    dataKey="resources"
                    name="Resources Added"
                    stroke="var(--chart-2)"
                    strokeWidth={4}
                    dot={{ r: 0 }}
                    activeDot={{ r: 6, fill: "var(--chart-2)" }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
