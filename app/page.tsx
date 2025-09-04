import { Navbar, NavbarItem, NavbarSection } from '@/components/navbar';

export default function Home() {
  return (
    <main
      className="
        full-viewport safe-pads
        relative overflow-hidden
        bg-[url('/bg.jpg')] bg-cover bg-center
      "
    >
      {/* Можно: bg-[length:120%] или bg-[size:cover] под задачу */}
      {/* Контент поверх фона */}
      <div className="absolute inset-0 bg-black/30" />
      <section className="relative z-10 flex h-full items-center justify-center">
        {/* ... */}
      </section>
      <Navbar>
      <NavbarSection>
        <NavbarItem href="/">Home</NavbarItem>
        <NavbarItem href="/">Docs</NavbarItem>
      </NavbarSection>
    </Navbar>
    </main>
  );
}
