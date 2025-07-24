import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full fixed top-0 left-0 z-50 text-white">
      <div className="max-w-full mx-auto px-10 py-4 flex flex-col items-start  md:flex-row md:justify-between">
        <h1 className="text-xl font-bold"><Link to="/">pramod.rawat.</Link></h1>
        <ul className="flex space-x-6 text-sm md:text-base font-medium">
          <li><Link to="/about" className="hover:text-indigo-400">About</Link></li>
          <li><Link to="/projects" className="hover:text-indigo-400">Projects</Link></li>
          <li><Link to="/articles" className="hover:text-indigo-400">Articles</Link></li>
          <li><Link to="/contact" className="hover:text-indigo-400">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
