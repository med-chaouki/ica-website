import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";

const contactSchema = z.object({
  name: z.string().min(2, "Le nom est requis"),
  company: z.string().min(2, "L'entreprise est requise"),
  email: z.string().email("Email invalide"),
  phone: z.string().min(10, "Numéro de téléphone invalide"),
  sector: z.string().min(1, "Veuillez sélectionner un secteur"),
  message: z.string().min(10, "Le message doit contenir au moins 10 caractères"),
});

export default function Contact() {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = async (data) => {
    try {
      const response = await fetch("http://localhost:3000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        toast.success("Message envoyé avec succès ! Nous vous recontacterons bientôt.");
        reset();
      } else {
        const errorMessage = result.errors
          ? result.errors.join(", ")
          : result.message || "Une erreur est survenue";
        toast.error(errorMessage);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Erreur de connexion. Veuillez vérifier votre connexion internet et réessayer.");
    }
  };

  return (
    <div className="pb-16">
      {/* Header */}
      <div className="bg-slate-900 text-white py-16 mb-12">
        <div className="container px-4 text-center">
          <h1 className="text-4xl font-bold mb-6">Contactez-nous</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Une question ? Un besoin spécifique ? Nos équipes sont à votre écoute.
          </p>
        </div>
      </div>

      <div className="container px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Contact Info */}
          <div className="flex flex-col gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-6 text-slate-900">Nos Coordonnées</h2>
              <div className="flex flex-col gap-6">

                <Card className="border-none shadow-md">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg text-primary">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Téléphone</h3>
                      <div className="flex flex-col gap-1 text-slate-600">
                        <a href="tel:+212520590459" className="hover:text-primary transition-colors">+212 520 590 459</a>
                        <a href="tel:+212660102102" className="hover:text-primary transition-colors">+212 660 102 102</a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-md">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg text-primary">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Email</h3>
                      <div className="flex flex-col gap-1 text-slate-600">
                        <a href="mailto:inspection.control.audit@gmail.com" className="hover:text-primary transition-colors">inspection.control.audit@gmail.com</a>
                        <a href="mailto:contact@inspection-control.ma" className="hover:text-primary transition-colors">contact@inspection-control.ma</a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-md">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg text-primary">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Adresse</h3>
                      <p className="text-slate-600">
                        Coopérative Echabab/Lotissement Nabila Makhlouf,<br />
                        2ème étage, Appt 5, Deroua, Berrechid
                      </p>
                    </div>
                  </CardContent>
                </Card>

              </div>
            </div>

            {/* Map */}
            <div className="h-[400px] rounded-2xl overflow-hidden shadow-lg border border-slate-200">
              <iframe
                width="100%"
                height="100%"
                id="gmap_canvas"
                src="https://maps.google.com/maps?q=33.382029,-7.535164&t=&z=15&ie=UTF8&iwloc=&output=embed"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
                title="ICA Location"
              ></iframe>
            </div>

          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
            <h2 className="text-2xl font-bold mb-6 text-slate-900">Envoyez-nous un message</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Nom complet</Label>
                  <Input id="name" {...register("name")} placeholder="Votre nom" />
                  {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Entreprise</Label>
                  <Input id="company" {...register("company")} placeholder="Votre société" />
                  {errors.company && <span className="text-red-500 text-sm">{errors.company.message}</span>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" {...register("email")} placeholder="votre@email.com" />
                  {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Téléphone</Label>
                  <Input id="phone" {...register("phone")} placeholder="+212..." />
                  {errors.phone && <span className="text-red-500 text-sm">{errors.phone.message}</span>}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="sector">Secteur d'activité</Label>
                <select
                  id="sector"
                  {...register("sector")}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <option value="">Sélectionnez un secteur</option>
                  <option value="industrie">Industrie</option>
                  <option value="btp">BTP & Infrastructures</option>
                  <option value="energie">Énergie</option>
                  <option value="logistique">Logistique & Transport</option>
                  <option value="erp">ERP / Collectivités</option>
                  <option value="autre">Autre</option>
                </select>
                {errors.sector && <span className="text-red-500 text-sm">{errors.sector.message}</span>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" {...register("message")} placeholder="Détaillez votre demande..." className="min-h-[150px]" />
                {errors.message && <span className="text-red-500 text-sm">{errors.message.message}</span>}
              </div>

              <Button type="submit" className="w-full text-lg py-6" disabled={isSubmitting}>
                {isSubmitting ? "Envoi en cours..." : (
                  <span className="flex items-center gap-2">
                    Envoyer le message <Send size={18} />
                  </span>
                )}
              </Button>

            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
