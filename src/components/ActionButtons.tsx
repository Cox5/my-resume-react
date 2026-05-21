export default function ActionButtons({
  onResumeClick,
  onPortfolioClick,
}: {
  onResumeClick: () => void;
  onPortfolioClick: () => void;
}) {
  return (
    <div className="flex flex-row items-center justify-center gap-4">
      <div className="relative inline-flex  group">
        <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
        <button
          onClick={onResumeClick}
          className="relative inline-flex items-center justify-center px-8 py-4 text-lg  text-black dark:text-white transition-all duration-500 bg-white dark:bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 cursor-pointer"
          role="button"
        >
          My Resume
        </button>
      </div>
      <div className="relative inline-flex  group">
        <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
        <button
          onClick={onPortfolioClick}
          className="relative inline-flex items-center justify-center px-8 py-4 text-lg text-black dark:text-white transition-all duration-500 bg-white dark:bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 cursor-pointer"
          role="button"
        >
          Portfolio
        </button>
      </div>
    </div>
  );
}
