import DarkVeil from '../components/DarkVeil';
import { Navbar, NavbarItem, NavbarSection } from '@/components/navbar';

export default function Home() {
  return (
    <div className="relative w-full h-[100dvh]">
      {/* Полноэкранный фон до самых краев */}
      <div className="absolute inset-0 pointer-events-none">
        <DarkVeil />
      </div>

      {/* Слой затемнения по желанию */}
      {/* <div className="absolute inset-0 bg-black/20" /> */}

      {/* Контент в safe-area, чтобы его не перекрывал вырез/домашняя полоска */}
      <div
        className="relative z-10"
        style={{
          paddingTop: 'env(safe-area-inset-top, 0px)',
          paddingRight: 'env(safe-area-inset-right, 0px)',
          paddingBottom: 'env(safe-area-inset-bottom, 0px)',
          paddingLeft: 'env(safe-area-inset-left, 0px)'
        }}
      >
        <Navbar>
          <NavbarSection>
            <NavbarItem href="/">Home</NavbarItem>
            <NavbarItem href="/">Docs</NavbarItem>
          </NavbarSection>
        </Navbar>

        {/* Hero */}
        <section className="min-h-[70dvh] flex items-center justify-center text-center">
          <div className="mx-auto max-w-3xl px-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 ring-1 ring-white/20 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur">
              <span className="inline-block h-2 w-2 rounded-full bg-white/70" />
              <span>New Background</span>
            </div>
            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white">
              Become emboldened by
              <br />
              the flame of ambition
            </h1>
            <div className="mt-8 flex items-center justify-center gap-4">
              <button className="rounded-full bg-white text-black px-6 py-3 font-semibold shadow/50 shadow-black hover:opacity-90 transition">
                Get Started
              </button>
              <button className="rounded-full ring-1 ring-white/20 text-white px-6 py-3 font-semibold hover:bg-white/10 transition">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Signature */}
        <div className="pointer-events-none absolute bottom-4 right-4 z-10 text-white/90 text-sm md:text-base">
          Владислав Коломиецц
        </div>
      </div>

    </div>
  );
}
