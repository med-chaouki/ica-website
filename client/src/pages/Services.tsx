import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle, Flame, Zap, Building2, Shield, Wrench } from "lucide-react";

export default function Services() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Nos Services de Contrôle</h1>
            <p className="text-lg md:text-xl opacity-95">
              Vérifications complètes de vos équipements techniques selon les normes en vigueur.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 gap-12">
              {/* Chauffage & Ventilation */}
              <div className="border-l-4 border-primary pl-8">
                <div className="flex items-start gap-4 mb-6">
                  <Wrench className="text-primary flex-shrink-0 mt-1" size={32} />
                  <div>
                    <h2 className="text-3xl font-bold text-foreground mb-2">Chauffage & Ventilation</h2>
                    <p className="text-foreground/80">Systèmes de Chauffage et de Ventilation</p>
                  </div>
                </div>
                <p className="text-foreground/80 mb-6">
                  Contrôle complet des installations de chauffage, ventilation et climatisation pour assurer performance énergétique et conformité aux normes de sécurité.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle size={20} className="text-primary flex-shrink-0" />
                    <span className="text-foreground">Vérification des chaudières et systèmes de combustion</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle size={20} className="text-primary flex-shrink-0" />
                    <span className="text-foreground">Contrôle des installations d'aération et assainissement</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle size={20} className="text-primary flex-shrink-0" />
                    <span className="text-foreground">Test de performance et mesures énergétiques</span>
                  </li>
                </ul>
              </div>

              {/* Ascenseurs & Levage */}
              <div className="border-l-4 border-primary pl-8">
                <div className="flex items-start gap-4 mb-6">
                  <Building2 className="text-primary flex-shrink-0 mt-1" size={32} />
                  <div>
                    <h2 className="text-3xl font-bold text-foreground mb-2">Ascenseurs & Levage</h2>
                    <p className="text-foreground/80">Ascenseurs et Appareils de Levage</p>
                  </div>
                </div>
                <p className="text-foreground/80 mb-6">
                  Inspection réglementaire des ascenseurs, monte-charges et tous types d'appareils de levage pour garantir la sécurité des utilisateurs.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle size={20} className="text-primary flex-shrink-0" />
                    <span className="text-foreground">Ascenseurs, monte-charges, élévateurs de personnes</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle size={20} className="text-primary flex-shrink-0" />
                    <span className="text-foreground">Ponts élévateurs, treuils, palans</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle size={20} className="text-primary flex-shrink-0" />
                    <span className="text-foreground">Grues à tour et nacelles</span>
                  </li>
                </ul>
              </div>

              {/* Installations Électriques */}
              <div className="border-l-4 border-primary pl-8">
                <div className="flex items-start gap-4 mb-6">
                  <Zap className="text-primary flex-shrink-0 mt-1" size={32} />
                  <div>
                    <h2 className="text-3xl font-bold text-foreground mb-2">Installations Électriques</h2>
                    <p className="text-foreground/80">Vérifications Électriques Réglementaires</p>
                  </div>
                </div>
                <p className="text-foreground/80 mb-6">
                  Contrôle des installations électriques basses et moyennes tensions conformément aux normes de sécurité électrique en vigueur.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle size={20} className="text-primary flex-shrink-0" />
                    <span className="text-foreground">Installations basses et moyennes tensions</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle size={20} className="text-primary flex-shrink-0" />
                    <span className="text-foreground">Protection contre la foudre</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle size={20} className="text-primary flex-shrink-0" />
                    <span className="text-foreground">Groupes électrogènes de sécurité</span>
                  </li>
                </ul>
              </div>

              {/* Sécurité Incendie */}
              <div className="border-l-4 border-primary pl-8">
                <div className="flex items-start gap-4 mb-6">
                  <Flame className="text-primary flex-shrink-0 mt-1" size={32} />
                  <div>
                    <h2 className="text-3xl font-bold text-foreground mb-2">Sécurité Incendie</h2>
                    <p className="text-foreground/80">Moyens de Lutte Contre l'Incendie et les Explosions</p>
                  </div>
                </div>
                <p className="text-foreground/80 mb-6">
                  Vérification complète des équipements et installations de protection contre l'incendie et les explosions.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle size={20} className="text-primary flex-shrink-0" />
                    <span className="text-foreground">Extincteurs, RIA, poteaux incendie</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle size={20} className="text-primary flex-shrink-0" />
                    <span className="text-foreground">Systèmes sprinklers, installations CO₂</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle size={20} className="text-primary flex-shrink-0" />
                    <span className="text-foreground">Détection automatique incendie</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle size={20} className="text-primary flex-shrink-0" />
                    <span className="text-foreground">Portes coupe-feu, exutoires de fumées</span>
                  </li>
                </ul>
              </div>

              {/* Équipements Sous Pression */}
              <div className="border-l-4 border-primary pl-8">
                <div className="flex items-start gap-4 mb-6">
                  <Shield className="text-primary flex-shrink-0 mt-1" size={32} />
                  <div>
                    <h2 className="text-3xl font-bold text-foreground mb-2">Équipements Sous Pression</h2>
                    <p className="text-foreground/80">Contrôle des Équipements Sous Pression</p>
                  </div>
                </div>
                <p className="text-foreground/80 mb-6">
                  Inspection spécialisée des équipements fonctionnant sous pression conformément aux réglementations de sécurité strictes.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle size={20} className="text-primary flex-shrink-0" />
                    <span className="text-foreground">Chaudières industrielles et domestiques</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle size={20} className="text-primary flex-shrink-0" />
                    <span className="text-foreground">Installations de combustion</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle size={20} className="text-primary flex-shrink-0" />
                    <span className="text-foreground">Tours aéroréfrigérantes</span>
                  </li>
                </ul>
              </div>

              {/* Autres Équipements */}
              <div className="border-l-4 border-primary pl-8">
                <div className="flex items-start gap-4 mb-6">
                  <Wrench className="text-primary flex-shrink-0 mt-1" size={32} />
                  <div>
                    <h2 className="text-3xl font-bold text-foreground mb-2">Autres Équipements Techniques</h2>
                    <p className="text-foreground/80">Équipements Soumis à Contrôle Réglementaire</p>
                  </div>
                </div>
                <p className="text-foreground/80 mb-6">
                  Contrôle de divers équipements techniques soumis à vérification réglementaire.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle size={20} className="text-primary flex-shrink-0" />
                    <span className="text-foreground">Équipements de Protection Individuelle (EPI)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle size={20} className="text-primary flex-shrink-0" />
                    <span className="text-foreground">Locaux et bâtiments professionnels</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle size={20} className="text-primary flex-shrink-0" />
                    <span className="text-foreground">Protection des travailleurs</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Intéressé par l'un de nos services ?
            </h2>
            <p className="text-lg text-foreground/80 mb-8 max-w-2xl mx-auto">
              Contactez-nous pour discuter de vos besoins spécifiques en matière de vérification réglementaire.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity"
            >
              Demander un Devis
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
