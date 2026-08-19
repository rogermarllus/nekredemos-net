import Link from 'next/link';

const tools = [
  {
    href: '/tools/character-generator',
    label: 'Gerador de Personas',
  },
  {
    href: '/tools/threat-generator',
    label: 'Gerador de Ameaças',
  },
  {
    href: '/tools/anomaly-generator',
    label: 'Gerador de Anomalias',
  },
  {
    href: '/tools/incident-generator',
    label: 'Gerador de Incidentes',
  },
] as const;

export default function ToolsPage() {
  return (
    <section>
      <h1>Ferramentas</h1>

      <ul>
        {tools.map((tool) => (
          <li key={tool.href}>
            <Link href={tool.href}>{tool.label}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
