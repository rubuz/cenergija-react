import TableBlok from "./tables/TableBlok";
import TablePrice from "./tables/TablePrice";

const Tables = () => {
  return (
    <div>
      <h2 className="text-3xl font-semibold">
        Prikazna tabela za določitev blokov
      </h2>
      <div className="flex flex-col gap-10">
        <div className="w-full">
          <TableBlok />
        </div>
        <div className="w-1/2">
          <TablePrice />
        </div>
      </div>
    </div>
  );
};

export default Tables;
