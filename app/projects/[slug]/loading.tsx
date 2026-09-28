// app/projects/[slug]/loading.tsx
import { ImageSkeleton } from "../skeleton";

export default function Loading() {
  return (
    <main className="px-16 py-8">
      <ImageSkeleton />
    </main>
  );
}
