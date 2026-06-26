import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Clock, Zap, Heart, Shield, ArrowRight } from "lucide-react";
import { useState } from "react";

/**
 * Landing Page - Sem Tempo, Sem Desculpa
 * 
 * Design Philosophy: Energético & Wellness Vibrante
 * - Verde Fresco (#2D9B6F) para saúde e crescimento
 * - Laranja Quente (#E8915D) para energia e ação
 * - Bege Natural (#F5EFE7) para conforto e naturalidade
 * - Layout assimétrico, imagens reais, tipografia moderna
 */

export default function Home() {
  const [activeModule, setActiveModule] = useState(0);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <img 
              src="https://d2xsxph8kpxj0f.cloudfront.net/310419663029787143/NdyFA2XYVxP2w33bs4xSjf/logo-plate-formula-HQ6SYRwoN3mX3ntC6dzKHA.webp"
              alt="Logo" 
              className="w-8 h-8"
            />
            <span className="font-poppins font-bold text-lg text-gray-900">Sem Tempo</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#modulos" className="text-sm text-gray-600 hover:text-green-600 transition">Módulos</a>
            <a href="#garantia" className="text-sm text-gray-600 hover:text-green-600 transition">Garantia</a>
            <a href="#cta" className="text-sm text-gray-600 hover:text-green-600 transition">Comprar</a>
          </div>
          <Button className="bg-green-600 hover:bg-green-700 text-white">Comprar Agora - R$ 25,90</Button>
        </div>
      </nav>

      {/* Hero Section - High Conversion */}
      <section className="relative overflow-hidden py-12 md:py-20 bg-gradient-to-b from-white to-amber-50">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left: Ebook Cover - MAIN FOCUS */}
            <div className="flex justify-center md:justify-start order-2 md:order-1">
              <div className="relative">
                {/* Ebook Cover with Shadow */}
                <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow">
                  <img 
                    src="/manus-storage/ebook-cover-new_13920b1a.png"
                    alt="Sem Tempo, Sem Desculpa - Ebook" 
                    className="w-full h-auto max-w-sm"
                  />
                </div>
                {/* Decorative element */}
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-green-600 rounded-full opacity-20 blur-2xl"></div>
              </div>
            </div>

            {/* Right: CTA and Benefits */}
            <div className="space-y-6 order-1 md:order-2">
              {/* Urgency Badge */}
              <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full font-semibold text-sm">
                <span className="animate-pulse">🔥</span> Oferta Limitada - Primeiros 50
              </div>

              {/* Main Headline */}
              <div className="space-y-3">
                <h1 className="font-poppins font-bold text-4xl md:text-5xl leading-tight text-gray-900">
                  Emagreça sem abrir mão da sua vida
                </h1>
                <p className="text-xl text-gray-600 font-semibold">
                  O protocolo prático para quem tem rotina corrida
                </p>
              </div>

              {/* Main Benefits */}
              <div className="space-y-3 bg-white p-6 rounded-xl border-2 border-green-200">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Refeições em 10 minutos</p>
                    <p className="text-sm text-gray-600">Fórmula do Prato Funcional pronta para usar</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Cardápio de 21 dias</p>
                    <p className="text-sm text-gray-600">Semanas 1, 2 e 3 com refeições prontas</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">15 receitas rápidas</p>
                    <p className="text-sm text-gray-600">Bônus com receitas de até 15 minutos</p>
                  </div>
                </div>
              </div>

              {/* Main CTA */}
              <Button 
                id="cta"
                size="lg" 
                className="w-full bg-green-600 hover:bg-green-700 text-white text-lg h-16 rounded-lg shadow-xl hover:shadow-2xl transition-all font-bold animate-pulse"
              >
                🎁 COMPRAR AGORA - R$ 25,90
              </Button>

              {/* Trust Elements */}
              <div className="space-y-2 text-center text-sm">
                <p className="text-gray-700 font-semibold">✓ Garantia de 7 dias | ✓ Acesso Imediato | ✓ Sem Risco</p>
                <p className="text-orange-600 font-semibold">⏰ Apenas para os primeiros 50 clientes!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-amber-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6 mb-12">
            <h2 className="font-poppins font-bold text-4xl md:text-5xl text-gray-900">
              Por que as dietas não funcionam para quem tem pressa?
            </h2>
            <p className="text-xl text-gray-600">
              A maioria das dietas foi desenhada para pessoas que têm tempo livre. Você não é essa pessoa — e não precisa ser.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-8 space-y-4">
                <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center">
                  <Clock className="w-7 h-7 text-red-600" />
                </div>
                <h3 className="font-poppins font-bold text-xl text-gray-900">Pular Refeições</h3>
                <p className="text-gray-600">
                  Você pula café da manhã, almoço apressado, e à noite chega faminta e faz escolhas ruins.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-8 space-y-4">
                <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center">
                  <Zap className="w-7 h-7 text-orange-600" />
                </div>
                <h3 className="font-poppins font-bold text-xl text-gray-900">Planejamento Complexo</h3>
                <p className="text-gray-600">
                  Dietas complicadas quebram na primeira terça-feira caótica. Você desiste.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-8 space-y-4">
                <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center">
                  <Heart className="w-7 h-7 text-purple-600" />
                </div>
                <h3 className="font-poppins font-bold text-xl text-gray-900">Busca por Perfeição</h3>
                <p className="text-gray-600">
                  Um dia ruim vira desculpa para desistir de uma semana inteira. Tudo ou nada.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 p-8 bg-white rounded-xl border-2 border-green-200">
            <p className="text-center text-lg text-gray-700">
              <span className="font-poppins font-bold text-green-600">O problema não é sua força de vontade.</span>
              <br />
              <span>É tornar a escolha saudável tão fácil quanto a escolha ruim.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Three Pillars Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-poppins font-bold text-4xl md:text-5xl text-gray-900">
              Os 3 Pilares do Protocolo
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Nutrição inteligente. Resultados consistentes.
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-xl mb-12">
            <img 
              src="https://d2xsxph8kpxj0f.cloudfront.net/310419663029787143/NdyFA2XYVxP2w33bs4xSjf/three-pillars-infographic-BpsrBdFzNnvZJwEA7rvtwq.webp"
              alt="Os 3 Pilares do Protocolo" 
              className="w-full h-auto"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <span className="font-poppins font-bold text-green-600 text-lg">1</span>
              </div>
              <h3 className="font-poppins font-bold text-xl text-gray-900">Proteína em Toda Refeição</h3>
              <p className="text-gray-600">
                O macronutriente mais saciante. Reduz fome, preserva músculo e acelera metabolismo.
              </p>
              <p className="text-sm text-green-600 font-semibold">⚡ Ovo mexido, atum, frango desfiado, iogurte grego</p>
            </div>

            <div className="space-y-4">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                <span className="font-poppins font-bold text-orange-600 text-lg">2</span>
              </div>
              <h3 className="font-poppins font-bold text-xl text-gray-900">Gordura Boa Como Aliada</h3>
              <p className="text-gray-600">
                Prolonga saciedade e evita picos de fome. Azeite, abacate, castanhas.
              </p>
              <p className="text-sm text-orange-600 font-semibold">⚡ Uma colher de azeite = saciedade prolongada</p>
            </div>

            <div className="space-y-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <span className="font-poppins font-bold text-green-600 text-lg">3</span>
              </div>
              <h3 className="font-poppins font-bold text-xl text-gray-900">Carboidrato Estratégico</h3>
              <p className="text-gray-600">
                Não é inimigo. O problema é o momento. Concentre perto de atividades.
              </p>
              <p className="text-sm text-green-600 font-semibold">⚡ Arroz integral, batata-doce, aveia</p>
            </div>
          </div>
        </div>
      </section>

      {/* Plate Formula Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-amber-50 to-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="font-poppins font-bold text-4xl md:text-5xl text-gray-900">
                A Fórmula do Prato Funcional
              </h2>
              <p className="text-lg text-gray-600">
                Você não precisa de receitas complexas. Precisa de uma estrutura.
              </p>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="font-poppins font-bold text-green-600">½</span>
                  </div>
                  <div>
                    <h4 className="font-poppins font-bold text-gray-900">Vegetais</h4>
                    <p className="text-gray-600">Qualquer cor, crus ou cozidos. Quanto mais variedade, melhor.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="font-poppins font-bold text-orange-600">¼</span>
                  </div>
                  <div>
                    <h4 className="font-poppins font-bold text-gray-900">Proteína</h4>
                    <p className="text-gray-600">Ovo, frango, peixe, leguminosas. Qualquer fonte funciona.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="font-poppins font-bold text-green-600">¼</span>
                  </div>
                  <div>
                    <h4 className="font-poppins font-bold text-gray-900">Carboidrato Complexo</h4>
                    <p className="text-gray-600">Arroz integral, batata, mandioca. Sempre integral.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="font-poppins font-bold text-amber-600">+</span>
                  </div>
                  <div>
                    <h4 className="font-poppins font-bold text-gray-900">Azeite ou Gordura Boa</h4>
                    <p className="text-gray-600">Um fio de azeite ou pequena porção de gordura boa.</p>
                  </div>
                </div>
              </div>

              <Button className="bg-green-600 hover:bg-green-700 text-white text-lg h-12 px-6 rounded-lg mt-6">
                Aprender a Montar Refeições
              </Button>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://d2xsxph8kpxj0f.cloudfront.net/310419663029787143/NdyFA2XYVxP2w33bs4xSjf/plate-formula-visual-bBwxXM84acQrtWXvWWpXpF.webp"
                alt="Fórmula do Prato Funcional" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section id="modulos" className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="text-center mb-12 space-y-4">
            <h2 className="font-poppins font-bold text-4xl md:text-5xl text-gray-900">
              O Que Você Vai Aprender
            </h2>
            <p className="text-xl text-gray-600">
              7 módulos + 15 receitas bônus para transformar sua relação com comida
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { num: 1, title: "Por Que as Dietas Não Funcionam", desc: "Entenda o real problema e por que força de vontade não é a solução" },
              { num: 2, title: "Os 3 Pilares do Protocolo", desc: "Proteína, Gordura Boa e Carboidrato Estratégico explicados" },
              { num: 3, title: "Montando Refeições em 10 Minutos", desc: "A Fórmula do Prato Funcional e técnica do lote semanal" },
              { num: 4, title: "Cardápio de 21 Dias", desc: "Semanas 1, 2 e 3 com refeições prontas para usar" },
              { num: 5, title: "Estratégias Para Dias Caóticos", desc: "O que fazer quando tudo dá errado (e vai dar)" },
              { num: 6, title: "Supermercado Inteligente", desc: "Lista de compras semanal com tudo que você precisa" },
              { num: 7, title: "Mindset & Consistência", desc: "Como manter a consistência sem buscar perfeição" },
              { num: "🎁", title: "15 Receitas Rápidas", desc: "Bônus: receitas de até 15 minutos prontas para usar" },
            ].map((module, idx) => (
              <Card 
                key={idx}
                className="border-2 border-gray-200 hover:border-green-600 cursor-pointer transition-all hover:shadow-lg"
                onClick={() => setActiveModule(idx)}
              >
                <CardContent className="pt-6 space-y-3">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="font-poppins font-bold text-green-600 text-lg">{module.num}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-poppins font-bold text-lg text-gray-900">{module.title}</h3>
                      <p className="text-gray-600 text-sm mt-1">{module.desc}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-green-50">
        <div className="container">
          <div className="text-center mb-12 space-y-4">
            <h2 className="font-poppins font-bold text-4xl md:text-5xl text-gray-900">
              Resultados Reais de Pessoas Reais
            </h2>
            <p className="text-xl text-gray-600">
              Pessoas ocupadas que transformaram sua relação com comida
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-xl mb-12">
            <img 
              src="https://d2xsxph8kpxj0f.cloudfront.net/310419663029787143/NdyFA2XYVxP2w33bs4xSjf/busy-person-success-7XpaiGoCGcYCZtcPiYmaMF.webp"
              alt="Resultados de pessoas reais" 
              className="w-full h-auto"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 bg-white shadow-lg">
              <CardContent className="pt-8 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">⭐⭐⭐⭐⭐</span>
                </div>
                <p className="text-gray-700 italic">
                  "Finalmente consegui emagrecer sem abrir mão da minha vida. As refeições em 10 minutos mudaram tudo."
                </p>
                <p className="font-poppins font-bold text-gray-900">Maria, 34 anos</p>
                <p className="text-sm text-gray-600">Mãe de 2 filhos, trabalha 8h por dia</p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-white shadow-lg">
              <CardContent className="pt-8 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">⭐⭐⭐⭐⭐</span>
                </div>
                <p className="text-gray-700 italic">
                  "O protocolo é simples, mas funciona. Perdi 8kg em 2 meses sem sofrer."
                </p>
                <p className="font-poppins font-bold text-gray-900">Ana, 28 anos</p>
                <p className="text-sm text-gray-600">Profissional de TI, rotina corrida</p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-white shadow-lg">
              <CardContent className="pt-8 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">⭐⭐⭐⭐⭐</span>
                </div>
                <p className="text-gray-700 italic">
                  "Não é uma dieta, é um estilo de vida. Finalmente entendi como comer bem."
                </p>
                <p className="font-poppins font-bold text-gray-900">Carlos, 42 anos</p>
                <p className="text-sm text-gray-600">Empresário, viaja constantemente</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section id="garantia" className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <div className="flex justify-center">
                <Shield className="w-16 h-16 text-green-600" />
              </div>
              <h2 className="font-poppins font-bold text-4xl md:text-5xl text-gray-900">
                Garantia de 7 Dias
              </h2>
              <p className="text-xl text-gray-600">
                Se em 7 dias você não gostar, devolvemos 100% do seu dinheiro. Sem perguntas.
              </p>
            </div>

            <div className="bg-green-50 border-2 border-green-200 rounded-xl p-8 space-y-4">
              <h3 className="font-poppins font-bold text-2xl text-gray-900">Por que oferecemos essa garantia?</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Porque temos certeza que o protocolo funciona. Se você seguir as instruções e não gostar, não queremos seu dinheiro. É tão simples assim.
              </p>
              <p className="text-gray-600 italic">
                Você só corre o risco de emagrecer e transformar sua relação com comida.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <h2 className="font-poppins font-bold text-4xl md:text-5xl">
              Pronto para começar?
            </h2>
            <p className="text-xl text-green-100">
              Acesso imediato ao ebook + 15 receitas bônus + suporte por email
            </p>
            <p className="text-lg font-bold text-white mt-3">
              🎁 PREÇO ESPECIAL: R$ 25,90 (Oferta por tempo limitado!)
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-green-600 hover:bg-green-50 text-lg h-14 px-8 rounded-lg font-bold shadow-lg animate-pulse"
              >
                Comprar Agora - R$ 25,90 <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>

            <p className="text-sm text-green-100">
              ✓ Garantia de 7 dias | ✓ Acesso imediato | ✓ Sem compromisso
            </p>
            <p className="text-sm text-green-100 italic mt-2">
              ⏰ Apenas para os primeiros 50 clientes!
            </p>

            <div className="pt-8 border-t border-green-500">
              <p className="text-green-100 italic">
                "Você não precisa começar de novo. Só precisa continuar de onde parou."
              </p>
              <p className="text-green-50 font-poppins font-bold mt-2">— Sem Tempo, Sem Desculpa</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <img 
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310419663029787143/NdyFA2XYVxP2w33bs4xSjf/logo-plate-formula-HQ6SYRwoN3mX3ntC6dzKHA.webp"
                  alt="Logo" 
                  className="w-6 h-6"
                />
                <span className="font-poppins font-bold text-white">Sem Tempo</span>
              </div>
              <p className="text-sm">Protocolo de alimentação saudável para pessoas ocupadas.</p>
            </div>

            <div className="space-y-3">
              <h4 className="font-poppins font-bold text-white">Produto</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Sobre</a></li>
                <li><a href="#" className="hover:text-white transition">Módulos</a></li>
                <li><a href="#" className="hover:text-white transition">Garantia</a></li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-poppins font-bold text-white">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Termos de Uso</a></li>
                <li><a href="#" className="hover:text-white transition">Privacidade</a></li>
                <li><a href="#" className="hover:text-white transition">Contato</a></li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-poppins font-bold text-white">Redes Sociais</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Instagram</a></li>
                <li><a href="#" className="hover:text-white transition">TikTok</a></li>
                <li><a href="#" className="hover:text-white transition">YouTube</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>© 2026 Sem Tempo, Sem Desculpa. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
