'use client';
import Link from 'next/link';
import { PropsWithChildren } from 'react';

export function Navbar({ children }: PropsWithChildren) {
  return (
    <header className="absolute inset-x-0 top-0 z-10">
      <div className="mx-auto max-w-7xl px-4 py-3">
        <nav className="flex items-center justify-between">
          {children}
        </nav>
      </div>
    </header>
  );
}

export function NavbarSection({ children }: PropsWithChildren) {
  return (
    <div className="w-full flex items-center">
      <div className="w-full  flex items-center gap-6 rounded-full border border-white/30  bg-white/5 backdrop-blur-md px-6 py-4">
        {children}
      </div>
    </div>
  );
}

interface NavbarItemProps {
  href: string;
}

export function NavbarItem({ href, children }: PropsWithChildren<NavbarItemProps>) {
  return (
    <Link href={href} className="text-l font-bold hover:opacity-80 transition-opacity">
      {children}
    </Link>
  );
}


