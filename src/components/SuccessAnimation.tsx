import { CheckCircle } from 'lucide-react';

interface SuccessAnimationProps {
  name: string;
}

export default function SuccessAnimation({ name }: SuccessAnimationProps) {
  return (
    <div className="flex flex-col items-center justify-center text-center px-6 py-12 animate-fadeIn">
      <div className="relative mb-8">
        <div className="absolute inset-0 rounded-full bg-emerald-500/20 animate-ping" />
        <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center animate-scaleIn">
          <CheckCircle className="w-10 h-10 text-white" strokeWidth={2.5} />
        </div>
      </div>

      <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 animate-slideUp">
        Obrigado, {name}!
      </h2>
      <p className="text-gray-300 text-base md:text-lg max-w-md animate-slideUp animation-delay-200">
        Seus dados foram enviados com sucesso.
      </p>
    </div>
  );
}
