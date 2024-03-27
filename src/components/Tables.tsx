import TableBlok from "./tables/TableBlok";
import TablePrice from "./tables/TablePrice";

const Tables = () => {
  return (
    <div>
      <h2 className="text-3xl font-semibold">
        Prikazna tabela za določitev blokov
      </h2>
      <div>
        <TableBlok />
        <TablePrice />
      </div>
    </div>
  );
};

export default Tables;
