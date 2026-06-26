import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ShieldCheck, Cookie, Lock, Mail, FileText } from "lucide-react";
import { Link } from "wouter";

const lastUpdated = "26 de junho de 2026";

const sections = [
  {
    title: "1. Quem somos",
    icon: FileText,
    content: [
      "Esta Política de Privacidade descreve como os dados pessoais são tratados no site do ebook Sem Tempo, Sem Desculpa.",
      "Se houver um controlador formal, razão social, CNPJ ou encarregado de dados, inclua esses dados aqui antes de publicar definitivamente.",
    ],
  },
  {
    title: "2. Quais dados coletamos",
    icon: ShieldCheck,
    content: [
      "Podemos coletar dados fornecidos diretamente por você, como nome, e-mail e informações de pagamento processadas pela plataforma de checkout.",
      "Também podemos coletar dados de navegação, como endereço IP, páginas acessadas, tempo de visita, tipo de dispositivo e cookies necessários para funcionamento e análise.",
    ],
  },
  {
    title: "3. Finalidades do uso",
    icon: Lock,
    content: [
      "Usamos os dados para entregar o produto, processar pagamentos, confirmar compra, oferecer suporte, prevenir fraudes e cumprir obrigações legais.",
      "Também podemos usar dados de navegação para melhorar a experiência do site, entender desempenho das páginas e medir conversões.",
    ],
  },
  {
    title: "4. Cookies e tecnologias similares",
    icon: Cookie,
    content: [
      "Podemos usar cookies estritamente necessários e, quando aplicável, cookies de análise e mensuração.",
      "Você pode ajustar o navegador para limitar cookies, mas isso pode afetar algumas funcionalidades do site.",
    ],
  },
  {
    title: "5. Compartilhamento de dados",
    icon: Mail,
    content: [
      "Os dados podem ser compartilhados com prestadores essenciais para operação do negócio, como plataforma de pagamento, hospedagem, analytics e suporte técnico.",
      "Não vendemos dados pessoais. Quando houver compartilhamento, buscamos limitar o acesso ao mínimo necessário para a finalidade informada.",
    ],
  },
  {
    title: "6. Seus direitos",
    icon: ShieldCheck,
    content: [
      "Nos termos da LGPD, você pode solicitar confirmação de tratamento, acesso, correção, anonimização, bloqueio, eliminação, portabilidade e informações sobre compartilhamento.",
      "Também pode revogar consentimentos quando aplicável e solicitar a revisão de decisões automatizadas, se existirem.",
    ],
  },
  {
    title: "7. Segurança e retenção",
    icon: Lock,
    content: [
      "Adotamos medidas técnicas e administrativas razoáveis para proteger os dados pessoais.",
      "Mantemos os dados pelo tempo necessário para cumprir as finalidades acima, obrigações legais, contratuais, fiscais e de segurança.",
    ],
  },
];

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-emerald-50/40 to-white text-gray-900">
      <header className="border-b border-emerald-100 bg-white/90 backdrop-blur-sm sticky top-0 z-40">
        <div className="container h-16 flex items-center justify-between">
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-green-700 hover:text-green-800 transition">
            <ArrowLeft className="w-4 h-4" />
            Voltar para a página inicial
          </Link>
          <span className="text-sm text-gray-500">Atualizada em {lastUpdated}</span>
        </div>
      </header>

      <main className="container py-10 md:py-16">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
              <ShieldCheck className="w-4 h-4" />
              Política de Privacidade
            </div>
            <h1 className="font-poppins text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
              Transparência sobre o tratamento de dados
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Esta página resume como tratamos dados pessoais neste site, com foco em clareza, segurança e conformidade com a LGPD.
            </p>
          </div>

          <Card className="border-emerald-100 shadow-lg">
            <CardContent className="pt-8 space-y-6">
              <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm text-amber-900 leading-relaxed">
                Este texto é um modelo de política de privacidade. Para publicar com segurança jurídica, substitua os campos institucionais em aberto
                e peça revisão de um advogado ou consultor especializado em LGPD.
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {sections.map((section) => {
                  const Icon = section.icon;
                  return (
                    <div key={section.title} className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-700">
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

              <div className="rounded-2xl bg-green-600 p-6 text-white">
                <h2 className="font-poppins text-xl font-bold">Como exercer seus direitos</h2>
                <p className="mt-2 text-green-50 leading-relaxed">
                  Para solicitar acesso, correção, exclusão ou qualquer outro direito previsto na LGPD, use o canal de contato disponível no checkout
                  ou substitua este bloco por um e-mail oficial do controlador.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
