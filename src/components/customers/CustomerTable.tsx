import data from "../../data/customersData.json";

interface Client {
  id: number;
  nombre: string;
  direccion: string;
  num_telefono: string;
  email: string;
  dni_ruc: string;
}

const CustomerTable: React.FC = () => {
  return (
    <div className="relative overflow-x-auto px-6 py-6 rounded-lg bg-white shadow">
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
              Dirección
            </th>
            <th scope="col" className="px-6 py-3">
              Teléfono
            </th>
            <th scope="col" className="px-6 py-3">
              Email
            </th>
            <th scope="col" className="px-6 py-3">
              DNI/RUC
            </th>
            <th scope="col" className="px-6 py-3">
              Acciones
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((client: Client, index: number) => (
            <tr
              key={client.id}
              className={`border-b dark:border-gray-700 ${
                index % 2 === 0 ? 'bg-white' : 'bg-slate-100'
              }`}
            >
              <td className="px-6 py-4 font-medium text-gray-700">{client.id}</td>
              <td className="px-6 py-4 font-medium text-gray-700 ">{client.nombre}</td>
              <td className="px-6 py-4 font-medium text-gray-700">{client.direccion}</td>
              <td className="px-6 py-4 font-medium text-gray-700">{client.num_telefono}</td>
              <td className="px-6 py-4 font-medium text-gray-700">{client.email}</td>
              <td className="px-6 py-4 font-medium text-gray-700">{client.dni_ruc}</td>
              <td className="px-6 py-4">
                <button className="bg-blue-500 text-white font-semibold rounded-md shadow w-20 h-8 mr-4">Editar</button>
                <button className="bg-red-500 text-white font-semibold rounded-md shadow w-20 h-8">Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerTable;
