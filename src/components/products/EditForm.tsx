import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import data from '../../data/productsData.json';

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

const EditProductForm: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedMaterials, setSelectedMaterials] = useState<string[]>([]);
  const [formData, setFormData] = useState<Partial<Product>>({});

  useEffect(() => {
    // Simula la carga de datos del producto desde un endpoint
    const foundProduct = data.find((product) => product.id === parseInt(id ?? '', 10));
    if (foundProduct) {
      setProduct(foundProduct);
      setSelectedMaterials(foundProduct.materiales);
      setFormData(foundProduct);
    }
  }, [id]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleMaterialChange = (material: string) => {
    setSelectedMaterials((prev) =>
      prev.includes(material)
        ? prev.filter((item) => item !== material)
        : [...prev, material]
    );
  };



  return (
    <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-2xl mx-auto">
      <h1 className="text-xl font-semibold text-gray-700 mb-4">Editar Producto</h1>
      {product ? (
        <form >
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 mb-4">
            <div className="w-full">
              <label htmlFor="codigo" className="block mb-2 text-sm font-semibold text-gray-800">Código</label>
              <input
                type="text"
                id="codigo"
                name="codigo"
                value={formData.codigo || ''}
                onChange={handleInputChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-3"
                required
              />
            </div>

            <div className="w-full">
              <label htmlFor="img" className="block mb-2 text-sm font-semibold text-gray-800">Imagen</label>
              <input
                type="file"
                id="img"
                name="img"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-3"
                // Asegúrate de manejar el archivo en tu backend si es necesario
              />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 mb-4">
            <div className="w-full">
              <label htmlFor="nombre_del_producto" className="block mb-2 text-sm font-semibold text-gray-800">Nombre</label>
              <input
                type="text"
                id="nombre_del_producto"
                name="nombre_del_producto"
                value={formData.nombre_del_producto || ''}
                onChange={handleInputChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-3"
                required
              />
            </div>

            <div className="w-full">
              <label htmlFor="precio" className="block mb-2 text-sm font-semibold text-gray-800">Precio</label>
              <input
                type="number"
                id="precio"
                name="precio"
                value={formData.precio || ''}
                onChange={handleInputChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-3"
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="categoria" className="block mb-2 text-sm font-semibold text-gray-800">Categoría</label>
            <select
              id="categoria"
              name="categoria"
              value={formData.categoria || ''}
              onChange={handleInputChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-3"
              required
            >
              <option value="furniture">Muebles</option>
              <option value="decor">Decoración</option>
              <option value="electronics">Accesorios</option>
              <option value="kitchen">Cocina</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block mb-2 text-sm font-semibold text-gray-800">Materiales</label>
            <div className="grid gap-2 sm:grid-cols-2">
              {['wood', 'metal', 'plastic', 'glass'].map((material) => (
                <div key={material}>
                  <input
                    type="checkbox"
                    id={material}
                    name="materiales"
                    value={material}
                    checked={selectedMaterials.includes(material)}
                    onChange={() => handleMaterialChange(material)}
                    className="mr-2"
                  />
                  <label htmlFor={material} className="text-gray-800">{material.charAt(0).toUpperCase() + material.slice(1)}</label>
                </div>
              ))}
            </div>
          </div>

          <button
            type="submit"
            className="inline-flex items-center px-5 py-3 text-sm font-semibold text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 hover:bg-blue-800"
          >
            Guardar Producto
          </button>
        </form>
      ) : (
        <p className="text-gray-700">Producto no encontrado.</p>
      )}
    </div>
  );
};

export default EditProductForm;
