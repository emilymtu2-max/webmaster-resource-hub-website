import Link from "next/link";
import type { ReactNode } from "react";

type FeatureHeroProps = {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  buttonLabel: string;
  buttonHref: string;
  visual?: ReactNode;
  imageClassName?: string;
};

export default function FeatureHero({
  imageSrc,
  imageAlt,
  title,
  description,
  buttonLabel,
  buttonHref,
  visual,
  imageClassName = "",
}: FeatureHeroProps) {
  return (
    <div className="hero min-h-[70vh] overflow-visible rounded-2xl bg-transparent">
      <div className="hero-content grid w-full overflow-visible gap-8 px-0 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center">
        <div className="w-full max-w-6xl space-y-4">
          <h2 className="text-6xl font-bold md:text-7xl xl:text-[6rem]">{title}</h2>
          <p className="text-xl leading-relaxed md:text-2xl">{description}</p>
          <Link href={buttonHref} className="btn btn-primary text-lg md:text-xl">
            {buttonLabel}
          </Link>
        </div>
        {visual ? (
          <div className="flex w-full justify-center overflow-visible lg:justify-end">
            {visual}
          </div>
        ) : imageSrc ? (
          <div className="flex w-full justify-center overflow-visible lg:justify-end">
            <img
              src={imageSrc}
              alt={imageAlt}
              className={`w-full object-contain ${imageClassName}`.trim()}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
}
