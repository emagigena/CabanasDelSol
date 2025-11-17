import { Users, Tag, Info } from "lucide-react"

export default function PriceTable() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">TARIFAS</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Niños menores a 3 años no abonan estadía. Consultar por cambios o respectivas modificaciones.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 max-w-4xl mx-auto">
          <div className="bg-[#F1B140] text-white px-6 py-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold">Tarifas por día</h3>
              <div className="flex items-center bg-white text-[#F1B140] px-3 py-1 rounded-full text-sm font-bold">
                <Tag size={14} className="mr-1" />
                ¡Descuentos por temporada!
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Capacidad</th>
                  <th className="px-6 py-3 text-right text-sm font-semibold text-gray-700">Desde</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <Users size={18} className="text-[#F1B140] mr-2" />
                      <span>Para 2 personas</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right font-medium">$80.000 por día</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <Users size={18} className="text-[#F1B140] mr-2" />
                      <span>Para 3 personas</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right font-medium">$90.000 por día</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <Users size={18} className="text-[#F1B140] mr-2" />
                      <span>Para 4-5 personas</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right font-medium">$100.000 por día</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <Users size={18} className="text-[#F1B140] mr-2" />
                      <span>Para 6 personas</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right font-medium">$120.000 por día</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <Users size={18} className="text-[#F1B140] mr-2" />
                      <span>Para 7-8 personas</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right font-medium">$160.000 por día</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <Users size={18} className="text-[#F1B140] mr-2" />
                      <span>Para 9-10 personas</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right font-medium">$200.000 por día</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <Users size={18} className="text-[#F1B140] mr-2" />
                      <span>Para 14 personas</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right font-medium">$300.000 por día</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-gray-50 px-6 py-4 flex items-start">
            <Info size={18} className="text-[#F1B140] mr-2 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-gray-600">
              Los precios pueden variar según temporada. Consulta disponibilidad y precios actualizados contactándonos
              por WhatsApp.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

