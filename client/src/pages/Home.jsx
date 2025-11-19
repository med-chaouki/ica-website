import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, CheckCircle, Building2, Zap, Users, Shield } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Garantir la Conformité de vos Équipements Techniques
              </h1>
              <p className="text-lg md:text-xl mb-8 opacity-95">
                ICA assure la vérification réglementaire de vos installations pour garantir sécurité, performance et fiabilité dans le bâtiment, l'industrie et les infrastructures publiques.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/services"
                  className="px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center justify-center gap-2"
                >
                  Découvrir nos Services
                  <ArrowRight size={20} />
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors inline-flex items-center justify-center gap-2"
                >
                  Nous Contacter
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Key Values Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
              Nos Valeurs Clés
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Conformité */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="text-primary" size={32} />
                  <h3 className="text-xl font-bold text-foreground">Conformité Garantie</h3>
                </div>
                <p className="text-foreground/80">
                  Selon normes en vigueur. Nos experts vérifient la conformité réglementaire de tous vos équipements.
                </p>
              </div>

              {/* Sécurité */}
              <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-8 rounded-lg">
                <div className="flex items-center gap-3 mb-4">
                  <Zap className="text-amber-600" size={32} />
                  <h3 className="text-xl font-bold text-foreground">Sécurité Maximale</h3>
                </div>
                <p className="text-foreground/80">
                  Prévention des risques. Nous identifions et anticipons les problèmes avant qu'ils ne surviennent.
                </p>
              </div>

              {/* Expertise */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-lg">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="text-green-600" size={32} />
                  <h3 className="text-xl font-bold text-foreground">Experts Qualifiés</h3>
                </div>
                <p className="text-foreground/80">
                  Évaluations rigoureuses. Notre équipe d'experts effectue des contrôles précis et détaillés.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Sectors Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
              Notre Expertise
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Bâtiment */}
              <div className="bg-white p-8 rounded-lg shadow-sm border border-border hover:shadow-md transition-shadow">
                <Building2 className="text-primary mb-4" size={40} />
                <h3 className="text-2xl font-bold mb-3 text-foreground">Bâtiment</h3>
                <p className="text-foreground/80">
                  Contrôle des installations techniques dans les bâtiments professionnels et résidentiels.
                </p>
              </div>

              {/* Industrie */}
              <div className="bg-white p-8 rounded-lg shadow-sm border border-border hover:shadow-md transition-shadow">
                <Zap className="text-primary mb-4" size={40} />
                <h3 className="text-2xl font-bold mb-3 text-foreground">Industrie</h3>
                <p className="text-foreground/80">
                  Vérification des équipements industriels et installations de production.
                </p>
              </div>

              {/* Infrastructures */}
              <div className="bg-white p-8 rounded-lg shadow-sm border border-border hover:shadow-md transition-shadow">
                <Shield className="text-primary mb-4" size={40} />
                <h3 className="text-2xl font-bold mb-3 text-foreground">Infrastructures</h3>
                <p className="text-foreground/80">
                  Inspection des infrastructures publiques et équipements collectifs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Preview Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
              Nos Services de Contrôle
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Chauffage & Ventilation */}
              <div className="border border-border rounded-lg p-8 hover:border-primary transition-colors">
                <h3 className="text-xl font-bold mb-3 text-foreground">Chauffage & Ventilation</h3>
                <p className="text-foreground/80 mb-4">
                  Contrôle complet des installations de chauffage, ventilation et climatisation pour assurer performance énergétique et conformité aux normes de sécurité.
                </p>
                <ul className="space-y-2 text-sm text-foreground/70">
                  <li className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-primary" />
                    Vérification des chaudières et systèmes de combustion
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-primary" />
                    Contrôle des installations d'aération et assainissement
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-primary" />
                    Test de performance et mesures énergétiques
                  </li>
                </ul>
              </div>

              {/* Ascenseurs & Levage */}
              <div className="border border-border rounded-lg p-8 hover:border-primary transition-colors">
                <h3 className="text-xl font-bold mb-3 text-foreground">Ascenseurs & Levage</h3>
                <p className="text-foreground/80 mb-4">
                  Inspection réglementaire des ascenseurs, monte-charges et tous types d'appareils de levage pour garantir la sécurité des utilisateurs.
                </p>
                <ul className="space-y-2 text-sm text-foreground/70">
                  <li className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-primary" />
                    Ascenseurs, monte-charges, élévateurs
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-primary" />
                    Ponts élévateurs, treuils, palans
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-primary" />
                    Grues à tour et nacelles
                  </li>
                </ul>
              </div>

              {/* Installations Électriques */}
              <div className="border border-border rounded-lg p-8 hover:border-primary transition-colors">
                <h3 className="text-xl font-bold mb-3 text-foreground">Installations Électriques</h3>
                <p className="text-foreground/80 mb-4">
                  Contrôle des installations électriques basses et moyennes tensions conformément aux normes de sécurité électrique en vigueur.
                </p>
                <ul className="space-y-2 text-sm text-foreground/70">
                  <li className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-primary" />
                    Installations basses et moyennes tensions
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-primary" />
                    Protection contre la foudre
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-primary" />
                    Groupes électrogènes de sécurité
                  </li>
                </ul>
              </div>

              {/* Sécurité Incendie */}
              <div className="border border-border rounded-lg p-8 hover:border-primary transition-colors">
                <h3 className="text-xl font-bold mb-3 text-foreground">Sécurité Incendie</h3>
                <p className="text-foreground/80 mb-4">
                  Vérification complète des équipements et installations de protection contre l'incendie et les explosions.
                </p>
                <ul className="space-y-2 text-sm text-foreground/70">
                  <li className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-primary" />
                    Extincteurs, RIA, poteaux incendie
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-primary" />
                    Systèmes sprinklers et installations CO₂
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-primary" />
                    Détection automatique incendie
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity"
              >
                Voir Tous les Services
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Besoin d'une Vérification Réglementaire ?
            </h2>
            <p className="text-lg mb-8 opacity-95 max-w-2xl mx-auto">
              Nos experts sont prêts à réaliser des évaluations précises et rigoureuses de vos installations.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Demander une Inspection
              <ArrowRight size={20} />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
