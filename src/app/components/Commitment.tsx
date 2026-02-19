

function Commitment() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-0 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Commitment</h2>
        <p className="text-gray-700 max-w-2xl mx-auto mb-12">
          At Peaceland Hotel, we are committed to providing exceptional service, 
          comfort, and memorable experiences for every guest. Our team ensures 
          every detail of your stay is taken care of with professionalism and care.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Luxury Rooms</h3>
            <p className="text-gray-600">Comfortable and beautifully designed rooms for a relaxing stay.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Exceptional Service</h3>
            <p className="text-gray-600">Friendly staff dedicated to making your experience seamless.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Memorable Experiences</h3>
            <p className="text-gray-600">Activities, dining, and amenities designed for enjoyment and comfort.</p>
          </div>
        </div>
      </div>
    </section>
  );
}


export default Commitment;