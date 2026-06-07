import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Hey, hi there! Come in",
};

export default function AboutPage() {
  return (
    <PageShell
      background={{ type: "image", src: "/static/img/rotating-sky.jpg" }}
      underlayOpacity={0.35}
      showNav={false}
    >
      <p>
        For a more complete experience/skills you can always{" "}
        <a href={site.cvPdf} target="_blank" rel="noopener noreferrer">
          download my cv
        </a>
        .
      </p>
      <p>
        I have years of experience coding front-end web and native apps.
        Currently, I&apos;m focused building backend applications and learning
        more about infrastructure. I studied Physics, so it always has been a
        passion for me to understand complex systems and find solutions that
        work.
      </p>
      <p>
        Currently, I&apos;m focused building backend applications and learning
        more about infrastructure.
      </p>
      <p>
        I used to build{" "}
        <a href="https://reactnative.dev/">ReactNative</a> applications and
        front-end solutions with <a href="https://reactjs.org/">React.js</a>,{" "}
        <a href="https://redux.js.org/">redux</a> or{" "}
        <a href="https://react-query.tanstack.com/">useQuery</a> and TypeScript.
        At the moment I&apos;m learning Rust when I have some spare time. Is
        very nice.
      </p>
      <p>
        My background is in Physics, I&apos;ve studied it in{" "}
        <a href="https://www.ugr.es">Granada</a> (Spain) and in{" "}
        <a href="https://www.lmu.de">Munich</a>{" "}(Germany). I like to solve
        problems, the simpler the solution the better. I&apos;m from a{" "}
        <a href="https://goo.gl/maps/pNam2Bxtsyw">tiny town in Jaén</a>{" "}
        (Spain). I like talking with people. I&apos;ve had 3 bands in Granada
        for which I made some songs and sing. The first contact I had with web
        development was in winter 2012. Started with{" "}
        <a href="https://nodejs.org">nodejs</a>, which led to{" "}
        <a href="https://github.com/strongloop/express">express</a>,{" "}
        <a href="https://github.com/jadejs/jade">jade</a> and{" "}
        <a href="https://mongodb.org/">mongodb</a>, moved to{" "}
        <a href="https://github.com/meteor/meteor">meteor</a> after which I
        wanted to really learn something from the ground up so I looked around
        and found <a href="https://facebook.github.io/react">React</a>,{" "}
        <a href="https://github.com/faye/faye">faye</a> and{" "}
        <a href="https://github.com/gulpjs/gulp">gulp</a>. I prefer doing
        things and then talking about them instead of the other way around. I
        like kindness and honesty. I believe in patience and hard work.
      </p>
    </PageShell>
  );
}
