import { SectionService } from "../components/SectionService";
import { HeaderService } from "../components/HeaderService";

export const ServicePage = () => {
  return (
    <>
      <main>
        <HeaderService />
        <section className="pb-20 bg-gray-200 -mt-24">
          <div className="container mx-auto px-4 lg:px-20">
            <SectionService />
          </div>
        </section>
      </main>
    </>
  );
};