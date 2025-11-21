import { Card, CardContent } from "@/components/ui/card";
import { ShieldCheck, TrendingDown, Activity, Scale, Heart, AlertOctagon, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Advantages() {
    const benefits = [
        {
            title: "Réduction des Risques",
            desc: "Identifiez et éliminez les dangers potentiels avant qu'ils ne causent des accidents.",
            icon: AlertOctagon,
            color: "text-red-600",
            bg: "bg-red-50"
        },
        {
            title: "Conformité Totale",
            desc: "Assurez-vous de respecter toutes les réglementations en vigueur et évitez les sanctions.",
            icon: Scale,
            color: "text-blue-600",
            bg: "bg-blue-50"
        },
        {
            title: "Optimisation des Coûts",
            desc: "Une maintenance préventive coûte moins cher que des réparations d'urgence ou des arrêts de production.",
            icon: TrendingDown,
            color: "text-green-600",
            bg: "bg-green-50"
        },
        {
            title: "Fiabilité Opérationnelle",
            desc: "Maximisez la disponibilité de vos équipements et la continuité de votre activité.",
            icon: Activity,
            color: "text-purple-600",
            bg: "bg-purple-50"
        },
        {
            title: "Sécurité des Personnes",
            desc: "Protégez vos collaborateurs et vos clients en garantissant un environnement sûr.",
            icon: Heart,
            color: "text-pink-600",
            bg: "bg-pink-50"
        },
        {
            title: "Exploitation Durable",
            desc: "Adoptez une approche éco-responsable et prolongez la durée de vie de vos installations.",
            icon: Leaf,
            color: "text-emerald-600",
            bg: "bg-emerald-50"
        }
    ];

    return (
        <div className="pb-16">
            {/* Header */}
            <div className="bg-slate-50 py-16 mb-12 border-b">
                <div className="container px-4 text-center">
                    <h1 className="text-4xl font-bold mb-6 text-slate-900">Pourquoi choisir le contrôle réglementaire ?</h1>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        Au-delà de l'obligation légale, le contrôle technique est un levier de performance pour votre entreprise.
                    </p>
                </div>
            </div>

            {/* Benefits Grid */}
            <div className="container px-4 mb-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {benefits.map((benefit, index) => (
                        <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                            <CardContent className="pt-8 pb-8 px-6 text-center">
                                <div className={`w-16 h-16 mx-auto rounded-2xl ${benefit.bg} ${benefit.color} flex items-center justify-center mb-6`}>
                                    <benefit.icon size={32} />
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-slate-900">{benefit.title}</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    {benefit.desc}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>

            {/* Bottom CTA */}
            <section className="container px-4">
                <div className="bg-slate-900 rounded-3xl p-8 md:p-16 text-center text-white">
                    <ShieldCheck className="w-16 h-16 mx-auto mb-6 text-primary" />
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Ne prenez aucun risque avec la sécurité</h2>
                    <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
                        Faites appel à des experts agréés pour auditer vos installations et garantir votre sérénité.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact">
                            <Button size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90">
                                Demander un audit
                            </Button>
                        </Link>
                        <Link href="/services">
                            <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent border-white text-white hover:bg-white hover:text-slate-900">
                                Découvrir nos services
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
