export default function ScrollProgress({ progress }) {
  return (
    <div
      className="fixed top-0 left-0 h-0.5 w-full bg-accent z-[200] origin-left transition-transform duration-100 linear"
      style={{ transform: `scaleX(${progress})` }}
    />
  )
}
