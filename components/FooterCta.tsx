import Link from "next/link";

export default function FooterCta() {
  return (
    <section
      className="hero min-h-[42vh] w-full"
      style={{
        backgroundImage: "url(/heroImage.png)",
      }}
    >
      <div className="hero-overlay bg-red-950/60"></div>
      <div className="hero-content w-full max-w-none px-4 py-14 text-neutral-content md:px-8 lg:px-10">
        <div className="w-full max-w-[92rem]">
          <h2 className="max-w-4xl text-5xl font-bold leading-tight md:text-6xl">
            Ready to Look For Resources?
          </h2>
          <p className="mt-6 max-w-3xl text-xl leading-relaxed text-white/85 md:text-2xl">
            Explore trusted local services, cultural organizations, and support
            networks designed to help Asian communities across the Pacific Northwest
            find what they need faster.
          </p>
          <Link
            href="/resources"
            className="btn mt-8 border-red-900 bg-red-900 text-white hover:border-red-800 hover:bg-red-800"
          >
            Go To Resource Hub
          </Link>
        </div>
      </div>
    </section>
  );
}
