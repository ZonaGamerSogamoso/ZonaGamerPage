import { SectionCards } from "../components/SectionCards";
import { Header } from "../components/Header";
import { SectionGame } from "../components/SectionGame";

export const HomePage = () => {
  return (
    <>
      <main>
        <Header />
        <section className="pb-20 bg-gray-200 -mt-24">
          <div className="container mx-auto px-4 lg:px-20">
          <SectionCards />
            <SectionGame />
          </div>
        </section>
      </main>
    </>
  );
};
