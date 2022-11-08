import { SectionStore } from "../components/SectionStore";
import { HeaderStore } from "../components/HeaderStore";

export const StorePage = () => {
  return (
    <>
      <main>
        <HeaderStore />
        <section className="pb-20 bg-gray-200 -mt-24">
          <div className="container mx-auto px-4 lg:px-20">
            <SectionStore />
          </div>
        </section>
      </main>
    </>
  );
};