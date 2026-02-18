import React from 'react';
import { Film } from 'lucide-react';

const Gallery: React.FC = () => {
  const images = [
    {
        url: "https://picsum.photos/seed/classinteraction/800/600",
        caption: "Giao diện trò chuyện thân thiện"
    },
    {
        url: "https://picsum.photos/seed/teacherdashboard/800/600",
        caption: "Dashboard quản lý cho giáo viên"
    },
    {
        url: "https://picsum.photos/seed/studentsmile/800/600",
        caption: "Kết nối tích cực Học sinh - Giáo viên"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex items-center gap-3 mb-12">
             <Film className="text-brand" size={28} />
             <h2 className="text-3xl font-heading font-bold text-gray-800">
                Thư viện hình ảnh
             </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {images.map((img, idx) => (
                <div key={idx} className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer">
                    <img 
                        src={img.url} 
                        alt={img.caption} 
                        className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                        <p className="text-white font-medium">{img.caption}</p>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
