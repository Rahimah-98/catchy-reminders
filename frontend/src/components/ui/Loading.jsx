import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex items-center justify-center gap-2 rounded-2xl border border-dashed px-4 py-4 text-text-muted font-semibold text-sm">
      <Loader2 size={16} className="animate-spin" />
      Generating your unforgettable reminder...
    </div>
  );
}
