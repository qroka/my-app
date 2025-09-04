export default function Hero() {
  return (
    <section className="min-h-[70dvh] flex items-center justify-center text-center">
      <div className="mx-auto max-w-3xl px-6">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/10 ring-1 ring-white/20 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur">
          <span className="inline-block h-2 w-2 rounded-full bg-white/70" />
          <span>SOKRAL DESIGN</span>
        </div>
        <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white">
          Владислав Коломиец
          <br />
          "ROKA"
        </h1>
        <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4">
          <a
            href="https://t.me/qqroka"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto rounded-full bg-white text-black px-6 py-3 font-semibold shadow/50 shadow-black hover:opacity-90 transition text-center"
          >
            Написать в Telegram
          </a>
          <a
            href="#details"
            className="w-full sm:w-auto rounded-full ring-1 ring-white/20 text-white px-6 py-3 font-semibold hover:bg-white/10 transition text-center"
          >
            Узнать поробнее
          </a>
        </div>
      </div>
    </section>
  );
}


