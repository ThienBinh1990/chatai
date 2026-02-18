import React from 'react';
import { Lightbulb } from 'lucide-react';

const Introduction: React.FC = () => {
  return (
    <section id="intro" className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col-reverse md:flex-row items-center gap-16">
          
          {/* Image Side */}
          <div className="w-full md:w-1/2">
            <div className="relative">
              <div className="absolute -inset-4 bg-yellow-100 rounded-full blur-xl opacity-50"></div>
              <img 
                src="https://picsum.photos/seed/friendlychat/600/400" 
                alt="Học sinh trò chuyện với Chatbot" 
                className="relative rounded-3xl shadow-lg w-full object-cover h-[350px]"
              />
              <div className="absolute bottom-4 right-4 bg-white px-4 py-2 rounded-lg shadow-md flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-600">Chatbot Online</span>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="w-full md:w-1/2 space-y-6">
            <div className="flex items-center gap-3 text-brand font-bold tracking-wider uppercase text-sm">
              <Lightbulb size={20} />
              <span>Giới thiệu</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-800">
              Sáng kiến <span className="text-brand">"Chủ nhiệm 4.0"</span>
            </h2>
            
            <p className="text-gray-600 leading-relaxed text-lg">
              Dự án ứng dụng AI Chatbot trong công tác chủ nhiệm là một bước đột phá trong quản lý giáo dục. 
              Hệ thống giúp giáo viên theo dõi sát sao tâm lý học sinh, tự động hóa các nhắc nhở nề nếp thường nhật, 
              và tạo cầu nối thông tin liền mạch với phụ huynh.
            </p>
            
            <p className="text-gray-600 leading-relaxed text-lg">
              Với giao diện thân thiện và ngôn ngữ gần gũi, Chatbot không chỉ là công cụ quản lý mà còn là 
              một người bạn đồng hành tin cậy của học sinh lớp 10 trong giai đoạn chuyển cấp đầy bỡ ngỡ.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
