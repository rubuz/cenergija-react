import Header from "./components/Header";
import Section from "./components/Section";
import ChartDonut from "./components/ChartDonut";

function App() {
  return (
    <>
      <div className="h-[100dvh] bg-white font-roboto ">
        <Header />
        <Section>
          <h1 className="my-14 text-center text-5xl font-bold">
            CENA ELEKTRIČNE ENERGIJE
          </h1>
        </Section>
        <Section>
          <ChartDonut />
        </Section>
      </div>
    </>
  );
}

export default App;
