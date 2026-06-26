import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle2, Leaf, ShieldCheck, ShoppingBag, Sparkles, Star, Timer, UtensilsCrossed } from "lucide-react";
import { Link } from "wouter";

const checkoutUrl = "https://pay.kiwify.com.br/IltfgBn";

const highlights = [
  {
    icon: Timer,
    title: "Refeicoes em poucos minutos",
    description: "Estrutura clara para montar pratos prontos sem depender de receitas complexas.",
  },
  {
    icon: ShoppingBag,
    title: "Lista de compras objetiva",
    description: "Organizacao simples para reduzir improviso e facilitar a compra da semana.",
  },
  {
    icon: Leaf,
    title: "Rotina mais leve",
    description: "Um metodo pensado para quem quer consistencia sem sacrificar a agenda.",
  },
];

const steps = [
  {
    number: "01",
    title: "Entenda o metodo",
    text: "Voce aprende a montar refeicoes equilibradas sem depender de planejamento longo.",
  },
  {
    number: "02",
    title: "Aplique no dia a dia",
    text: "Use o protocolo em dias normais ou corridos, com combinacoes prontas e praticas.",
  },
  {
    number: "03",
    title: "Siga com consistencia",
    text: "Mantenha uma rotina sustentavel com menos friccao e mais previsibilidade.",
  },
];

const testimonials = [
  {
    quote: "O material deixou minha rotina muito mais simples. Passei a comer melhor sem perder tempo pensando em tudo do zero.",
    name: "Marina, 34 anos",
    role: "Rotina corrida e pouco tempo para cozinhar",
  },
  {
    quote: "O diferencial foi a clareza. O ebook organiza as escolhas de forma pratica e facil de aplicar.",
    name: "Paulo, 41 anos",
    role: "Empreendedor com agenda cheia",
  },
  {
    quote: "Parecia mais um conteudo de dieta, mas o enfoque e realista. Isso fez a diferenca para eu continuar.",
    name: "Carla, 29 anos",
    role: "Profissional com pouco tempo livre",
  },
];

export default function Home() {
  const assetBase = import.meta.env.BASE_URL;

  return (
    <div className="min-h-screen bg-[#f7f4ec] text-gray-900">
      <nav className="sticky top-0 z-50 border-b border-black/5 bg-white/90 backdrop-blur-md">
        <div className="container flex h-18 items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={`${assetBase}favicon.png`}
              alt="Sem Tempo, Sem Desculpa"
              className="h-10 w-10 rounded-full ring-1 ring-black/10"
            />
            <div className="leading-tight">
              <p className="font-poppins text-lg font-bold tracking-tight text-gray-900">Sem Tempo</p>
              <p className="text-xs uppercase tracking-[0.18em] text-gray-500">Sem Desculpa</p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            <a href="#beneficios" className="transition hover:text-green-700">Beneficios</a>
            <a href="#como-funciona" className="transition hover:text-green-700">Como funciona</a>
            <a href="#depoimentos" className="transition hover:text-green-700">Depoimentos</a>
            <Link href="/privacidade" className="transition hover:text-green-700">Privacidade</Link>
            <Link href="/termos" className="transition hover:text-green-700">Termos</Link>
          </div>

          <Button asChild className="bg-green-700 text-white hover:bg-green-800">
            <a href={checkoutUrl}>Comprar agora</a>
          </Button>
        </div>
      </nav>

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,197,94,0.16),transparent_35%),radial-gradient(circle_at_top_right,_rgba(217,119,6,0.12),transparent_30%),linear-gradient(to_bottom,_#ffffff,_#f7f4ec)]" />
          <div className="container relative py-12 md:py-20">
            <div className="grid items-center gap-12 md:grid-cols-2">
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-4 py-2 text-sm font-semibold text-green-800">
                  <Sparkles className="h-4 w-4" />
                  Guia pratico para uma rotina alimentar mais simples
                </div>

                <div className="space-y-5">
                  <h1 className="font-poppins text-4xl font-bold tracking-tight text-gray-900 md:text-6xl">
                    Coma melhor sem complicar sua rotina
                  </h1>
                  <p className="max-w-xl text-lg leading-relaxed text-gray-600 md:text-xl">
                    Um ebook direto ao ponto para organizar refeicoes, reduzir improviso e tornar a alimentacao saudavel mais
                    facil de sustentar no dia a dia.
                  </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-3">
                  {highlights.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.title} className="rounded-2xl border border-white/70 bg-white/85 p-4 shadow-sm backdrop-blur">
                        <Icon className="mb-3 h-5 w-5 text-green-700" />
                        <h2 className="font-semibold text-gray-900">{item.title}</h2>
                        <p className="mt-2 text-sm leading-relaxed text-gray-600">{item.description}</p>
                      </div>
                    );
                  })}
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button asChild size="lg" className="h-14 bg-green-700 px-8 text-base font-semibold text-white hover:bg-green-800">
                    <a href={checkoutUrl}>
                      Comprar agora <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="h-14 border-green-200 px-8 text-base font-semibold text-green-900 hover:bg-green-50">
                    <a href="#beneficios">Ver detalhes</a>
                  </Button>
                </div>

                <p className="text-sm text-gray-500">
                  Acesso imediato apos a confirmacao do pagamento. Pagamento processado pela plataforma de checkout.
                </p>
              </div>

              <div className="relative mx-auto w-full max-w-[640px]">
                <div className="absolute -inset-6 rounded-[2.5rem] bg-green-200/40 blur-3xl" />
                <div className="absolute -left-4 top-10 hidden rounded-2xl border border-green-200/80 bg-white/90 px-4 py-3 shadow-lg backdrop-blur md:block">
                  <div className="flex items-center gap-2">
                    <Timer className="h-4 w-4 text-green-700" />
                    <span className="text-sm font-semibold text-gray-900">21 dias planejados</span>
                  </div>
                </div>
                <div className="absolute -right-2 top-28 hidden rounded-2xl border border-amber-200/80 bg-white/90 px-4 py-3 shadow-lg backdrop-blur md:block">
                  <div className="flex items-center gap-2">
                    <ShoppingBag className="h-4 w-4 text-amber-700" />
                    <span className="text-sm font-semibold text-gray-900">Lista de compras</span>
                  </div>
                </div>
                <div className="absolute -bottom-4 left-10 hidden rounded-2xl border border-green-200/80 bg-white/90 px-4 py-3 shadow-lg backdrop-blur md:block">
                  <div className="flex items-center gap-2">
                    <Leaf className="h-4 w-4 text-green-700" />
                    <span className="text-sm font-semibold text-gray-900">Rotina mais leve</span>
                  </div>
                </div>

                <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-white p-4 shadow-[0_30px_90px_rgba(15,23,42,0.16)]">
                  <div className="absolute inset-x-6 top-5 h-px bg-gradient-to-r from-transparent via-green-300 to-transparent" />
                  <div className="absolute right-4 top-4 rounded-full border border-green-200 bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-green-800 shadow-sm">
                    Ebook digital
                  </div>
                  <div className="absolute left-4 bottom-4 rounded-full border border-amber-200 bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-amber-800 shadow-sm">
                    Alimentacao pratica
                  </div>
                  <img
                    src={`${assetBase}hero-book-cover.png`}
                    alt="Capa do ebook Sem Tempo, Sem Desculpa"
                    className="h-auto w-full rounded-[1.5rem] object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="beneficios" className="py-16 md:py-24">
          <div className="container">
            <div className="max-w-3xl space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-green-700">Beneficios</p>
              <h2 className="font-poppins text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
                Estrutura, clareza e praticidade para o seu dia a dia
              </h2>
              <p className="text-lg leading-relaxed text-gray-600">
                O foco aqui nao e criar uma promessa exagerada. E reduzir atrito para que a boa decisao fique mais facil de repetir.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {[
                {
                  icon: CheckCircle2,
                  title: "Passo a passo simples",
                  text: "Ordem clara para montar refeicoes e manter consistencia sem depender de planejamento extenso.",
                },
                {
                  icon: UtensilsCrossed,
                  title: "Aplicacao pratica",
                  text: "Conteudo pensado para pessoas ocupadas, com foco em usabilidade e rotina real.",
                },
                {
                  icon: ShieldCheck,
                  title: "Oferta transparente",
                  text: "Informacoes objetivas sobre compra, entrega e politicas legais sem excesso de promessa.",
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <Card key={item.title} className="border border-black/5 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                    <CardContent className="space-y-4 p-6">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-100 text-green-800">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="font-poppins text-xl font-bold text-gray-900">{item.title}</h3>
                      <p className="leading-relaxed text-gray-600">{item.text}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <section id="como-funciona" className="border-y border-black/5 bg-white py-16 md:py-24">
          <div className="container">
            <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center">
              <div className="space-y-4">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-700">Como funciona</p>
                <h2 className="font-poppins text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
                  Um metodo visual e direto para sair do improviso
                </h2>
                <p className="max-w-xl text-lg leading-relaxed text-gray-600">
                  A proposta e transformar o conteudo em uma referencia pratica. Voce acessa, entende a estrutura e aplica sem
                  precisar reinventar sua semana.
                </p>
              </div>

              <div className="grid gap-4">
                {steps.map((step) => (
                  <div key={step.number} className="rounded-3xl border border-gray-200 bg-[#fbfaf7] p-5 shadow-sm">
                    <div className="mb-3 inline-flex rounded-full bg-amber-100 px-3 py-1 text-sm font-semibold text-amber-900">
                      {step.number}
                    </div>
                    <h3 className="font-poppins text-lg font-bold text-gray-900">{step.title}</h3>
                    <p className="mt-2 leading-relaxed text-gray-600">{step.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="depoimentos" className="py-16 md:py-24">
          <div className="container">
            <div className="flex max-w-3xl flex-col gap-4">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-green-700">Depoimentos</p>
              <h2 className="font-poppins text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
                Uma pagina mais confiavel, sem ruído visual
              </h2>
              <p className="text-lg leading-relaxed text-gray-600">
                Os blocos abaixo reforcam credibilidade sem exagerar na linguagem. A ideia e convencer pela clareza.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {testimonials.map((item) => (
                <Card key={item.name} className="border border-black/5 bg-white shadow-sm">
                  <CardContent className="space-y-4 p-6">
                    <div className="flex items-center gap-1 text-amber-500">
                      <Star className="h-4 w-4 fill-current" />
                      <Star className="h-4 w-4 fill-current" />
                      <Star className="h-4 w-4 fill-current" />
                      <Star className="h-4 w-4 fill-current" />
                      <Star className="h-4 w-4 fill-current" />
                    </div>
                    <p className="leading-relaxed text-gray-700">"{item.quote}"</p>
                    <div>
                      <p className="font-poppins font-bold text-gray-900">{item.name}</p>
                      <p className="text-sm text-gray-500">{item.role}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container">
            <div className="rounded-[2rem] bg-gradient-to-r from-green-700 via-green-700 to-emerald-700 px-6 py-10 text-white shadow-[0_24px_80px_rgba(22,101,52,0.28)] md:px-10">
              <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
                <div className="space-y-4">
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-green-100">Oferta</p>
                  <h2 className="font-poppins text-3xl font-bold tracking-tight md:text-4xl">
                    Pronto para organizar sua rotina alimentar com mais leveza
                  </h2>
                  <p className="max-w-2xl text-base leading-relaxed text-green-50 md:text-lg">
                    Acesse o ebook e comece a aplicar uma estrutura mais simples no seu dia a dia.
                  </p>
                </div>

                <Button asChild size="lg" className="h-14 bg-white px-8 text-base font-semibold text-green-800 hover:bg-green-50">
                  <a href={checkoutUrl}>
                    Ir para o checkout <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-black/5 bg-[#121212] py-12 text-gray-400">
        <div className="container flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="space-y-2">
            <p className="font-poppins text-lg font-bold text-white">Sem Tempo, Sem Desculpa</p>
            <p className="max-w-md text-sm leading-relaxed">
              Conteudo digital focado em praticidade, clareza e aplicacao real no cotidiano.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 text-sm">
            <Link href="/termos" className="transition hover:text-white">
              Termos de Uso
            </Link>
            <Link href="/privacidade" className="transition hover:text-white">
              Privacidade
            </Link>
            <a href={checkoutUrl} className="transition hover:text-white">
              Comprar
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
