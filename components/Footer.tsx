import React from 'react';
import { Mail, MapPin, Phone, Facebook, Globe } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-white py-12">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-white/20 pb-8 mb-8">
            
            {/* Info */}
            <div className="space-y-4">
                <h3 className="text-2xl font-heading font-bold">Chủ nhiệm 4.0</h3>
                <p className="text-blue-100 text-sm">
                    Giải pháp công nghệ giáo dục tiên tiến, đồng hành cùng sự phát triển toàn diện của học sinh.
                </p>
            </div>

            {/* Contact */}
            <div className="space-y-4">
                <h4 className="font-bold text-lg">Liên hệ</h4>
                <ul className="space-y-2 text-blue-100 text-sm">
                    <li className="flex items-center gap-2">
                        <MapPin size={16} />
                        <span>Trường THPT Cát Tiên</span>
                    </li>
                    <li className="flex items-center gap-2">
                        <Mail size={16} />
                        <span>chuNhiem4.0@gmail.com</span>
                    </li>
                    <li className="flex items-center gap-2">
                        <Phone size={16} />
                        <span>0123 456 789</span>
                    </li>
                </ul>
            </div>

            {/* Socials */}
            <div className="space-y-4">
                <h4 className="font-bold text-lg">Kết nối</h4>
                <div className="flex gap-4">
                    <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white hover:text-brand-dark transition-colors">
                        <Facebook size={20} />
                    </a>
                    <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white hover:text-brand-dark transition-colors">
                        <Globe size={20} />
                    </a>
                </div>
            </div>
        </div>

        <div className="text-center text-blue-200 text-sm">
            © 2025 Dự án “Chủ nhiệm 4.0” – All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
