import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle } from "lucide-react";

export default function Verifications() {
  const verifications = [
    {
      number: 1,
      title: "Équipements Mécaniques et Appareils de Levage",
      items: [
        "Ponts élévateurs, treuils, palans",
        "Manilles, élingues",
        "Chariots automoteurs (portés et accompagnants)",
        "Nacelles, plateformes élévatrices",
        "Ascenseurs, monte-charges, élévateurs de personnes",
        "Grues à tour",
        "Portails et portes automatiques / semi-automatiques"
      ]
    },
    {
      number: 2,
      title: "Équipements de Protection Individuelle (EPI)",
      items: [
        "Harnais, longes",
        "Appareils de protection respiratoire (APR)",
        "Cartouches filtrantes"
      ]
    },
    {
      number: 3,
      title: "Installations Électriques",
      items: [
        "Vérifications réglementaires des installations basses et moyen tension"
      ]
    },
    {
      number: 4,
      title: "Moyens de Lutte Contre l'Incendie et les Explosions",
      items: [
        "Portes coupe-feu, exutoires de fumées",
        "Extincteurs, RIA, poteaux incendie",
        "Systèmes sprinklers, installations CO₂",
        "Détection automatique incendie",
        "Groupes électrogènes de sécurité",
        "Dispositifs de signalisation et éclairage de sécurité"
      ]
    },
    {
      number: 5,
      title: "Locaux et Bâtiments Professionnels",
      items: [
        "Échelles fixes, échafaudages permanents",
        "Installations d'aération et d'assainissement",
        "Détection amiante",
        "Protection contre la foudre"
      ]
    },
    {
      number: 6,
      title: "Protection des Travailleurs",
      items: [
        "Vérifications liées à l'exposition du personnel (bruit, agents chimiques, etc.)"
      ]
    },
    {
      number: 7,
      title: "Autres Équipements Techniques",
      items: [
        "Installations de combustion",
        "Tours aéroréfrigérantes",
        "Et divers équipements soumis à contrôle réglementaire"
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Vérifications Périodiques Obligatoires
            </h1>
            <p className="text-lg md:text-xl opacity-95">
              Conformité réglementaire de tous vos équipements
            </p>
          </div>
        </section>

        {/* Intro Section */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <p className="text-lg text-foreground/80 max-w-3xl">
              Les vérifications périodiques obligatoires garantissent que vos équipements restent conformes aux normes de sécurité en vigueur. Nous vous accompagnons dans le respect de ces obligations réglementaires.
            </p>
          </div>
        </section>

        {/* Verifications Grid */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 gap-8">
              {verifications.map((verification) => (
                <div
                  key={verification.number}
                  className="bg-white rounded-lg p-8 border border-border hover:border-primary transition-colors"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                      {verification.number}
                    </div>
                    <h2 className="text-2xl font-bold text-foreground">
                      {verification.title}
                    </h2>
                  </div>

                  <ul className="space-y-3 ml-14">
                    {verification.items.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle size={20} className="text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground/80">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
              Notre Processus de Vérification
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-2xl mx-auto mb-4">
                  1
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Évaluation Précise</h3>
                <p className="text-foreground/80">
                  Tests, contrôles visuels et mesures de performance basés sur les exigences spécifiques de chaque domaine.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-2xl mx-auto mb-4">
                  2
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Identification</h3>
                <p className="text-foreground/80">
                  Détection de toute non-conformité potentielle par nos experts qualifiés.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-2xl mx-auto mb-4">
                  3
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Rapport & Solutions</h3>
                <p className="text-foreground/80">
                  Rapport détaillé avec recommandations d'actions correctives pour la conformité.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Planifiez vos Vérifications Périodiques
            </h2>
            <p className="text-lg mb-8 opacity-95 max-w-2xl mx-auto">
              Contactez-nous pour établir un calendrier de vérifications adapté à vos équipements.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Nous Contacter
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
