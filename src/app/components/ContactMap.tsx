function ContactMap() {
  return (
    <section className="w-full">
      <div className="w-full overflow-hidden shadow-lg border-t border-gray-200">
        <iframe
  src="https://www.google.com/maps?q=Hotel+Peaceland+Lumbini&output=embed"
  className="w-full h-[600px] border-0"
  loading="lazy"
  allowFullScreen
  title="Hotel Peaceland Lumbini Location"
></iframe>

      </div>
    </section>
  );
}

export default ContactMap;
