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
      <div className="grid_top_row !rounded-tl-xl bg-table-grey-dark">
        Časovni blok
      </div>
      <div className="grid_top_row bg-table-grey-dark">
        Omrežnina za priključno moč (evro/kW)
      </div>
      <div className="grid_top_row !rounded-tr-xl bg-table-grey-dark">
        Omrežnina za porabljeno energijo (evro/kWh)
      </div>
      <div className="grid_inner_item_price bg-table-red">1</div>
      <div className="grid_inner_item_price bg-table-red">
        {priceBlok1.prikljucnaMoc}
      </div>
      <div className="grid_inner_item_price bg-table-red">
        {priceBlok1.porabljenaEnergija}
      </div>
      <div className="grid_inner_item_price bg-table-yellow">2</div>
      <div className="grid_inner_item_price bg-table-yellow">
        {priceBlok2.prikljucnaMoc}
      </div>
      <div className="grid_inner_item_price bg-table-yellow">
        {priceBlok2.porabljenaEnergija}
      </div>
      <div className="grid_inner_item_price bg-table-cream">3</div>
      <div className="grid_inner_item_price bg-table-cream">
        {priceBlok3.prikljucnaMoc}
      </div>
      <div className="grid_inner_item_price bg-table-cream">
        {priceBlok3.porabljenaEnergija}
      </div>
      <div className="grid_inner_item_price bg-table-greeny">4</div>
      <div className="grid_inner_item_price bg-table-greeny">
        {priceBlok4.prikljucnaMoc}
      </div>
      <div className="grid_inner_item_price bg-table-greeny">
        {priceBlok4.porabljenaEnergija}
      </div>
      <div className="grid_inner_item_price !rounded-bl-xl bg-table-green">
        5
      </div>
      <div className="grid_inner_item_price bg-table-green">
        {priceBlok5.prikljucnaMoc}
      </div>
      <div className="grid_inner_item_price !rounded-br-xl bg-table-green">
        {priceBlok5.porabljenaEnergija}
      </div>
    </div>
  );
};

export default TablePrice;
