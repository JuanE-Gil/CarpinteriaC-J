import data from "../../data/customersData.json";
interface Client {
  id: number;
  nombre: string;
}

const ClientList: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-8 mt-4">Lista de Clientes</h2>
      <ul className="list-disc pl-5 max-w-md mx-auto">
        {data.map((client: Client) => (
          <li key={client.id} className="text-lg font-semibold mb-4">
            <span>{client.id}</span> -{" "}
            <span>{client.nombre}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClientList;
