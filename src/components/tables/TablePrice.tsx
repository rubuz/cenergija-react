import {
  priceBlok1,
  priceBlok2,
  priceBlok3,
  priceBlok4,
  priceBlok5,
} from "../../data/data";

const TablePrice = () => {
  return (
    <div className="grid grid-cols-3 grid-rows-6">
      <div>Časovni blok</div>
      <div>Omrežnina za priključno moč (evro/kW)</div>
      <div>Omrežnina za porabljeno energijo (evro/kWh)</div>
      <div>1</div>
      <div>{priceBlok1.prikljucnaMoc}</div>
      <div>{priceBlok1.porabljenaEnergija}</div>
      <div>2</div>
      <div>{priceBlok2.prikljucnaMoc}</div>
      <div>{priceBlok2.porabljenaEnergija}</div>
      <div>3</div>
      <div>{priceBlok3.prikljucnaMoc}</div>
      <div>{priceBlok3.porabljenaEnergija}</div>
      <div>4</div>
      <div>{priceBlok4.prikljucnaMoc}</div>
      <div>{priceBlok4.porabljenaEnergija}</div>
      <div>5</div>
      <div>{priceBlok5.prikljucnaMoc}</div>
      <div>{priceBlok5.porabljenaEnergija}</div>
    </div>
  );
};

export default TablePrice;
