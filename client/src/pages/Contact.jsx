import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Nous Contacter</h1>
            <p className="text-lg md:text-xl opacity-95">
              Nous sommes à votre écoute pour répondre à vos questions et vos demandes.
            </p>
          </div>
        </section>

        {/* Contact Info Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {/* Email 1 */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg text-center">
                <Mail className="text-primary mx-auto mb-4" size={40} />
                <h3 className="text-xl font-bold text-foreground mb-2">Email Audit</h3>
                <a
                  href="mailto:inspection.control.audit@gmail.com"
                  className="text-primary hover:underline font-semibold"
                >
                  inspection.control.audit@gmail.com
                </a>
              </div>

              {/* Email 2 */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg text-center">
                <Mail className="text-primary mx-auto mb-4" size={40} />
                <h3 className="text-xl font-bold text-foreground mb-2">Email Contact</h3>
                <a
                  href="mailto:contact@inspection-control.ma"
                  className="text-primary hover:underline font-semibold"
                >
                  contact@inspection-control.ma
                </a>
              </div>

              {/* Location */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg text-center">
                <MapPin className="text-primary mx-auto mb-4" size={40} />
                <h3 className="text-xl font-bold text-foreground mb-2">Localisation</h3>
                <p className="text-foreground/80 font-semibold">Maroc</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
                Formulaire de Contact
              </h2>

              {submitted && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-800 font-semibold">
                    ✓ Merci ! Votre message a été envoyé avec succès. Nous vous répondrons dans les plus brefs délais.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-sm border border-border">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                      Nom Complet *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Votre nom"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="+212 6XX XXX XXX"
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-foreground mb-2">
                      Sujet *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">Sélectionner un sujet</option>
                      <option value="devis">Demander un Devis</option>
                      <option value="inspection">Demander une Inspection</option>
                      <option value="question">Question Générale</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    placeholder="Décrivez votre demande..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity"
                >
                  Envoyer le Message
                </button>

                <p className="text-sm text-foreground/60 mt-4">
                  * Champs obligatoires
                </p>
              </form>
            </div>
          </div>
        </section>

        {/* Response Time Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">Délai de Réponse</h2>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
              Nous nous engageons à répondre à toutes les demandes dans les 24 à 48 heures ouvrables.
              Pour une demande urgente, n'hésitez pas à nous appeler directement.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
