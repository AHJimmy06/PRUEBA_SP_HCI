import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { supabase } from "../../infrastructure/config/supabase";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Lock, 
  Loader2, 
  LayoutDashboard,
  AlertCircle,
  CheckCircle2,
  ShieldCheck
} from "lucide-react";

export function ResetPasswordPage() {
  const [loading, setLoading] = useState(false);
  const [verifying, setVerifying] = useState(true);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  // Verificar el token al cargar la página
  useEffect(() => {
    const verifyToken = async () => {
      const token_hash = searchParams.get("token_hash");
      const type = searchParams.get("type");

      if (!token_hash || type !== "recovery") {
        // Si no hay token en la query, verificamos si ya existe una sesión de recuperación
        const { data: { session } } = await supabase.auth.getSession();
        if (!session) {
          setError("El enlace de recuperación es inválido o ha expirado.");
          setVerifying(false);
          return;
        }
        setVerifying(false);
        return;
      }

      try {
        const { error } = await supabase.auth.verifyOtp({
          token_hash,
          type: "recovery",
        });
        if (error) throw error;
      } catch (err: any) {
        setError("No pudimos validar tu enlace de recuperación. Por favor, solicitá uno nuevo.");
      } finally {
        setVerifying(false);
      }
    };

    verifyToken();
  }, [searchParams]);

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden");
      setLoading(false);
      return;
    }

    if (password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres");
      setLoading(false);
      return;
    }

    try {
      const { error } = await supabase.auth.updateUser({ password });
      if (error) throw error;
      setSuccess(true);
      setTimeout(() => navigate("/dashboard"), 3000);
    } catch (err: any) {
      setError(err.message || "Error al restablecer la contraseña");
    } finally {
      setLoading(false);
    }
  };

  if (verifying) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
        <div className="text-center space-y-4">
          <Loader2 className="h-12 w-12 animate-spin text-primary mx-auto" />
          <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">Validando sesión de seguridad...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6 relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-0 left-0 w-full h-1 bg-primary/20" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="max-w-md w-full space-y-8 animate-in fade-in zoom-in-95 duration-500">
        <div className="text-center space-y-4">
          <div className="mx-auto h-16 w-16 bg-primary rounded-2xl flex items-center justify-center shadow-xl shadow-primary/20 rotate-3">
            <LayoutDashboard className="text-white" size={32} />
          </div>
          <div>
            <h1 className="text-2xl font-black text-slate-900 tracking-tighter uppercase">
              Nueva <span className="text-primary">Contraseña</span>
            </h1>
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mt-1">
              Seguridad IHC • Console
            </p>
          </div>
        </div>

        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-5">
             <ShieldCheck size={120} className="text-slate-900" />
          </div>

          {success ? (
            <div className="text-center space-y-6 animate-in fade-in zoom-in-95 duration-300 relative z-10">
              <div className="h-20 w-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 size={40} />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight">¡Contraseña Actualizada!</h3>
                <p className="text-sm font-semibold text-slate-600 leading-relaxed">
                  Tu contraseña ha sido restablecida con éxito. Serás redirigido al dashboard en unos segundos...
                </p>
              </div>
              <Button 
                onClick={() => navigate("/dashboard")}
                className="w-full py-6 bg-slate-900 hover:bg-slate-800 text-white rounded-2xl font-bold transition-all shadow-lg active:scale-95"
              >
                IR AL DASHBOARD AHORA
              </Button>
            </div>
          ) : (
            <form onSubmit={handleResetPassword} className="space-y-6 relative z-10">
              {error && !success ? (
                <div className="p-6 bg-red-50 border border-red-100 rounded-2xl space-y-4 animate-in slide-in-from-top-2">
                  <div className="flex items-center gap-3 text-red-700">
                    <AlertCircle size={24} className="shrink-0" />
                    <p className="text-xs font-bold leading-tight uppercase tracking-wider">{error}</p>
                  </div>
                  <Button 
                    variant="outline" 
                    onClick={() => navigate("/login")}
                    className="w-full border-red-200 text-red-700 hover:bg-red-100 font-bold text-[10px] uppercase tracking-widest"
                  >
                    Volver al login
                  </Button>
                </div>
              ) : (
                <>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1 flex items-center gap-1.5">
                        <Lock size={12} /> Nueva Contraseña
                      </label>
                      <Input 
                        type="password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••"
                        className="h-12 rounded-xl bg-slate-50 border-slate-200 focus:bg-white transition-all font-medium"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1 flex items-center gap-1.5">
                        <Lock size={12} /> Confirmar Contraseña
                      </label>
                      <Input 
                        type="password" 
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="••••••••"
                        className="h-12 rounded-xl bg-slate-50 border-slate-200 focus:bg-white transition-all font-medium"
                        required
                      />
                    </div>
                  </div>

                  <Button 
                    disabled={loading}
                    className="w-full py-7 bg-primary hover:bg-primary/90 text-white rounded-2xl font-bold shadow-lg shadow-primary/20 transition-all active:scale-95 text-lg"
                  >
                    {loading ? (
                      <Loader2 className="animate-spin" size={24} />
                    ) : (
                      "RESTABLECER CONTRASEÑA"
                    )}
                  </Button>
                </>
              )}
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
