export default function PortfolioSection({ onClose }: { onClose: () => void }) {
  return (
    <div className="w-full h-full p-8 overflow-y-auto bg-white/10 backdrop-blur-md text-inherit border-l border-white/20 text-right">
      <button
        onClick={onClose}
        className="mb-8 flex items-center gap-2 hover:opacity-70 transition-opacity ml-auto"
      >
        Back to Home
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
          />
        </svg>
      </button>
      <h2 className="text-4xl font-bold mb-6">Portfolio</h2>
      <div className="grid grid-cols-1 gap-6">
        <div className="p-4 border border-white/20 rounded-xl bg-white/5 text-left">
          <h3 className="text-xl font-bold">Project One</h3>
          <p className="opacity-70">A revolutionary web application built with React.</p>
        </div>
        <div className="p-4 border border-white/20 rounded-xl bg-white/5 text-left">
          <h3 className="text-xl font-bold">Project Two</h3>
          <p className="opacity-70">Interactive data visualization dashboard.</p>
        </div>
      </div>
    </div>
  );
}
