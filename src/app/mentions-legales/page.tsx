import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Mentions Légales",
  description: "Mentions légales de la boutique Les Secrets d'Elloriane.",
  robots: { index: false, follow: false },
};

export default function MentionsLegales() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2]">
      <Header />
      <main className="flex-1 max-w-3xl mx-auto px-6 py-20 w-full">

        <div className="mb-14">
          <span className="font-lato text-[10px] tracking-[0.35em] uppercase text-[#C9A96E] mb-4 block">
            Informations légales
          </span>
          <h1 className="font-cormorant text-5xl font-light text-[#2A2A2A] mb-4">
            Mentions Légales
          </h1>
          <div className="divider-gold-left" />
        </div>

        <div className="space-y-10 font-lato text-[#7A7A7A] font-light leading-relaxed text-[14px]">

          <section>
            <h2 className="font-cormorant text-2xl font-light text-[#2A2A2A] mb-4">Éditeur du site</h2>
            <p>Le site <strong className="text-[#2A2A2A] font-normal">lessecretsdellorian.com</strong> est édité par :</p>
            <ul className="mt-3 space-y-1 list-none">
              <li><strong className="text-[#2A2A2A] font-normal">Nom :</strong> Elloriane Camazzati</li>
              <li><strong className="text-[#2A2A2A] font-normal">Adresse :</strong> Marseille, France</li>
              <li><strong className="text-[#2A2A2A] font-normal">Email :</strong> contact@elloriane.com</li>
              <li><strong className="text-[#2A2A2A] font-normal">SIRET :</strong> [À compléter]</li>
            </ul>
          </section>

          <section>
            <h2 className="font-cormorant text-2xl font-light text-[#2A2A2A] mb-4">Hébergement</h2>
            <p>
              Ce site est hébergé par <strong className="text-[#2A2A2A] font-normal">Vercel Inc.</strong>,
              440 N Barranca Ave #4133, Covina, CA 91723, États-Unis.
            </p>
          </section>

          <section>
            <h2 className="font-cormorant text-2xl font-light text-[#2A2A2A] mb-4">Propriété intellectuelle</h2>
            <p>
              L&apos;ensemble des contenus présents sur ce site (textes, images, logos, visuels) est protégé par le droit
              de la propriété intellectuelle. Toute reproduction ou représentation, totale ou partielle, sans autorisation
              expresse est interdite.
            </p>
          </section>

          <section>
            <h2 className="font-cormorant text-2xl font-light text-[#2A2A2A] mb-4">Données personnelles</h2>
            <p>
              Les données collectées lors d&apos;un achat (nom, adresse, email) sont traitées exclusivement dans le cadre
              du traitement de votre commande. Elles ne sont pas revendues à des tiers. Conformément au RGPD, vous disposez
              d&apos;un droit d&apos;accès, de rectification et de suppression de vos données en nous contactant à
              contact@elloriane.com.
            </p>
            <p className="mt-3">
              Les paiements sont traités de manière sécurisée par <strong className="text-[#2A2A2A] font-normal">Stripe</strong>,
              certifié PCI-DSS. Nous ne conservons aucune information bancaire.
            </p>
          </section>

          <section>
            <h2 className="font-cormorant text-2xl font-light text-[#2A2A2A] mb-4">Cookies</h2>
            <p>
              Ce site utilise uniquement des cookies techniques nécessaires à son fonctionnement (panier, session).
              Aucun cookie publicitaire ou traceur tiers n&apos;est utilisé.
            </p>
          </section>

        </div>
      </main>
      <Footer />
    </div>
  );
}
