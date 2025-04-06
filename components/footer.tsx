export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Umbau-Allrounder GmbH</h3>
            <p>Lorem Ipsum</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Kontakt</h3>
            <p>Email: </p>
            <p>Tel: +41 </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Adresse</h3>
            <p>Adresse</p>
            <p>Postleitzahl</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; {new Date().getFullYear()} Umbau-Allrounder GmbH</p>
        </div>
      </div>
    </footer>
  );
} 