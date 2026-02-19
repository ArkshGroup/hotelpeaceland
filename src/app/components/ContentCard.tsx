import Image from "next/image";

interface ContentCardProps {
  title: string;
  subtitle: string;
  imageSrc: string;
}

export const ContentCard = ({ title, subtitle, imageSrc }: ContentCardProps) => (
  <div className="relative w-full h-[300px] lg:h-[480px] rounded-3xl overflow-hidden shadow-xl group">
    {/* Background Image */}
    <Image
      src={imageSrc}
      alt={title}
      fill
      className="object-cover transition-transform duration-700 group-hover:scale-105"
      priority
    />

    {/* Elegant Gradient Overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

    {/* Text content */}
    <div className="absolute bottom-0 left-0 p-8 lg:p-12 z-10">
      <h2 className="text-3xl lg:text-5xl font-extrabold text-white leading-tight mb-4 tracking-tight">
        {title}
      </h2>
      <div className="flex items-center gap-3">
     
        <p className="text-gray-200 text-sm lg:text-lg font-medium opacity-90">
          {subtitle}
        </p>
      </div>
    </div>
  </div>
);