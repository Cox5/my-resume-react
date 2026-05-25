export default function Header() {
  return (
    <div className="flex flex-col gap-4 items-center justify-center">
      <img
        src="/milan.webp"
        alt="Milan Masnikosa"
        className="size-48 rounded-full shadow-md hover:shadow-2xl transition-shadow duration-300 ease-in-out"
      />
      <h1 className="font-bold text-4xl transition-colors duration-500">Milan Masnikosa</h1>
      <h2 className="text-base">
        Full Stack Developer @{' '}
        <a className="hover:underline" href="https://nqode.io" target="_blank">
          nqode.io
        </a>
      </h2>
    </div>
  );
}
