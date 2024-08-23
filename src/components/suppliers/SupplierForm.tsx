import React from 'react';

const SupplierForm = () => {
  return (
    <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md w-full max-w-2xl mx-auto">
      <form>
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
            <label htmlFor="ruc" className="block mb-2 text-sm font-semibold text-gray-800 dark:text-white">RUC</label>
            <input
              type="text"
              id="ruc"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-3 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white"
              required
            />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 mb-4">
          <div className="w-full">
            <label htmlFor="businessName" className="block mb-2 text-sm font-semibold text-gray-800 dark:text-white">Razón Social</label>
            <input
              type="text"
              id="businessName"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-3 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white"
              required
            />
          </div>

          <div className="w-full">
            <label htmlFor="address" className="block mb-2 text-sm font-semibold text-gray-800 dark:text-white">Dirección</label>
            <input
              type="text"
              id="address"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-3 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white"
              required
            />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 mb-4">
          <div className="w-full">
            <label htmlFor="phone" className="block mb-2 text-sm font-semibold text-gray-800 dark:text-white">Teléfono</label>
            <input
              type="tel"
              id="phone"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-3 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white"
              required
            />
          </div>

          <div className="w-full">
            <label htmlFor="email" className="block mb-2 text-sm font-semibold text-gray-800 dark:text-white">Email</label>
            <input
              type="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-3 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="inline-flex items-center px-5 py-3 text-sm font-semibold text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
        >
          Guardar Proveedor
        </button>
      </form>
    </div>
  );
};

export default SupplierForm;
