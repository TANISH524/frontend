import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 text-center">
      <h1 className="text-5xl font-light text-neutral-200">404</h1>
      <p className="text-sm text-neutral-600">This page doesn&apos;t exist.</p>
      <Link
        href="/"
        className="btn btn-primary"
      >
        Go Home
      </Link>
    </div>
  );
}
