import { coffees } from "../../MenuData";

const Delivered = () => {
  return (
    <section className="bg-[#765a4f] px-4 py-16 text-white">
      <div className="text-center">
        <h2 className="font-serif text-4xl font-bold">Take It Home</h2>
        <p className="mt-2 text-[#eaddd7]">
          Fresh-roasted beans delivered to your door
        </p>
      </div>
      <div className="mx-auto mt-12 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {coffees.map((item) => (
          <div
            key={item.id}
            className="group relative overflow-hidden rounded-2xl bg-[#876459]"
          >
            {item.badge && (
              <span className="absolute left-3 top-3 z-10 rounded-full bg-yellow-500 px-3 py-1 text-xs font-medium">
                {item.badge}
              </span>
            )}

            <div className="aspect-square overflow-hidden">
              <img
                src={item.img}
                alt={item.name}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="p-5">
              <h3 className="font-serif text-xl font-semibold">{item.name}</h3>
              <p className="mt-2 text-sm">{item.desc}</p>

              <div className="mt-4 flex items-center justify-between">
                <p>
                  <span className="font-bold">${item.price}.00</span>
                  <span className="text-sm"> / 12oz bag</span>
                </p>
                <button className="rounded-full bg-white px-4 py-2 text-sm text-black hover:bg-gray-200">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-10 text-center">
        <a
          href="#"
          className="inline-block rounded-full border-2 border-white px-6 py-3 font-medium hover:bg-white hover:text-black"
        >
          Shop All Coffee →
        </a>
      </div>
    </section>
  );
};

export default Delivered;
