import { Sparkles, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <header className="relative pt-24 pb-16 lg:pt-40 lg:pb-32 overflow-hidden bg-[var(--background)]">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-[#f53513ff]/20 blur-[150px] rounded-full animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-[#a8d904]/10 blur-[120px] rounded-full" />
      
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Left Content - Typography & CTA */}
        <div className="space-y-8 text-center lg:text-left">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
            <Zap className="w-4 h-4 text-[#a8d904] fill-[#a8d904]" />
            <span className="text-zinc-300 text-xs font-bold tracking-[0.2em] uppercase">
              Genesis Launch
            </span>
          </div>
 {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl leading-[1.1] text-[var(--foreground)] tracking-tight pixel-font">
            TrevArts <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f53513ff] via-[#a8d904] to-[#f53513ff] bg-[length:200%_auto] animate-gradient">
              DIGITAL SOCIETY
            </span>
          </h1>
             {/* Description */}
          {/* <p className="text-lg sm:text-xl text-[var(--muted)] leading-relaxed max-w-xl mx-auto lg:mx-0">
            TrevArts is a digital marketplace dedicated to the creation and sale of <strong className="text-[var(--foreground)]">blockchain-based</strong> digital art and collectibles. It is building the infrastructure to power the next generation of digital ownership and creativity.
          </p> */}
          <p className="text-xl text-[var(--muted)] max-w-3xl mx-auto font-light leading-relaxed">
By purchasing the NFT, you unlock a smart, on-chain gateway to your investment account.<strong className="text-[var(--foreground)]">The exact value of the NFT you acquire is automatically mapped to your balance on the trading platform</strong>, creating a direct, verifiable link between ownership and capital. More than a digital collectible, <strong className="text-[var(--foreground)]">the NFT acts as a futuristic access layer</strong>—where blockchain identity, value, and trading infrastructure converge into a seamless, next-generation investment experience.</p>
          {/* CTA Buttons - Mobile Fullwidth Logic */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link 
              to="/nftcheckout" 
              className="w-full sm:w-auto px-10 py-5 bg-[#f53513ff] text-zinc-950 text-lg font-black rounded-2xl hover:bg-[#a8d904] hover:shadow-[0_0_30px_rgba(245,53,19,0.4)] transition-all duration-300 flex items-center justify-center gap-3 group"
            >
              MINT NOW
              <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            </Link>
              <a
              href="#lore"
              className="w-full sm:w-auto px-10 py-5 bg-transparent border-2 border-[#f53513ff]/30 text-zinc-200 text-lg font-medium rounded-lg hover:bg-[#f53513ff]/10 hover:border-[#f53513ff] transition-all flex items-center justify-center gap-2"
            >
              EXPLORE MORE
              <ArrowRight className="w-5 h-5 opacity-50" />
            </a>
          </div>

          {/* Integrated Stats */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-10 pt-10">
            <div className="space-y-1">
              <p className="text-3xl text-white pixel-font"></p>
              <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold">Total Supply</p>
            </div>
            <div className="w-px h-12 bg-white/10" />
            <div className="space-y-1">
              <p className="text-3xl text-[#a8d904] pixel-font"></p>
              <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold">Floor Price</p>
            </div>
            <div className="w-px h-12 bg-white/10" />
            <div className="space-y-1">
              <p className="text-3xl text-white pixel-font"></p>
              <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold">Network</p>
            </div>
          </div>
        </div>

        {/* Right Content - Elevated NFT Preview Card */}
        <div className="relative group">
          {/* Back Glow */}
          <div className="absolute -inset-4 bg-gradient-to-r from-[#f53513ff] to-[#a8d904] rounded-[2.5rem] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
          
          <div className="relative bg-zinc-950/80 border border-white/10 backdrop-blur-xl rounded-[2rem] p-5 shadow-2xl overflow-hidden">
            {/* Visual Header */}
            <div className="flex justify-between items-center mb-5 px-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#f53513ff]" />
                <div className="w-3 h-3 rounded-full bg-zinc-800" />
                <div className="w-3 h-3 rounded-full bg-zinc-800" />
              </div>
              <ShieldCheck className="w-5 h-5 text-zinc-600" />
            </div>

            {/* Main NFT Image Container */}
            <div className="relative aspect-square rounded-2xl bg-zinc-900 overflow-hidden border border-white/5">
              {/* Scanning Animation Line */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#f53513ff] to-transparent shadow-[0_0_15px_#f53513ff] animate-scan z-20" />
              
              <img
                src="/assets/nfts/home.jpg"
                alt="TrevArts Genesis"
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
              />
              
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-black/40 backdrop-blur-md border border-white/10">
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-[10px] text-zinc-400 uppercase font-bold tracking-widest mb-1">Current Status</p>
                    <p className="text-white font-bold flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#a8d904] animate-pulse" />
                      UNREVEALED
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] text-zinc-400 uppercase font-bold tracking-widest mb-1">Rank</p>
                    <p className="text-white font-bold">???</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Metadata */}
            <div className="mt-6 flex justify-between items-center px-2">
              <div className="space-y-1">
                <h3 className="text-2xl text-white pixel-font tracking-tight">TREVARTS #001</h3>
                <p className="text-xs text-zinc-500 font-bold uppercase tracking-wider">Genesis Society Collection</p>
              </div>
              <div className="w-12 h-12 rounded-full border-2 border-[#a8d904] border-t-transparent animate-spin-slow flex items-center justify-center">
                 <div className="w-8 h-8 rounded-full bg-[#a8d904]/20" />
              </div>
            </div>
          </div>
        </div>

      </div>
    </header>
  );
}