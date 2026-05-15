import { useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../../infrastructure/config/supabase";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Mail, 
  Loader2, 
  LayoutDashboard,
  AlertCircle,
  ArrowLeft,
  CheckCircle2
} from "lucide-react";

export function ForgotPasswordPage() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleResetRequest = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/reset-password`,
      });
      if (error) throw error;
      setSuccess(true);
    } catch (err: any) {
      setError(err.message || "Error al enviar el correo de recuperación");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6 relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-0 left-0 w-full h-1 bg-primary/20" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="max-w-md w-full space-y-8 animate-in fade-in zoom-in-95 duration-500">
        <div className="text-center space-y-4">
          <Link to="/login" className="inline-block transition-transform hover:scale-105 active:scale-95">
            <div className="mx-auto h-16 w-16 bg-primary rounded-2xl flex items-center justify-center shadow-xl shadow-primary/20 rotate-3">
              <LayoutDashboard className="text-white" size={32} />
            </div>
          </Link>
          <div>
            <h1 className="text-2xl font-black text-slate-900 tracking-tighter uppercase">
              Recuperar <span className="text-primary">Acceso</span>
            </h1>
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mt-1">
              Seguridad IHC • Console
            </p>
          </div>
        </div>

        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-2xl relative overflow-hidden">
          {success ? (
            <div className="text-center space-y-6 animate-in fade-in zoom-in-95 duration-300">
              <div className="h-20 w-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 size={40} />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight">¡Correo Enviado!</h3>
                <p className="text-sm font-semibold text-slate-600 leading-relaxed">
                  Si existe una cuenta asociada a <span className="text-primary">{email}</span>, recibirás un enlace para restablecer tu contraseña.
                </p>
              </div>
              <Link to="/login" className="block w-full">
                <Button className="w-full py-6 bg-slate-900 hover:bg-slate-800 text-white rounded-2xl font-bold transition-all shadow-lg active:scale-95">
                  VOLVER AL LOGIN
                </Button>
              </Link>
            </div>
          ) : (
            <form onSubmit={handleResetRequest} className="space-y-6 relative z-10">
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1 flex items-center gap-1.5">
                    <Mail size={12} /> Email de Investigador
                  </label>
                  <Input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="tu@email.com"
                    className="h-12 rounded-xl bg-slate-50 border-slate-200 focus:bg-white transition-all font-medium"
                    required
                  />
                </div>
              </div>

              {error && (
                <div className="p-4 bg-red-50 border border-red-100 rounded-2xl flex items-center gap-3 text-red-700 animate-in slide-in-from-top-2">
                  <AlertCircle size={20} className="shrink-0" />
                  <p className="text-xs font-bold leading-tight">{error}</p>
                </div>
              )}

              <Button 
                disabled={loading}
                className="w-full py-7 bg-primary hover:bg-primary/90 text-white rounded-2xl font-bold shadow-lg shadow-primary/20 transition-all active:scale-95 text-lg"
              >
                {loading ? (
                  <Loader2 className="animate-spin" size={24} />
                ) : (
                  "ENVIAR INSTRUCCIONES"
                )}
              </Button>

              <div className="pt-4 border-t border-slate-100 text-center">
                <Link 
                  to="/login"
                  className="text-xs font-bold text-slate-400 hover:text-primary transition-colors uppercase tracking-widest flex items-center justify-center gap-2"
                >
                  <ArrowLeft size={14} /> Volver al login
                </Link>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
