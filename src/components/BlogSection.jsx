'use client';
import Image from 'next/image';

const blogs = [
  {
    id: 1,
    title: 'The Future of AI Technology: Trends, Applications',
    desc: 'The Future of AI Technology: Trends, Applications, and Impacts Artificial',
    img: '/images/RecentPost 1.png',
    author: 'Mindsync',
  },
  {
    id: 2,
    title: 'Unstatiable entreaties may collecting Power.',
    desc: 'Rapidiously repurpose leading edge growth strategies with just in time',
    img: '/images/RecentPost 2.png',
    author: 'Mindsync',
  },
  {
    id: 3,
    title: 'Enhancing Your Mobile App Development with React',
    desc: 'The Power of React in Mobile App Development React is',
    img: '/images/whychooseus.png',
    author: 'Mindsync',
  },
];

export default function BlogSection() {
  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-center text-3xl font-bold text-gray-800 mb-8">
          Get Every Single Update <span className="text-[#4F39F6]">Blog</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
            >
              <div className="relative w-full h-52">
                <Image
                  src={blog.img}
                  alt={blog.title}
                  layout="fill"
                  objectFit="fill"
                  className="rounded-t-lg"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{blog.title}</h3>
                <p className="text-gray-600 text-sm mt-2">{blog.desc}</p>
                <p className="text-gray-500 text-sm mt-4">By {blog.author}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
