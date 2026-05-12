export default function BackToTop({ visible }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className={`fixed right-[clamp(1rem,3vw,2rem)] bottom-[clamp(1rem,3vw,2rem)] w-12 h-12 rounded-full bg-ink text-bone border-none cursor-pointer inline-flex items-center justify-center text-base z-50 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.4)] transition-all hover:bg-accent
        ${visible ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto' : 'opacity-0 translate-y-5 scale-90 pointer-events-none'}`}
    >
      <i className="fas fa-arrow-up" />
    </button>
  )
}
