export function BlinkingCursor() {
  return (
    <span
      aria-hidden="true"
      className="ml-1.5 inline-block h-[0.85em] w-[0.18em] translate-y-[0.08em] animate-blink bg-white/75"
    />
  );
}
