import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-dvh max-w-lg flex-col justify-center px-6 py-24 text-center">
      <h1 className="font-display text-4xl text-parchment">Page not found</h1>
      <p className="mt-4 text-parchment-dim">That route does not exist.</p>
      <Link href="/" className="mt-8 text-sm font-semibold text-amber underline-offset-4 hover:underline">
        Back home
      </Link>
    </main>
  );
}
