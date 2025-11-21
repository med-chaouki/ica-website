import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Shield, Zap, Award, ArrowRight, Building2, Factory, Truck, HardHat } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 pb-16">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2000&auto=format&fit=crop"
            alt="Industrial Inspection"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="container relative z-10 px-4 text-center">
          <div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              Engagés pour construire <span className="text-primary">le futur</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-200 mb-8 max-w-3xl mx-auto">
              Votre partenaire de confiance pour la sécurité, la conformité et la performance de vos installations techniques.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90">
                  Demander un devis
                </Button>
              </Link>
              <Link href="/services">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent border-white text-white hover:bg-white hover:text-slate-900">
                  Nos Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Pourquoi choisir ICA ?</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Bureau de contrôle agréé par l'État, nous mettons notre expertise au service de votre sécurité.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: Shield, title: "Expertise Agréée", desc: "Bureau agréé par l'État garantissant conformité et rigueur." },
            { icon: Zap, title: "Intervention Rapide", desc: "Réactivité et disponibilité pour vos urgences et projets." },
            { icon: Award, title: "Qualité Certifiée", desc: "Engagement total envers la qualité et la performance." },
            { icon: CheckCircle2, title: "Solutions Adaptées", desc: "Approche personnalisée pour chaque secteur d'activité." },
          ].map((item, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6 text-center">
                <div className="mb-4 inline-flex p-3 rounded-full bg-primary/10 text-primary">
                  <item.icon size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Services Overview */}
      <section className="bg-slate-50 py-16">
        <div className="container px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Nos Domaines d'Intervention</h2>
              <p className="text-lg text-slate-600">Une gamme complète de services pour votre conformité.</p>
            </div>
            <Link href="/services">
              <Button variant="ghost" className="hidden md:flex items-center gap-2 text-primary">
                Voir tous les services <ArrowRight size={16} />
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Inspections Réglementaires",
                desc: "Contrôle des appareils de levage, installations électriques, équipements sous pression...",
                image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1000&auto=format&fit=crop"
              },
              {
                title: "Contrôles Non Destructifs",
                desc: "Tests et essais (VT, PT, MT, UT) pour garantir l'intégrité de vos matériaux.",
                image: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?q=80&w=1000&auto=format&fit=crop"
              },
              {
                title: "Formation & Assistance",
                desc: "Accompagnement technique et formations professionnelles pour vos équipes.",
                image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=1000&auto=format&fit=crop"
              }
            ].map((service, index) => (
              <div key={index} className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all">
                <div className="aspect-video w-full overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 bg-white relative">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{service.title}</h3>
                  <p className="text-slate-600 mb-4">{service.desc}</p>
                  <Link href="/services">
                    <span className="text-sm font-semibold text-primary flex items-center gap-1 group-hover:gap-2 transition-all">
                      En savoir plus <ArrowRight size={14} />
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center md:hidden">
            <Link href="/services">
              <Button variant="outline" className="w-full">Voir tous les services</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Secteurs d'Activité</h2>
          <p className="text-lg text-slate-600">Des solutions adaptées à chaque industrie.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: Factory, label: "Industrie" },
            { icon: Truck, label: "Logistique" },
            { icon: Building2, label: "BTP & Infra" },
            { icon: Zap, label: "Énergie" },
          ].map((sector, index) => (
            <Link key={index} href="/sectors">
              <div className="p-6 rounded-lg border border-slate-200 hover:border-primary/50 hover:bg-primary/5 transition-colors cursor-pointer text-center group">
                <sector.icon className="mx-auto mb-3 text-slate-400 group-hover:text-primary transition-colors" size={32} />
                <span className="font-semibold text-slate-700 group-hover:text-primary transition-colors">{sector.label}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container px-4 mb-8">
        <div className="bg-primary rounded-2xl p-8 md:p-12 text-center text-white relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Prêt à sécuriser vos installations ?</h2>
            <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Contactez nos experts dès aujourd'hui pour un devis personnalisé ou une intervention rapide.
            </p>
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6 text-primary font-bold hover:bg-white">
                Contactez-nous
              </Button>
            </Link>
          </div>
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        </div>
      </section>
    </div>
  );
}
