export default function ContactPage() {
  return (
    <div className="container-page py-12">
      <p className="text-xs uppercase tracking-[0.3em] text-neutral-400">Contact</p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight text-neutral-900">Get in touch</h1>
      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-neutral-600">
        Questions about notes, orders, or gifting? Send a message and our team will reply shortly.
      </p>

      <div className="mt-10 max-w-xl card p-6">
        <div className="grid gap-4">
          <label className="grid gap-2">
            <span className="text-sm font-medium text-neutral-900">Name</span>
            <input className="input" placeholder="Your name" />
          </label>
          <label className="grid gap-2">
            <span className="text-sm font-medium text-neutral-900">Email</span>
            <input
              type="email"
              className="input"
              placeholder="you@example.com"
            />
          </label>
          <label className="grid gap-2">
            <span className="text-sm font-medium text-neutral-900">Message</span>
            <textarea
              className="textarea min-h-28"
              placeholder="How can we help?"
            />
          </label>
          <button
            type="button"
            className="btn btn-primary h-11"
          >
            Send message
          </button>
        </div>
      </div>
    </div>
  );
}

