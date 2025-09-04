import DarkVeil from '../components/DarkVeil';
import { Navbar, NavbarItem, NavbarSection } from '@/components/navbar';

export default function Home() {
  return (
    <div className="relative w-full h-[100dvh] overflow-hidden">
      {/* Полноэкранный фон до самых краев */}
      <div className="absolute inset-0 pointer-events-none">
        <DarkVeil />
      </div>

      {/* Слой затемнения по желанию */}
      {/* <div className="absolute inset-0 bg-black/20" /> */}

      {/* Контент в safe-area, чтобы его не перекрывал вырез/домашняя полоска */}
      <div className="relative z-10 px-safe pt-safe pb-safe">
        <Navbar>
          <NavbarSection>
            <NavbarItem href="/">Home</NavbarItem>
            <NavbarItem href="/">Docs</NavbarItem>
          </NavbarSection>
        </Navbar>
        {/* остальной контент */}
      </div>
    </div>
  );
}
