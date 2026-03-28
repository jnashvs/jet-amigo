/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  CheckCircle2, 
  Verified, 
  ArrowRight, 
  MessageCircle, 
  Quote,
  Plane,
  MapPin,
  Calendar,
  Wallet,
  Send
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 glass-nav shadow-sm py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex justify-between items-center">
          <div className="text-2xl font-extrabold text-primary tracking-tighter font-headline flex items-center gap-2">
            <Plane className="w-8 h-8 rotate-45" />
            Jet Amigo
          </div>
          
          <div className="hidden md:flex gap-8 items-center">
            <a href="#como-funciona" className="text-secondary hover:text-primary transition-colors font-bold tracking-tight font-headline">Como funciona</a>
            <a href="#pedir" className="text-secondary hover:text-primary transition-colors font-bold tracking-tight font-headline">Pedir viagem</a>
            <a href="#precos" className="text-secondary hover:text-primary transition-colors font-bold tracking-tight font-headline">Preços</a>
          </div>

          <button className="md:hidden text-primary" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-b border-slate-100 overflow-hidden"
            >
              <div className="flex flex-col p-6 gap-4">
                <a href="#como-funciona" onClick={() => setIsMenuOpen(false)} className="font-bold text-secondary">Como funciona</a>
                <a href="#pedir" onClick={() => setIsMenuOpen(false)} className="font-bold text-secondary">Pedir viagem</a>
                <a href="#precos" onClick={() => setIsMenuOpen(false)} className="font-bold text-secondary">Preços</a>
                <button className="bg-primary text-white py-3 rounded-xl font-bold">Entrar</button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-background">
          <div className="max-w-7xl mx-auto px-6 md:px-8 grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="z-10"
            >
              <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 font-headline leading-[1.1] tracking-tight mb-6">
                ✈️ Encontro os melhores voos por ti
              </h1>
              <p className="text-xl md:text-2xl text-secondary mb-10 max-w-lg leading-relaxed">
                Diz-me para onde queres ir e eu trato de encontrar as opções mais baratas. O teu assistente pessoal de viagens.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#pedir" className="bg-primary text-white text-lg font-bold px-8 py-4 rounded-full text-center hover:shadow-xl hover:-translate-y-1 transition-all active:scale-95 shadow-lg shadow-primary/20">
                  Pedir viagem
                </a>
                <a href="#como-funciona" className="bg-slate-200 text-slate-700 text-lg font-bold px-8 py-4 rounded-full text-center hover:bg-slate-300 transition-all">
                  Como funciona
                </a>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative hidden md:block"
            >
              <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl transform rotate-3">
                <img 
                  alt="Airplane wing over clouds" 
                  className="w-full h-[500px] object-cover" 
                  src="https://picsum.photos/seed/flight/800/1000"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 z-20 bg-white p-6 rounded-2xl shadow-xl flex items-center gap-4 border border-slate-100">
                <div className="bg-primary/10 p-3 rounded-full text-primary">
                  <Verified className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-bold text-slate-900">Curadoria Humana</p>
                  <p className="text-sm text-secondary">Zero bots, 100% atenção</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* How it Works Section */}
        <section className="py-24 bg-surface-muted" id="como-funciona">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="mb-16">
              <p className="text-primary font-bold tracking-widest uppercase mb-4 text-sm font-headline">Processo Simples</p>
              <h2 className="text-4xl md:text-5xl font-bold font-headline text-slate-900">A tua viagem em 3 passos</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { step: '01', title: 'Diz-me o destino e datas', desc: 'Preenche o formulário rápido com os teus planos ou apenas uma ideia de onde queres ir.' },
                { step: '02', title: 'Eu encontro os melhores voos para ti', desc: 'Uso ferramentas avançadas e conhecimento de mercado para encontrar as rotas mais baratas e eficientes.' },
                { step: '03', title: 'Recebes tudo pronto no teu email', desc: 'Envio-te as opções selecionadas com links diretos para reserva. Sem complicações.' }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ y: -8 }}
                  className="bg-white p-10 rounded-3xl border border-slate-100 shadow-sm transition-all"
                >
                  <div className="text-primary text-5xl font-black opacity-20 mb-6">{item.step}</div>
                  <h3 className="text-xl font-bold mb-4 font-headline text-slate-900">{item.title}</h3>
                  <p className="text-secondary leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Request Form Section */}
        <section className="py-24 bg-white" id="pedir">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="grid lg:grid-cols-5 gap-16">
              <div className="lg:col-span-2">
                <h2 className="text-4xl font-bold font-headline text-slate-900 mb-6 leading-tight">Onde começa a tua próxima aventura?</h2>
                <p className="text-lg text-secondary mb-12">Preenche os detalhes abaixo e deixa o trabalho difícil comigo. Respondo em menos de 24 horas.</p>
                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-5 rounded-2xl bg-surface-muted">
                    <CheckCircle2 className="text-primary w-6 h-6 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-slate-900">Pesquisa Exaustiva</p>
                      <p className="text-sm text-secondary">Verifico todas as companhias low-cost e tradicionais.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-5 rounded-2xl bg-surface-muted">
                    <CheckCircle2 className="text-primary w-6 h-6 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-slate-900">Flexibilidade de Preços</p>
                      <p className="text-sm text-secondary">Ajusto datas para encontrar a tarifa mínima absoluta.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="lg:col-span-3">
                <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl shadow-primary/5 border border-slate-100">
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-secondary ml-1">Nome</label>
                        <div className="relative">
                          <input 
                            required
                            className="w-full bg-surface-muted border-none rounded-2xl p-4 pl-12 focus:ring-2 focus:ring-primary transition-all outline-none" 
                            placeholder="Como te chamas?" 
                            type="text"
                          />
                          <Send className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-secondary ml-1">Email</label>
                        <div className="relative">
                          <input 
                            required
                            className="w-full bg-surface-muted border-none rounded-2xl p-4 pl-12 focus:ring-2 focus:ring-primary transition-all outline-none" 
                            placeholder="Onde envio as opções?" 
                            type="email"
                          />
                          <Send className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-secondary ml-1">Origem</label>
                        <div className="relative">
                          <input 
                            required
                            className="w-full bg-surface-muted border-none rounded-2xl p-4 pl-12 focus:ring-2 focus:ring-primary transition-all outline-none" 
                            placeholder="Ex: Lisboa" 
                            type="text"
                          />
                          <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-secondary ml-1">Destino</label>
                        <div className="relative">
                          <input 
                            required
                            className="w-full bg-surface-muted border-none rounded-2xl p-4 pl-12 focus:ring-2 focus:ring-primary transition-all outline-none" 
                            placeholder="Ex: Bali, Tailândia" 
                            type="text"
                          />
                          <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-secondary ml-1">Datas (ida e volta)</label>
                        <div className="relative">
                          <input 
                            required
                            className="w-full bg-surface-muted border-none rounded-2xl p-4 pl-12 focus:ring-2 focus:ring-primary transition-all outline-none" 
                            placeholder="Maio ou 15/05 a 22/05" 
                            type="text"
                          />
                          <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-secondary ml-1">Orçamento (Opcional)</label>
                        <div className="relative">
                          <input 
                            className="w-full bg-surface-muted border-none rounded-2xl p-4 pl-12 focus:ring-2 focus:ring-primary transition-all outline-none" 
                            placeholder="Até quanto queres pagar?" 
                            type="text"
                          />
                          <Wallet className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 bg-primary/5 p-5 rounded-2xl border border-primary/10">
                      <input 
                        className="w-6 h-6 rounded border-slate-300 text-primary focus:ring-primary cursor-pointer" 
                        id="flex" 
                        type="checkbox"
                      />
                      <label className="text-slate-900 font-medium cursor-pointer select-none" htmlFor="flex">
                        As minhas datas são flexíveis (mais chances de poupar!)
                      </label>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold text-secondary ml-1">Preferências</label>
                      <textarea 
                        className="w-full bg-surface-muted border-none rounded-2xl p-4 focus:ring-2 focus:ring-primary transition-all outline-none resize-none" 
                        placeholder="Companhias preferidas, horários, apenas voos diretos..." 
                        rows={3}
                      ></textarea>
                    </div>

                    <button 
                      type="submit"
                      className="w-full bg-primary text-white font-bold py-5 rounded-2xl text-xl hover:opacity-90 active:scale-[0.98] transition-all shadow-xl shadow-primary/20"
                    >
                      Quero encontrar voos baratos
                    </button>

                    <AnimatePresence>
                      {formSubmitted && (
                        <motion.div 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                          className="bg-emerald-50 text-emerald-700 p-5 rounded-2xl flex items-center gap-3 border border-emerald-100"
                        >
                          <CheckCircle2 className="w-6 h-6" />
                          <p className="font-medium">Pedido enviado! Vou procurar as melhores opções para ti 👌</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-24 bg-surface-muted" id="precos">
          <div className="max-w-7xl mx-auto px-6 md:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold font-headline mb-4 text-slate-900">Simples e transparente</h2>
            <p className="text-xl text-secondary mb-12">Sem taxas escondidas, pagas pela minha expertise.</p>
            
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="inline-block bg-white p-10 md:p-16 rounded-[3.5rem] shadow-2xl border border-slate-100 max-w-2xl w-full text-center"
            >
              <div className="text-primary text-sm font-black uppercase tracking-[0.2em] mb-6">Plano Individual</div>
              <div className="text-7xl font-black mb-4 text-slate-900">10€ <span className="text-xl font-normal text-secondary">/ pesquisa</span></div>
              <p className="text-lg text-secondary mb-10 leading-relaxed">
                Pesquisa personalizada para o teu destino com até 3 opções completas.
              </p>
              
              <ul className="text-left space-y-5 mb-12 max-w-md mx-auto">
                {[
                  'Links diretos para as tarifas mais baixas',
                  'Dicas sobre aeroportos e bagagem',
                  'Suporte via WhatsApp para dúvidas'
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-4">
                    <div className="bg-primary/10 p-1 rounded-full">
                      <CheckCircle2 className="text-primary w-5 h-5" />
                    </div>
                    <span className="text-slate-700 font-medium">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-primary/5 p-5 rounded-2xl mb-10 border border-primary/10">
                <p className="text-primary font-bold flex items-center justify-center gap-2">
                  <span className="text-xl">✨</span> Primeira consulta pode ser gratuita
                </p>
                <p className="text-sm text-secondary mt-1">Fala comigo para saber as condições</p>
              </div>
              
              <a href="#pedir" className="block w-full bg-primary text-white font-bold py-5 rounded-full text-xl hover:shadow-xl hover:-translate-y-1 transition-all shadow-lg shadow-primary/20">
                Começar agora
              </a>
            </motion.div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <h2 className="text-3xl font-bold font-headline text-center mb-16 text-slate-900">O que dizem os viajantes</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { name: 'Mariana Silva', city: 'Porto, Portugal', text: 'Poupei mais de 100€ numa viagem 🙌. Estava farta de procurar e o Jet Amigo resolveu tudo em horas.' },
                { name: 'Ricardo Santos', city: 'Lisboa, Portugal', text: 'Super rápido e fácil. Recebi as opções no email e só tive de carregar em reservar. Recomendo muito!' },
                { name: 'Ana Costa', city: 'Braga, Portugal', text: 'A melhor forma de planear viagens sem stress. O atendimento é super humano e atencioso.' }
              ].map((t, idx) => (
                <div key={idx} className="bg-surface-muted p-8 rounded-[2rem] relative group">
                  <Quote className="text-primary/10 w-16 h-16 absolute top-6 right-6 group-hover:text-primary/20 transition-colors" />
                  <p className="text-lg mb-8 leading-relaxed text-slate-700 relative z-10 italic">"{t.text}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">{t.name}</p>
                      <p className="text-sm text-secondary">{t.city}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 bg-primary text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          </div>
          <div className="max-w-4xl mx-auto px-6 md:px-8 text-center relative z-10">
            <h2 className="text-4xl md:text-6xl font-black font-headline mb-8 tracking-tight">Pronto para viajar mais barato?</h2>
            <p className="text-xl opacity-90 mb-12 max-w-xl mx-auto">Não percas mais tempo em comparadores. Eu faço o trabalho pesado enquanto tu sonhas com o destino.</p>
            <a href="#pedir" className="inline-block bg-white text-primary font-black text-xl px-12 py-5 rounded-full hover:scale-105 transition-transform shadow-2xl">
              Pedir viagem agora
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-surface-muted border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-16">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="text-2xl font-extrabold text-primary font-headline flex items-center gap-2">
              <Plane className="w-7 h-7 rotate-45" />
              Jet Amigo
            </div>
            <div className="flex flex-wrap justify-center gap-8">
              <a href="#" className="text-secondary hover:text-primary transition-colors text-sm font-bold">Termos de Uso</a>
              <a href="#" className="text-secondary hover:text-primary transition-colors text-sm font-bold">Privacidade</a>
              <a href="#" className="text-secondary hover:text-primary transition-colors text-sm font-bold">Contato</a>
              <a href="#" className="text-secondary hover:text-primary transition-colors text-sm font-bold">FAQ</a>
            </div>
            <div className="text-sm text-secondary font-medium">
              © 2024 Jet Amigo. Sua jornada, nossa curadoria.
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <motion.a 
        href="https://wa.me/yournumber" 
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 bg-[#25D366] text-white p-4 rounded-full shadow-2xl z-50 flex items-center justify-center"
      >
        <MessageCircle size={32} />
      </motion.a>
    </div>
  );
}
