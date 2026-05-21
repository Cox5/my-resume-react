export default function ResumeSection({ onClose }: { onClose: () => void }) {
  return (
    <div className="w-full h-full p-8 overflow-y-auto bg-white/10 backdrop-blur-md text-inherit border-r border-white/20">
      <button
        onClick={onClose}
        className="mb-8 flex items-center gap-2 hover:opacity-70 transition-opacity"
      >
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
            d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
          />
        </svg>
        Back to Home
      </button>
      <h2 className="text-4xl font-bold mb-6">Resume</h2>
      <div className="space-y-6">
        <section>
          <h3 className="text-2xl font-semibold border-b border-white/20 pb-2 mb-4">Experience</h3>
          <p>Senior Software Engineer @ Tech Solutions (2022 - Present)</p>
          <p className="text-sm opacity-70 mt-1">
            Leading development of modern web applications using React and Node.js.
          </p>
        </section>
        <section>
          <h3 className="text-2xl font-semibold border-b border-white/20 pb-2 mb-4">Education</h3>
          <p>Bachelor of Computer Science @ University of Technology</p>
        </section>
      </div>
    </div>
  );
}
