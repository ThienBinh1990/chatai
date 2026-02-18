import React from 'react';
import { TrendingUp, CheckCircle2 } from 'lucide-react';

const Impact: React.FC = () => {
  return (
    <section className="py-20 bg-blue-50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-1/2">
                 <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-800 mb-8">
                    Hiệu quả dự kiến
                 </h2>
                 <div className="space-y-6">
                     {[
                        "Nâng cao hiệu quả công tác chủ nhiệm lớp 10.",
                        "Hỗ trợ học sinh sớm phát hiện và giải quyết vấn đề tâm lý.",
                        "Giảm tải thủ tục hành chính cho giáo viên.",
                        "Tăng cường kết nối chặt chẽ: GVCN - Học sinh - Phụ huynh."
                     ].map((item, idx) => (
                         <div key={idx} className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border-l-4 border-green-500">
                             <CheckCircle2 className="text-green-500 mt-1 flex-shrink-0" />
                             <span className="text-gray-700 font-medium">{item}</span>
                         </div>
                     ))}
                 </div>
            </div>

            <div className="w-full md:w-1/2 text-center">
                <div className="relative inline-block">
                    <img 
                        src="https://picsum.photos/seed/growth/500/500" 
                        alt="Biểu đồ tăng trưởng" 
                        className="rounded-full w-[400px] h-[400px] object-cover shadow-2xl border-8 border-white"
                    />
                    <div className="absolute bottom-10 left-0 bg-brand text-white p-4 rounded-xl shadow-lg flex items-center gap-3 animate-bounce">
                        <TrendingUp size={32} />
                        <div className="text-left">
                            <p className="text-xs opacity-80">Mức độ hài lòng</p>
                            <p className="font-bold text-xl">98%</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
