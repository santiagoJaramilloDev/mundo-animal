import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Brindar Atención Integral',
    description:
      'Ofrecer una gama completa de servicios que cubran todas las necesidades de las mascotas, desde salud y bienestar hasta entretenimiento y socialización.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Fomentar la Comunidad',
    description:
      'Crear una comunidad activa y comprometida de dueños de mascotas que compartan experiencias, consejos y apoyo mutuo.',
    icon: LockClosedIcon,
  },
  {
    name: 'Garantizar la Calidad',
    description:
      'Mantener altos estándares de calidad en todos los servicios proporcionados, asegurando la satisfacción y confianza de nuestros clientes.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Promover la Educación',
    description:
      'Educar a los dueños de mascotas sobre el cuidado adecuado y responsable, proporcionando recursos y talleres informativos.',
    icon: FingerPrintIcon,
  },
]

export const Objetives = () => {
  return (
    <div className="bg-gray-200 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            NUESTROS OBJETIVOS
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-y-10 gap-x-8 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
