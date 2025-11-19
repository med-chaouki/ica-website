import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle, Target, Zap, AlertCircle } from "lucide-react";

export default function Missions() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Nos Missions</h1>
            <p className="text-lg md:text-xl opacity-95">
              Un accompagnement complet à chaque étape de vos projets
            </p>
          </div>
        </section>

        {/* Main Mission Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">Mission Principale</h2>
              <p className="text-lg text-foreground/80">
                Assurer la vérification réglementaire et la conformité des installations et équipements techniques. Nos interventions varient selon le type d'installation et la nature des risques à maîtriser.
              </p>
            </div>

            {/* Objectives */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg">
                <div className="flex items-center gap-3 mb-4">
                  <AlertCircle className="text-primary" size={32} />
                  <h3 className="text-xl font-bold text-foreground">Prévenir les Défaillances</h3>
                </div>
                <p className="text-foreground/80">
                  Identifier et anticiper les problèmes avant qu'ils ne surviennent.
                </p>
              </div>

              <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-8 rounded-lg">
                <div className="flex items-center gap-3 mb-4">
                  <Zap className="text-amber-600" size={32} />
                  <h3 className="text-xl font-bold text-foreground">Réduire les Risques</h3>
                </div>
                <p className="text-foreground/80">
                  Minimiser les accidents et garantir la sécurité des personnes.
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-lg">
                <div className="flex items-center gap-3 mb-4">
                  <Target className="text-green-600" size={32} />
                  <h3 className="text-xl font-bold text-foreground">Exploitation Durable</h3>
                </div>
                <p className="text-foreground/80">
                  Assurer une performance éco-responsable sur le long terme.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Methodology Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
              Notre Méthode de Travail
            </h2>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {/* Step 1 */}
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary text-primary-foreground font-bold text-lg">
                      1
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">Évaluations Précises</h3>
                    <p className="text-foreground/80">
                      Tests, contrôles visuels et mesures de performance basés sur les exigences spécifiques de chaque domaine.
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary text-primary-foreground font-bold text-lg">
                      2
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">Identification</h3>
                    <p className="text-foreground/80">
                      Détection de toute non-conformité potentielle par nos experts qualifiés.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary text-primary-foreground font-bold text-lg">
                      3
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">Rapport & Solutions</h3>
                    <p className="text-foreground/80">
                      Rapport détaillé avec recommandations d'actions correctives pour assurer la mise en conformité des équipements.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Interventions Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
              Nos Interventions à Chaque Étape
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Avant la Construction */}
              <div className="border border-border rounded-lg p-8 hover:border-primary transition-colors">
                <h3 className="text-2xl font-bold text-foreground mb-4">Avant la Construction</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/80">Validation des plans</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/80">Conformité réglementaire dans le domaine industriel et BTP</span>
                  </li>
                </ul>
              </div>

              {/* Pendant le Chantier */}
              <div className="border border-border rounded-lg p-8 hover:border-primary transition-colors">
                <h3 className="text-2xl font-bold text-foreground mb-4">Pendant le Chantier</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/80">Contrôle du respect des normes techniques</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/80">Suivi de chantier pour garantir la conformité</span>
                  </li>
                </ul>
              </div>

              {/* À la Réception */}
              <div className="border border-border rounded-lg p-8 hover:border-primary transition-colors">
                <h3 className="text-2xl font-bold text-foreground mb-4">À la Réception des Travaux</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/80">Vérification complète des installations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/80">Certification de conformité</span>
                  </li>
                </ul>
              </div>

              {/* En Exploitation */}
              <div className="border border-border rounded-lg p-8 hover:border-primary transition-colors">
                <h3 className="text-2xl font-bold text-foreground mb-4">En Exploitation</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/80">Vérifications périodiques régulières</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/80">Maintien en conformité des équipements techniques</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Prêt à Commencer ?
            </h2>
            <p className="text-lg mb-8 opacity-95 max-w-2xl mx-auto">
              Contactez-nous pour discuter de vos besoins spécifiques et planifier une visite d'inspection.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Demander une Inspection
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
