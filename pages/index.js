import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';

export default function MoyhazElite() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState(''); // 'user' atau 'admin'
  const [auth, setAuth] = useState({ user: '', pw: '' });
  const [selected, setSelected] = useState(null);

  // DATA 100+ BENEFIT (TEMPLATE)
  const items = Array.from({ length: 110 }, (_, i) => ({
    id: i + 1,
    title: i < 50 ? `SCRIPT_PRIME_v${i+1}` : i < 60 ? `TUTOR_VIDEO_EXCL` : `FUNC_CORE_${i}`,
    type: i < 50 ? 'SCRIPT' : i < 60 ? 'VIDEO' : 'FUNCTION',
    logo: `https://api.dicebear.com/7.x/bottts-neutral/svg?seed=${i}&backgroundColor=0d1117`,
    link: '#',
    tutorial: "EXECUTION STEPS:\n1. Update environment\n2. Link binary files\n3. Run as administrator."
  }));

  const handleLogin = (e) => {
    e.preventDefault();
    if (auth.user === 'moyhaz' && auth.pw === 'user123') {
      setIsLoggedIn(true); setRole('user');
    } else if (auth.user === 'admin' && auth.pw === 'admin123') {
      setIsLoggedIn(true); setRole('admin');
    } else {
      alert('ACCESS DENIED: INVALID CREDENTIALS');
    }
  };

  return (
    <div className="min-h-screen relative font-mono">
      <Head><title>MOYHAZ | ELITE VAULT</title></Head>
      
      {/* Background Animasi */}
      <div className="digital-bg"><div className="scanline" /></div>

      <AnimatePresence mode="wait">
        {!isLoggedIn ? (
          /* --- LOGIN PAGE --- */
          <motion.div 
            key="login"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, y: -20 }}
            className="flex items-center justify-center min-h-screen p-6"
          >
            <div className="w-full max-w-sm bg-[#161b22]/90 border-2 border-[#30363d] p-8 rounded-none shadow-[0_0_50px_rgba(0,0,0,0.5)]">
              <div className="flex justify-center mb-8">
                <div className="w-16 h-16 border-2 border-blue-500 flex items-center justify-center text-blue-500 font-black text-3xl">M</div>
              </div>
              <h1 className="text-center text-white font-bold tracking-[0.3em] mb-10">CORE_SYSTEM_ACCESS</h1>
              <form onSubmit={handleLogin} className="space-y-4">
                <input 
                  className="w-full bg-black/50 border border-[#30363d] p-4 text-sm text-blue-400 focus:border-blue-500 outline-none transition-all"
                  placeholder="IDENTITY" onChange={e => setAuth({...auth, user: e.target.value})}
                />
                <input 
                  className="w-full bg-black/50 border border-[#30363d] p-4 text-sm text-blue-400 focus:border-blue-500 outline-none transition-all"
                  type="password" placeholder="SECURITY_CODE" onChange={e => setAuth({...auth, pw: e.target.value})}
                />
                <button className="w-full bg-white text-black font-black py-4 hover:bg-blue-500 hover:text-white transition-all tracking-widest">INITIATE_LOGIN</button>
              </form>
            </div>
          </motion.div>
        ) : (
          /* --- DASHBOARD PAGE --- */
          <motion.div 
            key="dashboard"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="p-4 md:p-8"
          >
            {/* Header Elegan */}
            <header className="max-w-7xl mx-auto flex justify-between items-end border-b-2 border-[#30363d] pb-6 mb-10">
              <div>
                <p className="text-blue-500 text-[10px] tracking-[0.5em] mb-2 uppercase">Verified Access: {role}</p>
                <h1 className="text-3xl font-black text-white italic tracking-tighter">MOYHAZ <span className="text-blue-500">VAULT.</span></h1>
              </div>
              <button onClick={() => setIsLoggedIn(false)} className="text-[10px] border border-red-500 text-red-500 px-4 py-1 hover:bg-red-500 hover:text-white transition-all">DISCONNECT</button>
            </header>

            {/* Grid 2 Kolom HP, Rapi Kotak */}
            <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-0">
              {items.map((item) => (
                <motion.div 
                  key={item.id}
                  whileHover={{ backgroundColor: "rgba(56, 139, 253, 0.1)" }}
                  onClick={() => setSelected(item)}
                  className="aspect-square-box border border-[#30363d] flex flex-col items-center justify-center p-4 cursor-pointer relative group overflow-hidden"
                >
                  <div className="absolute top-2 right-2 opacity-20 group-hover:opacity-100 text-[8px] text-blue-500">ID:0{item.id}</div>
                  <img src={item.logo} className="w-12 h-12 grayscale group-hover:grayscale-0 transition-all mb-4" />
                  <h3 className="text-[9px] font-bold text-center text-white tracking-widest leading-tight">{item.title}</h3>
                  <div className="mt-3 h-[1px] w-4 bg-blue-500 group-hover:w-12 transition-all" />
                </motion.div>
              ))}
            </div>

            {/* Modal Detail */}
            <AnimatePresence>
              {selected && (
                <motion.div 
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/90 backdrop-blur-sm"
                >
                  <motion.div 
                    initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }}
                    className="bg-[#0d1117] border-2 border-blue-500 w-full max-w-lg p-8 relative"
                  >
                    <button onClick={() => setSelected(null)} className="absolute top-4 right-4 text-blue-500 font-bold">CLOSE_X</button>
                    <div className="flex items-center gap-6 mb-8 border-b border-[#30363d] pb-6">
                      <img src={selected.logo} className="w-20 h-20 border border-blue-500 p-2" />
                      <div>
                        <h2 className="text-2xl font-black text-white italic">{selected.title}</h2>
                        <span className="text-[10px] bg-blue-500 text-black px-2 py-0.5 font-bold uppercase">{selected.type}</span>
                      </div>
                    </div>
                    <div className="bg-black border border-[#30363d] p-4 mb-8">
                      <p className="text-[10px] text-blue-500 mb-2 font-bold tracking-widest">// DEPLOYMENT_MANUAL</p>
                      <pre className="text-xs text-gray-400 font-mono leading-relaxed">{selected.tutorial}</pre>
                    </div>
                    <a 
                      href={selected.link} download 
                      className="block w-full bg-blue-500 text-white text-center py-4 font-black hover:bg-white hover:text-black transition-all tracking-[0.2em]"
                    >
                      DOWNLOAD_RESOURCE
                    </a>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
