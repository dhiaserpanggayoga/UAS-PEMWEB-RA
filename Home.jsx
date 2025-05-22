import CategoryList from "./components/CategoryList"; // import komponen kategori

function Home({ searchTerm, onSearch, onAddClick, onLogout }) {
  // Hilangkan filter resep dan list resep di sini, karena ingin tampil kategori saja

  return (
    <>
      <Header
        searchTerm={searchTerm}
        onSearch={onSearch}
        onAddClick={onAddClick}
        onLogout={onLogout}
      />
      <ChefImage />
      <CategoryList />  {/* Tampilkan kategori, bukan resep langsung */}
      <Footer />
    </>
  );
}
