import { Mouse, Monitor, Crosshair, Settings, Search, Menu, ArrowRight, Activity, Zap, Target, Keyboard } from 'lucide-react';

// Common Props
interface WireframeProps {
  onSelect?: () => void;
  className?: string;
}

// Mock Data (Japanese)
const categories = [
  { name: 'マウス', icon: Mouse, color: 'bg-blue-500' },
  { name: 'マウスパッド', icon: Monitor, color: 'bg-indigo-500' },
  { name: 'エイム考察', icon: Crosshair, color: 'bg-red-500' },
  { name: '感度計算', icon: Settings, color: 'bg-green-500' },
];

const featuredArticles = [
  { title: 'Logicool G Pro X Superlight 2 レビュー', category: 'マウス', date: '2024.02.20' },
  { title: 'Artisan 零 Soft レビュー', category: 'マウスパッド', date: '2024.02.18' },
  { title: 'Valorantにおける最適感度とは', category: 'エイム考察', date: '2024.02.15' },
];

// --- Wireframe 1: Classic Hero (Desktop) ---
export const Wireframe1 = ({ onSelect, className }: WireframeProps) => (
  <div className={`w-full h-full bg-white text-slate-900 flex flex-col overflow-hidden border border-slate-200 rounded-xl shadow-sm ${className}`} onClick={onSelect}>
    <header className="h-14 border-b flex items-center justify-between px-8 bg-slate-50">
      <div className="font-bold text-lg flex items-center gap-2">
        <div className="w-6 h-6 bg-slate-900 rounded"></div>
        FPS LAB
      </div>
      <nav className="flex gap-6 text-sm font-medium text-slate-600">
        {categories.map((c, i) => (
          <span key={i} className="hover:text-blue-600 cursor-pointer">{c.name}</span>
        ))}
      </nav>
      <div className="w-8 h-8 bg-slate-200 rounded-full"></div>
    </header>
    <main className="flex-1 overflow-y-auto">
      <div className="h-64 bg-slate-100 flex items-center justify-center flex-col gap-4 p-10 text-center border-b">
        <h1 className="font-bold text-3xl">究極のFPSギアガイド</h1>
        <p className="text-slate-500">あなたに最適なデバイスと設定を見つけよう</p>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg text-sm font-bold mt-2">記事を読む</button>
      </div>
      <div className="max-w-4xl mx-auto py-8 px-4">
        <h2 className="font-bold text-xl mb-4">カテゴリー</h2>
        <div className="grid grid-cols-4 gap-4">
          {categories.map((c, i) => (
            <div key={i} className="aspect-video bg-slate-50 border rounded-xl flex flex-col items-center justify-center gap-3 hover:bg-slate-100 transition-colors cursor-pointer group">
              <div className={`p-3 rounded-full bg-white shadow-sm group-hover:scale-110 transition-transform`}>
                <c.icon className="w-6 h-6 text-slate-700" />
              </div>
              <span className="text-sm font-bold">{c.name}</span>
            </div>
          ))}
        </div>
      </div>
    </main>
  </div>
);

// --- Wireframe 2: Sidebar Navigation (Desktop) ---
export const Wireframe2 = ({ onSelect, className }: WireframeProps) => (
  <div className={`w-full h-full bg-slate-50 text-slate-900 flex overflow-hidden border border-slate-200 rounded-xl shadow-sm ${className}`} onClick={onSelect}>
    <aside className="w-64 bg-white border-r flex flex-col p-6 gap-2">
      <div className="font-bold text-xl mb-8 flex items-center gap-2">
        <Activity className="w-6 h-6 text-blue-600" />
        GEAR.SEARCH
      </div>
      {categories.map((c, i) => (
        <div key={i} className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 text-slate-600 hover:text-blue-600 cursor-pointer transition-colors">
          <c.icon className="w-5 h-5" />
          <span className="font-medium">{c.name}</span>
        </div>
      ))}
      <div className="mt-auto p-4 bg-slate-100 rounded-xl">
        <p className="text-xs font-bold mb-1">感度コンバーター</p>
        <p className="text-[10px] text-slate-500">ゲーム間の感度を即座に変換</p>
      </div>
    </aside>
    <main className="flex-1 p-8 overflow-y-auto">
      <header className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold">最新のレビュー</h2>
        <div className="flex gap-2">
          <input type="text" placeholder="デバイスを検索..." className="bg-white border px-4 py-2 rounded-lg text-sm w-64" />
        </div>
      </header>
      <div className="grid grid-cols-3 gap-6">
        {featuredArticles.map((a, i) => (
          <div key={i} className="bg-white p-4 rounded-xl shadow-sm border hover:shadow-md transition-shadow cursor-pointer">
            <div className="aspect-video bg-slate-200 rounded-lg mb-4"></div>
            <div className="text-xs text-blue-600 font-bold mb-1">{a.category}</div>
            <h3 className="font-bold text-lg leading-tight mb-2">{a.title}</h3>
            <p className="text-xs text-slate-400">{a.date}</p>
          </div>
        ))}
        <div className="bg-white p-4 rounded-xl shadow-sm border flex items-center justify-center text-slate-400 font-medium">
          もっと見る
        </div>
      </div>
    </main>
  </div>
);

// --- Wireframe 3: Bento Grid (Desktop) ---
export const Wireframe3 = ({ onSelect, className }: WireframeProps) => (
  <div className={`w-full h-full bg-zinc-950 text-white flex flex-col overflow-hidden border border-zinc-800 rounded-xl shadow-sm ${className}`} onClick={onSelect}>
    <header className="h-16 flex items-center justify-between px-8 border-b border-zinc-800">
      <span className="font-mono font-bold text-2xl text-green-400 tracking-tighter">AIM.OS</span>
      <nav className="flex gap-6 text-sm font-mono text-zinc-400">
        <span>HARDWARE</span>
        <span>SOFTWARE</span>
        <span>COMMUNITY</span>
      </nav>
    </header>
    <main className="flex-1 p-8 overflow-y-auto">
      <div className="grid grid-cols-4 grid-rows-2 gap-4 h-full min-h-[400px]">
        <div className="col-span-2 row-span-2 bg-zinc-900 rounded-2xl p-8 flex flex-col justify-end relative overflow-hidden group cursor-pointer border border-zinc-800 hover:border-green-500/50 transition-colors">
          <div className="absolute top-4 right-4 bg-green-500 text-black text-xs px-3 py-1 rounded-full font-bold">NEW</div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
          <h3 className="font-bold text-3xl relative z-10 mb-2">G Pro X Superlight 2</h3>
          <p className="text-sm text-zinc-400 relative z-10">新たなスタンダードの誕生。2000Hzポーリングレート対応。</p>
        </div>
        <div className="col-span-1 bg-zinc-900 rounded-2xl p-6 flex flex-col gap-2 border border-zinc-800 hover:bg-zinc-800 transition-colors cursor-pointer">
          <Crosshair className="w-8 h-8 text-red-400 mb-auto" />
          <span className="text-xs text-zinc-500 font-mono">TRAINING</span>
          <span className="font-bold text-lg">エイム練習法</span>
        </div>
        <div className="col-span-1 bg-zinc-900 rounded-2xl p-6 flex flex-col gap-2 border border-zinc-800 hover:bg-zinc-800 transition-colors cursor-pointer">
          <Settings className="w-8 h-8 text-blue-400 mb-auto" />
          <span className="text-xs text-zinc-500 font-mono">CALCULATOR</span>
          <span className="font-bold text-lg">感度計算機</span>
        </div>
        <div className="col-span-2 bg-zinc-900 rounded-2xl p-6 flex items-center justify-between border border-zinc-800 hover:bg-zinc-800 transition-colors cursor-pointer">
          <div className="flex flex-col">
             <span className="text-xs text-zinc-500 font-mono mb-1">LATEST REVIEW</span>
             <span className="font-bold text-xl">Artisan 零 Soft</span>
          </div>
          <ArrowRight className="w-6 h-6 text-zinc-400" />
        </div>
      </div>
    </main>
  </div>
);

// --- Wireframe 4: Split Screen (Desktop) ---
export const Wireframe4 = ({ onSelect, className }: WireframeProps) => (
  <div className={`w-full h-full bg-white text-slate-900 flex overflow-hidden border border-slate-200 rounded-xl shadow-sm ${className}`} onClick={onSelect}>
    <div className="w-1/2 bg-slate-900 text-white flex flex-col relative group cursor-pointer overflow-hidden">
      <div className="absolute inset-0 bg-blue-900/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
      <div className="flex-1 flex flex-col items-center justify-center p-12 text-center relative z-10">
        <Mouse className="w-16 h-16 mb-6 text-blue-400" />
        <h2 className="font-black text-4xl tracking-tight mb-4">HARDWARE</h2>
        <p className="text-slate-400 max-w-xs">マウス、マウスパッド、キーボード。<br/>勝利のためのデバイス選び。</p>
        <button className="mt-8 px-6 py-2 border border-white/20 rounded-full text-sm hover:bg-white hover:text-black transition-colors">デバイスを探す</button>
      </div>
    </div>
    <div className="w-1/2 bg-white text-slate-900 flex flex-col relative group cursor-pointer overflow-hidden">
      <div className="absolute inset-0 bg-slate-50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
      <div className="flex-1 flex flex-col items-center justify-center p-12 text-center relative z-10">
        <Target className="w-16 h-16 mb-6 text-red-500" />
        <h2 className="font-black text-4xl tracking-tight mb-4">SOFTWARE</h2>
        <p className="text-slate-500 max-w-xs">エイム理論、感度調整、メンタル。<br/>内面から強くなる。</p>
        <button className="mt-8 px-6 py-2 border border-black/10 rounded-full text-sm hover:bg-black hover:text-white transition-colors">理論を学ぶ</button>
      </div>
    </div>
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center font-bold text-xs shadow-xl z-20">
      VS
    </div>
  </div>
);

// --- Wireframe 5: Minimal Typographic (Desktop) ---
export const Wireframe5 = ({ onSelect, className }: WireframeProps) => (
  <div className={`w-full h-full bg-[#f4f4f0] text-[#1a1a1a] flex flex-col overflow-hidden border border-[#e0e0e0] rounded-xl shadow-sm font-serif ${className}`} onClick={onSelect}>
    <header className="px-12 py-8 flex justify-between items-end border-b border-black/5">
      <h1 className="text-5xl leading-none font-light tracking-tighter">FPS<br/>RESEARCH</h1>
      <div className="flex gap-8 text-sm font-sans tracking-widest uppercase">
        <span>About</span>
        <span>Journal</span>
        <span>Contact</span>
      </div>
    </header>
    <main className="flex-1 px-12 py-8 flex gap-12">
      <div className="w-1/3 pt-4">
        <p className="font-sans text-sm leading-relaxed text-gray-500">
          FPS Researchは、競技シーンにおけるデバイスの性能と、人間のエイム能力の限界を探求するデジタルラボです。
        </p>
      </div>
      <div className="w-2/3 flex flex-col gap-6">
        {[
          { en: 'Mouse Review', jp: 'マウスレビュー', num: '01' },
          { en: 'Mousepad', jp: 'マウスパッド', num: '02' },
          { en: 'Aim Theory', jp: 'エイム理論', num: '03' },
          { en: 'Sensitivity', jp: '感度コンバーター', num: '04' }
        ].map((item, i) => (
          <div key={i} className="flex justify-between items-baseline border-b border-black/10 pb-4 group cursor-pointer hover:pl-4 transition-all duration-300">
            <div className="flex items-baseline gap-4">
              <span className="text-xs font-sans text-gray-400">{item.num}</span>
              <span className="text-3xl font-light group-hover:italic transition-all">{item.en}</span>
            </div>
            <span className="text-xs font-sans text-gray-400">{item.jp}</span>
          </div>
        ))}
      </div>
    </main>
  </div>
);

// --- Wireframe 6: Gamer / Dark Mode (Desktop) ---
export const Wireframe6 = ({ onSelect, className }: WireframeProps) => (
  <div className={`w-full h-full bg-black text-white flex flex-col overflow-hidden border border-zinc-800 rounded-xl shadow-sm ${className}`} onClick={onSelect}>
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-purple-900/20 via-black to-black pointer-events-none"></div>
    <header className="h-16 flex items-center justify-between px-8 relative z-10 border-b border-white/10">
      <div className="flex items-center gap-2">
        <Zap className="w-6 h-6 text-yellow-400 fill-yellow-400" />
        <span className="font-bold text-xl italic tracking-wider">FRAG.GEAR</span>
      </div>
      <div className="flex gap-1">
        <div className="px-4 py-2 bg-white/10 rounded hover:bg-white/20 cursor-pointer text-sm font-bold">DEVICES</div>
        <div className="px-4 py-2 hover:bg-white/10 rounded cursor-pointer text-sm font-bold text-gray-400">GUIDES</div>
        <div className="px-4 py-2 hover:bg-white/10 rounded cursor-pointer text-sm font-bold text-gray-400">TOOLS</div>
      </div>
      <div className="w-8 h-8 rounded bg-gradient-to-br from-purple-500 to-blue-500"></div>
    </header>
    <main className="flex-1 p-8 relative z-10 overflow-y-auto">
      <div className="flex gap-8 h-full">
        <div className="w-64 shrink-0 space-y-2">
          <h3 className="text-xs font-bold text-gray-500 uppercase mb-4 tracking-widest">Categories</h3>
          {categories.map((c, i) => (
            <div key={i} className="flex items-center gap-3 p-3 rounded bg-white/5 border border-white/5 hover:border-purple-500/50 cursor-pointer transition-colors">
              <div className={`w-2 h-2 rounded-full ${c.color} shadow-[0_0_10px_currentColor]`}></div>
              <span className="text-sm font-mono">{c.name}</span>
            </div>
          ))}
        </div>
        <div className="flex-1">
          <h3 className="text-xs font-bold text-gray-500 uppercase mb-4 tracking-widest">Featured</h3>
          <div className="grid grid-cols-2 gap-4 h-[calc(100%-2rem)]">
            <div className="bg-zinc-900/50 border border-white/10 rounded-xl p-6 relative overflow-hidden group cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <span className="inline-block px-2 py-1 bg-yellow-400 text-black text-[10px] font-bold rounded mb-2">HOT</span>
              <h2 className="text-2xl font-bold mb-2">Viper V3 Pro</h2>
              <p className="text-sm text-gray-400">Razerの最新フラッグシップを徹底検証。</p>
            </div>
            <div className="grid grid-rows-2 gap-4">
              <div className="bg-zinc-900/50 border border-white/10 rounded-xl p-4 flex items-center gap-4 cursor-pointer hover:bg-white/5 transition-colors">
                <div className="w-16 h-16 bg-zinc-800 rounded flex items-center justify-center">
                  <Monitor className="w-8 h-8 text-gray-600" />
                </div>
                <div>
                  <div className="text-xs text-purple-400 font-bold mb-1">MOUSEPAD</div>
                  <div className="font-bold">Artisan 飛燕 MID</div>
                </div>
              </div>
              <div className="bg-zinc-900/50 border border-white/10 rounded-xl p-4 flex items-center gap-4 cursor-pointer hover:bg-white/5 transition-colors">
                <div className="w-16 h-16 bg-zinc-800 rounded flex items-center justify-center">
                  <Settings className="w-8 h-8 text-gray-600" />
                </div>
                <div>
                  <div className="text-xs text-green-400 font-bold mb-1">TOOL</div>
                  <div className="font-bold">感度コンバーター</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
);

// --- Wireframe 7: Search First (Desktop) ---
export const Wireframe7 = ({ onSelect, className }: WireframeProps) => (
  <div className={`w-full h-full bg-white text-slate-900 flex flex-col overflow-hidden border border-slate-200 rounded-xl shadow-sm ${className}`} onClick={onSelect}>
    <header className="h-16 flex items-center justify-end px-8 gap-6 text-sm text-slate-600">
      <span>レビュー一覧</span>
      <span>ランキング</span>
      <span>感度ツール</span>
      <div className="w-8 h-8 bg-slate-200 rounded-full"></div>
    </header>
    <main className="flex-1 flex flex-col items-center justify-center p-8 gap-8 -mt-16">
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-bold tracking-tight text-slate-800">FPS Search</h1>
        <p className="text-slate-500">あなたのエイムを支える、最高のギアを見つけよう。</p>
      </div>
      <div className="w-full max-w-2xl relative">
        <input type="text" placeholder="マウス、マウスパッド、プロゲーマー設定..." className="w-full bg-white border border-slate-200 rounded-full py-4 px-6 shadow-lg text-lg focus:ring-2 ring-blue-500 outline-none transition-shadow hover:shadow-xl" disabled />
        <Search className="w-6 h-6 text-blue-500 absolute right-5 top-4" />
      </div>
      <div className="flex gap-3 text-sm">
        <span className="text-slate-400">急上昇:</span>
        {['G Pro X 2', 'Wooting 60HE', 'Valorant 感度', 'Artisan'].map((tag, i) => (
          <span key={i} className="text-blue-600 hover:underline cursor-pointer bg-blue-50 px-2 py-0.5 rounded">{tag}</span>
        ))}
      </div>
    </main>
    <footer className="h-12 border-t bg-slate-50 flex items-center justify-center text-xs text-slate-400 gap-8">
      <span>&copy; 2024 FPS Research</span>
      <span>プライバシーポリシー</span>
      <span>利用規約</span>
    </footer>
  </div>
);

// --- Wireframe 8: Feed / Blog Style (Desktop) ---
export const Wireframe8 = ({ onSelect, className }: WireframeProps) => (
  <div className={`w-full h-full bg-slate-50 text-slate-900 flex flex-col overflow-hidden border border-slate-200 rounded-xl shadow-sm ${className}`} onClick={onSelect}>
    <header className="h-16 bg-white border-b flex items-center justify-between px-8 sticky top-0 z-20">
      <div className="font-bold text-xl">FPS REVIEW</div>
      <div className="flex gap-4">
        <button className="p-2 hover:bg-slate-100 rounded-full"><Search className="w-5 h-5" /></button>
        <button className="p-2 hover:bg-slate-100 rounded-full"><Menu className="w-5 h-5" /></button>
      </div>
    </header>
    <main className="flex-1 overflow-y-auto">
      <div className="max-w-6xl mx-auto flex gap-8 p-8">
        <aside className="w-64 shrink-0 sticky top-8 h-fit">
          <h3 className="font-bold text-slate-900 mb-4 px-2">フィード</h3>
          <nav className="space-y-1">
            <div className="px-3 py-2 bg-blue-50 text-blue-700 rounded-lg font-medium cursor-pointer">すべて</div>
            {categories.map((c, i) => (
              <div key={i} className="px-3 py-2 text-slate-600 hover:bg-slate-100 rounded-lg cursor-pointer flex items-center justify-between group">
                <span>{c.name}</span>
                <span className="text-xs bg-slate-200 px-2 py-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">12</span>
              </div>
            ))}
          </nav>
        </aside>
        
        <div className="flex-1 space-y-6">
          {[1, 2, 3].map((_, i) => (
            <article key={i} className="bg-white rounded-xl shadow-sm border overflow-hidden flex hover:shadow-md transition-shadow cursor-pointer h-48">
              <div className="w-64 bg-slate-200 shrink-0"></div>
              <div className="p-6 flex flex-col">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded">REVIEW</span>
                  <span className="text-xs text-slate-400">2024.02.20</span>
                </div>
                <h3 className="text-xl font-bold leading-tight mb-2">2024年最強のマウスはこれだ：徹底比較ランキング</h3>
                <p className="text-sm text-slate-500 line-clamp-2 mb-auto">50種類以上のゲーミングマウスをテストし、形状、センサー、重量、クリック感を比較。あなたのプレイスタイルに最適な一台が見つかります。</p>
                <div className="flex items-center gap-2 mt-4">
                  <div className="w-6 h-6 rounded-full bg-slate-200"></div>
                  <span className="text-xs font-medium text-slate-700">Editor</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <aside className="w-72 shrink-0 space-y-6">
          <div className="bg-white p-4 rounded-xl border shadow-sm">
            <h3 className="font-bold text-sm mb-4">人気記事ランキング</h3>
            <div className="space-y-4">
              {[1, 2, 3].map((n) => (
                <div key={n} className="flex gap-3 items-start">
                  <span className="text-lg font-bold text-slate-300 leading-none">{n}</span>
                  <p className="text-sm font-medium leading-snug hover:text-blue-600 cursor-pointer">Valorantプロが使用するマウスパッドTOP5</p>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </main>
  </div>
);

// --- Wireframe 9: Dashboard / Analytics (Desktop) ---
export const Wireframe9 = ({ onSelect, className }: WireframeProps) => (
  <div className={`w-full h-full bg-slate-100 text-slate-900 flex flex-col overflow-hidden border border-slate-200 rounded-xl shadow-sm ${className}`} onClick={onSelect}>
    <header className="h-14 bg-white border-b px-6 flex items-center justify-between">
      <div className="flex items-center gap-8">
        <div className="font-bold text-lg">FPS DATA</div>
        <nav className="flex gap-4 text-sm font-medium text-slate-500">
          <span className="text-slate-900">ダッシュボード</span>
          <span>デバイスDB</span>
          <span>プレイヤー統計</span>
        </nav>
      </div>
      <div className="flex items-center gap-4">
        <button className="bg-blue-600 text-white px-4 py-1.5 rounded text-sm font-bold">ログイン</button>
      </div>
    </header>
    <main className="flex-1 p-6 overflow-y-auto">
      <div className="grid grid-cols-4 gap-6 h-full">
        <div className="col-span-3 grid grid-cols-3 gap-6 grid-rows-[auto_1fr]">
          <div className="bg-white p-5 rounded-xl shadow-sm border">
            <div className="flex justify-between items-start mb-2">
              <span className="text-xs font-bold text-slate-500 uppercase">登録デバイス数</span>
              <Keyboard className="w-4 h-4 text-slate-400" />
            </div>
            <div className="text-2xl font-bold">1,248</div>
            <div className="text-xs text-green-600 font-medium mt-1">+12 this week</div>
          </div>
          <div className="bg-white p-5 rounded-xl shadow-sm border">
            <div className="flex justify-between items-start mb-2">
              <span className="text-xs font-bold text-slate-500 uppercase">レビュー数</span>
              <Activity className="w-4 h-4 text-slate-400" />
            </div>
            <div className="text-2xl font-bold">8,502</div>
            <div className="text-xs text-green-600 font-medium mt-1">+84 this week</div>
          </div>
          <div className="bg-white p-5 rounded-xl shadow-sm border">
            <div className="flex justify-between items-start mb-2">
              <span className="text-xs font-bold text-slate-500 uppercase">アクティブユーザー</span>
              <Target className="w-4 h-4 text-slate-400" />
            </div>
            <div className="text-2xl font-bold">24.5k</div>
            <div className="text-xs text-green-600 font-medium mt-1">+1.2k this week</div>
          </div>
          
          <div className="col-span-2 bg-white p-6 rounded-xl shadow-sm border flex flex-col">
            <h3 className="font-bold text-slate-800 mb-4">人気デバイスランキング (Weekly)</h3>
            <div className="flex-1 space-y-4">
              {[1, 2, 3, 4].map((n) => (
                <div key={n} className="flex items-center gap-4 p-2 hover:bg-slate-50 rounded-lg transition-colors">
                  <span className="font-mono font-bold text-slate-300 w-4">{n}</span>
                  <div className="w-10 h-10 bg-slate-200 rounded"></div>
                  <div className="flex-1">
                    <div className="text-sm font-bold">Logicool G Pro X Superlight 2</div>
                    <div className="text-xs text-slate-500">Mouse / Wireless</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-bold text-blue-600">9.8</div>
                    <div className="text-[10px] text-slate-400">Score</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border flex flex-col gap-4">
            <h3 className="font-bold text-slate-800">ツール</h3>
            <button className="flex-1 bg-slate-50 border border-slate-200 rounded-lg flex flex-col items-center justify-center gap-2 hover:bg-slate-100 transition-colors group">
              <Settings className="w-8 h-8 text-slate-400 group-hover:text-blue-500 transition-colors" />
              <span className="font-bold text-sm">感度コンバーター</span>
            </button>
            <button className="flex-1 bg-slate-50 border border-slate-200 rounded-lg flex flex-col items-center justify-center gap-2 hover:bg-slate-100 transition-colors group">
              <Crosshair className="w-8 h-8 text-slate-400 group-hover:text-red-500 transition-colors" />
              <span className="font-bold text-sm">eDPI計算機</span>
            </button>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm border">
          <h3 className="font-bold text-slate-800 mb-4">新着レビュー</h3>
          <div className="space-y-6 relative">
             <div className="absolute left-1.5 top-2 bottom-2 w-0.5 bg-slate-100"></div>
             {[1, 2, 3, 4, 5].map((_, i) => (
               <div key={i} className="flex gap-4 relative">
                 <div className="w-3 h-3 rounded-full bg-blue-500 shrink-0 mt-1.5 ring-4 ring-white"></div>
                 <div>
                   <div className="text-xs text-slate-400 mb-0.5">2時間前</div>
                   <div className="text-sm font-bold leading-snug">Razer Viper V3 Pro レビュー：軽量マウスの到達点</div>
                 </div>
               </div>
             ))}
          </div>
        </div>
      </div>
    </main>
  </div>
);

// --- Wireframe 10: Asymmetric / Brutalist (Desktop) ---
export const Wireframe10 = ({ onSelect, className }: WireframeProps) => (
  <div className={`w-full h-full bg-[#E0E0E0] text-black flex flex-col overflow-hidden border border-black rounded-xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] ${className}`} onClick={onSelect}>
    <header className="border-b border-black p-4 flex justify-between bg-yellow-400">
      <span className="font-black text-2xl tracking-tighter">FPS//ZONE</span>
      <div className="flex gap-6 font-bold text-sm underline decoration-2 underline-offset-4">
        <span>MOUSE</span>
        <span>PAD</span>
        <span>KEYBOARD</span>
        <span>SENS</span>
      </div>
    </header>
    <main className="flex-1 grid grid-cols-4 grid-rows-3">
      <div className="col-span-2 row-span-3 border-r border-black bg-white p-8 flex flex-col justify-between relative group cursor-pointer overflow-hidden">
        <div className="absolute inset-0 bg-blue-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-0"></div>
        <div className="relative z-10 group-hover:text-white transition-colors">
          <h1 className="text-6xl font-black leading-none mb-4">DONT<br/>MISS<br/>THIS</h1>
          <p className="font-mono text-sm max-w-xs">今週の注目記事：プロゲーマーの9割が使用するマウスパッドとは？</p>
        </div>
        <div className="relative z-10 flex justify-between items-end group-hover:text-white transition-colors">
          <span className="font-mono text-xs">READ_ARTICLE_01</span>
          <ArrowRight className="w-12 h-12" />
        </div>
      </div>
      
      <div className="col-span-1 border-r border-b border-black bg-white hover:bg-black hover:text-white transition-colors flex flex-col items-center justify-center p-4 cursor-pointer">
        <Mouse className="w-8 h-8 mb-2" />
        <span className="font-bold font-mono">MOUSE_DB</span>
      </div>
      <div className="col-span-1 border-b border-black bg-white hover:bg-black hover:text-white transition-colors flex flex-col items-center justify-center p-4 cursor-pointer">
        <Monitor className="w-8 h-8 mb-2" />
        <span className="font-bold font-mono">PAD_DB</span>
      </div>
      
      <div className="col-span-2 row-span-1 border-b border-black bg-red-500 flex items-center justify-between px-8 cursor-pointer hover:bg-red-600 transition-colors">
        <span className="font-black text-2xl text-white">AIM TRAINING</span>
        <Crosshair className="w-8 h-8 text-white animate-spin-slow" />
      </div>
      
      <div className="col-span-2 bg-white p-4 flex items-center justify-between cursor-pointer hover:bg-green-400 transition-colors">
        <div>
          <span className="block font-mono text-xs font-bold mb-1">TOOL</span>
          <span className="block font-black text-xl">SENSITIVITY_CONVERTER.EXE</span>
        </div>
        <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse border border-black"></div>
      </div>
    </main>
  </div>
);

export const wireframes = [
  { id: 1, name: 'Classic Hero', component: Wireframe1 },
  { id: 2, name: 'Sidebar Nav', component: Wireframe2 },
  { id: 3, name: 'Bento Grid', component: Wireframe3 },
  { id: 4, name: 'Split Screen', component: Wireframe4 },
  { id: 5, name: 'Minimal Serif', component: Wireframe5 },
  { id: 6, name: 'Dark Gamer', component: Wireframe6 },
  { id: 7, name: 'Search First', component: Wireframe7 },
  { id: 8, name: 'Feed Style', component: Wireframe8 },
  { id: 9, name: 'Dashboard', component: Wireframe9 },
  { id: 10, name: 'Neo Brutalist', component: Wireframe10 },
];
