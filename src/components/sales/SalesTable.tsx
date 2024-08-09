import salesData from "../../data/salesData.json";
import productsData from "../../data/productsData.json";

interface Sale {
  id: number;
  nro_venta: string;
  nombre_del_producto: string;
  precio: number;
  cantidad: number;
  fecha: string;
  cliente: string;
  codigo_de_venta: string;
  estado_venta: string;
}

const SalesTable: React.FC = () => {
  // Helper function to format date
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString("es-ES", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
  };

  return (
    <div className="relative overflow-x-auto px-6 py-4 rounded-lg bg-white shadow">
      <table className="w-full text-sm text-center text-gray-500 bg-slate-100">
        <thead className="text-xs text-gray-300 uppercase bg-slate-700">
          <tr>
            <th scope="col" className="px-6 py-3">
              ID
            </th>
            <th scope="col" className="px-6 py-3">
              Código de Venta
            </th>
            {/* <th scope="col" className="px-6 py-3">
              Número de Venta
            </th> */}
            <th scope="col" className="px-6 py-3">
              Nombre del Producto
            </th>
            <th scope="col" className="px-6 py-3">
              Cantidad
            </th>
            <th scope="col" className="px-6 py-3">
              Costo de la Venta
            </th>
            <th scope="col" className="px-6 py-3">
              Cliente
            </th>
            <th scope="col" className="px-6 py-3">
              Fecha
            </th>
            <th scope="col" className="px-6 py-3">
              Estado de Venta
            </th>
            <th scope="col" className="px-6 py-3">
              Acciones
            </th>
          </tr>
        </thead>
        <tbody>
          {salesData.map((sale: Sale, index: number) => (
            <tr
              key={sale.id}
              className={`border-b dark:border-gray-700 ${
                index % 2 === 0 ? "bg-white" : "bg-slate-100"
              }`}
            >
              <td className="px-6 py-4 font-medium text-gray-700">{sale.id}</td>
              <td className="px-6 py-4 font-medium text-gray-700">
                {sale.codigo_de_venta}
              </td>
              {/* <td className="px-6 py-4 font-medium text-gray-700">
                {sale.nro_venta}
              </td> */}
              <td className="px-6 py-4 font-medium text-gray-700">
                {sale.nombre_del_producto}
              </td>
              <td className="px-6 py-4 font-medium text-gray-700">
                # {sale.cantidad}
              </td>
              <td className="px-6 py-4 font-medium text-gray-700">
                S/{sale.precio.toFixed(2)}
              </td>
              <td className="px-6 py-4 font-medium text-gray-700">
                {sale.cliente}
              </td>
              <td className="px-6 py-4 font-medium text-gray-700">
                {formatDate(sale.fecha)}
              </td>
              <td
                className={`px-6 py-4 font-bold text-gray-700 ${
                  sale.estado_venta === "Completada"
                    ? "bg-green-100 text-green-700"
                    : "bg-yellow-100 text-yellow-700"
                }`}
              >
                {sale.estado_venta}
              </td>
              <td className="px-6 py-4">
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg text-center shadow px-5 py-2 text-sm mr-4">
                  Detalle
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SalesTable;
