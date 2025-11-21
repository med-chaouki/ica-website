import { Card, CardContent } from "@/components/ui/card";
import { History, Target, Award, Cpu, CheckCircle2 } from "lucide-react";

export default function About() {
    return (
        <div className="pb-16">
            {/* Header */}
            <div className="bg-slate-900 text-white py-16 mb-16">
                <div className="container px-4 text-center">
                    <h1 className="text-4xl font-bold mb-6">À Propos de ICA</h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                        Votre partenaire de confiance pour la sécurité et la conformité technique au Maroc.
                    </p>
                </div>
            </div>

            {/* Mission & History */}
            <section className="container px-4 mb-20">
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    <div className="md:w-1/2">
                        <img
                            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1000&auto=format&fit=crop"
                            alt="Team meeting"
                            className="rounded-2xl shadow-xl"
                        />
                    </div>
                    <div className="md:w-1/2">
                        <div className="flex items-center gap-3 mb-4 text-primary">
                            <History size={28} />
                            <span className="font-bold text-lg uppercase tracking-wider">Notre Histoire</span>
                        </div>
                        <h2 className="text-3xl font-bold mb-6 text-slate-900">Engagés pour construire le futur</h2>
                        <p className="text-slate-600 mb-6 leading-relaxed">
                            Inspection Control Audit (ICA) est un bureau de contrôle technique agréé par l'État marocain, né de la volonté d'apporter une expertise de haut niveau dans le domaine de la sécurité industrielle et de la conformité réglementaire.
                        </p>
                        <p className="text-slate-600 mb-6 leading-relaxed">
                            Depuis notre création, nous nous engageons à accompagner les entreprises de tous secteurs (Industrie, BTP, Services) dans la maîtrise de leurs risques techniques et l'optimisation de leurs performances.
                        </p>

                        <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100">
                            <Target className="text-primary shrink-0 mt-1" size={24} />
                            <div>
                                <h3 className="font-bold text-slate-900 mb-1">Notre Mission</h3>
                                <p className="text-sm text-slate-600">
                                    Garantir la conformité aux normes en vigueur, assurer la sécurité des personnes et des biens, et fiabiliser les installations techniques de nos clients.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values / Expertise */}
            <section className="bg-slate-50 py-16 mb-20">
                <div className="container px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4 text-slate-900">Nos Engagements</h2>
                        <p className="text-lg text-slate-600">Des valeurs fortes qui guident chacune de nos interventions.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: "Expertise Technique", desc: "Une équipe d'ingénieurs et de techniciens hautement qualifiés et certifiés." },
                            { title: "Rigueur & Intégrité", desc: "Des contrôles impartiaux et conformes aux référentiels réglementaires les plus stricts." },
                            { title: "Réactivité", desc: "Une disponibilité et une capacité d'intervention rapide sur tout le territoire." }
                        ].map((item, index) => (
                            <Card key={index} className="border-none shadow-md">
                                <CardContent className="pt-6">
                                    <div className="mb-4 text-primary">
                                        <CheckCircle2 size={32} />
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                    <p className="text-slate-600">{item.desc}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Future Perspectives */}
            <section className="container px-4">
                <div className="bg-slate-900 rounded-3xl p-8 md:p-16 text-white overflow-hidden relative">
                    <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
                        <div className="md:w-2/3">
                            <div className="flex items-center gap-3 mb-6 text-primary">
                                <Cpu size={28} />
                                <span className="font-bold text-lg uppercase tracking-wider">Innovation</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">Vers le Contrôle 4.0</h2>
                            <p className="text-slate-300 text-lg mb-6 leading-relaxed">
                                Chez ICA, nous croyons que l'avenir du contrôle réglementaire passe par l'innovation technologique. Nous intégrons progressivement la digitalisation et l'intelligence artificielle dans nos processus pour offrir des rapports plus précis, plus rapides et prédictifs.
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-primary" />
                                    <span>Digitalisation des rapports d'inspection</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-primary" />
                                    <span>Maintenance prédictive assistée par IA</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-primary" />
                                    <span>Suivi en temps réel via plateforme client</span>
                                </li>
                            </ul>
                        </div>
                        <div className="md:w-1/3 flex justify-center">
                            <div className="w-48 h-48 bg-primary/20 rounded-full flex items-center justify-center animate-pulse">
                                <Cpu size={80} className="text-primary" />
                            </div>
                        </div>
                    </div>

                    {/* Background decoration */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -mr-20 -mt-20" />
                </div>
            </section>
        </div>
    );
}
