 function ContactSection() {
  return (
    <section className="w-full bg-gray-100 section-pad">
      <div className="container-main grid md:grid-cols-2 gap-10 lg:gap-12">

        {/* LEFT SIDE - CONTACT INFO */}
        <div className="bg-linear-to-b  from-blue-600 to-blue-500 text-white rounded-2xl p-6 space-y-8 shadow-lg">
            <h1 className="text-4xl font-bold ">Get in Touch</h1>
            <p className="text-[#ffffffCC]">We ll d love to hear from you. Send us a <br/> message 
                and we ll respond as soon as possible.</p>
          {/* Location */}
          <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
            <h3 className="text-xl font-semibold mb-2">Location</h3>
            <p className="text-sm leading-relaxed">
              Between Main Gate 4 & 5, Vishnupura Road,
              Lumbini Cultural Municipality-10, Nepal
            </p>
          </div>

          {/* Phone */}
          <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
            <h3 className="text-xl font-semibold mb-2">Phone</h3>
            <p className="text-sm">977071580210</p>
            <p className="text-sm">9779857055584</p>
          </div>

          {/* Email */}
          <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <p className="text-sm">info@hotelpeaceland.com</p>
          </div>

          {/* Business Hours */}
          <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
            <h3 className="text-xl font-semibold mb-2">Business Hours</h3>
            <p className="text-sm">Check-in: 2:00 PM</p>
            <p className="text-sm">Check-out: 11:00 AM</p>
          </div>
        </div>

        {/* RIGHT SIDE - CONTACT FORM */}
        <div className=" bg-white rounded-2xl p-10 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Send Message
          </h2>
          <p className="text-gray-500 mb-8">
            Fill out the form below and we ll get back to you within 24 hours.
          </p>

          <form className="space-y-6">

            <input
              type="text"
              placeholder="Full Name *"
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="email"
                placeholder="Email Address *"
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="text"
                placeholder="Phone Number"
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <select
              className="w-full border text-gray-500 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option >Subject *</option>
              <option>Room Booking</option>
              <option>Restaurant Inquiry</option>
              <option>General Question</option>
            </select>

            <textarea
              
              placeholder="Your Message *"
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
            >
              Send Message
            </button>

          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
