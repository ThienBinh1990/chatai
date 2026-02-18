import React from 'react';
import { HeartPulse, Bell, ChartLine } from 'lucide-react';
import { Objective } from '../types';

const objectives: Objective[] = [
  {
    title: "Sàng lọc tâm lý",
    description: "Nhận diện sớm các dấu hiệu bất ổn tâm lý ở học sinh đầu cấp để có biện pháp hỗ trợ kịp thời.",
    icon: HeartPulse
  },
  {
    title: "Tự động hóa nề nếp",
    description: "Giảm tải công việc cho giáo viên thông qua hệ thống nhắc nhở tự động, lịch học và quy định.",
    icon: Bell
  },
  {
    title: "Báo cáo thông minh",
    description: "Cung cấp dữ liệu trực quan về hành vi và cảm xúc học sinh giúp GVCN đưa ra quyết định chính xác.",
    icon: ChartLine
  }
];

const Objectives: React.FC = () => {
  return (
    <section className="py-20 bg-brand-light/30 relative">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-cyan-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-800 mb-4">
            Mục tiêu hướng đến
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Xây dựng môi trường học đường hạnh phúc, hiện đại và thấu hiểu.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {objectives.map((obj, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border-b-4 border-brand hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 bg-brand-light rounded-full flex items-center justify-center mb-6 mx-auto md:mx-0">
                <obj.icon className="text-brand w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 text-center md:text-left">{obj.title}</h3>
              <p className="text-gray-600 text-center md:text-left leading-relaxed">
                {obj.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Objectives;
