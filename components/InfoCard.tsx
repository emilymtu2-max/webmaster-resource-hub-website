import { Card, CardContent } from "@/components/ui/card";

type InfoCardProps = {
  title: string;
  description: string;
};

export default function InfoCard({ title, description }: InfoCardProps) {
  return (
    <Card className="h-full">
      <CardContent className="flex min-h-[26rem] h-full flex-col items-center justify-center px-10 py-14 text-center md:min-h-[34rem]">
        <h3 className="text-4xl font-semibold md:text-5xl">{title}</h3>
        <p className="mt-6 text-xl leading-relaxed text-base-content/70 md:text-2xl">
          {description}
        </p>
      </CardContent>
    </Card>
  );
}
