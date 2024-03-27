import TableBlok from "./tables/TableBlok";

const Tables = () => {
  return (
    <div>
      <h2 className="text-3xl font-semibold">
        Prikazna tabela za določitev blokov
      </h2>
      <div>
        <TableBlok />
        <div>Tabela cene</div>
      </div>
    </div>
  );
};

export default Tables;
