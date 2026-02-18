import React from 'react';
import { Bot, MessageCircle, School } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToIntro = () => {
    const introSection = document.getElementById('intro');
    if (introSection) {
      introSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-brand-light to-white pt-20 pb-32 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          {/* Text Content */}
          <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-brand-light text-brand font-semibold text-sm">
              <School size={16} />
              <span>Sáng kiến giáo dục 2025</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold font-heading text-gray-900 leading-tight">
              Giải pháp <br/>
              <span className="text-brand">Chủ nhiệm 4.0</span>
            </h1>
            
            <p className="text-lg text-gray-600 md:max-w-lg">
              Ứng dụng AI Chatbot để đồng hành cùng học sinh lớp 10 đầu cấp. 
              Sàng lọc tâm lý, hỗ trợ nề nếp và kết nối nhà trường.
            </p>

            <button 
              onClick={scrollToIntro}
              className="group inline-flex items-center gap-3 bg-brand hover:bg-brand-dark text-white font-semibold py-4 px-8 rounded-full transition-all shadow-lg hover:shadow-brand/30 transform hover:-translate-y-1"
            >
              <span>Khám phá dự án</span>
              <Bot className="group-hover:rotate-12 transition-transform" />
            </button>
          </div>

          {/* Hero Image Illustration */}
          <div className="w-full md:w-1/2 flex justify-center relative">
            <div className="absolute inset-0 bg-brand/10 blur-3xl rounded-full transform scale-75"></div>
            <img 
              src="https://picsum.photos/seed/studenttech/600/500" 
              alt="Học sinh sử dụng Chatbot" 
              className="relative rounded-2xl shadow-2xl border-4 border-white transform rotate-2 hover:rotate-0 transition-all duration-500 object-cover h-[400px] w-full max-w-md"
            />
            {/* Floating Icons Overlay */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg animate-bounce duration-[3000ms]">
              <MessageCircle className="text-brand w-8 h-8" />
            </div>
            <div className="absolute top-10 -right-6 bg-white p-3 rounded-xl shadow-lg animate-bounce duration-[4000ms]">
              <Bot className="text-green-500 w-6 h-6" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Wave */}
      <div className="absolute bottom-0 left-0 w-full leading-none">
        <svg className="relative block w-full h-[60px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
