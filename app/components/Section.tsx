export default function Section({
  id,
  title,
  subtitle,
  children,
  fullscreen = false,
}: {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  fullscreen?: boolean;
}) {
  if (fullscreen) {
    return (
      <section 
        id={id}
        className="min-h-screen w-full flex flex-col justify-center items-center px-4 sm:px-6 md:px-12 "
      >
        <div className="w-full max-w-6xl mx-auto text-center">
          <p className="text-sm sm:text-base font-semibold text-zinc-500">{subtitle}</p>
          <h1 className="mt-2 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight">
            {title}
          </h1>
          <div className="mt-8">{children}</div>
        </div>
      </section>
    );
  }

  return (
    <section id={id} className="min-h-screen w-full flex flex-col justify-center scroll-mt-24 px-4 sm:px-6 md:px-12 py-16 border border-zinc-200">
      <div className="w-full max-w-6xl mx-auto">
        <p className="text-sm sm:text-base font-semibold text-zinc-500">{subtitle}</p>
        <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight">
          {title}
        </h2>
        <div className="mt-6 sm:mt-8">{children}</div>
      </div>
    </section>
  );
}

