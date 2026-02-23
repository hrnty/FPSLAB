import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mouse, Monitor, Crosshair, Settings, ArrowRight, ChevronLeft, Calendar, Tag } from 'lucide-react';
import { articles } from './data/articles';

// --- Types ---
// Imported from types.ts implicitly by usage, but we can define local helpers if needed.
// For now, we rely on the data structure matching what the component expects.

const categories = [
  { id: 'MOUSE', label: 'Mouse', jp: 'マウス' },
  { id: 'MOUSEPAD', label: 'Mousepad', jp: 'マウスパッド' },
  { id: 'AIM', label: 'Aim Theory', jp: 'エイム考察' },
  { id: 'SENS', label: 'Sensitivity', jp: '感度計算' },
];

export default function App() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedArticleId, setSelectedArticleId] = useState<string | null>(null);

  const selectedArticle = articles.find(a => a.id === selectedArticleId);

  // Filter articles based on selected category
  const filteredArticles = selectedCategory 
    ? articles.filter(a => a.category === selectedCategory)
    : articles;

  const handleCategoryClick = (categoryId: string) => {
    setSelectedCategory(categoryId === selectedCategory ? null : categoryId);
    setSelectedArticleId(null); // Clear selected article when changing category
  };

  const handleLogoClick = () => {
    setSelectedCategory(null);
    setSelectedArticleId(null);
  };

  return (
    <div className="min-h-screen bg-editorial-bg text-editorial-text font-serif flex overflow-hidden selection:bg-editorial-accent selection:text-white">
      {/* Sidebar Navigation */}
      <aside className="w-80 border-r border-black/5 flex flex-col justify-between p-12 fixed h-full bg-editorial-bg z-10 hidden md:flex">
        <div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16 cursor-pointer"
            onClick={handleLogoClick}
          >
            <h1 className="text-5xl font-light tracking-tighter leading-none mb-2">
              FPS<br/>LAB.
            </h1>
            <p className="font-sans text-xs tracking-widest text-gray-400 uppercase">
              Est. 2024
            </p>
          </motion.div>

          <nav className="space-y-6">
            {categories.map((c, i) => (
              <motion.div
                key={c.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group cursor-pointer"
                onMouseEnter={() => setActiveCategory(c.id)}
                onMouseLeave={() => setActiveCategory(null)}
                onClick={() => handleCategoryClick(c.id)}
              >
                <div className="flex items-center gap-4 mb-1">
                  <span className={`h-[1px] bg-editorial-text transition-all duration-300 ${activeCategory === c.id || selectedCategory === c.id ? 'w-8' : 'w-4'}`}></span>
                  <span className={`text-lg tracking-wide transition-colors duration-300 ${activeCategory === c.id || selectedCategory === c.id ? 'text-editorial-accent italic' : ''}`}>
                    {c.label}
                  </span>
                </div>
                <div className={`pl-8 md:pl-12 overflow-hidden transition-all duration-300 ${activeCategory === c.id || selectedCategory === c.id ? 'h-auto opacity-100' : 'h-0 opacity-0'}`}>
                  <span className="font-sans text-xs text-gray-400 block py-1">
                    {c.jp}
                  </span>
                </div>
              </motion.div>
            ))}
          </nav>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="font-sans text-[10px] text-gray-400 tracking-widest uppercase flex gap-4"
        >
          <span className="cursor-pointer hover:text-editorial-text transition-colors">About</span>
          <span className="cursor-pointer hover:text-editorial-text transition-colors">Contact</span>
          <span className="cursor-pointer hover:text-editorial-text transition-colors">Twitter</span>
        </motion.div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 md:ml-80 p-6 md:p-20 overflow-y-auto min-h-screen">
        <AnimatePresence mode="wait">
          {selectedArticle ? (
            <motion.div
              key="article"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-3xl mx-auto"
            >
              <button 
                onClick={() => setSelectedArticleId(null)}
                className="group flex items-center gap-2 text-sm font-sans text-gray-400 hover:text-editorial-text mb-8 transition-colors"
              >
                <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Back to Articles
              </button>

              <article>
                <header className="mb-12">
                  <div className="flex items-center gap-4 mb-6 font-sans text-xs tracking-widest uppercase text-gray-400">
                    <span className="flex items-center gap-2">
                      <Tag className="w-3 h-3" />
                      {selectedArticle.category}
                    </span>
                    <span className="h-3 w-[1px] bg-gray-300"></span>
                    <span className="flex items-center gap-2">
                      <Calendar className="w-3 h-3" />
                      {selectedArticle.date}
                    </span>
                  </div>
                  <h1 className="text-3xl md:text-5xl font-medium leading-tight mb-8">
                    {selectedArticle.title}
                  </h1>
                </header>

                <div className="space-y-8 font-sans text-gray-700 leading-relaxed text-base md:text-lg">
                  {selectedArticle.blocks.map((block, i) => {
                    switch (block.type) {
                      case 'paragraph':
                        return (
                          <p key={i} className="whitespace-pre-line">
                            {block.content}
                          </p>
                        );
                      case 'heading':
                        return (
                          <h2 key={i} className="text-2xl font-serif font-bold text-editorial-text mt-12 mb-4 border-l-4 border-editorial-accent pl-4">
                            {block.content}
                          </h2>
                        );
                      case 'specs':
                        return (
                          <div key={i} className="bg-white border border-black/5 p-6 rounded-xl my-8 shadow-sm">
                            <h3 className="font-sans text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Specifications</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                              {block.specs?.map((spec, j) => (
                                <div key={j} className="flex items-center gap-3">
                                  <div className="w-8 h-8 bg-editorial-bg rounded-full flex items-center justify-center text-editorial-accent">
                                    {spec.icon}
                                  </div>
                                  <div>
                                    <div className="text-xs text-gray-400">{spec.label}</div>
                                    <div className="font-bold text-editorial-text">{spec.value}</div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        );
                      case 'list':
                        return (
                          <ul key={i} className="list-disc list-inside space-y-2 bg-editorial-bg/50 p-6 rounded-lg border border-black/5">
                            {block.items?.map((item, j) => (
                              <li key={j} className="text-gray-700">{item}</li>
                            ))}
                          </ul>
                        );
                      default:
                        return null;
                    }
                  })}
                </div>
              </article>
            </motion.div>
          ) : (
            <motion.div
              key="list"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-4xl mx-auto"
            >
              {/* Hero Section (Static for now, could be dynamic) */}
              {!selectedCategory && (
                <section className="mb-32 hidden md:block">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="font-sans text-xs font-bold text-editorial-accent tracking-widest uppercase">
                      Featured Story
                    </span>
                    <span className="h-[1px] flex-1 bg-black/5"></span>
                    <span className="font-sans text-xs text-gray-400">Feb 23, 2024</span>
                  </div>
                  
                  <h2 className="text-6xl md:text-7xl lg:text-8xl font-light leading-[0.9] mb-12 tracking-tight cursor-pointer hover:text-editorial-text/80 transition-colors" onClick={() => setSelectedArticleId('atk-mad-r-major')}>
                    The Philosophy of<br/>
                    <span className="italic text-editorial-text/80">Mad R Major</span>
                  </h2>

                  <div className="w-full aspect-[21/9] bg-neutral-200 mb-12 overflow-hidden relative group cursor-pointer" onClick={() => setSelectedArticleId('atk-mad-r-major')}>
                     <div className="absolute inset-0 bg-neutral-300 transition-transform duration-700 group-hover:scale-105"></div>
                     <div className="absolute inset-0 flex items-center justify-center text-neutral-400 font-sans text-sm tracking-widest">
                       ATK MAD R MAJOR
                     </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 font-sans text-gray-600 leading-relaxed text-sm md:text-base">
                    <p>
                      <span className="text-4xl float-left mr-3 mt-[-6px] font-serif text-editorial-text">P</span>
                      rice and performance have long been a trade-off. ATK challenges this norm with the Mad R Major.
                      <br/><br/>
                      価格と性能は長らくトレードオフの関係にあった。ATKはその常識に挑戦する。
                    </p>
                    <div>
                      <p className="mb-6">
                        1万円前後で手に入る、異常な性能。そして何より「センサーを掴む」という感覚。
                        このマウスは、コスパ重視のユーザーだけでなく、エイムの真髄を求めるプレイヤーへの回答かもしれない。
                      </p>
                      <button 
                        onClick={() => setSelectedArticleId('atk-mad-r-major')}
                        className="group flex items-center gap-2 text-editorial-text font-medium text-sm border-b border-black/20 pb-1 hover:border-editorial-accent hover:text-editorial-accent transition-all"
                      >
                        Read Full Article <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </section>
              )}

              {/* Articles List */}
              <section>
                <div className="flex items-center gap-4 mb-12">
                  <span className="font-sans text-xs font-bold text-gray-400 tracking-widest uppercase">
                    {selectedCategory ? categories.find(c => c.id === selectedCategory)?.label : 'Latest Archive'}
                  </span>
                  <span className="h-[1px] flex-1 bg-black/5"></span>
                </div>

                <div className="space-y-8">
                  {filteredArticles.length > 0 ? (
                    filteredArticles.map((article, i) => (
                      <motion.div
                        key={article.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="group cursor-pointer border-b border-black/5 pb-8 hover:border-black/20 transition-colors"
                        onClick={() => setSelectedArticleId(article.id)}
                      >
                        <div className="grid grid-cols-12 gap-8 items-baseline">
                          <div className="col-span-2 font-sans text-xs text-gray-400 hidden md:block">
                            {article.date}
                          </div>
                          <div className="col-span-12 md:col-span-7">
                            <div className="flex items-center gap-3 mb-2">
                               <span className="font-sans text-[10px] font-bold border border-black/10 px-2 py-0.5 rounded-full text-gray-500 group-hover:border-editorial-accent group-hover:text-editorial-accent transition-colors">
                                 {article.category}
                               </span>
                               <span className="font-sans text-xs text-gray-400 md:hidden">
                                 {article.date}
                               </span>
                            </div>
                            <h3 className="text-2xl md:text-3xl font-medium mb-3 group-hover:text-editorial-accent transition-colors">
                              {article.title}
                            </h3>
                            <p className="font-sans text-sm text-gray-500 leading-relaxed line-clamp-2">
                              {article.excerpt}
                            </p>
                          </div>
                          <div className="col-span-12 md:col-span-3 flex justify-end opacity-0 group-hover:opacity-100 transition-opacity">
                             <div className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center">
                               <ArrowRight className="w-4 h-4 text-editorial-text" />
                             </div>
                          </div>
                        </div>
                      </motion.div>
                    ))
                  ) : (
                    <div className="py-12 text-center font-sans text-gray-400">
                      No articles found in this category.
                    </div>
                  )}
                </div>
              </section>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
