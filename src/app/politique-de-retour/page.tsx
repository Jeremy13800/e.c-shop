import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Politique de Retour",
  description: "Politique de retour et remboursement — Les Secrets d'Elloriane. 14 jours pour changer d'avis.",
};

export default function PolitiqueDeRetour() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2]">
      <Header />
      <main className="flex-1 max-w-3xl mx-auto px-6 py-20 w-full">

        <div className="mb-14">
          <span className="font-lato text-[10px] tracking-[0.35em] uppercase text-[#C9A96E] mb-4 block">
            Service client
          </span>
          <h1 className="font-cormorant text-5xl font-light text-[#2A2A2A] mb-4">
            Politique de Retour
          </h1>
          <div className="divider-gold-left" />
        </div>

        <div className="space-y-10 font-lato text-[#7A7A7A] font-light leading-relaxed text-[14px]">

          <section className="bg-[#F0EAE0] border border-[rgba(201,169,110,0.2)] p-8">
            <p className="font-cormorant text-xl font-light text-[#2A2A2A] italic">
              Votre satisfaction est notre priorité. Si vous n&apos;êtes pas entièrement satisfaite,
              nous nous engageons à trouver une solution.
            </p>
          </section>

          <section>
            <h2 className="font-cormorant text-2xl font-light text-[#2A2A2A] mb-4">Délai de retour</h2>
            <p>
              Vous disposez de <strong className="text-[#2A2A2A] font-normal">14 jours</strong> à compter
              de la réception de votre commande pour retourner un article, conformément à la législation
              française sur le droit de rétractation.
            </p>
          </section>

          <section>
            <h2 className="font-cormorant text-2xl font-light text-[#2A2A2A] mb-4">Conditions</h2>
            <ul className="space-y-2 list-none">
              {[
                "L'article doit être dans son état d'origine, non porté et non lavé",
                "L'emballage d'origine doit être conservé",
                "Les articles personnalisés ou d'hygiène (lingerie) ne sont pas repris",
                "Les étiquettes doivent être intactes",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-[#C9A96E] mt-0.5">✦</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="font-cormorant text-2xl font-light text-[#2A2A2A] mb-4">Procédure</h2>
            <ol className="space-y-4 list-none counter-reset-item">
              {[
                { n: "01", text: "Envoyez-nous un email à contact@elloriane.com avec votre numéro de commande et le motif du retour." },
                { n: "02", text: "Nous vous confirmons la procédure sous 48h ouvrées." },
                { n: "03", text: "Renvoyez l'article à l'adresse indiquée, à vos frais, avec suivi." },
                { n: "04", text: "Le remboursement est effectué sous 14 jours après réception et vérification du retour." },
              ].map((step) => (
                <li key={step.n} className="flex items-start gap-4">
                  <span
                    className="font-cormorant text-2xl font-light flex-shrink-0"
                    style={{
                      background: "linear-gradient(135deg, #9A7A45, #C9A96E)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {step.n}
                  </span>
                  <span className="pt-1">{step.text}</span>
                </li>
              ))}
            </ol>
          </section>

          <section>
            <h2 className="font-cormorant text-2xl font-light text-[#2A2A2A] mb-4">Remboursement</h2>
            <p>
              Le remboursement est effectué sur le moyen de paiement utilisé lors de la commande
              (carte bancaire via Stripe), dans un délai maximum de 14 jours après réception du retour.
            </p>
          </section>

          <section className="border-t border-[rgba(201,169,110,0.2)] pt-8">
            <p>
              Pour toute question, contactez notre service client :{" "}
              <a href="mailto:contact@elloriane.com" className="text-[#C9A96E] hover:underline">
                contact@elloriane.com
              </a>
            </p>
            <p className="mt-3">
              Voir aussi nos{" "}
              <Link href="/cgv" className="text-[#C9A96E] hover:underline">
                Conditions Générales de Vente
              </Link>.
            </p>
          </section>

        </div>
      </main>
      <Footer />
    </div>
  );
}
