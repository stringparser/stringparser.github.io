import { BlinkingCursor } from "@/components/BlinkingCursor";
import { PageShell } from "@/components/PageShell";

export default function HomePage() {
  return (
    <PageShell
      background={{
        type: "video",
        src: "/static/video/typing-on-computer.mp4",
      }}
      underlayOpacity={0.35}
      titleClassName="text-3xl font-semibold tracking-[-0.03em] md:text-4xl md:leading-[1.15] lg:text-[2.75rem]"
      title={
        <>
          <span className="block">
            I&apos;m <span className="highlight">Javier</span>
          </span>
          <span className="mt-3 block">
            Freelance Software Engineer
            <BlinkingCursor />
          </span>
        </>
      }
    />
  );
}
