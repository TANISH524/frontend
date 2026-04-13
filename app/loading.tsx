import { Spinner } from "@/components/ui/Spinner";

export default function Loading() {
  return (
    <div className="container-page flex min-h-[60vh] items-center justify-center py-16">
      <div className="card p-6">
        <Spinner label="Loading…" />
      </div>
    </div>
  );
}

