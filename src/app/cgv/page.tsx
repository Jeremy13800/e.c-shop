import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Conditions Générales de Vente",
  description: "Conditions générales de vente de la boutique Les Secrets d'Elloriane.",
  robots: { index: false, follow: false },
};

export default function CGV() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2]">
      <Header />
      <main className="flex-1 max-w-3xl mx-auto px-6 py-20 w-full">

        <div className="mb-14">
          <span className="font-lato text-[10px] tracking-[0.35em] uppercase text-[#C9A96E] mb-4 block">
            Informations légales
          </span>
          <h1 className="font-cormorant text-5xl font-light text-[#2A2A2A] mb-4">
            Conditions Générales de Vente
          </h1>
          <div className="divider-gold-left" />
        </div>

        <div className="space-y-10 font-lato text-[#7A7A7A] font-light leading-relaxed text-[14px]">

          <section>
            <h2 className="font-cormorant text-2xl font-light text-[#2A2A2A] mb-4">Article 1 — Objet</h2>
            <p>
              Les présentes Conditions Générales de Vente régissent les ventes conclues entre
              Elloriane Camazzati (ci-après « le Vendeur ») et tout acheteur (ci-après « le Client »)
              via le site lessecretsdellorian.com.
            </p>
          </section>

          <section>
            <h2 className="font-cormorant text-2xl font-light text-[#2A2A2A] mb-4">Article 2 — Prix</h2>
            <p>
              Les prix sont indiqués en euros toutes taxes comprises (TTC). Le Vendeur se réserve le droit
              de modifier ses prix à tout moment. Les produits sont facturés au tarif en vigueur au moment
              de la validation de la commande.
            </p>
            <p className="mt-3">
              La livraison est <strong className="text-[#2A2A2A] font-normal">offerte</strong> à partir de 150€ d&apos;achat. En dessous de ce montant, des frais de port peuvent s&apos;appliquer selon la destination.
            </p>
          </section>

          <section>
            <h2 className="font-cormorant text-2xl font-light text-[#2A2A2A] mb-4">Article 3 — Commande</h2>
            <p>
              La commande est validée après confirmation du paiement par Stripe. Un email de confirmation
              vous sera adressé à l&apos;adresse fournie lors de l&apos;achat. Le Vendeur se réserve le droit d&apos;annuler
              toute commande en cas de rupture de stock ou d&apos;erreur manifeste de prix.
            </p>
          </section>

          <section>
            <h2 className="font-cormorant text-2xl font-light text-[#2A2A2A] mb-4">Article 4 — Paiement</h2>
            <p>
              Le paiement est effectué en ligne de manière sécurisée via <strong className="text-[#2A2A2A] font-normal">Stripe</strong> (carte bancaire).
              Les données bancaires ne transitent pas par nos serveurs.
            </p>
          </section>

          <section>
            <h2 className="font-cormorant text-2xl font-light text-[#2A2A2A] mb-4">Article 5 — Livraison</h2>
            <p>
              Les commandes sont expédiées sous 3 à 5 jours ouvrés. Vous recevrez un email de suivi
              dès l&apos;expédition. En cas de retard ou de perte, contactez-nous à contact@elloriane.com.
            </p>
          </section>

          <section>
            <h2 className="font-cormorant text-2xl font-light text-[#2A2A2A] mb-4">Article 6 — Droit de rétractation</h2>
            <p>
              Conformément à l&apos;article L221-18 du Code de la consommation, vous disposez d&apos;un délai de
              <strong className="text-[#2A2A2A] font-normal"> 14 jours</strong> à compter de la réception de votre commande
              pour exercer votre droit de rétractation, sans avoir à justifier de motifs.
            </p>
            <p className="mt-3">
              Pour exercer ce droit, contactez-nous par email à contact@elloriane.com en précisant votre
              numéro de commande. Les frais de retour sont à la charge du Client. Le remboursement sera
              effectué sous 14 jours après réception du retour.
            </p>
          </section>

          <section>
            <h2 className="font-cormorant text-2xl font-light text-[#2A2A2A] mb-4">Article 7 — Droit applicable</h2>
            <p>
              Les présentes CGV sont soumises au droit français. En cas de litige, les tribunaux français
              seront seuls compétents.
            </p>
          </section>

        </div>
      </main>
      <Footer />
    </div>
  );
}
