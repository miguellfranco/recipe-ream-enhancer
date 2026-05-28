import { createFileRoute } from "@tanstack/react-router";
import { Check, Star, Sparkles, BookOpen, Heart, Infinity as InfinityIcon, MessageCircle, Printer, Trophy } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import produtoMockup from "@/assets/produto-mockup.png";
import previaFibromialgia from "@/assets/previa-fibromialgia.png";
import previaAcne from "@/assets/previa-acne.png";
import previaCristais from "@/assets/previa-cristais.png";
import previaErvas from "@/assets/previa-ervas.png";
import previaAplicacao from "@/assets/previa-aplicacao.png";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Guia de Autocura Energética — 150 Receitas Holísticas" },
      { name: "description", content: "Guia prático com 150 receitas de cristais, chás e ervas para eliminar dores físicas e emocionais em minutos." },
    ],
  }),
});

const HERO_IMG = produtoMockup;
const BONUS_1 = "https://cocriadordeluz.com.br/wp-content/uploads/2024/11/Design_sem_nome__66_-removebg-preview-1-e1731803151818.png";
const BONUS_2 = "https://cocriadordeluz.com.br/wp-content/uploads/2024/11/Design_sem_nome__65_-removebg-preview-1.png";
const BONUS_3 = "https://cocriadordeluz.com.br/wp-content/uploads/2024/11/Design_sem_nome__63_-removebg-preview-1.png";

const CHECKOUT = "https://pay.kiwify.com.br/pipvVXn";
const CHECKOUT_BASIC = "https://pay.kiwify.com.br/pipvVXn";
const CHECKOUT_UPSELL = CHECKOUT;

function CTA({ children = "QUERO TER CURA FÍSICA E EMOCIONAL", className = "", href = "#comprar" }: { children?: React.ReactNode; className?: string; href?: string }) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!href.startsWith("#")) return;
    e.preventDefault();
    const target = document.getElementById("pacote-completo") || document.getElementById(href.slice(1));
    if (!target) return;
    const rect = target.getBoundingClientRect();
    const top = window.scrollY + rect.top - Math.max(0, (window.innerHeight - rect.height) / 2);
    window.scrollTo({ top, behavior: "smooth" });
    target.classList.remove("upsell-flash");
    // force reflow then re-add so it replays
    void target.offsetWidth;
    target.classList.add("upsell-flash");
    window.setTimeout(() => target.classList.remove("upsell-flash"), 2200);
  };
  return (
    <a
      href={href}
      onClick={handleClick}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-8 py-5 text-base md:text-lg font-bold tracking-wide text-[color:var(--cta-foreground)] shadow-[var(--shadow-soft)] transition-transform hover:scale-[1.02] active:scale-[0.99] ${className}`}
      style={{ background: "var(--gradient-cta)" }}
    >
      <Sparkles className="h-5 w-5" />
      {children}
    </a>
  );
}

function SectionTitle({ children, kicker }: { children: React.ReactNode; kicker?: string }) {
  return (
    <div className="text-center max-w-3xl mx-auto mb-10">
      {kicker && (
        <div className="inline-block rounded-full bg-secondary px-4 py-1 text-xs font-semibold uppercase tracking-widest text-secondary-foreground mb-4">
          {kicker}
        </div>
      )}
      <h2 className="text-3xl md:text-4xl font-bold leading-tight text-foreground">{children}</h2>
    </div>
  );
}

const conditions = [
  "Ansiedade generalizada e ataques de pânico",
  "Depressão e sentimentos de desesperança",
  "Burnout (esgotamento profissional)",
  "Estresse crônico e procrastinação",
  "Dores crônicas resistentes a tratamento",
  "Insônia e distúrbios do sono",
  "Bruxismo por tensão emocional",
  "Pesadelos frequentes",
  "Diabetes tipo 2 agravado por estresse",
  "Infertilidade ligada a fatores emocionais",
  "Dores de cabeça e enxaquecas",
  "Dores lombares e nas costas",
  "Dor cervical e tensão nos ombros",
  "Fibromialgia",
  "Dores articulares sem causa clara",
  "Síndrome do intestino irritável",
  "Gastrite e refluxo",
  "Acne ligada ao estresse",
  "Queda de cabelo por estresse",
  "Transtornos alimentares",
];

const benefits = [
  { icon: BookOpen, title: "+150 Tratamentos Práticos", text: "Mais de 150 receitas holísticas catalogadas para fazer em casa em poucos minutos por dia." },
  { icon: MessageCircle, title: "Suporte ao aluno", text: "Apoio direto pelo WhatsApp para tirar todas as suas dúvidas sempre que precisar." },
  { icon: Heart, title: "Sem conhecimento prévio", text: "Material simplificado e didático. É só ler e aplicar na prática." },
  { icon: Printer, title: "Liberado para imprimir", text: "Acesso digital + versão pronta para impressão em qualquer gráfica, sem custo adicional." },
  { icon: InfinityIcon, title: "Acesso vitalício", text: "Consulte sempre que quiser e compartilhe com quem você ama." },
  { icon: Sparkles, title: "Ideal para terapeutas", text: "Compêndio respaldado pela medicina integrativa para uso profissional." },
];

const faqs = [
  { q: "Esse guia realmente funciona para aliviar dores e problemas emocionais?", a: "Sim. O Guia foi desenvolvido com base em princípios da medicina integrativa. Estudos da Universidade de Harvard e do Journal of Ethnopharmacology comprovam os benefícios do uso de cristais, ervas e técnicas energéticas para reduzir inflamação, ansiedade, estresse e melhorar a saúde emocional." },
  { q: "Nunca usei cristais ou ervas antes. Consigo aplicar?", a: "Com certeza. Tudo foi escrito em linguagem simples e didática, com passo a passo detalhado. Mesmo sem experiência você começa imediatamente — e nossa equipe está no WhatsApp para te ajudar." },
  { q: "Não consigo essas informações de graça na internet?", a: "Algumas informações soltas existem online, mas o Guia reúne mais de 150 receitas catalogadas e validadas em um único material, com protocolos testados e respaldo da medicina integrativa." },
  { q: "Esses métodos têm base científica?", a: "Sim. A OMS reconhece a integração corpo-mente, e pesquisas de Harvard mostram que terapias complementares reduzem marcadores de estresse. Não é misticismo — é abordagem holística com base científica." },
  { q: "Tenho pouco tempo livre. Consigo aplicar mesmo assim?", a: "Sim. As receitas levam poucos minutos por dia e se encaixam na rotina. Você ainda recebe o Planner de Autocuidado para implementar com eficiência." },
];

function Index() {
  const [upsellOpen, setUpsellOpen] = useState(false);
  const [upsellStage, setUpsellStage] = useState<"first" | "final">("first");

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* HERO */}
      <section className="relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
        <div className="absolute inset-0 pointer-events-none opacity-40"
          style={{ background: "radial-gradient(circle at 20% 20%, oklch(0.8 0.15 300 / 0.4), transparent 50%), radial-gradient(circle at 80% 60%, oklch(0.85 0.12 330 / 0.4), transparent 55%)" }} />
        <div className="relative max-w-5xl mx-auto px-5 pt-14 pb-16 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur px-4 py-1.5 text-xs font-semibold text-primary border border-primary/20 mb-6">
            <Sparkles className="h-3.5 w-3.5" /> GUIA DE AUTOCURA ENERGÉTICA
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-foreground">
            Tenha em mãos seu <span className="underline decoration-primary decoration-4 underline-offset-4">Guia Prático de Autocura Energética</span>{" "}
            <span className="text-destructive">para eliminar 80 tipos de dores e doenças psicossomáticas</span> em minutos
          </h1>

          <ul className="mt-8 flex flex-col sm:flex-row sm:justify-center gap-3 sm:gap-6 text-sm md:text-base font-semibold">
            {["Sem remédios caros", "Sem terapias longas", "Sem perder tempo pesquisando"].map((t) => (
              <li key={t} className="inline-flex items-center justify-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-md bg-[color:var(--cta)] text-white">
                  <Check className="h-4 w-4" />
                </span>
                {t}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex justify-center">
            <img src={HERO_IMG} alt="Mockup do Guia de Autocura Energética em tablets e smartphones" className="w-full max-w-2xl drop-shadow-2xl" />
          </div>

          <div className="mt-8">
            <CTA />
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="py-14 px-5">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-accent/15 px-4 py-2 text-sm font-bold text-foreground mb-4">
            <Trophy className="h-4 w-4 text-accent" />
            Nº 1 em vendas no nicho de terapias holísticas
          </div>
          <p className="text-lg md:text-xl text-muted-foreground">
            <strong className="text-foreground">+34.150 alunos</strong> e <strong className="text-foreground">12.823 avaliações positivas</strong>
          </p>
          <div className="flex justify-center gap-1 mt-3 text-accent">
            {[...Array(5)].map((_, i) => <Star key={i} className="h-6 w-6 fill-current" />)}
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mt-8 leading-snug">
            8.202 mães, pais, avós e estudantes brasileiros relataram <span className="text-primary">alívio físico e emocional</span> seguindo as práticas do Guia.
          </h2>
        </div>
      </section>

      {/* BÍBLIA */}
      <section className="py-16 px-5 bg-secondary/40">
        <div className="max-w-4xl mx-auto">
          <SectionTitle kicker="Sua nova rotina">Este guia será sua BÍBLIA de Autocura Energética</SectionTitle>
          <div className="space-y-5 text-base md:text-lg text-muted-foreground leading-relaxed">
            <p>
              Quando uma pessoa não consegue lidar adequadamente com suas emoções, o corpo acaba <strong className="text-foreground underline decoration-primary decoration-2 underline-offset-4">somatizando</strong> essas questões, resultando em <strong className="text-foreground">doenças físicas</strong>.
            </p>
            <p className="text-foreground font-semibold">
              A psicossomatização é uma forma do seu corpo expressar a necessidade de resolução de conflitos emocionais que <span className="text-primary">não foram resolvidos conscientemente</span> por você.
            </p>
            <p>
              O <strong className="text-foreground">“Guia da Autocura Energética”</strong> é a solução ideal para esses problemas, fornecendo técnicas holísticas práticas para restaurar <strong className="text-foreground">100% o seu equilíbrio emocional e energético</strong>, aliviando sintomas psicossomáticos e <strong className="text-foreground underline decoration-primary decoration-2 underline-offset-4">promovendo a cura de dentro para fora</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* SCIENCE */}
      <section className="relative py-20 px-5 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 opacity-70" style={{ background: "radial-gradient(circle at 15% 10%, oklch(0.85 0.10 300 / 0.45), transparent 55%), radial-gradient(circle at 90% 90%, oklch(0.82 0.12 320 / 0.45), transparent 55%)" }} />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px" style={{ background: "linear-gradient(90deg, transparent, oklch(0.55 0.20 300 / 0.4), transparent)" }} />
        <div className="relative max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.25em] text-white shadow-lg mb-5" style={{ background: "linear-gradient(90deg, #7e22ce, #c026d3)" }}>
              <Sparkles className="h-3 w-3" /> Base científica comprovada
            </div>
            <h2 className="text-3xl md:text-5xl font-black leading-tight tracking-tight text-foreground">
              100% fundamentado em princípios <br className="hidden md:block" />
              reconhecidos pela <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(135deg, #7e22ce, #a855f7, #c026d3)" }}>medicina integrativa</span>
            </h2>
            <div className="mx-auto mt-4 h-1 w-24 rounded-full" style={{ background: "linear-gradient(90deg, #7e22ce, #c026d3)" }} />
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {[
              { tag: "OMS", icon: "🌍", text: "Evidências científicas sobre a conexão mente-corpo reconhecidas pela Organização Mundial da Saúde." },
              { tag: "Harvard", icon: "🎓", text: "Estudos mostram que técnicas integrativas reduzem marcadores de inflamação e melhoram a saúde emocional." },
              { tag: "Journal of Ethnopharmacology", icon: "🌿", text: "Ervas como valeriana e lavanda têm efeitos comprovados contra insônia, ansiedade e dores crônicas." },
            ].map((c) => (
              <div key={c.tag} className="group relative rounded-2xl p-[1.5px] shadow-lg transition-all hover:-translate-y-1 hover:shadow-2xl" style={{ background: "linear-gradient(140deg, oklch(0.75 0.18 300 / 0.7), oklch(0.85 0.12 320 / 0.3), oklch(0.75 0.18 280 / 0.7))" }}>
                <div className="h-full rounded-2xl bg-white p-6 flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl text-lg shadow-md" style={{ background: "linear-gradient(135deg, oklch(0.95 0.04 300), oklch(0.90 0.08 320))" }}>
                      {c.icon}
                    </div>
                    <div className="text-xs font-black uppercase tracking-widest bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(135deg, #7e22ce, #c026d3)" }}>{c.tag}</div>
                  </div>
                  <p className="text-sm md:text-base text-foreground leading-relaxed">{c.text}</p>
                  <div className="mt-5 h-0.5 w-full rounded-full opacity-30" style={{ background: "linear-gradient(90deg, #7e22ce, transparent)" }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONDITIONS */}
      <section className="py-16 px-5 bg-secondary/40">
        <div className="max-w-5xl mx-auto">
          <SectionTitle kicker="O que você vai tratar">
            Mais de 150 receitas holísticas práticas para melhorar sintomas como:
          </SectionTitle>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {conditions.map((c) => (
              <li key={c} className="flex items-start gap-3 rounded-xl bg-card border border-border p-4">
                <Check className="h-5 w-5 text-[color:var(--cta)] shrink-0 mt-0.5" />
                <span className="text-sm md:text-base">{c}</span>
              </li>
            ))}
          </ul>
          <div className="text-center mt-10"><CTA>EU QUERO MEU GUIA</CTA></div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-16 px-5">
        <div className="max-w-5xl mx-auto">
          <SectionTitle kicker="Por que é diferente">Tudo o que você recebe</SectionTitle>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map(({ icon: Icon, title, text }) => (
              <div key={title} className="rounded-2xl border border-border bg-card p-6 hover:-translate-y-1 transition-transform">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-bold text-lg mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PREVIEW */}
      <section className="py-16 px-5 bg-foreground text-background">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Veja uma prévia do conteúdo do Guia</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { img: previaFibromialgia, title: "Prévia sobre fibromialgia" },
              { img: previaAcne, title: "Prévia sobre acne" },
              { img: previaCristais, title: "Prévia sobre cristais de limpeza" },
              { img: previaErvas, title: "Prévia sobre ervas e chás" },
              { img: previaAplicacao, title: "Prévia sobre aplicação prática" },
            ].map((item) => (
              <div key={item.title} className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-2xl">
                <img src={item.img} alt={item.title} className="h-full w-full object-cover transition-transform duration-300 hover:scale-[1.02]" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BONUSES */}
      <section className="py-16 px-5">
        <div className="max-w-5xl mx-auto">
          <SectionTitle kicker="Exclusivo de hoje">
            Ao adquirir hoje, você recebe 3 bônus exclusivos
          </SectionTitle>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { tag: "🎁 Presente 1", img: BONUS_1, title: "Planner de Autocuidado", text: "Calendário semanal para implementar suas práticas e acompanhar seu progresso." },
              { tag: "🎁 Presente 2", img: BONUS_2, title: "Calendário Lunar de Rituais", text: "Calendário digital com todas as fases lunares e melhores dias para cada ritual." },
              { tag: "🎁 Super Bônus", img: BONUS_3, title: "Leitura Numerológica Cabalística", text: "Análise personalizada baseada no seu nome completo e data de nascimento — entregue em até 24h." },
            ].map((b) => (
              <div key={b.title} className="rounded-2xl border border-primary/20 bg-card p-6 text-center shadow-sm hover:shadow-[var(--shadow-soft)] transition-shadow">
                <div className={`inline-block rounded-full px-4 py-1.5 text-xs font-extrabold mb-4 ${b.tag === "🎁 Super Bônus" ? "bg-primary text-primary-foreground shadow-[var(--shadow-glow)]" : "bg-accent/15 text-accent-foreground/80"}`}>{b.tag}</div>
                <img src={b.img} alt={b.title} className="h-44 mx-auto object-contain mb-4" />
                <h3 className={`font-bold text-lg mb-2 ${b.tag === "🎁 Super Bônus" ? "text-primary" : ""}`}>{b.title}</h3>
                <p className={`text-sm ${b.tag === "🎁 Super Bônus" ? "text-foreground font-medium" : "text-muted-foreground"}`}>{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OFFER */}
      <section id="comprar" className="py-20 px-5 bg-secondary/40">
        <div className="max-w-6xl mx-auto">
          <SectionTitle kicker="Escolha seu plano">Duas formas de começar sua autocura hoje</SectionTitle>

          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
            {/* BASIC PLAN — só o livro */}
            <div className="relative rounded-3xl bg-card border border-border shadow-sm p-8 flex flex-col opacity-95">
              <div className="inline-block self-start rounded-full bg-muted px-3 py-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
                Plano Simples
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-2">Apenas o Guia</h3>
              <p className="text-sm text-muted-foreground mb-6">Somente o livro digital, sem bônus.</p>
              <ul className="text-left space-y-2 mb-8 text-sm">
                {[
                  "+150 receitas holísticas em PDF",
                  "Acesso digital imediato",
                  "Liberado para impressão",
                ].map((t) => (
                  <li key={t} className="flex gap-2"><Check className="h-5 w-5 text-muted-foreground shrink-0" />{t}</li>
                ))}
                {[
                  "Sem Planner de Autocuidado",
                  "Sem Calendário Lunar",
                  "Sem Leitura Numerológica",
                  "Sem suporte no WhatsApp",
                ].map((t) => (
                  <li key={t} className="flex gap-2 text-muted-foreground/70 line-through"><span className="h-5 w-5 shrink-0 text-center">—</span>{t}</li>
                ))}
              </ul>
              <div className="mt-auto">
                <div className="text-4xl font-extrabold text-foreground leading-none">R$ 10,00</div>
                <p className="mt-1 text-xs text-muted-foreground">à vista — somente o livro</p>
                <button
                  type="button"
                  onClick={() => { setUpsellStage("first"); setUpsellOpen(true); }}
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-4 text-sm font-bold border-2 border-border bg-background text-foreground hover:bg-muted transition-colors cursor-pointer"
                >
                  QUERO SÓ O LIVRO
                </button>
              </div>
            </div>

            {/* PREMIUM PLAN — destaque */}
            <div id="pacote-completo" className="relative rounded-3xl border-2 border-primary bg-card shadow-[var(--shadow-glow)] p-8 md:p-10 flex flex-col scale-100 lg:scale-[1.03] z-10 scroll-mt-24">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-white shadow-lg" style={{ background: "var(--gradient-cta)" }}>
                  <Star className="h-3.5 w-3.5 fill-current" /> Mais escolhido — 92% dos alunos
                </span>
              </div>
              <div className="inline-block self-start rounded-full bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary mb-4 mt-2">
                Pacote Completo
              </div>
              <h3 className="text-2xl md:text-3xl font-extrabold mb-2">Guia + TODOS os Bônus</h3>
              <p className="text-sm text-muted-foreground mb-6">A experiência completa para transformar sua saúde física e emocional.</p>

              <img src={HERO_IMG} alt="Guia completo + bônus" className="w-full max-w-xs mx-auto mb-6 drop-shadow-xl" />

              <div className="rounded-2xl bg-secondary/50 border border-primary/15 p-5 mb-6">
                <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">Tudo que você vai receber:</p>
                <ul className="text-left space-y-2.5 text-sm md:text-base">
                  {[
                    "📘 Guia completo com +150 receitas holísticas",
                    "🎁 Bônus 1 — Planner de Autocuidado Semanal",
                    "🎁 Bônus 2 — Calendário Lunar de Rituais",
                    "⭐ Super Bônus — Leitura Numerológica Cabalística personalizada",
                    "🖨️ Versão pronta para impressão sem custo extra",
                    "♾️ Acesso vitalício + atualizações gratuitas",
                    "💬 Suporte individual no WhatsApp",
                    "📲 Entrega 100% digital imediata",
                  ].map((t) => (
                    <li key={t} className="flex gap-2 items-start"><Check className="h-5 w-5 text-[color:var(--cta)] shrink-0 mt-0.5" /><span>{t}</span></li>
                  ))}
                </ul>
              </div>

              <div className="text-center mt-auto">
                <p className="text-sm text-muted-foreground line-through">Valor total dos itens: R$ 497,00</p>
                <p className="mt-2 text-base font-semibold">Hoje, oferta promocional por apenas:</p>
                <div className="my-4">
                  <div className="text-5xl md:text-6xl font-extrabold text-primary leading-none">12x R$ 3,58</div>
                  <div className="mt-2 text-lg font-semibold">ou <span className="text-foreground font-extrabold">R$ 37</span> à vista</div>
                </div>
              <CTA href={CHECKOUT}>QUERO O PACOTE COMPLETO</CTA>
                <p className="mt-3 text-xs font-semibold text-[color:var(--cta)]">⚡ Economize R$ 460 escolhendo o pacote completo</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-5">
        <div className="max-w-3xl mx-auto">
          <SectionTitle kicker="FAQ">Perguntas frequentes</SectionTitle>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <details key={i} className="group rounded-xl border border-border bg-card p-5 open:shadow-[var(--shadow-soft)] transition-shadow">
                <summary className="cursor-pointer list-none flex items-start justify-between gap-3 font-semibold">
                  <span>{f.q}</span>
                  <span className="text-primary text-2xl leading-none transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-sm md:text-base text-muted-foreground leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-10 px-5 border-t border-border text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Guia de Autocura Energética. Todos os direitos reservados.
      </footer>

      {/* UPSELL MODAL */}
      <Dialog open={upsellOpen} onOpenChange={setUpsellOpen}>
        <DialogContent className="max-w-md p-0 overflow-hidden rounded-3xl bg-white border-0 max-h-[92vh] overflow-y-auto">
          {upsellStage === "first" ? (
          <div className="px-6 pt-8 pb-7 text-center">
            <div className="text-5xl mb-4">🎁</div>
            <h3 className="text-2xl md:text-3xl font-extrabold text-[#0f172a] leading-tight">
              Espere! Oferta<br />Exclusiva!
            </h3>
            <p className="mt-4 text-[11px] md:text-xs font-extrabold uppercase tracking-[0.18em] text-[color:var(--cta)]">
              Upgrade para o pacote completo com desconto extra
            </p>

            <div className="mt-6 rounded-2xl bg-[#fff7e6] px-5 py-6">
              <p className="text-sm text-muted-foreground">De <span className="line-through">R$ 37,00</span></p>
              <p className="mt-2 text-3xl md:text-4xl font-extrabold text-[#15803d] leading-tight">
                Por apenas<br />R$ 24,99
              </p>
              <div className="mt-5 inline-flex items-center justify-center rounded-full px-6 py-3 text-xs md:text-sm font-extrabold text-white shadow-md" style={{ background: "var(--gradient-cta)" }}>
                ECONOMIZE R$ 12 AGORA!
              </div>
            </div>

            <ul className="mt-6 space-y-3 text-left">
              {[
                "+150 Receitas Holísticas Completas",
                "Planner de Autocuidado Semanal",
                "Calendário Lunar de Rituais",
                "Leitura Numerológica Cabalística personalizada",
                "Suporte individual no WhatsApp",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3 text-sm md:text-base text-[#0f172a] font-medium">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#dcfce7] text-[#15803d] shrink-0 mt-0.5">
                    <Check className="h-4 w-4" strokeWidth={3} />
                  </span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>

            <a
              href={CHECKOUT_UPSELL}
              className="mt-7 flex w-full items-center justify-between gap-2 rounded-2xl px-6 py-5 text-sm md:text-base font-extrabold uppercase text-white shadow-lg hover:scale-[1.01] active:scale-[0.99] transition-transform"
              style={{ background: "var(--gradient-cta)" }}
            >
              <span className="flex-1 text-center">Quero o pacote completo com desconto</span>
              <span className="text-lg">→</span>
            </a>

            <button
              type="button"
              onClick={() => setUpsellStage("final")}
              className="mt-4 text-xs md:text-sm font-semibold text-muted-foreground underline underline-offset-4 hover:text-foreground transition-colors cursor-pointer"
            >
              Não, quero apenas o livro
            </button>
          </div>
          ) : (
          <div className="relative px-6 pt-8 pb-8 text-center overflow-hidden" style={{ background: "linear-gradient(160deg, oklch(0.32 0.14 300) 0%, oklch(0.42 0.18 295) 55%, oklch(0.55 0.20 320) 100%)" }}>
            <div className="pointer-events-none absolute inset-0 opacity-40" style={{ background: "radial-gradient(circle at 20% 10%, oklch(0.8 0.18 320 / 0.5), transparent 50%), radial-gradient(circle at 80% 90%, oklch(0.75 0.18 280 / 0.55), transparent 55%)" }} />
            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.2em] text-white border border-white/25 mb-4">
                <Sparkles className="h-3 w-3" /> Última chance — só agora
              </div>
              <h3 className="text-2xl md:text-3xl font-extrabold text-white leading-tight">
                ESPERE!<br />
                <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(90deg, #fde68a, #fbbf24, #fde68a)" }}>
                  Oferta IRRECUSÁVEL
                </span>
              </h3>
              <p className="mt-3 text-sm text-white/85">
                Leve o <strong className="text-white">Pacote Completo</strong> + <strong className="text-white">4 bônus exclusivos</strong> que só aparecem aqui:
              </p>

              <div className="mt-5 rounded-2xl bg-white/95 px-5 py-6 shadow-2xl">
                <p className="text-xs uppercase tracking-widest font-bold text-[#6b21a8]">Preço final exclusivo</p>
                <p className="text-sm text-muted-foreground mt-1">De <span className="line-through">R$ 37,00</span> · antes <span className="line-through">R$ 24,99</span></p>
                <p className="mt-2 text-5xl md:text-6xl font-black leading-none bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(135deg, #7e22ce, #a855f7, #c026d3)" }}>
                  R$ 18,87
                </p>
                <p className="mt-2 text-xs font-bold text-[#6b21a8]">à vista — pagamento único</p>
                <div className="mt-4 inline-flex items-center justify-center rounded-full px-5 py-2 text-xs font-extrabold text-white shadow-md animate-pulse" style={{ background: "linear-gradient(90deg, #7e22ce, #c026d3)" }}>
                  ⚡ ECONOMIZE R$ 18,13 AGORA
                </div>
              </div>

              <div className="mt-5 rounded-2xl bg-white/10 border border-white/20 backdrop-blur p-4 text-left">
                <p className="text-[11px] font-extrabold uppercase tracking-widest text-yellow-200 mb-3 text-center">+ 4 Bônus exclusivos dessa oferta</p>
                <ul className="space-y-2.5">
                  {[
                    { t: "Manual Secreto dos Óleos Essenciais", s: "50 sinergias para cura emocional, sono e ansiedade" },
                    { t: "Banhos Sagrados de Limpeza Energética", s: "30 rituais ancestrais de descarrego e proteção" },
                    { t: "Desafio de 7 Dias de Limpeza Energética", s: "Método prático para restaurar sua energia e elevar sua vibração em minutos por dia" },
                    { t: "Manual de Proteção Espiritual e Limpeza da Energia", s: "Técnicas simples e poderosas para proteger sua energia no dia a dia" },
                  ].map((b) => (
                    <li key={b.t} className="flex items-start gap-3">
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-yellow-300 text-[#6b21a8] shrink-0 text-sm font-black">★</span>
                      <div>
                        <p className="text-sm font-bold text-white leading-tight">{b.t}</p>
                        <p className="text-xs text-white/75 leading-snug">{b.s}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <ul className="mt-5 grid grid-cols-1 gap-2 text-left">
                {[
                  "+150 Receitas Holísticas Completas",
                  "Planner de Autocuidado Semanal",
                  "Calendário Lunar de Rituais",
                  "Leitura Numerológica Cabalística personalizada",
                  "Suporte individual no WhatsApp",
                ].map((t) => (
                  <li key={t} className="flex items-center gap-2 text-xs md:text-sm text-white/95 font-medium">
                    <Check className="h-4 w-4 text-yellow-300 shrink-0" strokeWidth={3} />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>

              <a
                href={CHECKOUT_UPSELL}
                className="mt-6 flex w-full items-center justify-between gap-2 rounded-2xl px-5 py-5 text-sm md:text-base font-extrabold uppercase text-[#3b0764] shadow-2xl hover:scale-[1.02] active:scale-[0.99] transition-transform"
                style={{ background: "linear-gradient(90deg, #fde68a, #fbbf24)" }}
              >
                <span className="flex-1 text-center">Sim! Quero por R$ 18,87</span>
                <span className="text-lg">→</span>
              </a>

              <button
                type="button"
                onClick={() => { setUpsellOpen(false); window.location.href = CHECKOUT_BASIC; }}
                className="mt-4 text-[11px] md:text-xs font-medium text-white/60 underline underline-offset-4 hover:text-white/90 transition-colors cursor-pointer"
              >
                Não, perder essa oferta e levar apenas o livro
              </button>
            </div>
          </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
