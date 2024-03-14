import Header from "./components/Header";
import Section from "./components/Section";
import ChartDonut from "./components/ChartDonut";

function App() {
  return (
    <>
      <div className="h-[100dvh] bg-white font-roboto ">
        <Header />
        <Section>
          <h1 className="mt-20">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, quos
            quo perspiciatis magnam omnis officia voluptatibus ut, veritatis
            laborum harum iusto suscipit enim commodi! Aliquam itaque ex qui
            molestias officiis totam non. Ullam dolore labore, distinctio
            provident magni corporis sed sit blanditiis earum ad praesentium
            voluptatibus magnam minus cumque eum.
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
