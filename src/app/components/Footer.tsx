import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[rgb(31,79,156)] text-white pt-16">
      <div className="container-main grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* About Us & Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-4 relative after:block after:w-10 after:h-1 after:bg-white after:mt-2">
            About us
          </h3>
          <p className="text-sm leading-relaxed mb-6">
            Located in Lumbini, 1.3 km from Maya Devi Temple, Hotel Peaceland Lumbini
            provides accommodation with a garden, free private parking, a shared
            lounge and a terrace.
          </p>

          <h3 className="text-xl font-semibold mb-4 relative after:block after:w-10 after:h-1 after:bg-white after:mt-2">
            Contact Us
          </h3>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-2">📍 Between Main Gate 4 & 5, Vishnupura Road, Lumbini</li>
            <li className="flex gap-2">📞 977071580210 / 977985705584</li>
            <li className="flex gap-2">✉️ info@hotelpeaceland.com</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 relative after:block after:w-10 after:h-1 after:bg-white after:mt-2">
            Quick Links
          </h3>
          <ul className="space-y-3 text-sm">
            {[
              "Home", "About", "Amenities", "Rooms", 
              "Near By Attraction", "Blogs", "Gallery", 
              "Contact", "Book Now",
            ].map((item) => (
              <li key={item}>
                <a href="#" className="hover:underline">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Follow Us - Fixed Iframe */}
        <div>
          <h3 className="text-xl font-semibold mb-4 relative after:block after:w-10 after:h-1 after:bg-white after:mt-2">
            Follow us
          </h3>
          <div className="bg-white rounded-lg p-1 overflow-hidden h-[300px] ">
            <iframe 
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FHotel.Peaceland%2F&tabs=timeline&width=340&height=300&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" 
              width="100%" 
              height="100%" 
              style={{ border: "none", overflow: "hidden" }}
              scrolling="no" 
              frameBorder="0" 
              allowFullScreen={true} 
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            />
          </div>
        </div>

        {/* Locate Us */}
        <div >
          <h3 className="text-xl font-semibold mb-4 relative after:block after:w-10 after:h-1 after:bg-white after:mt-2">
            Locate us
          </h3>
          {/* Note: I corrected the width to full and added a real Google Maps placeholder logic */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3545.975424785869!2d83.26284611505244!3d27.28253198296933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3996ec3733055555%3A0x7d656001083e9507!2sHotel%20Peaceland!5e0!3m2!1sen!2snp!4v1650000000000!5m2!1sen!2snp"
            className="w-full h-[300px] rounded-lg border-0"
            loading="lazy"
            title="Hotel Peaceland Location"
          ></iframe>
        </div>

      </div>

      <div className="border-t border-white/30 mt-12 py-4 text-center text-sm">
        © {new Date().getFullYear()} Hotel Peaceland Lumbini. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;