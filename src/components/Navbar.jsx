import { Film } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-gradient-to-b from-black/70 to-transparent">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center gap-3">
        <Film className="text-red-500" />
        <span className="text-white font-semibold tracking-wide">DA • Portfolio</span>
        <nav className="ml-auto hidden sm:flex items-center gap-6 text-sm">
          <a href="#featured" className="text-white/80 hover:text-white">Featured</a>
          <a href="#all" className="text-white/80 hover:text-white">All Projects</a>
          <a href="#blogs" className="text-white/80 hover:text-white">Blogs</a>
          <a href="#connect" className="text-white/80 hover:text-white">Connect</a>
        </nav>
      </div>
    </header>
  );
}
