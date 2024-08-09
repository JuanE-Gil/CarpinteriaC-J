import data from "../../data/productsData.json";

interface Product {
  id: number;
  img: string;
  nombre_del_producto: string;
  categoria: string;
  precio: number;
  codigo: string;
  materiales: string[];
  stock: number;
}

const InventoryTable: React.FC = () => {
  return (
    <div className="relative overflow-x-auto px-6 py-4 rounded-lg bg-white shadow">
      <table className="w-full text-sm text-center text-gray-500 bg-slate-100">
        <thead className="text-xs text-gray-300 uppercase bg-slate-700">
          <tr>
            <th scope="col" className="px-6 py-3">
              ID
            </th>
            <th scope="col" className="px-6 py-3">
              Nombre del Producto
            </th>
            <th scope="col" className="px-6 py-3">
              Categoría
            </th>
            <th scope="col" className="px-6 py-3">
              Precio
            </th>
            <th scope="col" className="px-6 py-3">
              Código
            </th>
            <th scope="col" className="px-6 py-3">
              Materiales
            </th>
            <th scope="col" className="px-6 py-3">
              Stock
            </th>
            <th scope="col" className="px-6 py-3">
              Acciones
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((product: Product, index: number) => (
            <tr
              key={product.id}
              className={`border-b dark:border-gray-700 ${
                index % 2 === 0 ? 'bg-white' : 'bg-slate-100'
              }`}
            >
              <td className="px-6 py-4 font-medium text-gray-700">{product.id}</td>
              <td className="px-6 py-4 font-medium text-gray-700">{product.nombre_del_producto}</td>
              <td className="px-6 py-4 font-medium text-gray-700">{product.categoria}</td>
              <td className="px-6 py-4 font-medium text-gray-700">S/ {product.precio.toFixed(2)}</td>
              <td className="px-6 py-4 font-medium text-gray-700">{product.codigo}</td>
              <td className="px-6 py-4 font-medium text-gray-700">{product.materiales.join(', ')}</td>
              <td className="px-6 py-4 font-medium text-gray-700"># {product.stock}</td>
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

export default InventoryTable;
