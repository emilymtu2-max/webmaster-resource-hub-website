import FeatureHero from "@/components/FeatureHero";
export default function AboutUs() {
  return (
    <div>
      {/* About Us */}

      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(/aboutus-banner.jpg)",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-6 text-6xl font-bold md:text-7xl">
              Our Story
            </h1>
            <p className="mb-6 text-xl md:text-2xl">
            </p>
          </div>
        </div>
      </div>
    
      <section className="py-24 md:py-28">
        <div className="mx-auto w-full max-w-7xl px-4 md:px-8 lg:px-10">
          <div className="rounded-3xl bg-base-200 px-6 py-12 md:px-10 md:py-16">
            <h2 className="text-center text-5xl font-bold text-base-content md:text-6xl">
              PulseAsia&apos;s Timeline
            </h2>
            <p className="mx-auto mt-6 max-w-4xl text-center text-xl leading-relaxed text-base-content/75 md:text-2xl">
              From a small student-led idea to a growing support network, each milestone reflects
              our commitment to helping Asian American immigrant families find resources, belonging,
              and confidence in the Pacific Northwest.
            </p>

            <ul className="timeline timeline-snap-icon mt-14 max-md:timeline-compact timeline-vertical">
              <li>
                <div className="timeline-middle text-primary">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/20">
                    <div className="h-3 w-3 rounded-full bg-primary" />
                  </div>
                </div>
                <div className="timeline-start mb-10 md:text-end">
                  <div className="rounded-2xl border border-primary/25 bg-base-100 p-6 shadow-lg">
                    <time className="text-sm font-semibold uppercase tracking-wider text-primary">2021</time>
                    <h3 className="mt-2 text-2xl font-bold text-base-content">PulseAsia Is Founded</h3>
                    <p className="mt-3 text-base leading-relaxed text-base-content/75">
                      A small team of students and community supporters launched PulseAsia to make
                      local support easier to find for Asian American immigrants in Washington.
                    </p>
                  </div>
                </div>
                <hr className="bg-primary/30" />
              </li>

              <li>
                <hr className="bg-secondary/30" />
                <div className="timeline-middle text-secondary">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary/20">
                    <div className="h-3 w-3 rounded-full bg-secondary" />
                  </div>
                </div>
                <div className="timeline-end mb-10">
                  <div className="rounded-2xl border border-secondary/25 bg-base-100 p-6 shadow-lg">
                    <time className="text-sm font-semibold uppercase tracking-wider text-secondary">2022</time>
                    <h3 className="mt-2 text-2xl font-bold text-base-content">Resource Hub Launches</h3>
                    <p className="mt-3 text-base leading-relaxed text-base-content/75">
                      We organized trusted services into one searchable hub, helping families find
                      legal, educational, health, and career resources faster.
                    </p>
                  </div>
                </div>
                <hr className="bg-secondary/30" />
              </li>

              <li>
                <hr className="bg-accent/30" />
                <div className="timeline-middle text-accent">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/20">
                    <div className="h-3 w-3 rounded-full bg-accent" />
                  </div>
                </div>
                <div className="timeline-start mb-10 md:text-end">
                  <div className="rounded-2xl border border-accent/30 bg-base-100 p-6 shadow-lg">
                    <time className="text-sm font-semibold uppercase tracking-wider text-accent">2023</time>
                    <h3 className="mt-2 text-2xl font-bold text-base-content">Community Workshops Expand</h3>
                    <p className="mt-3 text-base leading-relaxed text-base-content/75">
                      We started regular workshops focused on navigating schools, housing, and local
                      systems while preserving cultural identity and language.
                    </p>
                  </div>
                </div>
                <hr className="bg-accent/30" />
              </li>

              <li>
                <hr className="bg-info/30" />
                <div className="timeline-middle text-info">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-info/20">
                    <div className="h-3 w-3 rounded-full bg-info" />
                  </div>
                </div>
                <div className="timeline-end mb-10">
                  <div className="rounded-2xl border border-info/30 bg-base-100 p-6 shadow-lg">
                    <time className="text-sm font-semibold uppercase tracking-wider text-info">2024</time>
                    <h3 className="mt-2 text-2xl font-bold text-base-content">Interactive Map Goes Live</h3>
                    <p className="mt-3 text-base leading-relaxed text-base-content/75">
                      Our map feature made nearby services easier to discover by location, saving
                      users time and making support more accessible.
                    </p>
                  </div>
                </div>
                <hr className="bg-info/30" />
              </li>

              <li>
                <hr className="bg-success/30" />
                <div className="timeline-middle text-success">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-success/20">
                    <div className="h-3 w-3 rounded-full bg-success" />
                  </div>
                </div>
                <div className="timeline-start mb-10 md:text-end">
                  <div className="rounded-2xl border border-success/30 bg-base-100 p-6 shadow-lg">
                    <time className="text-sm font-semibold uppercase tracking-wider text-success">2025</time>
                    <h3 className="mt-2 text-2xl font-bold text-base-content">Multilingual Support Grows</h3>
                    <p className="mt-3 text-base leading-relaxed text-base-content/75">
                      We expanded multilingual guidance to better serve families from Chinese,
                      Japanese, Korean, Vietnamese, Indian, and Filipino communities.
                    </p>
                  </div>
                </div>
                <hr className="bg-success/30" />
              </li>

              <li>
                <hr className="bg-warning/30" />
                <div className="timeline-middle text-warning">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-warning/20">
                    <div className="h-3 w-3 rounded-full bg-warning" />
                  </div>
                </div>
                <div className="timeline-end mb-10">
                  <div className="rounded-2xl border border-warning/30 bg-base-100 p-6 shadow-lg">
                    <time className="text-sm font-semibold uppercase tracking-wider text-warning">2026</time>
                    <h3 className="mt-2 text-2xl font-bold text-base-content">Today: Stronger Regional Network</h3>
                    <p className="mt-3 text-base leading-relaxed text-base-content/75">
                      PulseAsia continues to connect people with practical resources and a welcoming
                      community across the Pacific Northwest.
                    </p>
                  </div>
                </div>
                <hr className="bg-warning/30" />
              </li>

              <li>
                <hr className="bg-primary/30" />
                <div className="timeline-middle text-primary">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/20">
                    <div className="h-3 w-3 rounded-full bg-primary" />
                  </div>
                </div>
                <div className="timeline-start mb-10 md:text-end">
                  <div className="rounded-2xl border border-primary/25 bg-base-100 p-6 shadow-lg">
                    <time className="text-sm font-semibold uppercase tracking-wider text-primary">2027</time>
                    <h3 className="mt-2 text-2xl font-bold text-base-content">Planned: Youth & Mentor Programs</h3>
                    <p className="mt-3 text-base leading-relaxed text-base-content/75">
                      We aim to launch mentorship programs connecting newcomers with students,
                      professionals, and community leaders.
                    </p>
                  </div>
                </div>
                <hr className="bg-primary/30" />
              </li>

              <li>
                <hr className="bg-secondary/30" />
                <div className="timeline-middle text-secondary">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary/20">
                    <div className="h-3 w-3 rounded-full bg-secondary" />
                  </div>
                </div>
                <div className="timeline-end md:mb-10">
                  <div className="rounded-2xl border border-secondary/25 bg-base-100 p-6 shadow-lg">
                    <time className="text-sm font-semibold uppercase tracking-wider text-secondary">2028</time>
                    <h3 className="mt-2 text-2xl font-bold text-base-content">Vision: Statewide Collaboration</h3>
                    <p className="mt-3 text-base leading-relaxed text-base-content/75">
                      Our long-term goal is a statewide network where every immigrant family can
                      quickly find trusted support, no matter where they live.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <main className="page-container">
        <section className="mt-12">
          <div className="mx-auto max-w-6xl text-center">
            <h2 className="text-5xl font-bold text-base-content md:text-6xl">Our Values</h2>
          </div>
        </section>

        <section className="my-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <article className="group h-[26rem] [perspective:1200px]">
            <div className="relative h-full w-full rounded-2xl border border-primary/30 shadow-xl transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0 overflow-hidden rounded-2xl [backface-visibility:hidden]">
                <img
                  src="/aboutus-community.jpg"
                  alt="Community"
                  className="h-full w-full object-cover opacity-60"
                />
                <div className="absolute inset-x-0 bottom-0 bg-base-100/75 p-4 backdrop-blur-sm">
                  <h3 className="text-3xl font-bold text-base-content">Community</h3>
                </div>
              </div>
              <div className="absolute inset-0 rounded-2xl bg-base-100 p-6 [backface-visibility:hidden] [transform:rotateY(180deg)]">
                <p className="h-full overflow-y-auto text-sm leading-relaxed text-base-content/85 md:text-base">
                  Community is at the core of our mission. We recognize that the journey of
                  adjusting to a new country can feel overwhelming, and no one should face it
                  alone. That&apos;s why we work to build strong, supportive networks and bring
                  together Asian American immigrant communities in search for a home away from home.
                  Our goal is to create a space that makes it easier for individuals to connect,
                  share experiences, and build relationships that make transition to American life a
                  little easier. Together, we grow, learn, and thrive.
                </p>
              </div>
            </div>
          </article>

          <article className="group h-[26rem] [perspective:1200px]">
            <div className="relative h-full w-full rounded-2xl border border-secondary/30 shadow-xl transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0 overflow-hidden rounded-2xl [backface-visibility:hidden]">
                <img
                  src="/aboutus-compassion.jpg"
                  alt="Compassion"
                  className="h-full w-full object-cover opacity-60"
                />
                <div className="absolute inset-x-0 bottom-0 bg-base-100/75 p-4 backdrop-blur-sm">
                  <h3 className="text-3xl font-bold text-base-content">Compassion</h3>
                </div>
              </div>
              <div className="absolute inset-0 rounded-2xl bg-base-100 p-6 [backface-visibility:hidden] [transform:rotateY(180deg)]">
                <p className="h-full overflow-y-auto text-sm leading-relaxed text-base-content/85 md:text-base">
                  Compassion is the compass of PulseAsia, it guides every action we take. Moving to
                  a new country comes with challenges like loneliness, language barriers, financial
                  strain, and cultural adjustment. We approach each individual with empathy and
                  understanding. Our programs are designed to provide meaningful support, from
                  practical resources to 24/7 human assistants spanning through multiple languages.
                  We ensure that immigrants know they are seen, valued, and supported every step of
                  the way.
                </p>
              </div>
            </div>
          </article>

          <article className="group h-[26rem] [perspective:1200px]">
            <div className="relative h-full w-full rounded-2xl border border-accent/30 shadow-xl transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0 overflow-hidden rounded-2xl [backface-visibility:hidden]">
                <img
                  src="/aboutus-culture.jpg"
                  alt="Culture"
                  className="h-full w-full object-cover opacity-60"
                />
                <div className="absolute inset-x-0 bottom-0 bg-base-100/75 p-4 backdrop-blur-sm">
                  <h3 className="text-3xl font-bold text-base-content">Culture</h3>
                </div>
              </div>
              <div className="absolute inset-0 rounded-2xl bg-base-100 p-6 [backface-visibility:hidden] [transform:rotateY(180deg)]">
                <p className="h-full overflow-y-auto text-sm leading-relaxed text-base-content/85 md:text-base">
                  Culture is our grounding. We honor the language, histories, and traditions that
                  shape all identities of Asian immigrant communities. For many newcomers, holding
                  onto cultural roots provides comfort, pride, and a sense of continuity during a
                  time of major change. We are currently supporting Chinese, Japanese, Vietnamese,
                  Korean, Indian, and Filipino communities, but are constantly expanding!
                </p>
              </div>
            </div>
          </article>
        </section>
      </main>

      <br />

      {/* Footer */}
    </div>
  );
}
