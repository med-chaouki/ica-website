import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Check, ChevronRight, ChevronLeft, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { quoteSchema, defaultValues } from "./schema";
import { toast } from "sonner";

// Steps components (placeholders for now)
import Step1Company from "./Step1Company";
import Step2Services from "./Step2Services";
import Step3Project from "./Step3Project";
import Step4Contact from "./Step4Contact";
import Step5Validation from "./Step5Validation";

const steps = [
    { id: 1, title: "Entreprise", component: Step1Company, fields: ["companyName", "businessName", "sector"] },
    { id: 2, title: "Services", component: Step2Services, fields: ["services"] },
    { id: 3, title: "Projet", component: Step3Project, fields: ["projectDescription", "urgency", "desiredDate", "numberOfEquipments"] },
    { id: 4, title: "Contact", component: Step4Contact, fields: ["firstName", "lastName", "email", "phone", "address", "city"] },
    { id: 5, title: "Validation", component: Step5Validation, fields: ["acceptTerms", "acceptGDPR"] },
];

export default function MultiStepForm() {
    const [currentStep, setCurrentStep] = useState(0);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [referenceNumber, setReferenceNumber] = useState("");

    // Load from local storage
    const savedData = localStorage.getItem("quoteFormData");
    const initialData = savedData ? JSON.parse(savedData) : defaultValues;

    const form = useForm({
        resolver: zodResolver(quoteSchema),
        defaultValues: initialData,
        mode: "onChange",
    });

    const { trigger, watch, handleSubmit, formState: { isValid } } = form;
    const formData = watch();

    // Save to local storage
    useEffect(() => {
        localStorage.setItem("quoteFormData", JSON.stringify(formData));
    }, [formData]);

    const nextStep = async () => {
        const fields = steps[currentStep].fields;
        const isStepValid = await trigger(fields);

        if (isStepValid) {
            setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
            window.scrollTo(0, 0);
        }
    };

    const prevStep = () => {
        setCurrentStep((prev) => Math.max(prev - 1, 0));
        window.scrollTo(0, 0);
    };

    const onSubmit = async (data) => {
        setIsSubmitting(true);

        try {
            const response = await fetch("http://localhost:3000/api/quote", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (response.ok && result.success) {
                const ref = result.reference || "ICA-" + new Date().getFullYear() + "-" + Math.floor(1000 + Math.random() * 9000);
                setReferenceNumber(ref);
                setIsSuccess(true);
                localStorage.removeItem("quoteFormData");
                toast.success("Demande envoyée avec succès !");
            } else {
                const errorMessage = result.errors
                    ? result.errors.join(", ")
                    : result.message || "Une erreur est survenue";
                toast.error(errorMessage);
            }
        } catch (error) {
            console.error("Error submitting quote:", error);
            toast.error("Erreur de connexion. Veuillez réessayer.");
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSuccess) {
        return (
            <Card className="w-full max-w-3xl mx-auto border-none shadow-xl">
                <CardContent className="pt-10 pb-10 text-center">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Check className="w-10 h-10 text-green-600" />
                    </div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Demande Reçue !</h2>
                    <p className="text-lg text-slate-600 mb-6">
                        Votre demande de devis a bien été enregistrée sous la référence : <br />
                        <span className="font-mono font-bold text-primary text-xl">{referenceNumber}</span>
                    </p>
                    <p className="text-slate-500 mb-8">
                        Notre équipe technique va analyser votre projet et vous contactera dans les 24-48 heures.
                    </p>
                    <Button onClick={() => window.location.href = "/"} size="lg">
                        Retour à l'accueil
                    </Button>
                </CardContent>
            </Card>
        );
    }

    const CurrentStepComponent = steps[currentStep].component;

    return (
        <div className="w-full max-w-3xl mx-auto">
            {/* Progress Bar */}
            <div className="mb-8">
                <div className="flex justify-between mb-2">
                    {steps.map((step, index) => (
                        <div key={step.id} className={`flex flex-col items-center w-1/${steps.length} relative`}>
                            <div
                                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-colors duration-300 z-10
                  ${index <= currentStep ? "bg-primary text-white" : "bg-slate-200 text-slate-500"}
                `}
                            >
                                {index < currentStep ? <Check size={18} /> : step.id}
                            </div>
                            <span className={`text-xs mt-2 font-medium hidden sm:block ${index <= currentStep ? "text-primary" : "text-slate-400"}`}>
                                {step.title}
                            </span>
                            {/* Line connector */}
                            {index < steps.length - 1 && (
                                <div className={`absolute top-5 left-1/2 w-full h-[2px] -z-0
                  ${index < currentStep ? "bg-primary" : "bg-slate-200"}
                `} />
                            )}
                        </div>
                    ))}
                </div>
            </div>

            <Card className="border-none shadow-lg overflow-hidden">
                <CardContent className="p-6 md:p-8">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="min-h-[300px]">
                            <CurrentStepComponent form={form} />
                        </div>

                        <div className="flex justify-between mt-8 pt-6 border-t border-slate-100">
                            <Button
                                type="button"
                                variant="outline"
                                onClick={prevStep}
                                disabled={currentStep === 0 || isSubmitting}
                                className={currentStep === 0 ? "invisible" : ""}
                            >
                                <ChevronLeft className="mr-2 h-4 w-4" /> Précédent
                            </Button>

                            {currentStep === steps.length - 1 ? (
                                <Button type="submit" disabled={isSubmitting} className="bg-primary hover:bg-primary/90">
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Envoi en cours...
                                        </>
                                    ) : (
                                        <>
                                            Confirmer la demande <Check className="ml-2 h-4 w-4" />
                                        </>
                                    )}
                                </Button>
                            ) : (
                                <Button type="button" onClick={nextStep}>
                                    Suivant <ChevronRight className="ml-2 h-4 w-4" />
                                </Button>
                            )}
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}
