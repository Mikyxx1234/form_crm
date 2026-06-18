import HeroBackground from './components/IridescenceBackground';
import AnimatedText, { TextRepel } from './components/AnimatedText';
import LeadForm from './components/LeadForm';

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <HeroBackground />

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 py-12">
        <main className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20 max-w-7xl w-full">
          <section className="flex-1 max-w-xl text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              <AnimatedText text="Seu CRM, seu funil," delay={200} />
              <AnimatedText text="seu time —" delay={500} />
              <span className="block mt-2">
                <TextRepel
                  text="em um lugar só."
                  className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-emerald-300"
                />
              </span>
            </h1>

            <AnimatedText
              text="Centralize conversas, pipeline de vendas e equipe no mesmo dashboard. Cadastre-se e descubra o poder da gestão unificada."
              className="text-gray-400 text-base md:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0"
              delay={800}
            />

            <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                WhatsApp integrado
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                Pipeline visual
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                Gestão de equipe
              </div>
            </div>
          </section>

          <section className="w-full max-w-md">
            <div className="backdrop-blur-sm bg-white/[0.02] border border-white/[0.06] rounded-2xl p-6 md:p-8">
              <LeadForm />
            </div>
          </section>
        </main>

        <footer className="mt-auto pt-12 text-center text-sm text-gray-600">
          <p>&copy; 2026 EduIT CRM. Todos os direitos reservados.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
