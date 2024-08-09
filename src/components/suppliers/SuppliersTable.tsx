import data from "../../data/suppliersData.json";

interface Supplier {
  id: number;
  nombre: string;
  direccion: string;
  razon_social: string;
  num_telefono: string;
  email: string;
  ruc: string;
}

const SuppliersTable: React.FC = () => {
  return (
    <div className="relative overflow-x-auto px-6 py-4 rounded-lg bg-white shadow">
      <table className="w-full text-sm text-center text-gray-500 bg-slate-100 ">
        <thead className="text-xs text-gray-300 uppercase bg-slate-700 ">
          <tr>
            <th scope="col" className="px-6 py-3">
              ID
            </th>
            <th scope="col" className="px-6 py-3">
              Nombre
            </th>
            <th scope="col" className="px-6 py-3">
              RUC
            </th>
            <th scope="col" className="px-6 py-3">
              Razón Social
            </th>
            <th scope="col" className="px-6 py-3">
              Dirección
            </th>
            <th scope="col" className="px-6 py-3">
              Teléfono
            </th>
            <th scope="col" className="px-6 py-3">
              Email
            </th>

            <th scope="col" className="px-6 py-3">
              Acciones
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((supplier: Supplier, index: number) => (
            <tr
              key={supplier.id}
              className={`border-b dark:border-gray-700 ${
                index % 2 === 0 ? 'bg-white' : 'bg-slate-100'
              }`}
            >
              <td className="px-6 py-4 font-medium text-gray-700">{supplier.id}</td>
              <td className="px-6 py-4 font-medium text-gray-700 ">{supplier.nombre}</td>
              <td className="px-6 py-4 font-medium text-gray-700">{supplier.ruc}</td>
              <td className="px-6 py-4 font-medium text-gray-700">{supplier.razon_social}</td>
              <td className="px-6 py-4 font-medium text-gray-700">{supplier.direccion}</td>
              <td className="px-6 py-4 font-medium text-gray-700">{supplier.num_telefono}</td>
              <td className="px-6 py-4 font-medium text-gray-700">{supplier.email}</td>
              <td className="px-6 py-4">
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg text-center shadow px-5 py-2 text-sm mr-4">Editar</button>
                <button className="bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg text-center shadow px-5 py-2 text-sm">Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SuppliersTable;
