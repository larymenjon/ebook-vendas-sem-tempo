import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, BadgeCheck, Ban, CreditCard, FileText, Scale } from "lucide-react";
import { Link } from "wouter";

const lastUpdated = "26 de junho de 2026";

const sections = [
  {
    title: "1. Aceitação",
    icon: FileText,
    content: [
      "Ao acessar e comprar neste site, você concorda com estes Termos de Uso.",
      "Se não concordar com qualquer parte, interrompa a navegação e não conclua a compra.",
    ],
  },
  {
    title: "2. Produto digital",
    icon: BadgeCheck,
    content: [
      "O produto oferecido é digital, com entrega por acesso online após confirmação de pagamento.",
      "O conteúdo pode incluir ebook, bônus e materiais complementares descritos na oferta vigente.",
    ],
  },
  {
    title: "3. Pagamento e entrega",
    icon: CreditCard,
    content: [
      "Os pagamentos são processados por plataforma de terceiros, como a Kiwify, sujeita aos próprios termos e políticas.",
      "Após a aprovação, o acesso ao produto é liberado conforme as regras da plataforma de checkout.",
    ],
  },
  {
    title: "4. Uso permitido",
    icon: Scale,
    content: [
      "Você recebe uma licença pessoal, limitada, intransferível e não exclusiva para uso do conteúdo adquirido.",
      "Não é permitido copiar, revender, distribuir, compartilhar ou disponibilizar o material para terceiros sem autorização.",
    ],
  },
  {
    title: "5. Responsabilidades",
    icon: Ban,
    content: [
      "As informações têm finalidade educativa e não substituem acompanhamento profissional individualizado.",
      "Os resultados podem variar conforme contexto, rotina, saúde, aderência e fatores fora do nosso controle.",
    ],
  },
];

export default function TermsOfUse() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-amber-50/40 to-white text-gray-900">
      <header className="border-b border-amber-100 bg-white/90 backdrop-blur-sm sticky top-0 z-40">
        <div className="container h-16 flex items-center justify-between">
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-green-700 hover:text-green-800 transition">
            <ArrowLeft className="w-4 h-4" />
            Voltar para a página inicial
          </Link>
          <span className="text-sm text-gray-500">Atualizados em {lastUpdated}</span>
        </div>
      </header>

      <main className="container py-10 md:py-16">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-700">
              <Scale className="w-4 h-4" />
              Termos de Uso
            </div>
            <h1 className="font-poppins text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
              Regras claras para compra e uso
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Estes termos organizam a relação entre o site, o comprador e a entrega do produto digital.
            </p>
          </div>

          <Card className="border-amber-100 shadow-lg">
            <CardContent className="pt-8 space-y-6">
              <div className="rounded-2xl border border-red-200 bg-red-50 p-5 text-sm text-red-900 leading-relaxed">
                Este é um modelo contratual básico. Ele ajuda a estruturar a oferta, mas não substitui revisão jurídica.
                Para maior proteção, confirme os dados da empresa, política de reembolso, suporte e jurisdição aplicável.
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {sections.map((section) => {
                  const Icon = section.icon;
                  return (
                    <div key={section.title} className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 text-amber-700">
                          <Icon className="h-5 w-5" />
                        </div>
                        <h2 className="font-poppins text-lg font-bold text-gray-900">{section.title}</h2>
                      </div>
                      <div className="space-y-3 text-sm leading-relaxed text-gray-600">
                        {section.content.map((item) => (
                          <p key={item}>{item}</p>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="rounded-2xl bg-gray-900 p-6 text-white">
                <h2 className="font-poppins text-xl font-bold">Garantia e cancelamento</h2>
                <p className="mt-2 text-gray-200 leading-relaxed">
                  Se a oferta incluir garantia, prazo de arrependimento ou política de reembolso, deixe essas condições explícitas aqui
                  e alinhe com o checkout e a plataforma de pagamento.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
