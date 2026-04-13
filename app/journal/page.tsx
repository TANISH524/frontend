const articles = [
  { title: "How to find a signature scent", tag: "Guide" },
  { title: "Layering 101: citrus + woods", tag: "Layering" },
  { title: "EDP vs EDT: what changes?", tag: "Basics" },
];

export default function JournalPage() {
  return (
    <div className="container-page py-12">
      <p className="text-xs uppercase tracking-[0.3em] text-neutral-400">Journal</p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight text-neutral-900">Articles</h1>
      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-neutral-600">
        Notes, guides, and behind-the-scenes stories on fragrance and craft.
      </p>

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
        {articles.map((a) => (
          <div
            key={a.title}
            className="card p-6"
          >
            <p className="text-xs uppercase tracking-[0.25em] text-neutral-400">{a.tag}</p>
            <p className="mt-2 text-sm font-medium text-neutral-900">{a.title}</p>
            <p className="mt-3 text-sm text-neutral-500">Coming soon.</p>
          </div>
        ))}
      </div>
    </div>
  );
}

