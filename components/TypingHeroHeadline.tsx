"use client";

import TypingText from "@/components/ui/typing-text";

export default function TypingHeroHeadline() {
  return (
    <TypingText
      as="h1"
      text={["Find Support", "Explore Culture", "Build Community"]}
      className="hero-typing-heading mb-10 text-7xl font-bold uppercase md:text-8xl xl:text-[7rem]"
      typingSpeed={95}
      deletingSpeed={45}
      pauseDuration={1400}
      initialDelay={250}
      cursorCharacter="|"
      cursorClassName="hero-caret"
    />
  );
}
