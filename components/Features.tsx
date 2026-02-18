import React from 'react';
import { MessageCircle, BellRing, PieChart, Smile, CalendarClock, FileText } from 'lucide-react';
import { Feature } from '../types';

const features: Feature[] = [
  {
    title: "Khảo sát cảm xúc",
    description: "Chatbot đặt câu hỏi ngắn (check-in) hàng ngày để hiểu trạng thái tâm lý học sinh.",
    icon: Smile
  },
  {
    title: "Nhắc nhở nề nếp",
    description: "Gửi thông báo tự động về đồng phục, giờ giấc, và bài tập về nhà.",
    icon: BellRing
  },
  {
    title: "Thống kê học tập",
    description: "Tự động tổng hợp dữ liệu chuyên cần và thái độ học tập.",
    icon: PieChart
  },
  {
    title: "Tương tác 24/7",
    description: "Học sinh có thể hỏi đáp thông tin trường lớp bất cứ lúc nào.",
    icon: MessageCircle
  },
  {
    title: "Lịch trình thông minh",
    description: "Nhắc lịch thi, lịch hoạt động ngoại khóa tự động.",
    icon: CalendarClock
  },
  {
    title: "Báo cáo tuần",
    description: "Tổng hợp báo cáo gửi về cho giáo viên chủ nhiệm cuối mỗi tuần.",
    icon: FileText
  }
];

const Features: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-800 mb-4">
            Các chức năng nổi bật
          </h2>
          <p className="text-gray-600">Hệ thống tính năng đa dạng hỗ trợ toàn diện.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group p-6 border border-gray-100 rounded-xl hover:shadow-xl transition-all duration-300 bg-white hover:bg-brand-light/20">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-lg bg-blue-100 text-brand group-hover:bg-brand group-hover:text-white transition-colors">
                  <feature.icon size={24} />
                </div>
                <h3 className="text-lg font-bold text-gray-800">{feature.title}</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Illustration Separator */}
        <div className="mt-16 flex justify-center">
             <img 
                src="https://picsum.photos/seed/dashboardtech/800/300" 
                alt="Giao diện Dashboard Chatbot" 
                className="rounded-2xl shadow-lg opacity-90"
              />
        </div>
      </div>
    </section>
  );
};

export default Features;
