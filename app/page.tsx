import DarkVeil from '../components/DarkVeil';
import { Navbar, NavbarItem, NavbarSection } from '@/components/navbar';
import Hero from '@/components/Hero';

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
            <NavbarItem href="/google-translate.js">Docs</NavbarItem>
            <NavbarItem href="https://t.me/qqroka">Contacts</NavbarItem>
          </NavbarSection>
        </Navbar>

        <Hero />
      </div>

      <section id="details" className="sr-only" aria-hidden="true" />
    </div>
  );
}
