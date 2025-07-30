import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="hidden md:flex md:flex-col w-50 bg-gray-100 p-6 shadow-inner">
      <nav className="flex flex-col space-y-4 text-lg">
        <Link to="/category">Category</Link>
        <Link to="/bluza">Bluza</Link>
        <Link to="/pantallona">Pantallona</Link>
        <Link to="/fustan">Fustan</Link>
        <Link to="/kostume">Kostume</Link>
        <Link to="/kepuce">Kepuce</Link>
      </nav>
    </div>
  );
}