import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Controller } from "react-hook-form";
import { Card, CardContent } from "@/components/ui/card";

export default function Step5Validation({ form }) {
    const { control, watch, formState: { errors } } = form;
    const formData = watch();

    return (
        <div className="space-y-6">
            <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-slate-800">Récapitulatif et Validation</h2>
                <p className="text-slate-500">Vérifiez vos informations avant de soumettre votre demande.</p>
            </div>

            <Card className="bg-slate-50 border-slate-200">
                <CardContent className="p-6 space-y-4 text-sm">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <h3 className="font-semibold text-slate-900 mb-2">Entreprise</h3>
                            <p><span className="text-slate-500">Nom:</span> {formData.companyName}</p>
                            <p><span className="text-slate-500">Secteur:</span> {formData.sector}</p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-slate-900 mb-2">Contact</h3>
                            <p><span className="text-slate-500">Nom:</span> {formData.firstName} {formData.lastName}</p>
                            <p><span className="text-slate-500">Email:</span> {formData.email}</p>
                            <p><span className="text-slate-500">Tél:</span> {formData.phone}</p>
                        </div>
                    </div>

                    <div className="pt-4 border-t border-slate-200">
                        <h3 className="font-semibold text-slate-900 mb-2">Projet & Services</h3>
                        <p className="mb-2"><span className="text-slate-500">Services:</span> {formData.services?.join(", ")}</p>
                        <p className="mb-2"><span className="text-slate-500">Urgence:</span> {formData.urgency}</p>
                        <p className="italic text-slate-600 bg-white p-3 rounded border border-slate-100">
                            "{formData.projectDescription}"
                        </p>
                    </div>
                </CardContent>
            </Card>

            <div className="space-y-4 pt-4">
                <div className="flex items-start space-x-3">
                    <Controller
                        control={control}
                        name="acceptTerms"
                        render={({ field }) => (
                            <Checkbox
                                id="acceptTerms"
                                checked={field.value}
                                onCheckedChange={field.onChange}
                            />
                        )}
                    />
                    <div className="grid gap-1.5 leading-none">
                        <Label htmlFor="acceptTerms" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                            J'accepte les conditions générales d'utilisation <span className="text-red-500">*</span>
                        </Label>
                    </div>
                </div>
                {errors.acceptTerms && <p className="text-xs text-red-500 ml-7">{errors.acceptTerms.message}</p>}

                <div className="flex items-start space-x-3">
                    <Controller
                        control={control}
                        name="acceptGDPR"
                        render={({ field }) => (
                            <Checkbox
                                id="acceptGDPR"
                                checked={field.value}
                                onCheckedChange={field.onChange}
                            />
                        )}
                    />
                    <div className="grid gap-1.5 leading-none">
                        <Label htmlFor="acceptGDPR" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                            J'accepte que mes données soient traitées dans le cadre de cette demande <span className="text-red-500">*</span>
                        </Label>
                    </div>
                </div>
                {errors.acceptGDPR && <p className="text-xs text-red-500 ml-7">{errors.acceptGDPR.message}</p>}
            </div>
        </div>
    );
}
