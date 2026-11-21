import { useLang } from '../i18n/LanguageContext';

const EducationItem = ({ item, index }) => (
  <div data-aos="fade-up" data-aos-delay={index * 120} className="relative pl-10 pb-10 last:pb-0">
    {/* Timeline dot + line */}
    <span className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-[#ff2a2a] ring-4 ring-red-100" />
    <span className="absolute left-[7px] top-6 bottom-0 w-0.5 bg-gray-200" />

    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
      <h3 className="text-gray-900 text-xl font-black tracking-tight">{item.school}</h3>
      <span className="text-[#ff2a2a] text-sm font-mono font-bold whitespace-nowrap">{item.period}</span>
    </div>
    <p className="text-gray-700 font-semibold text-sm md:text-base mb-1">{item.degree}</p>
    <p className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-3">{item.location}</p>
    {item.points.length > 0 && (
      <ul className="space-y-1.5 text-gray-600 text-sm font-medium list-disc pl-5">
        {item.points.map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ul>
    )}
  </div>
);

const Education = () => {
  const { t } = useLang();
  const e = t.education;

  return (
    <section
      id="education"
      className="bg-white pt-20 pb-36 px-6 md:px-12 w-full relative overflow-hidden font-sans bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:60px_60px]"
    >
      <div className="max-w-6xl mx-auto relative z-20">
        {/* Header */}
        <div data-aos="fade-up" className="mb-14 md:mb-16">
          <div className="inline-block border border-gray-300 rounded-full px-5 py-1.5 text-sm text-gray-600 font-bold mb-6 shadow-sm bg-white">
            {e.badge}
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight mb-4 uppercase">{e.heading}</h2>
          <p className="text-gray-500 text-base md:text-lg max-w-xl leading-relaxed">{e.description}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Timeline */}
          <div className="lg:col-span-3">
            {e.items.map((item, i) => (
              <EducationItem key={item.school} item={item} index={i} />
            ))}
          </div>

          {/* Side cards */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {/* Languages */}
            <div data-aos="fade-left" className="bg-[#f8f8f8] border border-gray-200 rounded-3xl p-6">
              <h3 className="text-gray-900 text-lg font-black uppercase tracking-tight mb-4">{e.languagesTitle}</h3>
              <ul className="space-y-3">
                {e.languages.map((l) => (
                  <li key={l.name} className="flex flex-col">
                    <span className="text-gray-900 font-bold">{l.name}</span>
                    <span className="text-gray-500 text-sm font-medium">{l.level}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Publication */}
            <div data-aos="fade-left" data-aos-delay="150" className="bg-[#0a0a0a] rounded-3xl p-6 text-white shadow-[0_20px_45px_rgba(0,0,0,0.15)]">
              <span className="inline-block text-[10px] font-black tracking-widest uppercase text-red-400 bg-red-500/10 px-3 py-1 rounded-full border border-red-500/20 mb-4">
                {e.publicationTitle}
              </span>
              <p className="text-sm leading-relaxed text-white/80">
                <span className="font-bold text-white">{e.publication.authors}</span>{' '}
                <em className="text-white">{e.publication.title}</em>{' '}
                {e.publication.venue}
              </p>
              <a
                href={e.publication.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-5 px-4 py-2 rounded-full bg-[#ff2a2a] text-white text-sm font-semibold hover:bg-red-600 transition-colors"
              >
                {e.publication.linkLabel}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Torn paper divider at bottom (into dark Skills section) */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-30 transform translate-y-1">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-[#0a0a0a]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Education;
