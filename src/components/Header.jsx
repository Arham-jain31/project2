function Header() {
  return (
    <nav className="flex flex-wrap items-center gap-6 border-b bg-white px-6 py-4 md:px-10">
      <a href="#about" className="text-lg hover:text-teal-600">About</a>
      <a href="#work" className="text-lg hover:text-teal-600">Work</a>
      <a href="#photos" className="text-lg hover:text-teal-600">Photos</a>
      <a href="#articles" className="text-lg hover:text-teal-600">Articles</a>
      <a href="#subscribe" className="text-lg hover:text-teal-600">Subscribe</a>
    </nav>
  );
}

export default Header;