const BAR = "animate-pulse rounded bg-neutral-200";

export function ProjectCardSkeleton() {
  return (
    <div className="mt-8 space-y-4" aria-hidden="true">
      <div className={`h-50 w-90 ${BAR}`} />
      {[0, 1].map((i) => (
        <div key={i} className={`h-6 w-90 ${BAR}`} />
      ))}
    </div>
  );
}

export function ImageSkeleton() {
  return (
    <div className="mt-8 space-y-4" aria-hidden="true">
      <div className={`h-6 w-90 ${BAR}`} />
      <div className={`h-6 w-20 ${BAR}`} />
      <div className={`h-50 w-90 ${BAR}`} />
      <div className={`h-6 w-90 ${BAR}`} />
    </div>
  );
}
