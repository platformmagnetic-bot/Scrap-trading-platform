function Landing() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-20">
      <h1 className="text-4xl font-bold mb-4">Trade Scrap. Earn More. Fuel the Circular Economy.</h1>
      <p className="text-lg text-gray-600 mb-6">
        Welcome to the marketplace where waste becomes value.
      </p>
      <a href="/marketplace" className="px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800">
        Explore Marketplace
      </a>
    </section>
  );
}
export default Landing;
