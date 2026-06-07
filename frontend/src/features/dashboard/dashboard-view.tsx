'use client';

import { useMemo } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import {
  DollarSign,
  TrendingUp,
  TrendingDown,
  Receipt,
  ArrowRight,
  Target,
  ShieldCheck,
  Wallet,
  PlusCircle,
  Utensils,
  Car,
  Home,
  GraduationCap,
  Gamepad2,
  ShoppingBag,
  Wifi,
  Coins,
  Laptop,
  Heart,
  HelpCircle,
  Umbrella,
  Baby,
  PartyPopper,
  Shield,
} from 'lucide-react';
import { useDashboard } from '@/hooks/use-dashboard';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CardSkeleton, ChartSkeleton, Skeleton } from '@/components/ui/loading-skeleton';
import type { DashboardData, BudgetStatus, Transaction } from '@/types';

const DashboardChart = dynamic(() => import('./dashboard-chart'), {
  ssr: false,
  loading: () => <div className="h-full w-full animate-pulse bg-slate-100 rounded-xl" />
});

const fmt = new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0, maximumFractionDigits: 0 });
const fmtDate = (d: string) =>
  new Date(d).toLocaleDateString('id-ID', { month: 'short', day: 'numeric', year: 'numeric' });

const CATEGORY_CONFIGS: Record<string, { icon: any; bg: string; text: string }> = {
  Makanan: { icon: Utensils, bg: 'bg-amber-100/80 dark:bg-amber-950/30', text: 'text-amber-600 dark:text-amber-400' },
  Transportasi: { icon: Car, bg: 'bg-blue-100/80 dark:bg-blue-950/30', text: 'text-blue-600 dark:text-blue-400' },
  Sewa: { icon: Home, bg: 'bg-purple-100/80 dark:bg-purple-950/30', text: 'text-purple-600 dark:text-purple-400' },
  Pendidikan: { icon: GraduationCap, bg: 'bg-indigo-100/80 dark:bg-indigo-950/30', text: 'text-indigo-600 dark:text-indigo-400' },
  Hiburan: { icon: Gamepad2, bg: 'bg-rose-100/80 dark:bg-rose-950/30', text: 'text-rose-600 dark:text-rose-400' },
  Belanja: { icon: ShoppingBag, bg: 'bg-pink-100/80 dark:bg-pink-950/30', text: 'text-pink-600 dark:text-pink-400' },
  Internet: { icon: Wifi, bg: 'bg-sky-100/80 dark:bg-sky-950/30', text: 'text-sky-600 dark:text-sky-400' },
  Gaji: { icon: Coins, bg: 'bg-emerald-100/80 dark:bg-emerald-950/30', text: 'text-emerald-600 dark:text-emerald-400' },
  Beasiswa: { icon: GraduationCap, bg: 'bg-teal-100/80 dark:bg-teal-950/30', text: 'text-teal-600 dark:text-teal-400' },
  'Pekerjaan Lepas': { icon: Laptop, bg: 'bg-green-100/80 dark:bg-green-950/30', text: 'text-green-600 dark:text-green-400' },
  'Dukungan Keluarga': { icon: Heart, bg: 'bg-red-100/80 dark:bg-red-950/30', text: 'text-red-600 dark:text-red-400' },
  Lainnya: { icon: HelpCircle, bg: 'bg-slate-100/80 dark:bg-slate-950/30', text: 'text-slate-600 dark:text-slate-400' },
};

const GOAL_ICONS: Record<string, any> = {
  '🏖️': Umbrella,
  '🚗': Car,
  '🏠': Home,
  '💻': Laptop,
  '🎓': GraduationCap,
  '💍': Heart,
  '👶': Baby,
  '🎉': PartyPopper,
  '🛡️': Shield,
  '📈': TrendingUp,
  '🎯': Target,
};

function statusVariant(status: BudgetStatus): 'success' | 'warning' | 'danger' {
  if (status === 'safe') return 'success';
  if (status === 'warning') return 'warning';
  return 'danger';
}

function statusLabel(status: BudgetStatus): string {
  if (status === 'safe') return 'Sesuai Jalur';
  if (status === 'warning') return 'Peringatan';
  if (status === 'critical') return 'Kritis';
  return 'Lebih Anggaran';
}



/* ─── Health Score Ring ─── */
function HealthScoreRing({ score }: { score: number }) {
  const radius = 60;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score / 100) * circumference;
  const color = score >= 70 ? '#22C55E' : score >= 40 ? '#F59E0B' : '#EF4444';
  const label = score >= 70 ? 'Sangat Baik' : score >= 40 ? 'Cukup' : 'Perlu Perbaikan';

  return (
    <div className="flex flex-col items-center gap-3">
      <svg width="160" height="160" viewBox="0 0 160 160" className="drop-shadow-sm">
        <circle
          cx="80"
          cy="80"
          r={radius}
          fill="none"
          stroke="#E2E8F0"
          strokeWidth="10"
        />
        <circle
          cx="80"
          cy="80"
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth="10"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          transform="rotate(-90 80 80)"
          className="transition-all duration-1000 ease-out"
        />
        <text x="80" y="72" textAnchor="middle" className="text-3xl font-bold" fill="#0F172A">
          {score}
        </text>
        <text x="80" y="96" textAnchor="middle" className="text-xs" fill="#64748B">
          {label}
        </text>
      </svg>
    </div>
  );
}

/* ─── Savings Goal Mini Card ─── */
function SavingsGoalMini({ goal }: { goal: DashboardData['savingsGoals'][number] }) {
  const pct = goal.targetAmount > 0 ? Math.round((goal.currentAmount / goal.targetAmount) * 100) : 0;
  const radius = 24;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (pct / 100) * circumference;

  return (
    <div className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-slate-50/50 p-4 transition-colors hover:bg-slate-50">
      <svg width="60" height="60" viewBox="0 0 60 60" className="shrink-0">
        <circle cx="30" cy="30" r={radius} fill="none" stroke="#E2E8F0" strokeWidth="4" />
        <circle
          cx="30"
          cy="30"
          r={radius}
          fill="none"
          stroke="#22C55E"
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          transform="rotate(-90 30 30)"
          className="transition-all duration-700 ease-out"
        />
        <text x="30" y="34" textAnchor="middle" className="text-[11px] font-semibold" fill="#0F172A">
          {pct}%
        </text>
      </svg>
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-medium text-slate-900 flex items-center gap-1.5">
          {(() => {
            const Icon = GOAL_ICONS[goal.icon] || Target;
            return <Icon className="h-4 w-4 text-slate-400 shrink-0" />;
          })()}
          {goal.goalName}
        </p>
        <p className="text-xs text-slate-500">
          {fmt.format(goal.currentAmount)} / {fmt.format(goal.targetAmount)}
        </p>
      </div>
    </div>
  );
}

/* ─── Loading Skeleton ─── */
function DashboardSkeleton() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <CardSkeleton key={i} />
        ))}
      </div>
      <div className="grid gap-6 xl:grid-cols-[1.5fr_0.9fr]">
        <ChartSkeleton />
        <CardSkeleton className="h-[380px]" />
      </div>
      <div className="grid gap-6 xl:grid-cols-2">
        <CardSkeleton className="h-[320px]" />
        <CardSkeleton className="h-[320px]" />
      </div>
    </div>
  );
}

/* ─── Welcome Empty State ─── */
function WelcomeState() {
  return (
    <div className="flex flex-col items-center justify-center rounded-3xl border-2 border-dashed border-slate-200 bg-white/80 px-6 py-20 text-center backdrop-blur-sm animate-fade-in">
      <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-primary/10">
        <Wallet className="h-10 w-10 text-primary" />
      </div>
      <h2 className="mt-6 text-2xl font-semibold text-slate-900">Selamat datang di BudgedIn! 🎓</h2>
      <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-500">
        Mulai atur keuangan Anda layaknya profesional. Tambahkan transaksi pertama Anda untuk melihat dasbor hidup dengan wawasan dan analitik.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link href="/transactions">
          <Button>
            <PlusCircle className="h-4 w-4" />
            Tambah Transaksi Pertama
          </Button>
        </Link>
        <Link href="/budgets">
          <Button variant="secondary">Atur Anggaran</Button>
        </Link>
        <Link href="/goals">
          <Button variant="ghost">Buat Target Tabungan</Button>
        </Link>
      </div>
    </div>
  );
}

export function DashboardView() {
  const { data: dashboardData, isPending, error } = useDashboard();

  const isEmpty = useMemo(() => {
    if (!dashboardData) return true;
    return (
      dashboardData.totalTransactions === 0 &&
      dashboardData.totalIncome === 0 &&
      dashboardData.totalExpenses === 0
    );
  }, [dashboardData]);

  if (isPending) return <DashboardSkeleton />;

  if (error || !dashboardData) {
    return <WelcomeState />;
  }

  if (isEmpty) {
    return <WelcomeState />;
  }

  const { currentBalance, totalIncome, totalExpenses, totalTransactions, recentTransactions, monthlyOverview, budgetOverview, savingsGoals, healthScore } = dashboardData;

  const statCards = [
    {
      title: 'Saldo Saat Ini',
      value: fmt.format(currentBalance),
      icon: <DollarSign className="h-5 w-5" />,
      iconBg: 'bg-emerald-500/10 text-emerald-600',
      accent: 'from-emerald-500 to-teal-500',
    },
    {
      title: 'Total Pemasukan',
      value: fmt.format(totalIncome),
      icon: <TrendingUp className="h-5 w-5" />,
      iconBg: 'bg-green-500/10 text-green-600',
      accent: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Total Pengeluaran',
      value: fmt.format(totalExpenses),
      icon: <TrendingDown className="h-5 w-5" />,
      iconBg: 'bg-red-500/10 text-red-600',
      accent: 'from-red-500 to-rose-500',
    },
    {
      title: 'Transaksi',
      value: totalTransactions.toLocaleString(),
      icon: <Receipt className="h-5 w-5" />,
      iconBg: 'bg-blue-500/10 text-blue-600',
      accent: 'from-blue-500 to-indigo-500',
    },
  ];

  return (
    <div className="space-y-6">
      {/* ─── Stat Cards ─── */}
      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {statCards.map((card, idx) => (
          <div
            key={card.title}
            className={cn(
              'group relative overflow-hidden rounded-3xl border border-slate-200/60 bg-white/80 shadow-soft backdrop-blur-sm transition-all duration-300 hover:shadow-glow animate-slide-up',
              idx === 1 && 'delay-75',
              idx === 2 && 'delay-150',
              idx === 3 && 'delay-225'
            )}
          >
            <div className={cn('absolute inset-y-0 left-0 w-1 bg-gradient-to-b', card.accent)} />
            <div className="p-6 pl-7">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-500">{card.title}</p>
                  <p className="mt-2 text-2xl font-bold tracking-tight text-slate-900 animate-count-up">
                    {card.value}
                  </p>
                </div>
                <div className={cn('flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl transition-colors', card.iconBg)}>
                  {card.icon}
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* ─── Monthly Overview + Health Score ─── */}
      <section className="grid gap-6 xl:grid-cols-[1.5fr_0.9fr]">
        {/* Monthly Chart */}
        <Card className="animate-slide-up delay-150">
          <CardHeader>
            <CardTitle>Ringkasan Bulanan</CardTitle>
            <CardDescription>Tren pemasukan vs pengeluaran per bulan</CardDescription>
          </CardHeader>
          <CardContent className="h-[320px]">
            {monthlyOverview && monthlyOverview.length > 0 ? (
              <DashboardChart data={monthlyOverview} />
            ) : (
              <div className="flex h-full items-center justify-center text-sm text-slate-400">
                Belum ada data bulanan
              </div>
            )}
          </CardContent>
        </Card>

        {/* Health Score */}
        <Card className="animate-slide-up delay-225">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-primary" />
              Kesehatan Finansial
            </CardTitle>
            <CardDescription>Kedisiplinan anggaran dan konsistensi menabung Anda</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center gap-4 pt-2">
            <HealthScoreRing score={healthScore} />
            <Badge variant={healthScore >= 70 ? 'success' : healthScore >= 40 ? 'warning' : 'danger'}>
              {healthScore >= 70 ? 'Sehat' : healthScore >= 40 ? 'Perlu Perbaikan' : 'Beresiko'}
            </Badge>
            <Link href="/reports" className="w-full">
              <Button variant="ghost" className="w-full mt-2">
                Lihat Laporan Lengkap <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </CardContent>
        </Card>
      </section>

      {/* ─── Recent Transactions + Budget + Savings ─── */}
      <section className="grid gap-6 xl:grid-cols-[1fr_1fr]">
        {/* Recent Transactions */}
        <Card className="animate-slide-up delay-225">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Transaksi Terakhir</CardTitle>
              <CardDescription>Aktivitas terbaru</CardDescription>
            </div>
            <Link href="/transactions">
              <Button variant="ghost" size="sm">
                Lihat Semua <ArrowRight className="h-3.5 w-3.5" />
              </Button>
            </Link>
          </CardHeader>
          <CardContent className="space-y-3">
            {recentTransactions && recentTransactions.length > 0 ? (
              recentTransactions.slice(0, 5).map((tx: Transaction) => {
                const config = CATEGORY_CONFIGS[tx.category] || CATEGORY_CONFIGS['Lainnya'];
                const Icon = config.icon;
                return (
                  <div
                    key={tx.id}
                    className="flex items-center justify-between rounded-2xl border border-slate-100 bg-slate-50/50 px-4 py-3 transition-colors hover:bg-slate-50"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className={cn('p-2 rounded-xl relative shrink-0', config.bg, config.text)}>
                        <Icon className="h-4 w-4" />
                        <span className={cn(
                          "absolute -top-0.5 -right-0.5 flex h-3 w-3 items-center justify-center rounded-full text-[7px] text-white border border-white font-bold",
                          tx.type === 'income' ? "bg-green-500" : "bg-red-500"
                        )}>
                          {tx.type === 'income' ? '+' : '-'}
                        </span>
                      </div>
                      <div className="min-w-0">
                        <p className="truncate text-sm font-medium text-slate-900">{tx.title}</p>
                        <p className="text-xs text-slate-500">
                          {tx.category} · {fmtDate(tx.transactionDate)}
                        </p>
                      </div>
                    </div>
                    <p
                      className={cn(
                        'shrink-0 text-sm font-semibold',
                        tx.type === 'income' ? 'text-emerald-600' : 'text-red-500'
                      )}
                    >
                      {tx.type === 'income' ? '+' : '-'}{fmt.format(tx.amount)}
                    </p>
                  </div>
                );
              })
            ) : (
              <p className="py-8 text-center text-sm text-slate-400">Belum ada transaksi</p>
            )}
          </CardContent>
        </Card>

        {/* Budget Overview + Savings */}
        <div className="space-y-6">
          {/* Budget */}
          <Card className="animate-slide-up delay-300">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Ikhtisar Anggaran</CardTitle>
                <CardDescription>Progres bulan ini</CardDescription>
              </div>
              <Link href="/budgets">
                <Button variant="ghost" size="sm">
                  Kelola <ArrowRight className="h-3.5 w-3.5" />
                </Button>
              </Link>
            </CardHeader>
            <CardContent>
              {budgetOverview ? (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xl font-bold text-slate-900">
                        {fmt.format(budgetOverview.totalSpent)}
                        <span className="text-sm font-normal text-slate-500">
                          {' '}/ {fmt.format(budgetOverview.totalBudget)}
                        </span>
                      </p>
                    </div>
                    <Badge variant={statusVariant(budgetOverview.status)}>
                      {statusLabel(budgetOverview.status)}
                    </Badge>
                  </div>
                  <div className="h-3 w-full overflow-hidden rounded-full bg-slate-100">
                    <div
                      className={cn(
                        'h-full rounded-full transition-all duration-700 ease-out',
                        budgetOverview.status === 'safe' && 'bg-gradient-to-r from-emerald-400 to-green-500',
                        budgetOverview.status === 'warning' && 'bg-gradient-to-r from-amber-400 to-yellow-500',
                        budgetOverview.status === 'critical' && 'bg-gradient-to-r from-red-400 to-rose-500',
                        budgetOverview.status === 'over_budget' && 'bg-gradient-to-r from-red-500 to-red-600 animate-pulse'
                      )}
                      style={{ width: `${Math.min(100, budgetOverview.percentageUsed)}%` }}
                    />
                  </div>
                  <p className="text-xs text-slate-500 text-right">
                    {budgetOverview.percentageUsed.toFixed(1)}% terpakai · tersisa {fmt.format(budgetOverview.totalRemaining)}
                  </p>
                </div>
              ) : (
                <div className="py-6 text-center">
                  <p className="text-sm text-slate-400 mb-3">Anggaran belum diatur untuk bulan ini</p>
                  <Link href="/budgets">
                    <Button size="sm">Buat Anggaran</Button>
                  </Link>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Savings Goals */}
          <Card className="animate-slide-up delay-375">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-primary" />
                  Target Tabungan
                </CardTitle>
              </div>
              <Link href="/goals">
                <Button variant="ghost" size="sm">
                  Lihat Semua <ArrowRight className="h-3.5 w-3.5" />
                </Button>
              </Link>
            </CardHeader>
            <CardContent className="space-y-3">
              {savingsGoals && savingsGoals.length > 0 ? (
                savingsGoals.slice(0, 3).map((goal) => (
                  <SavingsGoalMini key={goal.id} goal={goal} />
                ))
              ) : (
                <div className="py-6 text-center">
                  <p className="text-sm text-slate-400 mb-3">Belum ada target tabungan</p>
                  <Link href="/goals">
                    <Button size="sm">Buat Target</Button>
                  </Link>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
