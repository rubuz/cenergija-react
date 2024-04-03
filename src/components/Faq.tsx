import TableBlok from "./tables/TableBlok";
import TablePrice from "./tables/TablePrice";

const Faq = () => {
  return (
    <div className="flex flex-col gap-2">
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-200"
      >
        <div className="collapse-title text-xl font-medium">
          Nov sistem obračunavanja omrežnine
        </div>
        <div className="collapse-content">
          <p className="text-justify">
            S 1. julijem 2024 je začel veljati nov sistem obračunavanja
            omrežnine, ki je tako kot prej, razdeljen na dva dela, na obračunsko
            moč in porabljeno energijo. Prejšne tarife (ET, VT in MT) je
            zamenjal zapleten sistem obračunavanja s petimi časovnimi bloki, ki
            naj bi bil po mnenju Agencije za energijo pravičnejši do vseh
            uporabnikov elektro omrežja in uporabnike spodbujal k racionalnejši
            rabi električne energije v času, ko je omrežje bolj obremenjeno.
            Časovni bloki so razdeljeni na visoko tarifno sezono od 1. novembra
            do konca februarja in na nizko tarifno sezono, ki bo trajala od 1.
            marca do 31. oktobra.
          </p>
        </div>
      </div>
      <div
        tabIndex={1}
        className="collapse collapse-arrow border border-base-300 bg-base-200"
      >
        <div className="collapse-title text-xl font-medium">
          Kako so razvrščeni časovni bloki?
        </div>
        <div className="collapse-content flex flex-col gap-3">
          <p className="text-justify">
            Omrežnina za obračunsko moč in omrežnina za porabljeno električno
            energijo sta obračunani v petih časovnih blokih. Ti so razdeljeni na
            visoko zimsko sezono in na nizko letno sezono. V vsaki sezoni se
            izmenično obračunajo štirje bloki, glede na dan v tednu, delovni ali
            dela prost dan. V enem dnevu se po urah izmenjajo po trije časovni
            bloki.
          </p>
          <TableBlok />
        </div>
      </div>
      <div
        tabIndex={2}
        className="collapse collapse-arrow border border-base-300 bg-base-200"
      >
        <div className="collapse-title text-xl font-medium">
          Cenik omrežnine za obračunsko/obračunsko moč po časovnih blokih
        </div>
        <div className="collapse-content flex w-2/3 flex-col gap-3">
          <TablePrice />
        </div>
      </div>
    </div>
  );
};

export default Faq;
