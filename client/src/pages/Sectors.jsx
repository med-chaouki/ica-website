import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Factory, Truck, Building2, Zap, Building, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function Sectors() {
    const sectors = [
        {
            id: "industrie",
            title: "Industrie",
            icon: Factory,
            desc: "Nous accompagnons les sites industriels pour garantir la sécurité des procédés et des équipements de production.",
            details: [
                "Contrôle des machines et lignes de production",
                "Inspection des équipements sous pression",
                "Vérification des installations électriques industrielles",
                "Analyse des risques ATEX"
            ],
            image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000&auto=format&fit=crop"
        },
        {
            id: "logistique",
            title: "Logistique & Transport",
            icon: Truck,
            desc: "Sécurisation des flux et des équipements de manutention pour une chaîne logistique performante.",
            details: [
                "Contrôle des chariots élévateurs et transpalettes",
                "Inspection des quais de chargement",
                "Vérification des rayonnages et structures de stockage",
                "Contrôle des appareils de levage"
            ],
            image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1000&auto=format&fit=crop"
        },
        {
            id: "btp",
            title: "BTP & Infrastructures",
            icon: Building2,
            desc: "Contrôle technique sur chantier pour assurer la sécurité des travailleurs et la conformité des ouvrages.",
            details: [
                "Inspection des grues à tour et mobiles",
                "Vérification des échafaudages et plateformes",
                "Contrôle des installations électriques de chantier",
                "Validation des engins de chantier"
            ],
            image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1000&auto=format&fit=crop"
        },
        {
            id: "energie",
            title: "Énergie",
            icon: Zap,
            desc: "Expertise pointue pour les installations de production et de distribution d'énergie.",
            details: [
                "Contrôle des postes de transformation HT/BT",
                "Inspection des centrales thermiques et renouvelables",
                "Vérification des réseaux de distribution",
                "Maintenance préventive réglementaire"
            ],
            image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=1000&auto=format&fit=crop"
        },
        {
            id: "public",
            title: "Collectivités & ERP",
            icon: Building,
            desc: "Garantir la sécurité du public et des usagers dans les établissements recevant du public.",
            details: [
                "Contrôle des ascenseurs et escaliers mécaniques",
                "Vérification des systèmes de sécurité incendie (SSI)",
                "Inspection des installations électriques des bâtiments",
                "Accessibilité et sécurité des locaux"
            ],
            image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop"
        }
    ];

    return (
        <div className="pb-16">
            {/* Header */}
            <div className="bg-slate-900 text-white py-16 mb-12">
                <div className="container px-4 text-center">
                    <h1 className="text-4xl font-bold mb-6">Secteurs d'Activité</h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                        Une expertise reconnue dans les secteurs les plus exigeants.
                    </p>
                </div>
            </div>

            {/* Sectors List */}
            <div className="container px-4 flex flex-col gap-12">
                {sectors.map((sector, index) => (
                    <Card key={sector.id} className="overflow-hidden border-none shadow-lg">
                        <div className={`flex flex-col md:flex-row ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>

                            {/* Image Side */}
                            <div className="md:w-2/5 h-64 md:h-auto relative">
                                <img
                                    src={sector.image}
                                    alt={sector.title}
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-black/20" />
                            </div>

                            {/* Content Side */}
                            <div className="md:w-3/5 p-8 md:p-12 flex flex-col justify-center">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="p-3 rounded-lg bg-primary/10 text-primary">
                                        <sector.icon size={32} />
                                    </div>
                                    <h2 className="text-3xl font-bold text-slate-900">{sector.title}</h2>
                                </div>

                                <p className="text-lg text-slate-600 mb-8">
                                    {sector.desc}
                                </p>

                                <div className="bg-slate-50 rounded-xl p-6 mb-8">
                                    <h3 className="font-semibold text-slate-800 mb-4">Interventions fréquentes :</h3>
                                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        {sector.details.map((detail, i) => (
                                            <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                                                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                                                <span>{detail}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <Link href="/contact">
                                        <span className="inline-flex items-center font-semibold text-primary hover:text-primary/80 transition-colors cursor-pointer">
                                            Demander une intervention pour ce secteur <ArrowRight size={16} className="ml-2" />
                                        </span>
                                    </Link>
                                </div>
                            </div>

                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
}
