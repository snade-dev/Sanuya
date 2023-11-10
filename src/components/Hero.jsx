

export default function Hero() {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          `url(https://images.unsplash.com/photo-1599940824399-b87987ceb72a?q=80&w=1827&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold"> Eco service Sanuya!
          </h1>
          <p className="mb-5">
            Nous sommes une entreprise engagée dans la protection de
            l'environnement et la promotion du développement durable.
          </p>
          <button className="btn btn-primary">En savoir plus</button>
        </div>
      </div>
    </div>
  );
}
