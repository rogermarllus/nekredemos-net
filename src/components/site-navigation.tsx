import Link from 'next/link';

const navigationItems = [
  { href: '/', label: 'Início' },
  { href: '/sheet', label: 'Ficha' },
  { href: '/tools', label: 'Ferramentas' },
  { href: '/compendium', label: 'Compêndio' },
  { href: '/library', label: 'Biblioteca' },
  { href: '/faq', label: 'FAQ' },
  { href: '/about', label: 'Sobre' },
  { href: '/community', label: 'Comunidade' },
] as const;

export function SiteNavigation() {
  return (
    <nav aria-label="Navegação Principal">
      <ul>
        {navigationItems.map((item) => (
          <li key={item.href}>
            <Link href={item.href}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
