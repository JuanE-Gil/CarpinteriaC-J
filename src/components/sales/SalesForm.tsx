import React, { useState } from 'react';

const SalesForm = () => {
  const [products, setProducts] = useState([{ id: 1, quantity: 1 }]);
  const [total, setTotal] = useState(0);

  const addProduct = () => {
    setProducts([...products, { id: products.length + 1, quantity: 1 }]);
  };

  const handleQuantityChange = (index: number, value: number) => {
    const updatedProducts = [...products];
    updatedProducts[index].quantity = value;
    setProducts(updatedProducts);
    calculateTotal(updatedProducts);
  };

  const calculateTotal = (products: { id: number; quantity: number }[]) => {
    let total = 0;
    products.forEach((product) => {
      total += product.quantity * 100;
    });
    setTotal(total);
  };

  return (
    <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md w-full max-w-4xl mx-auto">
      <form>
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 mb-4">
          {products.map((product, index) => (
            <React.Fragment key={index}>
              <div className="w-full">
                <label htmlFor={`product-${index}`} className="block mb-2 text-sm font-semibold text-gray-800 dark:text-white">Producto</label>
                <select
                  id={`product-${index}`}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-3 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white"
                >
                  <option value="product1">Silla de Madera</option>
                  <option value="product2">Mesa de Comedor</option>
                  <option value="product3">Estante de Pared</option>
                  <option value="product4">Silla Ergonómica</option>
                  <option value="product5">Mesa de Café</option>
                  <option value="product6">Armario Ropero</option>
                  <option value="product7">Escritorio de Oficina</option>
                </select>
              </div>

              <div className="w-full">
                <label htmlFor={`quantity-${index}`} className="block mb-2 text-sm font-semibold text-gray-800 dark:text-white">Cantidad</label>
                <input
                  type="number"
                  id={`quantity-${index}`}
                  value={product.quantity}
                  onChange={(e) => handleQuantityChange(index, parseInt(e.target.value, 10))}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-3 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white"
                  required
                />
              </div>
            </React.Fragment>
          ))}
        </div>

        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 mb-4">
          <div className="w-full">
            <label htmlFor="client" className="block mb-2 text-sm font-semibold text-gray-800 dark:text-white">Cliente</label>
            <select
              id="client"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-3 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white"
            >
              <option value="Juan Pérez">Juan Pérez</option>
              <option value="María López">María López</option>
              <option value="Carlos García">Carlos García</option>
              <option value="Ana Martínez">Ana Martínez</option>
              <option value="Luis Fernández">Luis Fernández</option>
              <option value="Claudia Ramírez">Claudia Ramírez</option>
              <option value="Ricardo Torres">Ricardo Torres</option>
              <option value="Elena Gutiérrez">Elena Gutiérrez</option>
            </select>
          </div>

          <div className="w-full">
            <label htmlFor="date" className="block mb-2 text-sm font-semibold text-gray-800 dark:text-white">Fecha</label>
            <input
              type="date"
              id="date"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-3 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white"
              required
            />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 mb-4">
          <div className="w-full">
            <label htmlFor="status" className="block mb-2 text-sm font-semibold text-gray-800 dark:text-white">Estado de Venta</label>
            <select
              id="status"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-3 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white"
            >
              <option value="completed">Completada</option>
              <option value="in-process">En proceso</option>
              <option value="cancelled">Cancelada</option>
              <option value="pending">Pendiente</option>
            </select>
          </div>

          <div className="w-full">
            <label htmlFor="total" className="block mb-2 text-sm font-semibold text-gray-800 dark:text-white">Total de la Venta</label>
            <input
              type="text"
              id="total"
              value={`$${total}`}
              disabled
              className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            />
          </div>
        </div>

        <div className="flex justify-between mb-4">
          <button
            type="button"
            onClick={addProduct}
            className="inline-flex items-center px-4 py-2 text-sm font-semibold text-white bg-blue-600 rounded-lg focus:ring-4 focus:ring-blue-300 hover:bg-blue-700"
          >
            Agregar otro producto
          </button>

          <button
            type="submit"
            className="inline-flex items-center px-5 py-3 text-sm font-semibold text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
          >
            Realizar Venta
          </button>
        </div>
      </form>
    </div>
  );
};

export default SalesForm;
