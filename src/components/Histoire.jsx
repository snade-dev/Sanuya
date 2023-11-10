import profile from "../assets/profile.jpg";

export default function Histoire() {
  return (
    <section className="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2" id="histoire">
      <div className="p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit
          </h2>

          <p className="hidden text-gray-500 md:mt-4 md:block">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas
            tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim
            et fermentum, augue. Aliquet amet volutpat quisque ut interdum
            tincidunt duis.
          </p>

        </div>
      </div>

      <img
        alt="Student"
        src={profile}
        className="h-auto w-full object-cover sm:h-full"
      />
    </section>
  );
}
