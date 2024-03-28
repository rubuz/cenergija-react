const TableBlok = () => {
  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-[repeat(2,10%)_repeat(5,_1fr)] grid-rows-[20%_repeat(2,minmax(80px,_1fr))] gap-[2px] [&>*]:rounded-sm">
        <div className="grid_top_row bg-table-grey-dark col-span-2 !rounded-tl-2xl">
          obdobje
        </div>
        <div className="grid_top_row bg-table-red">blok 1</div>
        <div className="grid_top_row bg-table-yellow">blok 2</div>
        <div className="grid_top_row bg-table-cream">blok 3</div>
        <div className="grid_top_row bg-table-greeny">blok 4</div>
        <div className="grid_top_row bg-table-green !rounded-tr-2xl">
          blok 5
        </div>
        <div className="grid_h_item row-span-2 text-3xl font-bold">
          Višja sezona
        </div>
        <div className="grid_h_item">Delovni dan</div>
        <div className="grid_inner_item bg-table-red">
          <p>7:00 - 14:00</p>
          <p>16:00 - 20:00</p>
        </div>
        <div className="grid_inner_item bg-table-yellow">
          <p>6:00 - 7:00</p>
          <p>14:00 - 16:00</p>
          <p>20:00 - 22:00</p>
        </div>
        <div className="grid_inner_item bg-table-cream">
          <p>0:00 - 6:00</p>
          <p>22:00 - 24:00</p>
        </div>
        <div className="grid_inner_item grid_empty_item"></div>
        <div className="grid_inner_item grid_empty_item"></div>
        <div className="grid_h_item">Prosti dan</div>
        <div className="grid_inner_item grid_empty_item"></div>
        <div className="grid_inner_item bg-table-yellow">
          <p>7:00 - 14:00</p>
          <p>16:00 - 20:00</p>
        </div>
        <div className="grid_inner_item bg-table-cream">
          <p>6:00 - 7:00</p>
          <p>14:00 - 16:00</p>
          <p>20:00 - 22:00</p>
        </div>
        <div className="grid_inner_item bg-table-greeny">
          <p>0:00 - 6:00</p>
          <p>22:00 - 24:00</p>
        </div>
        <div className="grid_inner_item grid_empty_item"></div>
      </div>

      <div className="mt-5 grid grid-cols-[repeat(2,10%)_repeat(5,1fr)] grid-rows-[repeat(2,minmax(80px,_1fr))] gap-[2px] [&>*]:rounded-md">
        <div className="grid_h_item row-span-2 !rounded-bl-2xl text-3xl font-bold">
          Nižja sezona
        </div>
        <div className="grid_h_item">Delovni dan</div>
        <div className="grid_inner_item grid_empty_item"></div>
        <div className="grid_inner_item bg-table-yellow">
          <p>7:00 - 14:00</p>
          <p>16:00 - 20:00</p>
        </div>
        <div className="grid_inner_item bg-table-cream">
          <p>6:00 - 7:00</p>
          <p>14:00 - 16:00</p>
          <p>20:00 - 22:00</p>
        </div>
        <div className="grid_inner_item bg-table-greeny">
          <p>0:00 - 6:00</p>
          <p>22:00 - 24:00</p>
        </div>
        <div className="grid_inner_item grid_empty_item"></div>
        <div className="grid_h_item">Prosti dan</div>
        <div className="grid_inner_item grid_empty_item"></div>
        <div className="grid_inner_item grid_empty_item"></div>
        <div className="grid_inner_item bg-table-cream">
          <p>7:00 - 14:00</p>
          <p>16:00 - 20:00</p>
        </div>
        <div className="grid_inner_item bg-table-greeny">
          <p>6:00 - 7:00</p>
          <p>14:00 - 16:00</p>
          <p>20:00 - 22:00</p>
        </div>
        <div className="grid_inner_item bg-table-green !rounded-br-2xl">
          <p>0:00 - 6:00</p>
          <p>22:00 - 24:00</p>
        </div>
      </div>
      <div className="mt-5">
        <div className="flex gap-2">
          <p className="font-semibold">Višja sezona:</p>{" "}
          <span>november, december, januar, februar</span>
        </div>
        <div className="flex gap-2">
          <p className="font-semibold">Nižja sezona:</p>
          <span>
            marec, april, maj, junij, julij, avgust, september, oktober
          </span>
        </div>
      </div>
    </div>
  );
};

export default TableBlok;
