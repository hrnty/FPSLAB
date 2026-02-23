import { Mouse, Monitor, Crosshair, Settings, Search, Menu, ArrowRight, Activity, Zap, Target, Keyboard, Filter, Bookmark, Share2, MoreHorizontal, ChevronRight } from 'lucide-react';

// Common Props
interface WireframeProps {
  onSelect?: () => void;
  className?: string;
}

// Mock Data
const categories = [
  { name: 'マウス', icon: Mouse },
  { name: 'マウスパッド', icon: Monitor },
  { name: 'エイム考察', icon: Crosshair },
  { name: '感度計算', icon: Settings },
];

// --- WF11: Modern Sidebar Feed (Sidebar + Feed) ---
// X (Twitter) style layout with 3 columns
export const Wireframe11 = ({ onSelect, className }: WireframeProps) => (
  <div className={`w-full h-full bg-white text-slate-900 flex overflow-hidden border border-slate-200 rounded-xl shadow-sm ${className}`} onClick={onSelect}>
    {/* Left Sidebar */}
    <aside className="w-64 border-r flex flex-col p-4 items-end">
      <div className="font-bold text-xl mb-6 pr-4">FPS LAB</div>
      <nav className="space-y-2 w-full">
        {['ホーム', '話題', '通知', 'ブックマーク'].map((item, i) => (
          <div key={i} className="flex items-center gap-4 p-3 rounded-full hover:bg-slate-100 cursor-pointer justify-start">
            <div className="w-6 h-6 bg-slate-200 rounded-full"></div>
            <span className="font-bold text-lg">{item}</span>
          </div>
        ))}
        <button className="w-full bg-blue-500 text-white font-bold py-3 rounded-full mt-4 shadow-md">投稿する</button>
      </nav>
    </aside>

    {/* Main Feed */}
    <main className="flex-1 border-r overflow-y-auto">
      <header className="h-14 border-b flex items-center px-4 sticky top-0 bg-white/80 backdrop-blur-sm z-10">
        <span className="font-bold text-lg">おすすめ</span>
        <span className="font-bold text-lg text-slate-400 ml-6">フォロー中</span>
      </header>
      {[1, 2, 3].map((_, i) => (
        <div key={i} className="border-b p-4 hover:bg-slate-50 cursor-pointer transition-colors">
          <div className="flex gap-3">
            <div className="w-10 h-10 bg-slate-200 rounded-full shrink-0"></div>
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-2">
                  <span className="font-bold hover:underline">FPS Reviewer</span>
                  <span className="text-slate-500 text-sm">@fps_reviewer · 2h</span>
                </div>
                <MoreHorizontal className="w-4 h-4 text-slate-400" />
              </div>
              <p className="mt-1 text-sm leading-relaxed">
                新しいG Pro X Superlight 2のポーリングレート2000Hzを検証してみた。
                結論から言うと、体感できるレベルの違いはあるが、バッテリー持ちとのトレードオフをどう考えるか...
              </p>
              <div className="mt-3 h-48 bg-slate-100 rounded-xl border"></div>
              <div className="flex justify-between mt-3 text-slate-500 max-w-xs">
                <div className="w-4 h-4 bg-slate-200 rounded-full"></div>
                <div className="w-4 h-4 bg-slate-200 rounded-full"></div>
                <div className="w-4 h-4 bg-slate-200 rounded-full"></div>
                <div className="w-4 h-4 bg-slate-200 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </main>

    {/* Right Sidebar */}
    <aside className="w-80 p-6 hidden lg:block">
      <div className="bg-slate-50 rounded-xl p-4">
        <h3 className="font-bold text-lg mb-4">トレンド</h3>
        {[1, 2, 3, 4].map((_, i) => (
          <div key={i} className="py-3 cursor-pointer hover:bg-slate-100 px-2 rounded">
            <div className="text-xs text-slate-500">日本のトレンド</div>
            <div className="font-bold">ラピッドトリガー</div>
            <div className="text-xs text-slate-500">12,400 posts</div>
          </div>
        ))}
      </div>
    </aside>
  </div>
);

// --- WF12: Editorial Sidebar (Sidebar + Minimal) ---
// Serif fonts, clean lines, vertical navigation
export const Wireframe12 = ({ onSelect, className }: WireframeProps) => (
  <div className={`w-full h-full bg-[#FDFBF7] text-[#2A2A2A] flex overflow-hidden border border-[#E5E5E5] rounded-xl shadow-sm font-serif ${className}`} onClick={onSelect}>
    <aside className="w-64 border-r border-[#E5E5E5] p-8 flex flex-col justify-between">
      <div>
        <h1 className="text-3xl font-light tracking-tighter mb-12">THE<br/>AIM</h1>
        <nav className="space-y-6 font-sans text-xs tracking-widest uppercase">
          {categories.map((c, i) => (
            <div key={i} className="cursor-pointer hover:text-orange-600 transition-colors flex items-center gap-2 group">
              <span className="w-4 h-[1px] bg-[#2A2A2A] group-hover:w-8 transition-all"></span>
              {c.name}
            </div>
          ))}
        </nav>
      </div>
      <div className="text-[10px] font-sans text-gray-400">
        © 2024 THE AIM JOURNAL
      </div>
    </aside>
    <main className="flex-1 p-12 overflow-y-auto">
      <div className="max-w-3xl mx-auto">
        <span className="font-sans text-xs font-bold text-orange-600 tracking-widest uppercase mb-4 block">Featured Story</span>
        <h2 className="text-5xl leading-tight font-light mb-8">
          The Philosophy of<br/>
          <span className="italic">Sensitivity</span>
        </h2>
        <div className="w-full h-64 bg-[#F0F0F0] mb-8 grayscale"></div>
        <div className="flex gap-8 font-sans text-sm leading-relaxed text-gray-600">
          <p className="flex-1">
            感度とは単なる数値ではない。それはプレイヤーとデジタル世界を繋ぐインターフェースの解像度であり、
            思考をアクションに変換する際の摩擦係数でもある。
          </p>
          <p className="flex-1">
            多くのプレイヤーが「正解」を求めて彷徨うが、真の最適解は自己の内面にしか存在しない。
            本稿では、数値の向こう側にある感覚の言語化を試みる。
          </p>
        </div>
      </div>
    </main>
  </div>
);

// --- WF13: Grid Feed (Feed + Minimal) ---
// 3-column grid, minimalist card design
export const Wireframe13 = ({ onSelect, className }: WireframeProps) => (
  <div className={`w-full h-full bg-white text-black flex flex-col overflow-hidden border border-gray-200 rounded-xl shadow-sm ${className}`} onClick={onSelect}>
    <header className="h-20 flex items-center justify-between px-10 border-b border-gray-100">
      <div className="text-xl font-bold tracking-tight">FPS/R</div>
      <div className="flex gap-8 text-sm font-medium text-gray-500">
        <span>Reviews</span>
        <span>News</span>
        <span>Columns</span>
        <span>Tools</span>
      </div>
      <Search className="w-5 h-5 text-gray-400" />
    </header>
    <main className="flex-1 overflow-y-auto p-10">
      <div className="grid grid-cols-3 gap-x-8 gap-y-12">
        {[1, 2, 3, 4, 5, 6].map((_, i) => (
          <div key={i} className="group cursor-pointer">
            <div className="aspect-[4/3] bg-gray-100 mb-4 overflow-hidden">
              <div className="w-full h-full bg-gray-200 group-hover:scale-105 transition-transform duration-500"></div>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Mouse</span>
              <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
              <span className="text-[10px] text-gray-400">Feb 20</span>
            </div>
            <h3 className="text-lg font-medium leading-snug group-hover:underline decoration-1 underline-offset-4">
              Logicool G Pro X Superlight 2 Review: The New Standard
            </h3>
          </div>
        ))}
      </div>
    </main>
  </div>
);

// --- WF14: Split Feed (Feed + Sidebar) ---
// Sidebar with distinct background, split feed
export const Wireframe14 = ({ onSelect, className }: WireframeProps) => (
  <div className={`w-full h-full bg-slate-50 text-slate-900 flex overflow-hidden border border-slate-200 rounded-xl shadow-sm ${className}`} onClick={onSelect}>
    <aside className="w-72 bg-slate-900 text-white p-6 flex flex-col">
      <div className="font-bold text-2xl mb-10">GEAR<span className="text-blue-500">.</span>LOG</div>
      <nav className="space-y-1 flex-1">
        {categories.map((c, i) => (
          <div key={i} className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/10 cursor-pointer transition-colors">
            <c.icon className="w-5 h-5 text-slate-400" />
            <span className="font-medium">{c.name}</span>
          </div>
        ))}
      </nav>
      <div className="p-4 bg-white/5 rounded-xl border border-white/10">
        <div className="text-xs text-slate-400 mb-2">Current Setup</div>
        <div className="font-bold text-sm">G Pro X Superlight</div>
        <div className="font-bold text-sm">Artisan Zero</div>
      </div>
    </aside>
    <main className="flex-1 flex overflow-hidden">
      <div className="flex-1 overflow-y-auto p-6 border-r border-slate-200">
        <h2 className="font-bold text-xl mb-6 flex items-center gap-2">
          <Activity className="w-5 h-5 text-blue-500" />
          最新レビュー
        </h2>
        <div className="space-y-6">
          {[1, 2, 3].map((_, i) => (
            <div key={i} className="bg-white p-5 rounded-xl shadow-sm border hover:shadow-md transition-shadow cursor-pointer">
              <div className="flex gap-4">
                <div className="w-24 h-24 bg-slate-100 rounded-lg shrink-0"></div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Razer Viper V3 Pro</h3>
                  <p className="text-sm text-slate-500 line-clamp-2 mb-3">
                    前作から形状を大幅に刷新。よりエルゴノミクスに近い左右対称形状となり、
                    つかみ持ちユーザーにとっての新たな選択肢となるか。
                  </p>
                  <div className="flex gap-2">
                    <span className="text-[10px] bg-slate-100 px-2 py-1 rounded text-slate-600">Wireless</span>
                    <span className="text-[10px] bg-slate-100 px-2 py-1 rounded text-slate-600">54g</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-80 overflow-y-auto p-6 bg-white">
        <h2 className="font-bold text-xl mb-6 flex items-center gap-2">
          <Target className="w-5 h-5 text-red-500" />
          エイム考察
        </h2>
        <div className="space-y-4">
          {[1, 2, 3, 4].map((_, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="text-xs text-slate-400 mb-1">2024.02.20</div>
              <h3 className="font-bold text-sm leading-snug group-hover:text-blue-600 transition-colors">
                ハイセンシ vs ローセンシ：科学的アプローチによる結論
              </h3>
              <div className="h-[1px] bg-slate-100 w-full mt-3"></div>
            </div>
          ))}
        </div>
      </div>
    </main>
  </div>
);

// --- WF15: Typographic List (Minimal + Feed) ---
// List view with stylized typography
export const Wireframe15 = ({ onSelect, className }: WireframeProps) => (
  <div className={`w-full h-full bg-white text-black flex flex-col overflow-hidden border border-gray-200 rounded-xl shadow-sm ${className}`} onClick={onSelect}>
    <header className="h-24 flex items-end justify-between px-12 pb-6 border-b border-black">
      <h1 className="text-4xl font-black tracking-tighter">ARCHIVE</h1>
      <div className="flex gap-2">
        <button className="w-8 h-8 border border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors"><Filter className="w-4 h-4" /></button>
        <button className="w-8 h-8 border border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors"><Search className="w-4 h-4" /></button>
      </div>
    </header>
    <main className="flex-1 overflow-y-auto">
      {[
        { id: '01', cat: 'MOUSE', title: 'The End of Weight Reduction?' },
        { id: '02', cat: 'PAD', title: 'Glass vs Cloth: Final Verdict' },
        { id: '03', cat: 'SENS', title: 'Finding Your True EDPI' },
        { id: '04', cat: 'KEY', title: 'Rapid Trigger Explained' },
      ].map((item, i) => (
        <div key={i} className="group border-b border-gray-200 hover:bg-black hover:text-white transition-colors cursor-pointer p-8 flex items-center justify-between">
          <div className="flex items-baseline gap-8">
            <span className="font-mono text-sm text-gray-400 group-hover:text-gray-500">{item.id}</span>
            <span className="font-mono text-xs font-bold border border-gray-200 group-hover:border-white px-2 py-1 rounded-full">{item.cat}</span>
            <h2 className="text-3xl font-bold tracking-tight">{item.title}</h2>
          </div>
          <ArrowRight className="w-6 h-6 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all" />
        </div>
      ))}
    </main>
  </div>
);

// --- WF16: Dense Pro (Sidebar + Feed) ---
// Dense, data-heavy layout (Discord/Slack inspired)
export const Wireframe16 = ({ onSelect, className }: WireframeProps) => (
  <div className={`w-full h-full bg-[#313338] text-[#DBDEE1] flex overflow-hidden border border-[#1E1F22] rounded-xl shadow-sm ${className}`} onClick={onSelect}>
    {/* Server Rail */}
    <nav className="w-16 bg-[#1E1F22] flex flex-col items-center py-4 gap-3 overflow-y-auto no-scrollbar">
      <div className="w-10 h-10 bg-[#5865F2] rounded-2xl flex items-center justify-center text-white font-bold">FPS</div>
      <div className="w-8 h-[2px] bg-[#35373C] rounded-full"></div>
      {[1, 2, 3].map((_, i) => (
        <div key={i} className="w-10 h-10 bg-[#313338] rounded-full hover:rounded-2xl hover:bg-[#23A559] transition-all cursor-pointer flex items-center justify-center">
          <div className="w-4 h-4 bg-white/20 rounded-full"></div>
        </div>
      ))}
    </nav>
    
    {/* Channel Sidebar */}
    <aside className="w-60 bg-[#2B2D31] flex flex-col">
      <header className="h-12 border-b border-[#1E1F22] flex items-center px-4 font-bold shadow-sm">
        FPS Research Lab
      </header>
      <div className="flex-1 p-2 space-y-4 overflow-y-auto">
        <div>
          <div className="px-2 text-xs font-bold text-[#949BA4] hover:text-[#DBDEE1] cursor-pointer mb-1 flex items-center gap-1 uppercase">
            <ChevronRight className="w-3 h-3" /> Information
          </div>
          <div className="px-2 py-1 bg-[#404249] text-white rounded flex items-center gap-2 cursor-pointer">
            <span className="text-[#949BA4] text-lg">#</span> announcements
          </div>
          <div className="px-2 py-1 text-[#949BA4] hover:bg-[#35373C] hover:text-[#DBDEE1] rounded flex items-center gap-2 cursor-pointer">
            <span className="text-[#949BA4] text-lg">#</span> rules
          </div>
        </div>
        <div>
          <div className="px-2 text-xs font-bold text-[#949BA4] hover:text-[#DBDEE1] cursor-pointer mb-1 flex items-center gap-1 uppercase">
            <ChevronRight className="w-3 h-3" /> Reviews
          </div>
          {['mice', 'mousepads', 'keyboards', 'audio'].map((ch, i) => (
            <div key={i} className="px-2 py-1 text-[#949BA4] hover:bg-[#35373C] hover:text-[#DBDEE1] rounded flex items-center gap-2 cursor-pointer">
              <span className="text-[#949BA4] text-lg">#</span> {ch}
            </div>
          ))}
        </div>
      </div>
    </aside>

    {/* Main Chat/Feed */}
    <main className="flex-1 flex flex-col bg-[#313338]">
      <header className="h-12 border-b border-[#26272D] flex items-center px-4 justify-between shadow-sm">
        <div className="flex items-center gap-2">
          <span className="text-[#949BA4] text-2xl">#</span>
          <span className="font-bold text-white">mice</span>
          <span className="text-xs text-[#949BA4] border-l border-[#3F4147] pl-3 ml-1">最新のマウスレビューと議論</span>
        </div>
        <div className="flex gap-4 text-[#B5BAC1]">
          <Search className="w-5 h-5 cursor-pointer hover:text-[#DBDEE1]" />
          <Bookmark className="w-5 h-5 cursor-pointer hover:text-[#DBDEE1]" />
        </div>
      </header>
      <div className="flex-1 overflow-y-auto p-4 space-y-6">
        {[1, 2, 3].map((_, i) => (
          <div key={i} className="flex gap-4 group hover:bg-[#2E3035] -mx-4 px-4 py-2">
            <div className="w-10 h-10 bg-[#F23F42] rounded-full shrink-0 mt-1"></div>
            <div className="flex-1">
              <div className="flex items-baseline gap-2">
                <span className="font-bold text-white hover:underline cursor-pointer">Admin</span>
                <span className="text-xs text-[#949BA4]">Today at 4:20 PM</span>
              </div>
              <div className="text-[#DBDEE1] mt-1">
                <span className="font-bold text-[#4752C4] bg-[#4752C4]/10 px-1 rounded cursor-pointer">@everyone</span>
                <br/>
                新しいレビュー記事を公開しました。今回はZOWIEのワイヤレスモデルについて深く掘り下げています。
                <div className="mt-2 bg-[#2B2D31] border border-[#1E1F22] rounded-lg p-3 max-w-md flex gap-3 cursor-pointer hover:bg-[#26272D]">
                  <div className="w-16 h-16 bg-[#1E1F22] rounded"></div>
                  <div>
                    <div className="font-bold text-sm text-[#00A8FC]">ZOWIE U2 Review</div>
                    <div className="text-xs text-[#949BA4] mt-1">esports向けに特化した形状...</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  </div>
);

// --- WF17: Gallery Feed (Feed + Minimal) ---
// Image-focused masonry layout
export const Wireframe17 = ({ onSelect, className }: WireframeProps) => (
  <div className={`w-full h-full bg-zinc-50 text-zinc-900 flex flex-col overflow-hidden border border-zinc-200 rounded-xl shadow-sm ${className}`} onClick={onSelect}>
    <header className="h-16 flex items-center justify-center px-8 bg-white border-b border-zinc-100 sticky top-0 z-10">
      <nav className="flex gap-8 text-sm font-medium text-zinc-500">
        <span className="text-black border-b-2 border-black pb-5">All</span>
        <span className="hover:text-black transition-colors cursor-pointer">Mice</span>
        <span className="hover:text-black transition-colors cursor-pointer">Pads</span>
        <span className="font-serif italic text-xl px-4 text-black">Gallery</span>
        <span className="hover:text-black transition-colors cursor-pointer">Audio</span>
        <span className="hover:text-black transition-colors cursor-pointer">Setup</span>
        <span className="hover:text-black transition-colors cursor-pointer">Desks</span>
      </nav>
    </header>
    <main className="flex-1 overflow-y-auto p-4">
      <div className="columns-3 gap-4 space-y-4">
        {[1, 2, 3, 4, 5, 6].map((_, i) => (
          <div key={i} className="break-inside-avoid relative group cursor-pointer rounded-xl overflow-hidden">
            <div className={`w-full bg-zinc-200 ${i % 2 === 0 ? 'aspect-[3/4]' : 'aspect-square'}`}></div>
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white font-bold text-sm">Pulsar X2V2 Mini</span>
              <div className="flex gap-2 mt-1">
                <span className="text-[10px] text-zinc-300 bg-white/20 px-2 py-0.5 rounded-full backdrop-blur-sm">Review</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  </div>
);

// --- WF18: Asymmetric Sidebar (Sidebar + Minimal) ---
// Wide sidebar, minimal content
export const Wireframe18 = ({ onSelect, className }: WireframeProps) => (
  <div className={`w-full h-full bg-white text-slate-900 flex overflow-hidden border border-slate-200 rounded-xl shadow-sm ${className}`} onClick={onSelect}>
    <aside className="w-[35%] bg-slate-100 p-10 flex flex-col justify-between">
      <div>
        <div className="w-12 h-12 bg-black rounded-full mb-8"></div>
        <h1 className="text-4xl font-bold leading-tight mb-4">
          Discover<br/>
          Better<br/>
          Aim.
        </h1>
        <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
          FPS Researchは、ゲーミングデバイスとエイム理論の交差点にあるインサイトを提供します。
        </p>
      </div>
      <div className="flex gap-4">
        <div className="w-10 h-10 border border-slate-300 rounded-full flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-colors cursor-pointer"><Search className="w-4 h-4"/></div>
        <div className="w-10 h-10 border border-slate-300 rounded-full flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-colors cursor-pointer"><Menu className="w-4 h-4"/></div>
      </div>
    </aside>
    <main className="flex-1 p-10 overflow-y-auto">
      <div className="grid grid-cols-1 gap-12">
        {[1, 2, 3].map((_, i) => (
          <div key={i} className="flex gap-6 group cursor-pointer">
            <div className="w-32 h-32 bg-slate-50 rounded-lg shrink-0 overflow-hidden">
               <div className="w-full h-full bg-slate-200 group-hover:scale-110 transition-transform duration-500"></div>
            </div>
            <div className="flex-1 py-2">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-2 block">Mouse Review</span>
              <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">Finalmouse UltralightX</h3>
              <p className="text-sm text-slate-400 line-clamp-2">
                カーボンファイバー複合素材が生み出す、驚異の29g。
                剛性、クリック感、そして実際のゲームプレイにおける影響を詳細に分析。
              </p>
            </div>
          </div>
        ))}
      </div>
    </main>
  </div>
);

// --- WF19: Timeline Minimal (Minimal + Feed) ---
// Central timeline layout
export const Wireframe19 = ({ onSelect, className }: WireframeProps) => (
  <div className={`w-full h-full bg-[#FAFAFA] text-slate-800 flex flex-col overflow-hidden border border-slate-200 rounded-xl shadow-sm ${className}`} onClick={onSelect}>
    <header className="h-20 flex items-center justify-center border-b border-slate-100 bg-white sticky top-0 z-20">
      <div className="font-serif italic text-2xl">Timeline</div>
    </header>
    <main className="flex-1 overflow-y-auto relative p-8">
      {/* Center Line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-slate-200 -translate-x-1/2"></div>
      
      <div className="space-y-12 relative">
        {[
          { date: 'Feb 21', title: 'New Sensor Tech', side: 'left' },
          { date: 'Feb 20', title: 'Wooting 80HE Announced', side: 'right' },
          { date: 'Feb 18', title: 'Valorant Patch 8.03', side: 'left' },
          { date: 'Feb 15', title: 'Mousepad Friction Chart', side: 'right' },
        ].map((item, i) => (
          <div key={i} className={`flex items-center justify-between w-full ${item.side === 'right' ? 'flex-row-reverse' : ''}`}>
            <div className="w-[45%] group cursor-pointer">
              <div className={`bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow ${item.side === 'right' ? 'text-left' : 'text-right'}`}>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 block">{item.date}</span>
                <h3 className="text-lg font-serif font-medium group-hover:text-blue-600 transition-colors">{item.title}</h3>
                <p className="text-xs text-slate-500 mt-2 line-clamp-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
                </p>
              </div>
            </div>
            <div className="w-4 h-4 bg-white border-2 border-slate-300 rounded-full z-10"></div>
            <div className="w-[45%]"></div>
          </div>
        ))}
      </div>
    </main>
  </div>
);

// --- WF20: Magazine Cover (Minimal + Sidebar) ---
// Hidden sidebar, magazine cover aesthetic
export const Wireframe20 = ({ onSelect, className }: WireframeProps) => (
  <div className={`w-full h-full bg-white text-black flex overflow-hidden border border-slate-200 rounded-xl shadow-sm ${className}`} onClick={onSelect}>
    <aside className="w-16 border-r flex flex-col items-center py-6 gap-8">
      <Menu className="w-6 h-6 cursor-pointer hover:text-slate-600" />
      <div className="flex-1 flex flex-col gap-8 items-center">
        <span className="writing-vertical-rl text-xs font-bold tracking-widest rotate-180 text-slate-400 hover:text-black cursor-pointer transition-colors">REVIEWS</span>
        <span className="writing-vertical-rl text-xs font-bold tracking-widest rotate-180 text-slate-400 hover:text-black cursor-pointer transition-colors">FEATURES</span>
        <span className="writing-vertical-rl text-xs font-bold tracking-widest rotate-180 text-slate-400 hover:text-black cursor-pointer transition-colors">GALLERY</span>
      </div>
      <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-serif italic">F</div>
    </aside>
    <main className="flex-1 p-8 overflow-y-auto">
      <div className="w-full h-full flex flex-col">
        <div className="flex-1 bg-slate-100 rounded-t-lg relative overflow-hidden group cursor-pointer">
          <div className="absolute inset-0 bg-slate-300"></div>
          <div className="absolute inset-0 p-8 flex flex-col justify-end">
            <span className="bg-black text-white px-3 py-1 text-xs font-bold w-fit mb-4">COVER STORY</span>
            <h1 className="text-5xl font-black leading-none mb-2 text-white mix-blend-difference">
              THE FUTURE<br/>OF AIMING
            </h1>
            <p className="text-white mix-blend-difference max-w-md text-sm font-medium">
              AIによるエイムアシスト、ニューラルインターフェース、そして人間の限界。
              FPSの未来はどこへ向かうのか。
            </p>
          </div>
        </div>
        <div className="h-32 grid grid-cols-3 border-x border-b border-slate-200 divide-x divide-slate-200">
          {[1, 2, 3].map((_, i) => (
            <div key={i} className="p-4 hover:bg-slate-50 cursor-pointer transition-colors">
              <span className="text-[10px] font-bold text-slate-400 uppercase mb-1 block">Latest</span>
              <h3 className="font-bold text-sm leading-tight">Zowie EC2-CW Review</h3>
            </div>
          ))}
        </div>
      </div>
    </main>
  </div>
);

export const wireframesSet2 = [
  { id: 11, name: 'Modern Sidebar Feed', component: Wireframe11 },
  { id: 12, name: 'Editorial Sidebar', component: Wireframe12 },
  { id: 13, name: 'Grid Feed', component: Wireframe13 },
  { id: 14, name: 'Split Feed', component: Wireframe14 },
  { id: 15, name: 'Typographic List', component: Wireframe15 },
  { id: 16, name: 'Dense Pro', component: Wireframe16 },
  { id: 17, name: 'Gallery Feed', component: Wireframe17 },
  { id: 18, name: 'Asymmetric Sidebar', component: Wireframe18 },
  { id: 19, name: 'Timeline Minimal', component: Wireframe19 },
  { id: 20, name: 'Magazine Cover', component: Wireframe20 },
];
