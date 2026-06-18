import { useState } from 'react';
import { Send, User, Phone, MapPin, Building } from 'lucide-react';
import { estados } from '../data/brazilian-locations';
import SuccessAnimation from './SuccessAnimation';

interface FormData {
  nome: string;
  telefone: string;
  polo: string;
  estado: string;
  cidade: string;
}

export default function LeadForm() {
  const [formData, setFormData] = useState<FormData>({
    nome: '',
    telefone: '',
    polo: '',
    estado: '',
    cidade: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  function formatPhone(value: string): string {
    const digits = value.replace(/\D/g, '').slice(0, 11);
    if (digits.length <= 2) return digits;
    if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { name, value } = e.target;

    if (name === 'telefone') {
      setFormData((prev) => ({ ...prev, telefone: formatPhone(value) }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }

    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  function validate(): boolean {
    const newErrors: Partial<FormData> = {};
    if (!formData.nome.trim()) newErrors.nome = 'Nome é obrigatório';
    const phoneDigits = formData.telefone.replace(/\D/g, '');
    if (phoneDigits.length < 10) newErrors.telefone = 'Telefone inválido (DDD + número)';
    if (!formData.polo.trim()) newErrors.polo = 'Polo é obrigatório';
    if (!formData.estado) newErrors.estado = 'Estado é obrigatório';
    if (!formData.cidade.trim()) newErrors.cidade = 'Cidade é obrigatória';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    try {
      const estadoObj = estados.find((est) => est.sigla === formData.estado);
      await fetch('https://n8n-new-n8n.ca31ey.easypanel.host/webhook/forms_crm', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nome: formData.nome,
          telefone: formData.telefone,
          polo: formData.polo,
          estado: estadoObj?.nome || formData.estado,
          estado_sigla: formData.estado,
          cidade: formData.cidade,
        }),
      });
      setIsSuccess(true);
    } catch {
      setIsSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  }

  if (isSuccess) {
    return <SuccessAnimation name={formData.nome.split(' ')[0]} />;
  }

  const inputClass = (field: keyof FormData) =>
    `w-full pl-11 pr-4 py-3.5 bg-white/5 border rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500 transition-all ${
      errors[field] ? 'border-red-500/50' : 'border-white/10'
    }`;

  return (
    <form onSubmit={handleSubmit} className="space-y-5 w-full">
      <div className="text-center mb-2">
        <h2 className="text-xl font-semibold text-white mb-1">Comece agora</h2>
        <p className="text-gray-400 text-sm">Preencha seus dados e entraremos em contato</p>
      </div>
      <div>
        <div className="relative">
          <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            name="nome"
            placeholder="Seu nome completo"
            value={formData.nome}
            onChange={handleChange}
            className={inputClass('nome')}
          />
        </div>
        {errors.nome && <p className="mt-1 text-xs text-red-400">{errors.nome}</p>}
      </div>

      <div>
        <div className="relative">
          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="tel"
            name="telefone"
            placeholder="(00) 00000-0000"
            value={formData.telefone}
            onChange={handleChange}
            className={inputClass('telefone')}
          />
        </div>
        {errors.telefone && <p className="mt-1 text-xs text-red-400">{errors.telefone}</p>}
      </div>

      <div>
        <div className="relative">
          <Building className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            name="polo"
            placeholder="Nome do polo"
            value={formData.polo}
            onChange={handleChange}
            className={inputClass('polo')}
          />
        </div>
        {errors.polo && <p className="mt-1 text-xs text-red-400">{errors.polo}</p>}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <select
              name="estado"
              value={formData.estado}
              onChange={handleChange}
              className={`w-full pl-11 pr-4 py-3.5 bg-white/5 border rounded-xl text-white appearance-none focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500 transition-all ${
                errors.estado ? 'border-red-500/50' : 'border-white/10'
              } ${!formData.estado ? 'text-gray-500' : ''}`}
            >
              <option value="" className="bg-gray-900">Estado</option>
              {estados.map((estado) => (
                <option key={estado.sigla} value={estado.sigla} className="bg-gray-900 text-white">
                  {estado.sigla} - {estado.nome}
                </option>
              ))}
            </select>
          </div>
          {errors.estado && <p className="mt-1 text-xs text-red-400">{errors.estado}</p>}
        </div>

        <div>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              name="cidade"
              placeholder="Sua cidade"
              value={formData.cidade}
              onChange={handleChange}
              className={inputClass('cidade')}
            />
          </div>
          {errors.cidade && <p className="mt-1 text-xs text-red-400">{errors.cidade}</p>}
        </div>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-4 px-6 bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-400 hover:to-emerald-400 text-white font-semibold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-teal-500/20 hover:shadow-teal-500/40 hover:scale-[1.02] active:scale-[0.98]"
      >
        {isSubmitting ? (
          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
        ) : (
          <>
            <Send className="w-5 h-5" />
            Enviar
          </>
        )}
      </button>
    </form>
  );
}
