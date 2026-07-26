import { softSkillsList } from '../data/portfolioData';

const iconPaths = {
  writing: "M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z",
  globe: "M12 21a9 9 0 100-18 9 9 0 000 18zM3.6 9h16.8M3.6 15h16.8M12 3a13.5 13.5 0 010 18M12 3a13.5 13.5 0 000 18",
  puzzle: "M14 3v2.5a1.5 1.5 0 003 0V3h3v3h-2.5a1.5 1.5 0 000 3H20v3h-2.5a1.5 1.5 0 000 3H20v3h-3v-2.5a1.5 1.5 0 00-3 0V21H9v-3H6.5a1.5 1.5 0 010-3H9v-3H6.5a1.5 1.5 0 010-3H9V6h3V3.5a1.5 1.5 0 012 0",
  flag: "M5 21V4m0 0h11l-1.5 4L16 12H5",
  refresh: "M4 4v5h5M20 20v-5h-5M5.5 9a7 7 0 0112.4-2.5M18.5 15a7 7 0 01-12.4 2.5",
  chat: "M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z",
  search: "M11 19a8 8 0 100-16 8 8 0 000 16zM21 21l-4.35-4.35",
  clock: "M12 21a9 9 0 100-18 9 9 0 000 18zM12 7v5l3.5 2",
};

const SkillIcon = ({ name }) => (
  <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d={iconPaths[name]} />
  </svg>
);

const SoftSkillCard = ({ skill, index }) => (
  <div
    data-aos="fade-up"
    data-aos-delay={index * 100}
    className="bg-[#f8f8f8] border border-gray-200 rounded-3xl p-6 hover:scale-[1.03] hover:bg-white hover:border-[#ff2a2a]/30 hover:shadow-[0_20px_45px_rgba(255,42,42,0.08)] transition-all duration-500 group flex flex-col items-center text-center justify-between min-h-[220px]"
  >
    <div className="flex flex-col items-center">
      <div className="mb-4 p-3 bg-gray-100 rounded-2xl text-[#ff2a2a] group-hover:bg-[#ff2a2a]/10 group-hover:scale-110 transition-all duration-300">
        <SkillIcon name={skill.icon} />
      </div>
      <h3 className="text-gray-900 text-lg font-black tracking-tight mb-2 uppercase">
        {skill.name}
      </h3>
      <p className="text-gray-500 text-sm font-medium leading-relaxed">
        {skill.desc}
      </p>
    </div>
  </div>
);

const SoftSkills = () => {
  return (
    <section className="bg-white pt-24 pb-32 px-6 md:px-12 w-full relative overflow-hidden font-sans bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:60px_60px]">
      
      {/* Top paper divider (torn SVG transition from dark section) */}
      <div className="absolute top-0 left-0 w-full pointer-events-none z-10 transform -translate-y-[1px] rotate-180">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-[#0a0a0a]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-20">
        
        {/* Header */}
        <div data-aos="fade-up" className="mb-16 md:mb-20 text-center">
          <div className="inline-block border border-gray-300 rounded-full px-5 py-1.5 text-sm text-gray-600 font-bold mb-6 shadow-sm bg-white">
            Core Competencies
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight mb-4 uppercase">
            Professional Soft Skills
          </h2>
          <p className="text-gray-500 text-base md:text-lg max-w-lg mx-auto leading-relaxed">
            Essential traits that make me an effective engineer, coordinator, and communicator.
          </p>
        </div>

        {/* Soft Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {softSkillsList.map((skill, index) => (
            <SoftSkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default SoftSkills;
