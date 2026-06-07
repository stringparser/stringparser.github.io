import { Navbar } from "@/components/Navbar";
import { NavLinks } from "@/components/NavLinks";

type Background =
  | { type: "video"; src: string }
  | { type: "image"; src: string };

type PageShellProps = {
  background: Background;
  underlayOpacity?: number;
  title?: React.ReactNode;
  titleClassName?: string;
  subtitle?: string;
  showNav?: boolean;
  actions?: React.ReactNode;
  children?: React.ReactNode;
};

export function PageShell({
  background,
  underlayOpacity = 0.025,
  title,
  titleClassName = "text-4xl font-semibold tracking-[-0.04em] md:text-6xl md:leading-[1.05]",
  subtitle,
  showNav = true,
  actions,
  children,
}: PageShellProps) {
  return (
    <div className="relative min-h-screen text-white">
      <div className="fixed inset-0 -z-10">
        {background.type === "video" ? (
          <video
            className="h-full w-full object-cover"
            src={background.src}
            autoPlay
            loop
            muted
            playsInline
          />
        ) : (
          <div
            className="h-full w-full bg-cover bg-center"
            style={{ backgroundImage: `url(${background.src})` }}
          />
        )}
        <div
          className="absolute inset-0 bg-black"
          style={{ opacity: underlayOpacity }}
        />
      </div>

      <div className="mx-auto flex min-h-screen max-w-3xl flex-col px-6 py-8 md:px-10">
        <Navbar />

        <div className="flex flex-1 flex-col items-center pb-16 pt-4 text-center">
          <div
            className={`flex w-full flex-col items-center ${
              children ? "" : "flex-1 justify-center"
            }`}
          >
            {title ? (
              <h1 className={titleClassName}>{title}</h1>
            ) : null}

            {subtitle ? (
              <p className="mt-5 max-w-xl text-base leading-7 text-white/65 md:text-lg">
                {subtitle}
              </p>
            ) : null}

            {showNav ? (
              <div className="mt-8">
                <NavLinks />
              </div>
            ) : null}

            {actions ? (
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                {actions}
              </div>
            ) : null}
          </div>

          {children ? (
            <div
              className={`content-body max-w-xl text-left text-[0.9375rem] leading-7 text-white/70 [&_p+p]:mt-5 ${
                title || subtitle || showNav || actions ? "mt-10" : "w-full"
              }`}
            >
              {children}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
