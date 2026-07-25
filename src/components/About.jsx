import stackImage from '../assets/about/lotfi-avatar.png';
import { aboutContent } from '../data/portfolioData';

// Tech stack badges rendered inline for crisp rendering
const PythonIcon = () => (
  <div className="flex flex-col items-center gap-2">
    <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 128 128">
      <path fill="#3776AB" d="M63.4 5c-6.6 0-12.9.6-18.4 1.6-16.3 2.9-19.3 8.9-19.3 20v14.6h38.6v4.9H10.4C-.7 46.1-.1 58.2 3.2 68.2c3.9 11.8 11.4 20.2 22.5 20.2h9.5V71.7c0-13.4 11.6-25.2 25.2-25.2h38.5c10.6 0 19-8.7 19-19.3V26.6c0-10.3-8.7-18-19-19.7C89.5 5.4 76.1 5 63.4 5zM48.4 15.8c3.5 0 6.3 2.9 6.3 6.4 0 3.5-2.8 6.4-6.3 6.4-3.5 0-6.3-2.9-6.3-6.4 0-3.5 2.8-6.4 6.3-6.4z"/>
      <path fill="#FFD43B" d="M64.6 123c6.6 0 12.9-.6 18.4-1.6 16.3-2.9 19.3-8.9 19.3-20V86.8H63.7v-4.9h53.9c11.1 0 16.5-12.1 13.2-22.1-3.9-11.8-11.4-20.2-22.5-20.2h-9.5v16.7c0 13.4-11.6 25.2-25.2 25.2H35.1c-10.6 0-19 8.7-19 19.3v14.6c0 10.3 8.7 18 19 19.7 8.9 1.5 22.3 1.9 35 1.9zm15-10.8c-3.5 0-6.3-2.9-6.3-6.4 0-3.5 2.8-6.4 6.3-6.4 3.5 0 6.3 2.9 6.3 6.4 0 3.5-2.8 6.4-6.3 6.4z"/>
    </svg>
    <span className="text-xs font-bold text-white/70 uppercase tracking-wider">Python</span>
  </div>
);

const PyTorchIcon = () => (
  <div className="flex flex-col items-center gap-2">
    <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 128 128">
      <path fill="#EE4C2C" d="M85.6 33.9l-6 6c9.5 9.5 9.5 24.9 0 34.4-9.5 9.5-24.9 9.5-34.4 0-9.5-9.5-9.5-24.9 0-34.4l14.3-14.3 2.7-2.7V4.1L37.9 28.3c-14.1 14.1-14.1 37 0 51.1 14.1 14.1 37 14.1 51.1 0 14.1-14 14.1-36.9.6-51.1v.6zM74 39.5c2.2 0 4-1.8 4-4s-1.8-4-4-4-4 1.8-4 4 1.8 4 4 4z"/>
    </svg>
    <span className="text-xs font-bold text-white/70 uppercase tracking-wider">PyTorch</span>
  </div>
);

const LangChainIcon = () => (
  <div className="flex flex-col items-center gap-2">
    <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 128 128">
      <g fill="none" stroke="#1C3C3C" strokeWidth="6" strokeLinecap="round">
        <circle cx="40" cy="40" r="18" />
        <circle cx="88" cy="88" r="18" />
        <path d="M52 52l24 24" />
      </g>
      <circle cx="40" cy="40" r="7" fill="#1C3C3C" />
      <circle cx="88" cy="88" r="7" fill="#1C3C3C" />
    </svg>
    <span className="text-xs font-bold text-white/70 uppercase tracking-wider">LangChain</span>
  </div>
);

const About = () => {
  return (
    <section id="about" className="bg-[#ff2a2a] pt-20 pb-40 px-6 md:px-12 w-full relative overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-start">
        
        {/* Left Side: ID Badge and Skills */}
        <div className="flex flex-col items-center w-full md:w-[350px] shrink-0 mt-12 md:mt-0">
          
          <div data-aos="drop-bounce" className="relative flex justify-center w-full">
            {/* Lanyard string */}
            <div className="absolute -top-32 left-1/2 w-3 h-40 bg-black transform -translate-x-1/2 shadow-inner z-0"></div>
            {/* Lanyard clip */}
            <div className="absolute -top-6 left-1/2 w-6 h-12 bg-gray-300 rounded border border-gray-400 transform -translate-x-1/2 z-10 shadow-[0_2px_10px_rgba(0,0,0,0.3)]"></div>
            
            {/* Badge Card */}
            <div className="bg-gray-900 w-full max-w-[280px] rounded-2xl p-3 shadow-[0_20px_40px_rgba(0,0,0,0.4)] relative z-20 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
              {/* Cutout Hole */}
              <div className="absolute -top-3 left-1/2 w-16 h-6 bg-gray-900 rounded-t-xl transform -translate-x-1/2 flex justify-center items-center">
                <div className="w-8 h-2 bg-black/30 rounded-full shadow-inner"></div>
              </div>
              {/* Image Container */}
              <div className="w-full aspect-[3/4] overflow-hidden rounded-xl bg-gray-800 border-2 border-transparent">
                <img
                  src={stackImage}
                  alt="Lotfi Djebbar — Data Science & AI Engineer"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>

        </div>

        {/* Right Side: Info Content */}
        <div data-aos="fade-left" data-aos-delay="200" className="flex-1 text-white mt-8 md:mt-0 relative z-20">
          
          <h2 className="text-4xl md:text-5xl font-black text-black mb-4">{aboutContent.heading}</h2>
          <p 
            className="text-lg font-bold mb-12 leading-relaxed max-w-3xl text-red-50"
            dangerouslySetInnerHTML={{ __html: aboutContent.bio }}
          />

          {/* Horizontal Skills Row */}
          <div className="flex items-center gap-10 mt-8">
            <div data-aos="zoom-in" data-aos-delay="300" className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl">
              <PythonIcon />
            </div>
            <div data-aos="zoom-in" data-aos-delay="450" className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl">
              <PyTorchIcon />
            </div>
            <div data-aos="zoom-in" data-aos-delay="600" className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl">
              <LangChainIcon />
            </div>
          </div>

        </div>
      </div>

      {/* Torn paper divider at bottom */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-30 transform translate-y-1">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-white">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>

      {/* Decorative stars */}
      <div className="absolute top-10 right-10 md:right-20 text-black opacity-30 animate-pulse">
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
      <div className="absolute bottom-32 left-4 md:left-20 text-black opacity-30 animate-pulse" style={{ animationDelay: '1s' }}>
        <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
    </section>
  );
};

export default About;
