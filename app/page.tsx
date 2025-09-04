import DarkVeil from '../components/DarkVeil';
import { Navbar, NavbarItem, NavbarSection } from '@/components/navbar';

export default function Home() {
  return (
    <div style={{ width: '100%', height: '100dvh', position: 'relative'}}>
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
