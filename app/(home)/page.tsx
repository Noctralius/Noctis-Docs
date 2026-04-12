import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center text-center flex-1 px-4 py-16">
      <div className="max-w-2xl">
        <h1 className="text-4xl font-bold mb-4 tracking-tight">Noctis</h1>
        <p className="text-fd-muted-foreground text-lg mb-8">
          Minecraft-лаунчер с мультибэкендом, системой тем и встроенной защитой
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            href="/docs/getting-started"
            className="px-6 py-3 rounded-lg bg-fd-primary text-fd-primary-foreground font-medium hover:opacity-90 transition-opacity"
          >
            Начать
          </Link>
          <Link
            href="/docs/api"
            className="px-6 py-3 rounded-lg border border-fd-border font-medium hover:bg-fd-accent transition-colors"
          >
            API Reference
          </Link>
        </div>
      </div>
    </div>
  );
}
