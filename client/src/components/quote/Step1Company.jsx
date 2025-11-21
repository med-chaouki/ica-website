import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Controller } from "react-hook-form";

export default function Step1Company({ form }) {
    const { register, control, formState: { errors } } = form;

    return (
        <div className="space-y-6">
            <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-slate-800">Informations de l'Entreprise</h2>
                <p className="text-slate-500">Commençons par identifier votre structure.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <Label htmlFor="companyName">Nom de l'entreprise <span className="text-red-500">*</span></Label>
                    <Input
                        id="companyName"
                        placeholder="Ex: Industries Marocaines SA"
                        {...register("companyName")}
                        className={errors.companyName ? "border-red-500" : ""}
                    />
                    {errors.companyName && <p className="text-xs text-red-500">{errors.companyName.message}</p>}
                </div>

                <div className="space-y-2">
                    <Label htmlFor="businessName">Raison Sociale <span className="text-red-500">*</span></Label>
                    <Input
                        id="businessName"
                        placeholder="Ex: SARL / SA"
                        {...register("businessName")}
                        className={errors.businessName ? "border-red-500" : ""}
                    />
                    {errors.businessName && <p className="text-xs text-red-500">{errors.businessName.message}</p>}
                </div>

                <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="sector">Secteur d'activité <span className="text-red-500">*</span></Label>
                    <Controller
                        control={control}
                        name="sector"
                        render={({ field }) => (
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <SelectTrigger className={errors.sector ? "border-red-500" : ""}>
                                    <SelectValue placeholder="Sélectionnez votre secteur" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="Industrie">Industrie</SelectItem>
                                    <SelectItem value="Logistique & Transport">Logistique & Transport</SelectItem>
                                    <SelectItem value="BTP & Infrastructures">BTP & Infrastructures</SelectItem>
                                    <SelectItem value="Énergie">Énergie</SelectItem>
                                    <SelectItem value="Collectivités & Établissements publics">Collectivités & Établissements publics</SelectItem>
                                    <SelectItem value="Autre">Autre</SelectItem>
                                </SelectContent>
                            </Select>
                        )}
                    />
                    {errors.sector && <p className="text-xs text-red-500">{errors.sector.message}</p>}
                </div>
            </div>
        </div>
    );
}
