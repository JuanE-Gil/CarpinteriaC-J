import React, { useState } from 'react';

const ProductForm = () => {
  const [selectedMaterials, setSelectedMaterials] = useState<string[]>([]);

  const handleMaterialChange = (material: string) => {
    setSelectedMaterials((prev) =>
      prev.includes(material)
        ? prev.filter((item) => item !== material)
        : [...prev, material]
    );
  };

  return (
    <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md w-full max-w-2xl mx-auto">
      <form>
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 mb-4">
          <div className="w-full">
            <label htmlFor="code" className="block mb-2 text-sm font-semibold text-gray-800 dark:text-white">Código</label>
            <input
              type="text"
              id="code"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-3 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white"
              required
            />
          </div>

          <div className="w-full">
            <label htmlFor="image" className="block mb-2 text-sm font-semibold text-gray-800 dark:text-white">Imagen</label>
            <input
              type="file"
              id="image"
              accept="image/*"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-3 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white"
              required
            />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 mb-4">
          <div className="w-full">
            <label htmlFor="name" className="block mb-2 text-sm font-semibold text-gray-800 dark:text-white">Nombre</label>
            <input
              type="text"
              id="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-3 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white"
              required
            />
          </div>

          <div className="w-full">
            <label htmlFor="price" className="block mb-2 text-sm font-semibold text-gray-800 dark:text-white">Precio</label>
            <input
              type="number"
              id="price"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-3 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white"
              required
            />
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="category" className="block mb-2 text-sm font-semibold text-gray-800 dark:text-white">Categoría</label>
          <select
            id="category"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-3 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white"
            required
          >
            <option value="furniture">Muebles</option>
            <option value="decor">Decoración</option>
            <option value="electronics">Accesorios</option>
            <option value="kitchen">Cocina</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-sm font-semibold text-gray-800 dark:text-white">Materiales</label>
          <div className="grid gap-2 sm:grid-cols-2">
            <div>
              <input
                type="checkbox"
                id="wood"
                value="wood"
                onChange={() => handleMaterialChange('wood')}
                className="mr-2"
              />
              <label htmlFor="wood" className="text-gray-800 dark:text-white">Madera de roble </label>
            </div>

            <div>
              <input
                type="checkbox"
                id="metal"
                value="metal"
                onChange={() => handleMaterialChange('metal')}
                className="mr-2"
              />
              <label htmlFor="metal" className="text-gray-800 dark:text-white">Tela</label>
            </div>

            <div>
              <input
                type="checkbox"
                id="plastic"
                value="plastic"
                onChange={() => handleMaterialChange('plastic')}
                className="mr-2"
              />
              <label htmlFor="plastic" className="text-gray-800 dark:text-white">Madera de cerezo</label>
            </div>

            <div>
              <input
                type="checkbox"
                id="glass"
                value="glass"
                onChange={() => handleMaterialChange('glass')}
                className="mr-2"
              />
              <label htmlFor="glass" className="text-gray-800 dark:text-white">Vidrio templado</label>
            </div>

            <div>
              <input
                type="checkbox"
                id="glass"
                value="glass"
                onChange={() => handleMaterialChange('glass')}
                className="mr-2"
              />
              <label htmlFor="glass" className="text-gray-800 dark:text-white">Cuero sintético</label>
            </div>

            <div>
              <input
                type="checkbox"
                id="glass"
                value="glass"
                onChange={() => handleMaterialChange('glass')}
                className="mr-2"
              />
              <label htmlFor="glass" className="text-gray-800 dark:text-white">Madera de roble</label>
            </div>

            <div>
              <input
                type="checkbox"
                id="glass"
                value="glass"
                onChange={() => handleMaterialChange('glass')}
                className="mr-2"
              />
              <label htmlFor="glass" className="text-gray-800 dark:text-white">Vidrio templado</label>
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="inline-flex items-center px-5 py-3 text-sm font-semibold text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
        >
          Guardar Producto
        </button>
      </form>
    </div>
  );
};

export default ProductForm;
