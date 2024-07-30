import { FooterJoinUs } from "../../ui/FooterJoinUs";

export const Store = () => {

    const products = [
      {
        id: 1,
        name: "Pedrigri adulto raza pequeña",
        href: "#",
        imageSrc:
          "assets/images/alimento-1.jpeg",
        imageAlt: "Front of men's Basic Tee in black.",
        price: "$3.500",
        color: "Comida y premios consumibles",
      },
      {
        id: 2,
        name: "Cama mediana",
        href: "#",
        imageSrc:
          "assets/images/cama.jpg",
        imageAlt: "Front of men's Basic Tee in black.",
        price: "$74.600",
        color: "Bienestar y cuidado",
      },
      {
        id: 3,
        name: "Collar para gato",
        href: "#",
        imageSrc:
          "assets/images/collar-gato.jpg",
        imageAlt: "Front of men's Basic Tee in black.",
        price: "$12.000",
        color: "Juguetes y accesorios",
      },
      {
        id: 4,
        name: "Juguete anti estres",
        href: "#",
        imageSrc:
          "assets/images/juguete-morder.jpg",
        imageAlt: "Front of men's Basic Tee in black.",
        price: "$37.500",
        color: "Juguetes y accesorios",
      },
      {
        id: 5,
        name: "Juguete numbell",
        href: "#",
        imageSrc:
          "assets/images/juguete-nunbell.jpg",
        imageAlt: "Front of men's Basic Tee in black.",
        price: "$40.000",
        color: "Juguetes y accesorios",
      },
      {
        id: 6,
        name: "Galletas premio",
        href: "#",
        imageSrc:
          "assets/images/premio-1.jpg",
        imageAlt: "Front of men's Basic Tee in black.",
        price: "$35.000",
        color: "Comida y premios consumibles",
      },
      {
        id: 6,
        name: "Rascador para gato",
        href: "#",
        imageSrc:
          "assets/images/rascador.jpeg",
        imageAlt: "Front of men's Basic Tee in black.",
        price: "$154.000",
        color: "Bienestar y cuidado",
      }
    ];

  return (
    <div className="bg-gray-200">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Sorprende a tu peludo!!!
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/**  Unete a nosotros */}
      <FooterJoinUs />
    </div>
  );
}
