import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Controller } from "react-hook-form";

const servicesList = [
    'Appareils de levage et manutention',
    'Ascenseurs et monte-charges',
    'Installations électriques',
    'Appareils à pression et vapeur',
    'Équipements de sécurité incendie',
    'Contrôles Non Destructifs (CND)',
    'EPI - Équipements de Protection Individuelle',
    'Portails et portes automatiques',
    'Autre'
];

export default function Step2Services({ form }) {
    const { control, formState: { errors } } = form;

    return (
        <div className="space-y-6">
            <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-slate-800">Services Demandés</h2>
                <p className="text-slate-500">
                    Sélectionnez les types de contrôles ou services dont vous avez besoin.
                </p>
            </div>

            <div className="space-y-4">
                <Label className="text-base">
                    Sélectionnez un ou plusieurs services <span className="text-red-500">*</span>
                </Label>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Controller
                        control={control}
                        name="services"
                        render={({ field }) => (
                            <>
                                {servicesList.map((service) => {
                                    const isChecked = field.value?.includes(service) || false;

                                    return (
                                        <label
                                            key={service}
                                            htmlFor={service}
                                            className={`flex items-start space-x-3 p-4 border rounded-lg transition-all cursor-pointer
                                                ${isChecked ? 'bg-blue-50 border-blue-300' : 'hover:bg-slate-50 border-slate-200'}
                                            `}
                                        >
                                            <Checkbox
                                                id={service}
                                                checked={isChecked}
                                                onCheckedChange={(checked) => {
                                                    const currentValues = field.value || [];
                                                    if (checked) {
                                                        field.onChange([...currentValues, service]);
                                                    } else {
                                                        field.onChange(currentValues.filter((v) => v !== service));
                                                    }
                                                }}
                                            />
                                            <span className="font-normal leading-tight flex-1">
                                                {service}
                                            </span>
                                        </label>
                                    );
                                })}
                            </>
                        )}
                    />
                </div>

                {errors.services && (
                    <p className="text-sm text-red-500 font-medium mt-2">
                        {errors.services.message}
                    </p>
                )}
            </div>
        </div>
    );
}
