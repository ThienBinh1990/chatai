import React from 'react';
import { Search, MessageSquareCode, Users, Database } from 'lucide-react';
import { ProcessStep } from '../types';

const steps: ProcessStep[] = [
  {
    step: 1,
    title: "Khảo sát & Dữ liệu",
    description: "Khảo sát tâm lý đầu vào của học sinh lớp 10 để xây dựng cơ sở dữ liệu.",
    icon: Search
  },
  {
    step: 2,
    title: "Xây dựng Kịch bản",
    description: "Thiết kế luồng hội thoại và huấn luyện Chatbot phản hồi phù hợp.",
    icon: MessageSquareCode
  },
  {
    step: 3,
    title: "Tích hợp & Triển khai",
    description: "Tích hợp Chatbot vào Zalo/Google Chat nhóm lớp và hướng dẫn sử dụng.",
    icon: Users
  },
  {
    step: 4,
    title: "Phân tích & Báo cáo",
    description: "Thu thập dữ liệu tương tác, phân tích và gửi báo cáo cho GVCN.",
    icon: Database
  }
];

const Process: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-800 mb-4">
            Quy trình triển khai
          </h2>
          <p className="text-gray-600">Lộ trình thực hiện sáng kiến "Chủ nhiệm 4.0".</p>
        </div>

        <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-200 -translate-y-1/2 z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
                {steps.map((step, index) => (
                    <div key={index} className="flex flex-col items-center text-center group">
                        <div className="w-16 h-16 rounded-full bg-white border-4 border-brand text-brand flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300 relative">
                            <step.icon size={28} />
                            <div className="absolute -top-3 -right-3 w-8 h-8 bg-brand text-white rounded-full flex items-center justify-center font-bold text-sm border-2 border-white">
                                {step.step}
                            </div>
                        </div>
                        <h3 className="text-lg font-bold text-gray-800 mb-2">{step.title}</h3>
                        <p className="text-gray-600 text-sm px-4">
                            {step.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
