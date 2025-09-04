import DarkVeil from '../components/DarkVeil';
import { Navbar, NavbarItem, NavbarSection } from '@/components/navbar';

export default function Home() {
  return (
    <div className="w-full min-h-dvh h-lvh relative" style={{ paddingTop: 'env(safe-area-inset-top)', paddingBottom: 'env(safe-area-inset-bottom)' }}>
    <DarkVeil
    />
    <Navbar>
      <NavbarSection>
        <NavbarItem href="/">Home</NavbarItem>
        <NavbarItem href="/">Docs</NavbarItem>
      </NavbarSection>
    </Navbar>
  </div>
  
  );
}
