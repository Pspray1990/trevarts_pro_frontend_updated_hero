import { Shield, Target, HardDrive, BookOpen } from 'lucide-react';

export default function Lore() {
  const protocols = [
    {
      id: '01',
      title: 'SECURE ACQUISITION',
      desc: 'Acquire your TrevArts identity through our encrypted USDT gateway. Every asset is a 1-of-1 cryptographic signature.',
      icon: <Shield className="w-6 h-6 text-[#f53513ff]" />,
      color: 'border-[#f53513ff]/30'
    },
    {
      id: '02',
      title: 'COVERT DEPLOYMENT',
      desc: 'Deploy your assets into "Soft Staking" missions. Your NFTs never leave your wallet, ensuring total asset safety.',
      icon: <Target className="w-6 h-6 text-[#a8d904]" />,
      color: 'border-[#a8d904]/30'
    }
  ];

  return (
    <section id="lore" className="relative py-24 bg-[var(--background)] overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '50px 50px' }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* --- ABOUT SECTION (New Content) --- */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f53513ff]/10 border border-[#f53513ff]/20 text-[#f53513ff] text-sm font-semibold mx-auto mb-8">
            <BookOpen className="w-4 h-4" />
            ABOUT TREVARTS
          </div>

          <div className="space-y-8 text-lg md:text-xl text-zinc-400 font-light leading-relaxed max-w-4xl mx-auto">
            <p>
              TrevArts focuses on simplicity, accessibility, and straightforward user experience, allowing creators and buyers to interact directly without unnecessary complexity. The platform supports standard blockchain wallets and payment solutions to facilitate smooth transactions.
            </p>
            <p>
              The platform enables artists and creators to mint, showcase, and sell unique digital assets as non-fungible tokens (NFTs), using transparent on-chain technology to verify ownership and authenticity. Collectors can browse, purchase, and hold digital artworks securely through their personal wallets.
            </p>
            <div className="pt-4 p-6 rounded-2xl bg-white/5 border border-white/10 max-w-3xl mx-auto">
              <p className="text-sm md:text-base italic text-zinc-500">
                <span className="text-[#f53513ff] font-bold mr-2">NOTICE:</span>
                TrevArts does not provide financial advice or investment services. All digital assets are offered as creative and collectible items, and users are responsible for understanding the nature of NFTs and blockchain technology before participating.
              </p>
            </div>
          </div>
        </div>

        {/* --- PROTOCOLS SECTION --- */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-zinc-500 font-bold tracking-[0.3em] text-xs mb-4 uppercase flex items-center gap-2">
              <span className="w-8 h-[1px] bg-[#f53513ff]" />
              System Architecture
            </h2>
            <h3 className="text-4xl md:text-5xl text-white pixel-font leading-tight">
              MISSION <span className="text-[#f53513ff]">PROTOCOL</span>
            </h3>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {protocols.map((item) => (
            <div key={item.id} className={`group p-8 rounded-[2rem] bg-zinc-950 border ${item.color} hover:bg-zinc-900/50 transition-all duration-500`}>
              <div className="flex justify-between items-start mb-8">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/5 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <span className="text-4xl font-black text-white/5 pixel-font group-hover:text-white/10 transition-colors">
                  {item.id}
                </span>
              </div>
              <h4 className="text-xl text-white pixel-font mb-4 tracking-wide group-hover:text-[#f53513ff] transition-colors">
                {item.title}
              </h4>
              <p className="text-zinc-500 text-sm leading-relaxed font-medium">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Global Stats Bar */}
        <div className="mt-20 p-8 rounded-[2.5rem] bg-zinc-900/50 border border-white/5 flex flex-wrap justify-around gap-8 backdrop-blur-sm">
           <div className="flex items-center gap-4">
              <HardDrive className="w-8 h-8 text-[#f53513ff] opacity-50" />
              <div>
                <p className="text-xs text-zinc-500 font-bold uppercase tracking-widest">Protocol Version</p>
                <p className="text-white font-mono">v2.04.88_BETA</p>
              </div>
           </div>
           <div className="flex items-center gap-4">
              <div className="w-3 h-3 rounded-full bg-[#a8d904] animate-pulse" />
              <div>
                <p className="text-xs text-zinc-500 font-bold uppercase tracking-widest">Global Status</p>
                <p className="text-white font-mono">ALL SYSTEMS NOMINAL</p>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
}
