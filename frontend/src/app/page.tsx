import Link from 'next/link';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import {
  Wallet,
  ShieldCheck,
  TrendingUp,
  Target,
  ArrowRight,
  Sparkles,
  Zap,
  Users,
  Award,
  Star,
  CheckCircle2,
  BookOpen
} from 'lucide-react';

const featureHighlights = [
  {
    title: 'Lacak Setiap Rupiah',
    description: 'Catat pemasukan, pengeluaran, dan biaya rutin dalam hitungan detik dengan antarmuka yang bersih dan responsif.',
    icon: Wallet,
    color: 'text-emerald-500 bg-emerald-50 border-emerald-100',
  },
  {
    title: 'Tetap Sesuai Anggaran',
    description: 'Kontrol anggaran bulanan dengan peringatan dini sebelum Anda melewati batas pengeluaran.',
    icon: ShieldCheck,
    color: 'text-amber-500 bg-amber-50 border-amber-100',
  },
  {
    title: 'Bangun Kebiasaan Menabung',
    description: 'Tetapkan tujuan, lacak kontribusi, dan raih pencapaian setiap kali Anda mencapai target tabungan.',
    icon: Target,
    color: 'text-blue-500 bg-blue-50 border-blue-100',
  },
  {
    title: 'Pahami Keuangan Anda',
    description: 'Grafik dan laporan yang menampilkan tren, kategori, serta kesehatan finansial tanpa informasi yang membingungkan.',
    icon: TrendingUp,
    color: 'text-purple-500 bg-purple-50 border-purple-100',
  }
];

const testimonials = [
  {
    name: 'Andi Wijaya',
    role: 'Mahasiswa Universitas Indonesia',
    text: 'BudgedIn sangat membantu mengatur uang saku bulanan. Sejak pakai ini, saya tidak pernah lagi kehabisan uang di akhir bulan!',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=120&h=120',
  },
  {
    name: 'Siti Rahma',
    role: 'Mahasiswi Institut Teknologi Bandung',
    text: 'Suka sekali dengan fitur Target Tabungan. Sangat memotivasi untuk menyisihkan uang jajan demi beli laptop baru.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=120&h=120',
  },
  {
    name: 'Rian Pratama',
    role: 'Mahasiswa Universitas Gadjah Mada',
    text: 'Tampilan grafiknya simpel banget. Skor kesehatan finansial membuat saya selalu tertantang menjaga pengeluaran tetap aman.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120&h=120',
  }
];

const steps = [
  {
    step: '01',
    title: 'Buat Akun Gratis',
    description: 'Daftar dalam waktu 30 detik menggunakan email kemahasiswaan Anda.',
  },
  {
    step: '02',
    title: 'Atur Anggaran Bulanan',
    description: 'Tentukan batas aman belanja per kategori seperti makanan, kos, dan transportasi.',
  },
  {
    step: '03',
    title: 'Lacak & Capai Target',
    description: 'Catat transaksi harian dengan mudah dan saksikan tabungan Anda berkembang.',
  }
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 relative selection:bg-emerald-500 selection:text-white overflow-x-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
        <div className="absolute top-[-5%] left-[-15%] w-[600px] h-[600px] rounded-full bg-emerald-400/20 blur-[130px] mix-blend-multiply animate-pulse" />
        <div className="absolute top-[25%] right-[-10%] w-[500px] h-[500px] rounded-full bg-teal-400/20 blur-[110px] mix-blend-multiply animate-pulse delay-1000" />
        <div className="absolute bottom-[20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-blue-300/10 blur-[120px] mix-blend-multiply animate-pulse delay-700" />
      </div>

      <div className="mx-auto max-w-7xl px-4 py-6 md:px-6 lg:px-8 relative z-10">
        
        {/* Navigation Header */}
        <header className="flex items-center justify-between rounded-3xl border border-white/60 bg-white/60 px-6 py-4 shadow-sm backdrop-blur-md animate-in fade-in slide-in-from-top-4 duration-700">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full overflow-hidden shadow-lg shadow-emerald-500/20">
              <img src="/logo.png" alt="BudgedIn Logo" className="h-full w-full object-cover" />
            </div>
            <div>
              <p className="text-lg font-bold tracking-tight text-slate-800">BudgedIn</p>
              <p className="text-[11px] font-semibold text-emerald-600 uppercase tracking-wider">Khusus Mahasiswa</p>
            </div>
          </div>
          <nav className="flex items-center gap-4 text-sm font-medium">
            <Link href="/login" className="rounded-full px-4 py-2 text-slate-600 transition-all hover:bg-slate-200/50 hover:text-slate-900">
              Masuk
            </Link>
            <Button asChild className="rounded-full bg-emerald-600 px-6 hover:bg-emerald-700 text-white shadow-md transition-all hover:scale-105">
              <Link href="/register">Mulai Sekarang</Link>
            </Button>
          </nav>
        </header>

        {/* Hero Section */}
        <section className="grid gap-12 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-24">
          <div className="max-w-2xl animate-in fade-in slide-in-from-bottom-8 duration-700 delay-150 fill-mode-both">
            <Badge variant="success" className="mb-6 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-sm font-medium text-emerald-700 gap-1.5 shadow-sm">
              <Sparkles className="h-3.5 w-3.5 text-emerald-600 animate-spin" style={{ animationDuration: '6s' }} /> 
              Aplikasi PWA Ringan & Installable
            </Badge>
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl/tight">
              Manajemen keuangan <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">cerdas</span> untuk kehidupan kampus.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
              BudgedIn membantu mahasiswa melacak pengeluaran harian, membuat anggaran bulanan, memantau skor kesehatan finansial, dan meraih target tabungan impian secara otomatis.
            </p>
            
            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild size="lg" className="rounded-full bg-gradient-to-r from-emerald-600 to-teal-500 px-8 hover:opacity-90 text-white shadow-lg shadow-emerald-600/25 transition-all hover:scale-105">
                <Link href="/register" className="flex items-center gap-2">
                  Daftar Gratis <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="rounded-full px-8 bg-white/80 border-slate-200 hover:bg-slate-100 transition-all hover:scale-105">
                <Link href="/login">Lihat Dasbor</Link>
              </Button>
            </div>
            
            {/* Quick Stat Highlights */}
            <div className="mt-12 grid grid-cols-3 gap-4 border-t border-slate-200/60 pt-8">
              <div>
                <p className="text-3xl font-extrabold text-slate-900">10k+</p>
                <p className="text-xs font-medium text-slate-500 mt-1">Mahasiswa Aktif</p>
              </div>
              <div>
                <p className="text-3xl font-extrabold text-slate-900">Rp2M+</p>
                <p className="text-xs font-medium text-slate-500 mt-1">Dana Ditabung</p>
              </div>
              <div>
                <p className="text-3xl font-extrabold text-slate-900">98%</p>
                <p className="text-xs font-medium text-slate-500 mt-1">Puas & Terbantu</p>
              </div>
            </div>
          </div>

          {/* Interactive CSS Mockup of Dashboard */}
          <div className="relative rounded-[32px] border border-white bg-white/40 p-4 shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-right-8 duration-1000 delay-300 fill-mode-both">
            <div className="absolute inset-0 -z-10 rounded-[32px] bg-gradient-to-b from-emerald-100/50 to-transparent" />
            <div className="rounded-[24px] bg-slate-900 p-6 text-white shadow-inner relative overflow-hidden">
              
              {/* Decorative dots for browser look */}
              <div className="flex gap-1.5 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>

              {/* Title & Profile Header */}
              <div className="flex items-center justify-between mb-6 border-b border-white/10 pb-4">
                <div>
                  <p className="text-xs text-slate-400">Selamat Datang,</p>
                  <p className="text-sm font-bold text-white">Rian Pratama 👋</p>
                </div>
                <div className="flex items-center gap-2 bg-emerald-500/20 border border-emerald-500/30 px-3 py-1 rounded-full text-xs text-emerald-400 font-semibold">
                  <CheckCircle2 className="h-3 w-3" /> Akun Terverifikasi
                </div>
              </div>

              {/* Main Balance Display */}
              <div className="bg-gradient-to-r from-emerald-600 to-teal-500 rounded-3xl p-5 shadow-lg relative overflow-hidden mb-6">
                <div className="absolute top-[-20%] right-[-10%] w-32 h-32 rounded-full bg-white/10 blur-xl" />
                <p className="text-xs text-emerald-100 font-medium tracking-wide">TOTAL SALDO AKTIF</p>
                <p className="text-3xl font-black mt-1">Rp 4.250.000</p>
                <div className="mt-4 flex justify-between text-xs text-white/90 border-t border-white/10 pt-3">
                  <div>
                    <span className="opacity-70">Pemasukan: </span>
                    <span className="font-semibold text-emerald-200">Rp 5.500k</span>
                  </div>
                  <div>
                    <span className="opacity-70">Pengeluaran: </span>
                    <span className="font-semibold text-rose-200">Rp 1.250k</span>
                  </div>
                </div>
              </div>

              {/* Grid content inside dashboard preview */}
              <div className="grid gap-4 sm:grid-cols-2">
                
                {/* Health Score Component */}
                <div className="bg-slate-800/80 border border-slate-700/50 rounded-2xl p-4 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between">
                      <p className="text-xs font-semibold text-slate-400">SKOR KEUANGAN</p>
                      <Zap className="h-3.5 w-3.5 text-amber-400" />
                    </div>
                    <p className="text-4xl font-extrabold text-emerald-400 mt-2">86<span className="text-xs text-slate-500 font-normal">/100</span></p>
                  </div>
                  <div className="text-[11px] text-slate-400 mt-4 border-t border-white/5 pt-2">
                    Kondisi keuangan Anda dalam status <span className="text-emerald-400 font-bold">SEHAT</span>.
                  </div>
                </div>

                {/* Savings Goal Component */}
                <div className="bg-slate-800/80 border border-slate-700/50 rounded-2xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-xs font-semibold text-slate-400">TARGET TABUNGAN</p>
                    <Target className="h-3.5 w-3.5 text-sky-400" />
                  </div>
                  <p className="text-sm font-bold truncate">💻 Laptop Kuliah</p>
                  
                  {/* Progress Bar */}
                  <div className="mt-3">
                    <div className="flex justify-between text-[10px] text-slate-400 mb-1">
                      <span>Progres 68%</span>
                      <span>Rp5.440k / Rp8.000k</span>
                    </div>
                    <div className="w-full bg-slate-700 h-2 rounded-full overflow-hidden">
                      <div className="bg-gradient-to-r from-sky-400 to-blue-500 h-full rounded-full" style={{ width: '68%' }} />
                    </div>
                  </div>
                </div>

              </div>

              {/* Mock Recent Transaction Row */}
              <div className="mt-4 bg-slate-800/40 rounded-2xl p-3 border border-slate-800">
                <p className="text-[10px] font-semibold text-slate-400 mb-2">PENGELUARAN TERBARU</p>
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="text-base">🍔</span>
                    <div>
                      <p className="font-semibold">Makan Siang Kantin</p>
                      <p className="text-[10px] text-slate-500">Makanan • Hari ini</p>
                    </div>
                  </div>
                  <p className="font-bold text-rose-400">-Rp 25.000</p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-24 border-t border-slate-200/60">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Kenapa Mahasiswa Memilih BudgedIn?
            </h2>
            <p className="mt-4 text-slate-600">
              Didesain khusus untuk memenuhi kebutuhan hidup mahasiswa dengan antarmuka modern yang simpel dan bebas hambatan.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {featureHighlights.map((feature, idx) => (
              <Card key={feature.title} className="group border-slate-200 bg-white/70 shadow-soft backdrop-blur transition-all duration-300 hover:-translate-y-2 hover:shadow-md hover:border-emerald-200">
                <CardContent className="p-6">
                  <div className={`mb-5 inline-flex rounded-2xl p-3 border shadow-sm transition-transform duration-300 group-hover:scale-110 ${feature.color}`}>
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 group-hover:text-emerald-700 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Steps Flow (How It Works) */}
        <section className="py-16 md:py-24 bg-slate-900 text-white rounded-[40px] px-6 md:px-12 my-8 relative overflow-hidden shadow-2xl">
          <div className="absolute top-[-10%] right-[-10%] w-[300px] h-[300px] rounded-full bg-emerald-500/10 blur-[80px]" />
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              3 Langkah Sederhana untuk Mulai
            </h2>
            <p className="mt-4 text-slate-400">
              Tidak perlu ribet menyinkronkan rekening bank. Kendalikan penuh privasi data keuangan Anda sendiri.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 relative z-10">
            {steps.map((item) => (
              <div key={item.step} className="bg-slate-800/50 border border-slate-800 rounded-3xl p-6 relative group transition-all duration-300 hover:border-emerald-500/30">
                <div className="text-5xl font-black text-emerald-500/20 mb-4 group-hover:text-emerald-500/40 transition-colors duration-300">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 md:py-24">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Ulasan Sahabat BudgedIn
            </h2>
            <p className="mt-4 text-slate-600">
              Bagaimana rekan-rekan mahasiswa mengubah kebiasaan menabung mereka menggunakan BudgedIn.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((t) => (
              <Card key={t.name} className="border-slate-100 bg-white shadow-soft relative transition-all duration-300 hover:shadow-md">
                <CardContent className="p-6 flex flex-col justify-between h-full">
                  <div>
                    <div className="flex gap-1 text-amber-400 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed italic mb-6">
                      &ldquo;{t.text}&rdquo;
                    </p>
                  </div>
                  <div className="flex items-center gap-3 border-t border-slate-100 pt-4">
                    <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover shadow-sm bg-slate-100" />
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">{t.name}</h4>
                      <p className="text-xs text-slate-500">{t.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Premium Banner */}
        <section className="py-16 md:py-20 bg-gradient-to-r from-emerald-600 to-teal-500 text-white rounded-[40px] shadow-xl relative overflow-hidden mb-12">
          {/* Decorative shapes */}
          <div className="absolute -left-16 -bottom-16 w-64 h-64 rounded-full bg-white/5 blur-xl pointer-events-none" />
          <div className="absolute right-0 top-0 w-80 h-80 rounded-full bg-white/10 blur-2xl pointer-events-none" />
          
          <div className="text-center max-w-3xl mx-auto px-6 relative z-10">
            <Badge className="bg-white/20 text-white border-0 px-4 py-1 mb-6 rounded-full text-xs font-semibold backdrop-blur-sm">
              ✨ 100% Gratis Tanpa Kartu Kredit
            </Badge>
            <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
              Siap Menjadi Lebih Cerdas Finansial?
            </h2>
            <p className="mt-4 text-emerald-50 max-w-lg mx-auto text-base leading-relaxed">
              Bergabunglah bersama ribuan mahasiswa lainnya dan kelola uang bulanan Anda secara teratur dan presisi.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Button asChild size="lg" className="rounded-full bg-white text-emerald-700 hover:bg-slate-100 font-bold px-8 shadow-lg transition-all hover:scale-105">
                <Link href="/register">Mulai Sekarang</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-slate-200/60 pt-8 pb-12 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full overflow-hidden">
              <img src="/logo.png" alt="Logo" className="w-full h-full object-cover" />
            </div>
            <span className="font-semibold text-slate-800 text-sm">BudgedIn</span>
            <span>• Aplikasi Keuangan Mahasiswa</span>
          </div>
          <p>© {new Date().getFullYear()} BudgedIn. Dibuat dengan penuh dedikasi untuk kesuksesan mahasiswa.</p>
        </footer>

      </div>
    </main>
  );
}
