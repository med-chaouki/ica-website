import MultiStepForm from "@/components/quote/MultiStepForm";

export default function QuoteRequest() {
    return (
        <div className="min-h-screen bg-slate-50 py-12">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-10">
                        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                            Demande de Devis
                        </h1>
                        <p className="text-lg text-slate-600">
                            Remplissez ce formulaire pour recevoir une proposition personnalisée sous 24-48h.
                        </p>
                    </div>

                    <MultiStepForm />
                </div>
            </div>
        </div>
    );
}
