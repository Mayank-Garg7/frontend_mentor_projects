interface RulesModalProps {
  onClose: () => void;
}

export default function RulesModal({ onClose }: RulesModalProps) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby="rules-title"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
      />

      {/* Modal — full-screen on mobile, card on desktop */}
      <div className="relative z-10 bg-white w-full h-full lg:h-auto lg:w-auto lg:rounded-2xl flex flex-col items-center justify-center lg:items-start lg:justify-start lg:px-10 lg:py-8 px-6 py-8">

        {/* Mobile header */}
        <h2
          id="rules-title"
          className="text-[hsl(229,25%,31%)] text-3xl lg:text-2xl font-bold uppercase tracking-widest mb-8 lg:mb-6 self-start lg:self-auto"
        >
          Rules
        </h2>

        {/* Close button desktop — top right */}
        <button
          onClick={onClose}
          className="hidden lg:block absolute top-6 right-6 hover:opacity-70 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 rounded"
          aria-label="Close rules"
        >
          <img src="/icon-close.svg" alt="Close" className="w-5 h-5" />
        </button>

        {/* Rules image */}
        <img
          src="/image-rules.svg"
          alt="Game rules diagram showing what beats what"
          className="w-72 lg:w-80"
        />

        {/* Close button mobile — bottom center */}
        <button
          onClick={onClose}
          className="lg:hidden mt-12 hover:opacity-70 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 rounded p-1"
          aria-label="Close rules"
        >
          <img src="/icon-close.svg" alt="Close" className="w-7 h-7" />
        </button>
      </div>
    </div>
  );
}
