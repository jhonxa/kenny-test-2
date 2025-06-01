import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="w-full bg-blue-900 text-white p-10 top-0 fixed left-0 shadow z-50">
        Dandenaya
      </div>
      <main className="flex px-10 py-30 flex flex-col gap-[32px] row-start-2 top-10 items-center sm:items-start">
        <div className="rounded-full text-6xl hover:text-shadow-gray-200 transition-colors font-[family-name:var(--font-geist-sans)]">
          Catatonia out now.
        </div>
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="/catatonia"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Listen now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="/quinn_clicker"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </main>
      <div className="bg-white min-h-screen text-indigo-900 font-[family-name:var(--font-geist-sans)] text-6xl p-9">
        Hello
      </div>
    </div>
  );
}
