import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';

export function AuthShell({
  title,
  description,
  children,
  footer
}: {
  title: string;
  description: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(34,197,94,0.16),_transparent_26%),linear-gradient(180deg,#F8FAFC_0%,#FFFFFF_42%,#F8FAFC_100%)] px-4 py-8 text-slate-900">
      <div className="mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-6xl items-center justify-center">
        <div className="grid w-full gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="max-w-xl">
            <Link href="/" className="inline-flex items-center gap-3 rounded-full border border-primary/20 bg-white px-4 py-2 text-sm font-medium text-primary shadow-soft">
              <span className="flex h-8 w-8 items-center justify-center rounded-full overflow-hidden">
                <img src="/logo.png" alt="BudgedIn Logo" className="h-full w-full object-cover" />
              </span>
              BudgedIn
            </Link>
            <h1 className="mt-8 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">{title}</h1>
            <p className="mt-4 text-lg leading-8 text-slate-600">{description}</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-soft">
                <p className="text-2xl font-semibold text-slate-950">95+</p>
                <p className="text-sm text-slate-500">Target Lighthouse</p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-soft">
                <p className="text-2xl font-semibold text-slate-950">PWA</p>
                <p className="text-sm text-slate-500">Aplikasi Offline Mandiri</p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-soft">
                <p className="text-2xl font-semibold text-slate-950">Supabase</p>
                <p className="text-sm text-slate-500">Autentikasi & Postgres</p>
              </div>
            </div>
          </div>
          <Card className="border-0 bg-white/95 shadow-soft backdrop-blur">
            <CardHeader>
              <CardTitle className="text-2xl">BudgedIn</CardTitle>
              <CardDescription>Manajemen keuangan cerdas untuk mahasiswa</CardDescription>
            </CardHeader>
            <CardContent>
              {children}
              {footer ? <div className="mt-6 text-sm text-slate-500">{footer}</div> : null}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
