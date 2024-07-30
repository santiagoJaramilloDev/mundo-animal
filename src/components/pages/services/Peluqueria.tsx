import { CheckIcon } from '@heroicons/react/20/solid'

function classNames(...classes:any) {
  return classes.filter(Boolean).join(" ");
}

export const Peluqueria = () => {

    const tiers = [
        {
          name: "BAÑO BASICO",
          id: "tier-freelancer",
          href: "#",
          priceMonthly: "$30.000",
          description: "Lo escencial que tu peludo necesita.",
          features: [
            "Corte básico de la raza",
            "Corte de uñas",
            "Enjuague bucal",
            "Limpieza de oídos",
            "Drenaje de glándulas perianales (si lo requiere)",
            "Shampoo neutro",
          ],
          mostPopular: false,
        },
        {
          name: "BAÑO PLUS",
          id: "tier-startup",
          href: "#",
          priceMonthly: "$45.000",
          description:
            "Baño basico mas hidratante especial para que el cabello de tu mascota sea la envidia de todos",
          features: [
            "Corte grooming de la raza",
            "Deslanado de mantos",
            "Corte de uñas y limado",
            "Enjuague bucal y cepillado de dientes",
            "Limpieza de oídos",
            "Drenaje de glándulas perianales (si lo requiere)",
            "Jabón hidratante",
            "Shampoo voluminizador de mantos",
          ],
          mostPopular: true,
        },
        {
          name: "BAÑO PREMIUM",
          id: "tier-enterprise",
          href: "#",
          priceMonthly: "$60.000",
          description: "Baño plus mas tratamiento de keratina",
          features: [
            "Corte grooming de la raza",
            "Deslanado de mantos",
            "Corte de uñas y limado",
            "Enjuague bucal y cepillado de dientes",
            "Limpieza de oídos",
            "Drenaje de glándulas perianales (si lo requiere)",
            "Jabón hidratante",
            "Shampoo voluminizador de mantos",
            "Hidratación de pulpejos",
            "Keratina con vitamina E + alisado"
          ],
          mostPopular: false,
        },
      ];

  return (
    <div className="bg-gray-200 pt-16 pb-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold leading-7 text-2xl text-indigo-600">
            Peluqueria canina y felina profesional
          </h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Escoje el mejor plan de&nbsp;baño para&nbsp;tu peludo
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">
        Nuestros grooming cuentan con capacitación permanente en técnicas de cortes comerciales, asiáticos y nuevas tendencias. Ofrecemos servicios especiales de hidratación de pulpejos, deslanados, 
        voluminizador de mantos, keratina con vitamina E y alisado entre otros.
        </p>
        <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {tiers.map((tier, tierIdx) => (
            <div
              key={tier.id}
              className={classNames(
                tier.mostPopular ? "lg:z-10 lg:rounded-b-none" : "lg:mt-8",
                tierIdx === 0 ? "lg:rounded-r-none" : "",
                tierIdx === tiers.length - 1 ? "lg:rounded-l-none" : "",
                "flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-gray-200 xl:p-10"
              )}
            >
              <div>
                <div className="flex items-center justify-between gap-x-4">
                  <h3
                    id={tier.id}
                    className={classNames(
                      tier.mostPopular ? "text-indigo-600" : "text-gray-900",
                      "text-lg font-semibold leading-8"
                    )}
                  >
                    {tier.name}
                  </h3>
                  {tier.mostPopular ? (
                    <p className="rounded-full bg-indigo-600/10 py-1 px-2.5 text-xs font-semibold leading-5 text-indigo-600">
                      Most popular
                    </p>
                  ) : null}
                </div>
                <p className="mt-4 text-sm leading-6 text-gray-600">
                  {tier.description}
                </p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-4xl font-bold tracking-tight text-gray-900">
                    {tier.priceMonthly}
                  </span>
                  <span className="text-sm font-semibold leading-6 text-gray-600"></span>
                </p>
                <ul
                  role="list"
                  className="mt-8 space-y-3 text-sm leading-6 text-gray-600"
                >
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <CheckIcon
                        className="h-6 w-5 flex-none text-indigo-600"
                        aria-hidden="true"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href={tier.href}
                aria-describedby={tier.id}
                className={classNames(
                  tier.mostPopular
                    ? "bg-indigo-600 text-white shadow-sm hover:bg-indigo-500"
                    : "text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300",
                  "mt-8 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                )}
              >
                Agendar cita
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
