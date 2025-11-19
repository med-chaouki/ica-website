import { Link } from "wouter";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="font-bold text-lg mb-4">Inspection Control Audit</h3>
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
                <Link href="/verifications" className="hover:underline">
                  Vérifications
                </Link>
              </li>
              <li>
                <Link href="/missions" className="hover:underline">
                  Missions
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Nous Contacter</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <a href="mailto:inspection.control.audit@gmail.com" className="hover:underline">
                  inspection.control.audit@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <a href="mailto:contact@inspection-control.ma" className="hover:underline">
                  contact@inspection-control.ma
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-1" />
                <span>Maroc</span>
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
