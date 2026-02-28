import Link from "next/link";

type FeatureHeroProps = {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  buttonLabel: string;
  buttonHref: string;
};

export default function FeatureHero({
  imageSrc,
  imageAlt,
  title,
  description,
  buttonLabel,
  buttonHref,
}: FeatureHeroProps) {
  return (
    <div className="hero min-h-[70vh] rounded-2xl bg-base-200">
      <div className="hero-content flex-col gap-10 lg:flex-row">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full max-w-lg rounded-lg shadow-2xl"
        />
        <div className="max-w-2xl">
          <h2 className="text-5xl font-bold md:text-6xl">{title}</h2>
          <p className="py-8 text-xl leading-relaxed">{description}</p>
          <Link href={buttonHref} className="btn btn-primary text-lg">
            {buttonLabel}
          </Link>
        </div>
      </div>
    </div>
  );
}
