import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Controller } from "react-hook-form";

export default function Step3Project({ form }) {
    const { register, control, formState: { errors } } = form;

    return (
        <div className="space-y-6">
            <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-slate-800">Détails du Projet</h2>
                <p className="text-slate-500">Décrivez votre besoin pour nous aider à mieux vous répondre.</p>
            </div>

            <div className="space-y-6">
                <div className="space-y-2">
                    <Label htmlFor="projectDescription">Description du projet <span className="text-red-500">*</span></Label>
                    <Textarea
                        id="projectDescription"
                        placeholder="Décrivez votre besoin, le contexte, les spécificités techniques..."
                        className={`min-h-[150px] ${errors.projectDescription ? "border-red-500" : ""}`}
                        {...register("projectDescription")}
                    />
                    {errors.projectDescription && <p className="text-xs text-red-500">{errors.projectDescription.message}</p>}
                    <p className="text-xs text-slate-400 text-right">Minimum 50 caractères</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <Label htmlFor="urgency">Urgence <span className="text-red-500">*</span></Label>
                        <Controller
                            control={control}
                            name="urgency"
                            render={({ field }) => (
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <SelectTrigger className={errors.urgency ? "border-red-500" : ""}>
                                        <SelectValue placeholder="Niveau d'urgence" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="Urgent (< 7 jours)">Urgent (&lt; 7 jours)</SelectItem>
                                        <SelectItem value="Normal (7-15 jours)">Normal (7-15 jours)</SelectItem>
                                        <SelectItem value="Planifié (> 15 jours)">Planifié (&gt; 15 jours)</SelectItem>
                                    </SelectContent>
                                </Select>
                            )}
                        />
                        {errors.urgency && <p className="text-xs text-red-500">{errors.urgency.message}</p>}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="desiredDate">Date souhaitée (optionnel)</Label>
                        <Input
                            id="desiredDate"
                            type="date"
                            min={new Date().toISOString().split('T')[0]}
                            {...register("desiredDate")}
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="numberOfEquipments">Nombre d'équipements (estimé)</Label>
                        <Input
                            id="numberOfEquipments"
                            type="number"
                            min="1"
                            placeholder="Ex: 5"
                            {...register("numberOfEquipments")}
                        />
                        {errors.numberOfEquipments && <p className="text-xs text-red-500">{errors.numberOfEquipments.message}</p>}
                    </div>
                </div>
            </div>
        </div>
    );
}
