import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Step4Contact({ form }) {
    const { register, formState: { errors } } = form;

    return (
        <div className="space-y-6">
            <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-slate-800">Vos Coordonnées</h2>
                <p className="text-slate-500">Comment pouvons-nous vous contacter ?</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <Label htmlFor="firstName">Prénom <span className="text-red-500">*</span></Label>
                    <Input
                        id="firstName"
                        placeholder="Votre prénom"
                        {...register("firstName")}
                        className={errors.firstName ? "border-red-500" : ""}
                    />
                    {errors.firstName && <p className="text-xs text-red-500">{errors.firstName.message}</p>}
                </div>

                <div className="space-y-2">
                    <Label htmlFor="lastName">Nom <span className="text-red-500">*</span></Label>
                    <Input
                        id="lastName"
                        placeholder="Votre nom"
                        {...register("lastName")}
                        className={errors.lastName ? "border-red-500" : ""}
                    />
                    {errors.lastName && <p className="text-xs text-red-500">{errors.lastName.message}</p>}
                </div>

                <div className="space-y-2">
                    <Label htmlFor="email">Email professionnel <span className="text-red-500">*</span></Label>
                    <Input
                        id="email"
                        type="email"
                        placeholder="nom@entreprise.com"
                        {...register("email")}
                        className={errors.email ? "border-red-500" : ""}
                    />
                    {errors.email && <p className="text-xs text-red-500">{errors.email.message}</p>}
                </div>

                <div className="space-y-2">
                    <Label htmlFor="phone">Téléphone <span className="text-red-500">*</span></Label>
                    <Input
                        id="phone"
                        placeholder="+212600000000"
                        {...register("phone")}
                        className={errors.phone ? "border-red-500" : ""}
                    />
                    {errors.phone && <p className="text-xs text-red-500">{errors.phone.message}</p>}
                </div>

                <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="address">Adresse <span className="text-red-500">*</span></Label>
                    <Input
                        id="address"
                        placeholder="Adresse complète"
                        {...register("address")}
                        className={errors.address ? "border-red-500" : ""}
                    />
                    {errors.address && <p className="text-xs text-red-500">{errors.address.message}</p>}
                </div>

                <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="city">Ville <span className="text-red-500">*</span></Label>
                    <Input
                        id="city"
                        placeholder="Ville"
                        {...register("city")}
                        className={errors.city ? "border-red-500" : ""}
                    />
                    {errors.city && <p className="text-xs text-red-500">{errors.city.message}</p>}
                </div>
            </div>
        </div>
    );
}
