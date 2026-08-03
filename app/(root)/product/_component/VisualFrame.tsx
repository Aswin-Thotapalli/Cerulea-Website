export function VisualFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-full w-full flex-1 items-center justify-center rounded-2xl border border-border bg-secondary shadow-sm">
      {children}
    </div>
  )
}
