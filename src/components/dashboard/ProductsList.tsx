import data from "../../data/productsData.json";

interface Product {
  id: number;
  nombre_del_producto: string;
  codigo: string;
  stock: number;
}
const getRandomProducts = (products: Product[], count: number): Product[] => {
  const shuffled = products.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

const ProductsList: React.FC = () => {
  const randomProducts = getRandomProducts(data, 3);

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
              Código
            </th>
            <th scope="col" className="px-6 py-3">
              Stock
            </th>
          </tr>
        </thead>
        <tbody>
          {randomProducts.map((product: Product, index: number) => (
            <tr
              key={product.id}
              className={`border-b dark:border-gray-700 ${
                index % 2 === 0 ? 'bg-white' : 'bg-slate-100'
              }`}
            >
              <td className="px-6 py-4 font-medium text-gray-700">{product.id}</td>
              <td className="px-6 py-4 font-medium text-gray-700">{product.nombre_del_producto}</td>
              <td className="px-6 py-4 font-medium text-gray-700">{product.codigo}</td>
              <td className="px-6 py-4 font-medium text-gray-700">{product.stock}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsList;
