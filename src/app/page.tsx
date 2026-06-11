"use client";

import { Sparkles, ArrowRight, MapPin, Phone, Mail, Camera, Clock, CalendarDays } from "lucide-react";
import Image from "next/image";
import FilmStripScroll from "@/components/film-strip-scroll";

export default function Home() {
  return (
    <div className="bg-zinc-950 min-h-screen text-white scroll-smooth selection:bg-amber-500 selection:text-black">
      {/* Section 1: Hero */}
      <section className="relative h-screen w-full flex flex-col justify-between overflow-hidden bg-black">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/dress_lace.png"
            alt="Velia Bridal Archive"
            fill
            className="object-cover opacity-40 scale-105 animate-[pulse_8s_infinite]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-zinc-950" />
        </div>

        {/* Hero Top Nav */}
        <header className="relative z-10 flex items-center justify-between px-8 py-6 max-w-7xl mx-auto w-full">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-amber-500 flex items-center justify-center shadow-lg shadow-amber-500/20">
              <Sparkles className="w-5 h-5 text-black" />
            </div>
            <div>
              <span className="text-lg font-black tracking-widest text-white">VÉLIA</span>
              <span className="text-[10px] block font-mono text-amber-500 tracking-wider">BRIDAL ATELIER</span>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-xs font-bold tracking-widest text-zinc-400 uppercase">
            <a href="#filmstrip-section" className="hover:text-amber-500 transition-colors">Bộ sưu tập</a>
            <a href="#philosophy-section" className="hover:text-amber-500 transition-colors">Triết lý</a>
            <a href="#contact-section" className="hover:text-amber-500 transition-colors">Đặt lịch hẹn</a>
          </nav>
        </header>

        {/* Hero Middle Content */}
        <div className="relative z-10 flex flex-col items-center text-center justify-center flex-1 max-w-4xl mx-auto px-6">
          <span className="text-xs font-mono uppercase tracking-[0.4em] text-amber-500 mb-4 animate-fade-in-down">
            THE ART OF BRIDAL COUTURE
          </span>
          <h1 className="text-4xl md:text-7xl font-black tracking-tight text-white mb-6 uppercase leading-tight select-none">
            VÉLIA BRIDAL
          </h1>
          <p className="text-sm md:text-lg text-zinc-400 max-w-xl font-medium mb-8">
            Bộ sưu tập váy cưới thiết kế cao cấp và độc bản, tôn vinh vẻ đẹp kiêu sa, sang trọng của nàng trong ngày trọng đại.
          </p>
          <div className="flex gap-4">
            <a href="#filmstrip-section">
              <button className="bg-amber-500 hover:bg-amber-400 text-black font-black uppercase text-xs tracking-wider px-8 py-4 rounded-full shadow-lg shadow-amber-500/10 cursor-pointer transition-all duration-300 flex items-center gap-2 border-none">
                XEM BỘ SƯU TẬP <ArrowRight className="w-4 h-4" />
              </button>
            </a>
          </div>
        </div>

        {/* Hero Bottom Info */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-8 py-6 flex justify-between items-end text-zinc-500 font-mono text-[10px]">
          <div>
            <span>EST. 2026 / HO CHI MINH CITY</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="tracking-widest uppercase text-[8px] animate-bounce">Scroll Down</span>
            <div className="w-[1px] h-12 bg-gradient-to-b from-amber-500 to-transparent" />
          </div>
          <div>
            <span>HAUTE COUTURE ARCHIVE</span>
          </div>
        </div>
      </section>

      {/* Section 2: Film Strip Scroll Showcase */}
      <FilmStripScroll />

      {/* Section 3: Brand Philosophy */}
      <section id="philosophy-section" className="relative py-24 md:py-32 w-full bg-zinc-950 overflow-hidden border-t border-zinc-900">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f23_1px,transparent_1px),linear-gradient(to_bottom,#1f1f23_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_100%,#000_70%,transparent_100%)] opacity-25 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Column */}
            <div>
              <span className="text-xs font-mono uppercase tracking-[0.3em] text-amber-500 block mb-3">
                OUR CORE VALUES
              </span>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white mb-6 uppercase">
                TRIẾT LÝ CHẾ TÁC ĐỘC BẢN
              </h2>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed mb-8">
                Tại Vélia Atelier, mỗi chiếc váy cưới không chỉ là trang phục, mà là một tác phẩm nghệ thuật. Chúng tôi tin rằng mỗi cô dâu đều sở hữu một câu chuyện và nét đẹp độc bản riêng biệt. Từ khâu tuyển chọn các chất liệu tơ lụa satin cao cấp, ren Pháp cổ điển đến hàng trăm giờ thêu và đính kết pha lê thủ công tỉ mỉ, Vélia cam kết mang đến sự hoàn hảo tuyệt đối trong từng đường kim mũi chỉ.
              </p>
              <div className="border-l-2 border-amber-500 pl-4 py-1 italic text-zinc-300 text-sm">
                &ldquo;Vẻ đẹp kiêu sa không nằm ở sự phô trương, mà ẩn giấu trong những chi tiết tinh xảo và phom dáng haute couture chuẩn mực.&rdquo;
              </div>
            </div>

            {/* Right Column - Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-zinc-900/50 backdrop-blur-md border border-zinc-800 p-8 rounded-2xl hover:border-amber-500/50 transition-all duration-300 group">
                <span className="text-3xl font-black text-amber-500/20 group-hover:text-amber-500 transition-colors block mb-4 font-mono">01</span>
                <h3 className="text-lg font-bold text-white mb-2 uppercase tracking-wide">Bespoke Design</h3>
                <p className="text-xs text-zinc-500 leading-relaxed">
                  Thiết kế may đo cá nhân hóa theo tỷ lệ cơ thể và phong cách riêng biệt của từng cô dâu.
                </p>
              </div>

              <div className="bg-zinc-900/50 backdrop-blur-md border border-zinc-800 p-8 rounded-2xl hover:border-amber-500/50 transition-all duration-300 group">
                <span className="text-3xl font-black text-amber-500/20 group-hover:text-amber-500 transition-colors block mb-4 font-mono">02</span>
                <h3 className="text-lg font-bold text-white mb-2 uppercase tracking-wide">Premium Fabrics</h3>
                <p className="text-xs text-zinc-500 leading-relaxed">
                  Lựa chọn lụa Satin thượng hạng, ren Pháp mềm mại nhập khẩu trực tiếp phục vụ các mẫu váy cưới cao cấp.
                </p>
              </div>

              <div className="bg-zinc-900/50 backdrop-blur-md border border-zinc-800 p-8 rounded-2xl hover:border-amber-500/50 transition-all duration-300 group">
                <span className="text-3xl font-black text-amber-500/20 group-hover:text-amber-500 transition-colors block mb-4 font-mono">03</span>
                <h3 className="text-lg font-bold text-white mb-2 uppercase tracking-wide">Hand Embroidery</h3>
                <p className="text-xs text-zinc-500 leading-relaxed">
                  Kỹ thuật đính kết hạt cườm, pha lê Swarovksi hoàn toàn thủ công bởi các nghệ nhân lành nghề.
                </p>
              </div>

              <div className="bg-zinc-900/50 backdrop-blur-md border border-zinc-800 p-8 rounded-2xl hover:border-amber-500/50 transition-all duration-300 group">
                <span className="text-3xl font-black text-amber-500/20 group-hover:text-amber-500 transition-colors block mb-4 font-mono">04</span>
                <h3 className="text-lg font-bold text-white mb-2 uppercase tracking-wide">Atelier Fitting</h3>
                <p className="text-xs text-zinc-500 leading-relaxed">
                  Không gian thử váy riêng tư cao cấp, mang lại trải nghiệm ấm cúng, thư thái tuyệt đối cho nàng.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Contact & Appointment Booking */}
      <section id="contact-section" className="relative py-24 md:py-32 w-full bg-zinc-950 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-amber-500 block mb-3">
              RESERVE AN EXPERIENCE
            </span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white uppercase mb-4">
              LÊN LỊCH THỬ VÁY RIÊNG TƯ
            </h2>
            <p className="text-zinc-400 text-sm">
              Để đảm bảo sự chăm sóc tận tâm nhất, Vélia Atelier hoạt động theo lịch hẹn riêng tư. Hãy đặt trước lịch thử váy của bạn ngay hôm nay.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Contact Card 1: Hour & Booking */}
            <div className="bg-zinc-900/30 backdrop-blur-sm border border-zinc-800 p-8 rounded-2xl flex flex-col items-center text-center hover:border-amber-500/30 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center mb-6 group-hover:bg-amber-500 group-hover:text-black text-amber-500 transition-all duration-300">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-4 uppercase tracking-wide">Giờ Làm Việc</h3>
              <p className="text-sm text-zinc-400 mb-2 font-medium">Thứ Hai - Chủ Nhật</p>
              <p className="text-xs text-zinc-500 font-mono">09:00 AM - 09:00 PM</p>
              <p className="text-xs text-amber-500 mt-4 font-mono tracking-wider flex items-center gap-1.5">
                <CalendarDays className="w-3.5 h-3.5" /> HOẠT ĐỘNG THEO LỊCH HẸN
              </p>
            </div>

            {/* Contact Card 2: Location */}
            <div className="bg-zinc-900/30 backdrop-blur-sm border border-zinc-800 p-8 rounded-2xl flex flex-col items-center text-center hover:border-amber-500/30 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center mb-6 group-hover:bg-amber-500 group-hover:text-black text-amber-500 transition-all duration-300">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-4 uppercase tracking-wide">Địa Chỉ Studio</h3>
              <p className="text-sm text-zinc-400 mb-2 leading-relaxed">
                Số 120 Đường Nguyễn Huệ, Phường Bến Nghé, Quận 1
              </p>
              <p className="text-xs text-zinc-500 font-mono">Thành phố Hồ Chí Minh, Việt Nam</p>
              <a 
                href="https://maps.google.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-xs text-amber-500 hover:text-amber-400 mt-4 font-bold tracking-widest uppercase flex items-center gap-1.5 transition-colors"
              >
                XEM BẢN ĐỒ <ArrowRight className="w-3 h-3" />
              </a>
            </div>

            {/* Contact Card 3: Hotline & Socials */}
            <div className="bg-zinc-900/30 backdrop-blur-sm border border-zinc-800 p-8 rounded-2xl flex flex-col items-center text-center hover:border-amber-500/30 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center mb-6 group-hover:bg-amber-500 group-hover:text-black text-amber-500 transition-all duration-300">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-4 uppercase tracking-wide">Liên Hệ Trực Tiếp</h3>
              <p className="text-sm text-zinc-400 mb-1 font-mono font-bold">+84 901 234 567</p>
              <p className="text-xs text-zinc-500 font-mono mb-4">contact@veliabridal.com</p>
              
              <div className="flex gap-4 mt-2">
                <a 
                  href="#" 
                  className="w-8 h-8 rounded-full bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 flex items-center justify-center text-zinc-400 hover:text-white transition-all"
                  aria-label="Instagram"
                >
                  <Camera className="w-4 h-4" />
                </a>
                <a 
                  href="#" 
                  className="w-8 h-8 rounded-full bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 flex items-center justify-center text-zinc-400 hover:text-white transition-all"
                  aria-label="Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-950 py-12 px-8 border-t border-zinc-900 text-zinc-600 font-mono text-[10px] tracking-wider">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded bg-amber-500/20 flex items-center justify-center">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            </div>
            <span className="text-white font-bold tracking-widest text-xs">VÉLIA BRIDAL</span>
          </div>
          <div>
            <span>&copy; {new Date().getFullYear()} VÉLIA ATELIER. ALL RIGHTS RESERVED.</span>
          </div>
          <div className="flex gap-6 uppercase text-[9px]">
            <a href="#filmstrip-section" className="hover:text-amber-500 transition-colors">Bộ sưu tập</a>
            <a href="#philosophy-section" className="hover:text-amber-500 transition-colors">Triết lý</a>
            <a href="#contact-section" className="hover:text-amber-500 transition-colors">Đặt lịch</a>
          </div>
        </div>
      </footer>
    </div>
  );
}













