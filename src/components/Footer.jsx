export default function Footer() {
  return (
    <footer className="bg-ink text-bone py-[clamp(3rem,6vw,5rem)] px-[clamp(1.25rem,3vw,3rem)] pb-6 relative overflow-hidden">
      {/* Top */}
      <div className="max-w-[1320px] mx-auto grid grid-cols-[1fr_2fr] gap-16 pb-12 max-[800px]:grid-cols-1 max-[800px]:gap-10">
        {/* Brand */}
        <div className="max-w-[320px]">
          <a href="#" className="font-display text-[1.6rem] font-bold tracking-[-0.02em] text-bone inline-block mb-4">
            mpn<span className="text-accent">tech</span>.
          </a>
          <p className="text-bone/55 text-[0.95rem] leading-relaxed">
            Professional Cloud &amp; AI Solutions — crafted with intent.
          </p>
        </div>

        {/* Columns */}
        <div className="grid grid-cols-3 gap-8 max-[800px]:grid-cols-2 max-[480px]:grid-cols-1">
          <div>
            <h4 className="font-mono text-[0.78rem] uppercase tracking-[0.1em] text-accent font-medium mb-4">
              Services
            </h4>
            <a href="#services" className="block py-1.5 text-bone/75 text-[0.95rem] transition-all hover:text-accent hover:pl-1.5">
              AWS Solutions
            </a>
            <a href="#services" className="block py-1.5 text-bone/75 text-[0.95rem] transition-all hover:text-accent hover:pl-1.5">
              Cloud Infrastructure
            </a>
            <a href="#services" className="block py-1.5 text-bone/75 text-[0.95rem] transition-all hover:text-accent hover:pl-1.5">
              AI/ML Implementation
            </a>
          </div>
          <div>
            <h4 className="font-mono text-[0.78rem] uppercase tracking-[0.1em] text-accent font-medium mb-4">
              Connect
            </h4>
            <a href="https://www.youtube.com/@mpntechit" target="_blank" rel="noopener" className="block py-1.5 text-bone/75 text-[0.95rem] transition-all hover:text-accent hover:pl-1.5">
              YouTube Channel
            </a>
            <a href="https://linkedin.com/in/mohammad-pakdast" target="_blank" rel="noopener" className="block py-1.5 text-bone/75 text-[0.95rem] transition-all hover:text-accent hover:pl-1.5">
              LinkedIn
            </a>
            <a href="https://github.com/mr-mpn" target="_blank" rel="noopener" className="block py-1.5 text-bone/75 text-[0.95rem] transition-all hover:text-accent hover:pl-1.5">
              GitHub
            </a>
          </div>
          <div>
            <h4 className="font-mono text-[0.78rem] uppercase tracking-[0.1em] text-accent font-medium mb-4">
              Direct
            </h4>
            <a href="mailto:info@mpntech.it" className="block py-1.5 text-bone/75 text-[0.95rem] transition-all hover:text-accent hover:pl-1.5">
              info@mpntech.it
            </a>
          </div>
        </div>
      </div>

      {/* Giant wordmark */}
      <div className="footer-wordmark py-4" aria-hidden="true">
        mpntech
      </div>

      {/* Bottom */}
      <div className="max-w-[1320px] mx-auto pt-6 border-t border-bone/10 flex justify-between items-center flex-wrap gap-4 max-[800px]:flex-col max-[800px]:text-center">
        <p className="text-bone/50 text-[0.85rem] font-mono">
          &copy; 2025 Mohammad Pakdast · mpntech. All rights reserved.
        </p>
        <div className="flex gap-2">
          <a
            href="https://github.com/mr-mpn"
            target="_blank"
            rel="noopener"
            aria-label="GitHub"
            className="w-10 h-10 inline-flex items-center justify-center border border-bone/15 rounded-full text-bone/85 text-base transition-all hover:bg-accent hover:text-white hover:border-accent hover:-translate-y-0.5"
          >
            <i className="fab fa-github" />
          </a>
          <a
            href="https://linkedin.com/in/mohammad-pakdast"
            target="_blank"
            rel="noopener"
            aria-label="LinkedIn"
            className="w-10 h-10 inline-flex items-center justify-center border border-bone/15 rounded-full text-bone/85 text-base transition-all hover:bg-accent hover:text-white hover:border-accent hover:-translate-y-0.5"
          >
            <i className="fab fa-linkedin" />
          </a>
          <a
            href="https://www.youtube.com/@mpntechit"
            target="_blank"
            rel="noopener"
            aria-label="YouTube"
            className="w-10 h-10 inline-flex items-center justify-center border border-bone/15 rounded-full text-bone/85 text-base transition-all hover:bg-accent hover:text-white hover:border-accent hover:-translate-y-0.5"
          >
            <i className="fab fa-youtube" />
          </a>
        </div>
      </div>
    </footer>
  )
}
