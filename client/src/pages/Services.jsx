import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Shield, Microscope, HardHat, GraduationCap, Zap, Flame, Scale, FileCheck } from "lucide-react";

export default function Services() {
  const categories = [
    {
      id: "inspections",
      title: "Inspections & Contrôles Techniques",
      icon: Shield,
      description: "Vérification réglementaire pour garantir la conformité et la sécurité de vos équipements.",
      items: [
        "Appareils de levage et manutention (ponts, grues, chariots...)",
        "Ascenseurs et monte-charges",
        "Machines et équipements de travail",
        "Installations électriques (Basse et Moyenne Tension)",
        "Appareils à pression et à vapeur",
        "Portails et portes automatiques",
        "Moyens de lutte contre l'incendie (Extincteurs, RIA...)",
        "Équipements de Protection Individuelle (EPI)",
        "Locaux et bâtiments (Aération, Amiante, Foudre, facteurs d'ambiances : bruit, éclairement, qualité d'air…)"
      ]
    },
    {
      id: "cnd",
      title: "Tests & Essais (CND)",
      icon: Microscope,
      description: "Contrôles Non Destructifs pour évaluer l'intégrité de vos matériaux et structures.",
      essentialText: "Prestations d'inspection par méthodes non destructives destinées à détecter les défauts internes ou superficiels et à garantir la conformité réglementaire ainsi que la sécurité des installations et équipements industriels.",
      items: [
        "VT (Visual Testing)",
        "PT (Penetrant Testing / Ressuage)",
        "MT (Magnetic Testing / Magnétoscopie)",
        "UT (Ultrasonic Testing / Ultrasons)",
        "PMI (Positive Material Identification)",
        "Mesure de dureté et adhérence",
        "Procédures certifiées Niveau 3",
        "QA/QC (Assurance et Contrôle Qualité)"
      ]
    },
    {
      id: "assistance",
      title: "Accompagnement & Assistance",
      icon: FileCheck,
      description: "Expertise technique pour vous accompagner à chaque étape de vos projets.",
      items: [
        "Validation des plans et conformité réglementaire",
        "Contrôle pendant le chantier",
        "Contrôle à la réception des travaux",
        "Vérifications périodiques en exploitation",
        "Analyse des risques et non-conformités",
        "Mesures correctives et préventives",
        "Traçabilité et documentation technique"
      ]
    },
    {
      id: "formation",
      title: "Formation Professionnelle",
      icon: GraduationCap,
      description: "Montée en compétence de vos équipes sur la sécurité et la réglementation.",
      items: [
        "Santé Sécurité au Travail",
        "Formations CACES et conduite en sécurité",
        "Habilitations électriques",
        "Travail en hauteur et port des EPI",
        "Sécurité Incendie (Manipulation extincteurs, évacuation)",
        "Sensibilisation aux risques professionnels",
        "Bonnes pratiques de maintenance"
      ]
    }
  ];

  return (
    <div className="pb-16">
      {/* Header */}
      <div className="bg-slate-50 py-12 mb-12 border-b">
        <div className="container px-4 text-center">
          <h1 className="text-4xl font-bold mb-4 text-slate-900">Nos Services</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Une expertise complète pour répondre à tous vos besoins en matière de contrôle, d'inspection et de formation.
          </p>
        </div>
      </div>

      {/* Categories */}
      <div className="container px-4 flex flex-col gap-16">
        {categories.map((category, index) => (
          <div key={category.id} id={category.id} className={`flex flex-col md:flex-row gap-8 md:gap-16 items-start ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>

            {/* Description Side */}
            <div className="flex-1">
              <div className="inline-flex p-3 rounded-xl bg-primary/10 text-primary mb-6">
                <category.icon size={40} />
              </div>
              <h2 className="text-3xl font-bold mb-4 text-slate-900">{category.title}</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                {category.description}
              </p>
              <div className="bg-primary/5 rounded-2xl p-8 border border-primary/10">
                <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                  <Zap size={20} className="text-primary" />
                  Pourquoi ce service est essentiel ?
                </h3>
                <p className="text-slate-700">
                  {category.essentialText || "Garantir la sécurité des personnes et des biens, assurer la conformité réglementaire pour éviter les sanctions, et optimiser la disponibilité de vos équipements."}
                </p>
              </div>
            </div>

            {/* List Side */}
            <div className="flex-1 w-full">
              <Card className="h-full shadow-md border-slate-200">
                <CardHeader className="bg-slate-50 border-b border-slate-100 pb-4">
                  <CardTitle className="text-lg font-medium text-slate-700">Prestations incluses</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="grid grid-cols-1 gap-3">
                    {category.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-600">
                        <Check size={18} className="text-primary mt-1 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}
