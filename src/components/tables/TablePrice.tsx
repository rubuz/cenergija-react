import {
  priceBlok1,
  priceBlok2,
  priceBlok3,
  priceBlok4,
  priceBlok5,
} from "../../data/data";

const TablePrice = () => {
  return (
    <div className="mx-auto grid w-full grid-cols-3 grid-rows-6 gap-[2px] [&>*]:rounded-sm">
      <div className="grid_top_row bg-table-grey-dark !rounded-tl-2xl">
        Časovni blok
      </div>
      <div className="grid_top_row bg-table-grey-dark">
        Omrežnina za priključno moč (evro/kW)
      </div>
      <div className="grid_top_row bg-table-grey-dark !rounded-tr-2xl">
        Omrežnina za porabljeno energijo (evro/kWh)
      </div>
      <div className="grid_inner_item bg-table-red">1</div>
      <div className="grid_inner_item bg-table-red">
        {priceBlok1.prikljucnaMoc}
      </div>
      <div className="grid_inner_item bg-table-red">
        {priceBlok1.porabljenaEnergija}
      </div>
      <div className="grid_inner_item bg-table-yellow">2</div>
      <div className="grid_inner_item bg-table-yellow">
        {priceBlok2.prikljucnaMoc}
      </div>
      <div className="grid_inner_item bg-table-yellow">
        {priceBlok2.porabljenaEnergija}
      </div>
      <div className="grid_inner_item bg-table-cream">3</div>
      <div className="grid_inner_item bg-table-cream">
        {priceBlok3.prikljucnaMoc}
      </div>
      <div className="grid_inner_item bg-table-cream">
        {priceBlok3.porabljenaEnergija}
      </div>
      <div className="grid_inner_item bg-table-greeny">4</div>
      <div className="grid_inner_item bg-table-greeny">
        {priceBlok4.prikljucnaMoc}
      </div>
      <div className="grid_inner_item bg-table-greeny">
        {priceBlok4.porabljenaEnergija}
      </div>
      <div className="grid_inner_item bg-table-green !rounded-bl-2xl">5</div>
      <div className="grid_inner_item bg-table-green">
        {priceBlok5.prikljucnaMoc}
      </div>
      <div className="grid_inner_item bg-table-green !rounded-br-2xl">
        {priceBlok5.porabljenaEnergija}
      </div>
    </div>
  );
};

export default TablePrice;
