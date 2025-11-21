import { Link } from "wouter";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src="/logo-ica.png" alt="ICA Logo" className="h-10 w-auto bg-white rounded-md p-1" />
              <h3 className="font-bold text-lg">Inspection Control Audit</h3>
            </div>
            <p className="text-sm opacity-90">
              Bureau de contrôle spécialisé dans la vérification réglementaire des équipements techniques.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:underline">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:underline">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/approach" className="hover:underline">
                  Notre Approche
                </Link>
              </li>
              <li>
                <Link href="/sectors" className="hover:underline">
                  Secteurs
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/quote" className="hover:underline font-semibold text-primary-foreground">
                  Demander un Devis
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Nous Contacter</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <div className="flex flex-col">
                  <a href="tel:+212520590459" className="hover:underline">+212 520 590 459</a>
                  <a href="tel:+212660102102" className="hover:underline">+212 660 102 102</a>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <div className="flex flex-col">
                  <a href="mailto:inspection.control.audit@gmail.com" className="hover:underline">
                    inspection.control.audit@gmail.com
                  </a>
                  <a href="mailto:contact@inspection-control.ma" className="hover:underline">
                    contact@inspection-control.ma
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-1" />
                <span>Coopérative Echabab/Lotissement Nabila Makhlouf, 2ème étage, Appt 5, Deroua, Berrechid</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground opacity-20 pt-8">
          <p className="text-center text-sm opacity-75">
            © {new Date().getFullYear()} Inspection Control Audit. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
