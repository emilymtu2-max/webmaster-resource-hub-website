"use client";

import React from "react";
import { motion } from "framer-motion";

export default function References() {
  const imageLinks = [
    "https://images.unsplash.com/photo-1529180979161-06b8b6d6f2be?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.pexels.com/photos/6983438/pexels-photo-6983438.jpeg",
    "https://unsplash.com/photos/man-in-white-t-shirt-carrying-girl-in-pink-dress-NeCIvmmZa60",
    "https://unsplash.com/photos/four-person-hands-wrap-around-shoulders-while-looking-at-sunset-PGnqT0rXWLs",
    "https://unsplash.com/photos/people-sitting-on-green-grass-field-during-daytime-u7i3ZvZOEUM",
    "https://unsplash.com/photos/mural-with-our-asian-community-is-safe-and-police-car-g4Z1fc8TAyM",
    "https://www.freepik.com/free-photo/old-senior-asian-friends-retired-people-hapiness-positive-laugh-smile-conversation-together-living-room-nursing-home-seniors-participating-group-activities-adult-daycare-center_27949393.htm",
    "https://www.pexels.com/photo/arched-entrance-to-safdarjung-tomb-1007431/",
    "https://www.pexels.com/photo/festival-celebration-with-traditional-diyas-29422092/",
    "https://unsplash.com/photos/assorted-title-of-books-piled-in-the-shelves-NIJuEQw0RKg",
    "https://unsplash.com/photos/green-trees-beside-river-during-daytime-ev1mx7T3t_s",
    "https://unsplash.com/photos/woman-in-white-sweater-holding-black-round-frame-7ilpPBxTavU",
    "https://images.pexels.com/photos/8818664/pexels-photo-8818664.jpeg",
  ];

  return (
    <div className="min-h-screen bg-base-200 p-8 space-y-14">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-6xl font-extrabold">References</h1>
        <p className="mt-4 text-xl opacity-70">
          Sources, tools, and research behind our project
        </p>
      </motion.div>

      {/* PDF Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        className="flex justify-center"
      >
        <div className="card w-[28rem] bg-base-100 shadow-xl">
          <div className="card-body items-center text-center space-y-2">
            <h2 className="card-title text-2xl">Work Log + Checklist</h2>
            <p className="text-lg">Explore our full documentation</p>
            <a
              href="https://drive.google.com/drive/folders/1TxwoZv0ZYbOjhMuDWQwitYYApvCmMpYv?usp=sharing"
              target="_blank"
              className="btn btn-primary mt-2"
            >
              Check PDF
            </a>
          </div>
        </div>
      </motion.div>

      {/* Code Stack */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="card bg-base-100 shadow-xl"
      >
        <div className="card-body space-y-5">
          <h2 className="card-title text-3xl">
            Code Stack + Additional Information
          </h2>

          <p className="text-lg">
            This website was built using a modern full-stack approach that combines both strong technical foundations and thoughtful design. At its core, we used Next.js and React to structure the application, allowing us to break the entire site into reusable components and build everything in a modular, scalable way. By using Next.js specifically, we were able to take advantage of powerful features like server-side rendering, file-based routing, and optimized performance, which made the site load faster and handle more complex interactions smoothly.
          </p>

          <p className="text-lg">
            For styling and UI design, we used Tailwind CSS alongside DaisyUI and shadcn/ui. Tailwind allowed us to directly control spacing, layout, colors, and responsiveness at a very granular level, while DaisyUI and shadcn provided higher-level components like cards, buttons, and layouts. In addition, icons were used from free shadcn icon libraries. This combination gave us both speed and flexibility, and we could quickly build clean interfaces while still customizing everything to match our vision instead of being locked into rigid templates. No pre-built templates were used and all design and content was created entirely by our team from scratch.
          </p>

          <p className="text-lg">
            On the backend side, we used Next.js API routes to handle server-side logic such as processing form submissions, handling requests, and connecting different parts of the application. For our database and backend services, we used Supabase, which is built on PostgreSQL. Supabase allowed us to manage structured data, handle authentication, and even support real-time updates without needing to set up our own backend infrastructure. This made it much easier to store and retrieve resource data efficiently while keeping everything secure and organized.
          </p>

          <p className="text-lg">
            One of the key interactive features of our site is the map, which we built using Leaflet. Leaflet is a lightweight but powerful mapping library that allowed us to render maps directly in the browser and place dynamic, categorized markers based on our data. This made the experience much more visual and intuitive, helping users explore resources based on location rather than just scrolling through lists.
          </p>

          <p className="text-lg">
            To present data in a more engaging and understandable way, we used the Recharts library. With components like PieChart, BarChart, XAxis, YAxis, Tooltip, Legend, and ResponsiveContainer, we were able to create responsive and interactive visualizations that clearly communicate statistics and trends. This added another layer of depth to the project by turning raw data into something users can actually interpret quickly.
          </p>

          <p className="text-lg">
            Throughout the entire development process, we used Git and GitHub for version control and collaboration. This allowed our team to work on different features at the same time, track every change, resolve merge conflicts, and continuously improve the project in a structured way. It also gave us a clear history of how the project evolved over time.
          </p>

          <p className="text-lg">
            Overall, this project is not just about the technologies we used, but how we combined them to solve real problems. Every tool in our stack played a role in making the site more interactive, scalable, and user-friendly, and the final result reflects both the technical depth and the collaborative effort that went into building it.
          </p>
        </div>
      </motion.div>

      {/* Image Links ONLY */}
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-3xl">Image Sources</h2>
          <ul className="list-disc pl-6 space-y-3 break-all text-lg">
            {imageLinks.map((link, i) => (
              <li key={i}>
                <a href={link} target="_blank" className="link">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Research Links */}
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-3xl">Research Sources</h2>
          <ul className="list-disc pl-6 space-y-3 text-lg">
            <li>
              <a
                href="https://www.pewresearch.org/race-and-ethnicity/2024/10/09/asian-american-immigrants-experiences-adjusting-to-life-in-the-u-s/"
                target="_blank"
                className="link"
              >
                Pew Research – Asian American immigrant experiences
              </a>
            </li>
            <li>
              <a
                href="https://www.migrationpolicy.org/article/immigrants-asia-united-states-2025"
                target="_blank"
                className="link"
              >
                Migration Policy Institute – Immigration trends from Asia
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Licenses */}
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-3xl">Licenses</h2>
          <p className="text-lg">
            All images are sourced from platforms like Unsplash, Pexels, Canva, and Freepik, which provide free or properly licensed media for use.
          </p>
        </div>
      </div>
    </div>
  );
}