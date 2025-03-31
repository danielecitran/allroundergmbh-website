export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold">
            Allrounder GmbH
          </div>
          <ul className="flex space-x-6">
            <li><a href="/" className="hover:text-gray-600">Home</a></li>
            <li><a href="/kontakt" className="hover:text-gray-600">Kontakt</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
} 