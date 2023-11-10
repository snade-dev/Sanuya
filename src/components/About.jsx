export default function About() {
  return (
    <section id="propos">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Eco service Sanuya! Acteur majeur de l'innovation
          </h2>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
            <img
              alt="Party"
              src="https://images.unsplash.com/photo-1616680213669-92c78de95f38?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>

          <div className="lg:py-16">
            <article className="space-y-4 text-gray-600">
              <p>
                L'Eco Service Sanuya est un projet axé sur la durabilité
                environnementale et la promotion d'un mode de vie respectueux de
                l'environnement. Notre objectif principal est de sensibiliser
                les gens à l'importance de la protection de la planète et de
                fournir des solutions durables pour réduire notre empreinte
                écologique. Nous proposons une gamme de services et de produits
                écologiques, tels que des produits
              </p>

              <p>
                Nous proposons une gamme de services et de produits écologiques,
                tels que des produits de nettoyage naturels, articles
                réutilisables et de. conseils pratiques pour adopter un mode de
                vie plus durable. Notre objectif est de rendre les choix
                écologiques accessibles à tous et de faciliter la transition
                vers un mode de vie plus respectueux de l'environnement.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
