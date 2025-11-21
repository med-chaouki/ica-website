import { Card, CardContent } from "@/components/ui/card";
import { Search, HardHat, FileText, RefreshCw, CheckCircle, Calendar, AlertTriangle } from "lucide-react";

export default function Approach() {
    const steps = [
        {
            number: "01",
            title: "Analyse des besoins",
            desc: "Nous étudions vos demandes et spécificités pour proposer une intervention adaptée à vos enjeux.",
            icon: Search
        },
        {
            number: "02",
            title: "Inspection sur site",
            desc: "Nos experts qualifiés interviennent sur le terrain avec des équipements de pointe pour réaliser les contrôles.",
            icon: HardHat
        },
        {
            number: "03",
            title: "Rapport détaillé",
            desc: "Remise d'un rapport clair et précis mentionnant les conformités et les recommandations nécessaires.",
            icon: FileText
        },
        {
            number: "04",
            title: "Suivi & Assistance",
            desc: "Nous restons à vos côtés pour le suivi des levées de réserves et l'assistance technique continue.",
            icon: RefreshCw
        }
    ];

    const controlTypes = [
        {
            title: "Contrôle Initial",
            subtitle: "Mise en service",
            desc: "Obligatoire avant la première utilisation ou après une modification majeure. Il garantit que l'équipement est sûr et conforme dès le départ.",
            icon: CheckCircle,
            color: "text-green-600",
            bg: "bg-green-50"
        },
        {
            title: "Contrôles Périodiques",
            subtitle: "Inspections régulières",
            desc: "Vérifications récurrentes (trimestrielles, semestrielles ou annuelles) pour s'assurer du maintien de l'état de conformité dans le temps.",
            icon: Calendar,
            color: "text-blue-600",
            bg: "bg-blue-50"
        },
        {
            title: "Contrôles Ponctuels",
            subtitle: "Sur demande ou incident",
            desc: "Interventions spécifiques suite à une panne, un accident, ou pour une levée de doute technique.",
            icon: AlertTriangle,
            color: "text-orange-600",
            bg: "bg-orange-50"
        }
    ];

    return (
        <div className="pb-16">
            {/* Header */}
            <div className="bg-slate-900 text-white py-16 mb-16">
                <div className="container px-4 text-center">
                    <h1 className="text-4xl font-bold mb-6">Notre Approche</h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                        Une méthodologie rigoureuse et transparente pour garantir la qualité de nos prestations.
                    </p>
                </div>
            </div>

            {/* Process Steps */}
            <section className="container px-4 mb-20">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4 text-slate-900">Votre parcours avec ICA</h2>
                    <p className="text-lg text-slate-600">4 étapes simples pour une conformité totale.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-slate-200 -z-10 transform translate-y-4" />

                    {steps.map((step, index) => (
                        <div key={index} className="relative flex flex-col items-center text-center bg-white p-4">
                            <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold mb-6 shadow-lg border-4 border-white z-10">
                                {step.number}
                            </div>
                            <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Control Types */}
            <section className="bg-slate-50 py-16">
                <div className="container px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4 text-slate-900">Types de Contrôles</h2>
                        <p className="text-lg text-slate-600">Nous intervenons à chaque étape de la vie de vos équipements.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {controlTypes.map((type, index) => (
                            <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow">
                                <CardContent className="pt-8 pb-8 px-6 text-center">
                                    <div className={`w-20 h-20 mx-auto rounded-full ${type.bg} ${type.color} flex items-center justify-center mb-6`}>
                                        <type.icon size={40} />
                                    </div>
                                    <h3 className="text-xl font-bold mb-1">{type.title}</h3>
                                    <p className={`text-sm font-medium ${type.color} mb-4 uppercase tracking-wide`}>{type.subtitle}</p>
                                    <p className="text-slate-600">{type.desc}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
