import blogs from "@/data/Blog";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";

const socialLinks = [
  { id: "1", icon: FaFacebookF, link: "#" },
  { id: "2", icon: FaInstagram, link: "#" },
  { id: "3", icon: FaLinkedin, link: "#" },
];

export default async function BlogDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const blogIndex = Number(id);
  const blog = blogs[blogIndex];

  if (!blog) return <div className="text-center py-20">Blog not found</div>;

  const recentPosts = blogs.filter((_, i) => i !== blogIndex).slice(0, 4);
  const keywords = ["Lumbini", "Spirituality", "Travel Guide", "Peace", "Buddhism"];

  return (
    <section className="bg-white min-h-screen font-sans antialiased">
      <nav className="flex items-center justify-between px-6 md:px-12 py-5 border-b border-gray-100 max-w-[1400px] mx-auto">
        <Link href="/" className="flex items-center gap-2 font-bold text-2xl text-[#5D3FD3]">
          <div className="w-8 h-8 bg-[#5D3FD3] rounded-lg" />
          Hotel Peaceland
        </Link>
        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-500">
          <Link href="/">Home</Link>
          <Link href="/about">About Us</Link>
          <Link href="/blogs" className="text-black font-semibold">
            Blog
          </Link>
        </div>
        <Link
          href="/admin"
          className="bg-[#5D3FD3] text-white px-6 py-2 rounded-full text-sm font-semibold"
        >
          Admin
        </Link>
      </nav>

      <main className="max-w-[1200px] mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-8">
          <header className="mb-10">
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#1a1a1a] leading-tight mb-8">
              {blog.title}
            </h1>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="text-sm">
                  <p className="font-bold text-gray-900 leading-none mb-1">Hotel Peaceland</p>
                  <p className="text-gray-400">
                    {blog.month} {blog.day}, 2026
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                {socialLinks.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={index}
                      href={item.link}
                      className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 text-sm hover:bg-[#5D3FD3] hover:text-white transition-all duration-300 border border-gray-100"
                    >
                      <Icon />
                    </a>
                  );
                })}
              </div>
            </div>
          </header>

          <div className="relative w-full aspect-[16/9] mb-6 rounded-2xl overflow-hidden shadow-sm">
            <Image
              src={blog.image}
              alt={blog.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="flex flex-wrap gap-2 mb-10 pb-6 border-b border-gray-100">
            <span className="text-xs font-bold uppercase text-gray-400 mr-2 self-center">
              Tags:
            </span>
            {keywords.map((tag) => (
              <span
                key={tag}
                className="text-xs font-medium text-[#5D3FD3] bg-purple-50 px-3 py-1 rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>

          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="text-xl font-medium text-gray-900 mb-8 leading-relaxed italic">
              {blog.description}
            </p>
            {blog.content.split("\n\n").map((para, idx) => (
              <p key={idx} className="mb-6">
                {para}
              </p>
            ))}
          </div>
        </div>

        <aside className="lg:col-span-4">
          <div className="sticky top-10 space-y-12">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-gray-900 mb-8 border-l-4 border-[#5D3FD3] pl-4">
                Recent Posts
              </h3>
              <div className="space-y-8">
                {recentPosts.map((post, index) => (
                  <Link
                    href={`/blogs/${blogs.indexOf(post)}`}
                    key={index}
                    className="flex gap-4 group"
                  >
                    <div className="relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="flex flex-col justify-center">
                      <h4 className="text-sm font-bold text-gray-900 group-hover:text-[#5D3FD3] transition-colors line-clamp-2">
                        {post.title}
                      </h4>
                      <p className="text-xs text-gray-400 mt-1">
                        {post.month} {post.day}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </aside>
      </main>
    </section>
  );
}
