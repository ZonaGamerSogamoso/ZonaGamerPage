import { SectionMap } from "../components/SectionMap";
import { HeaderAbout } from "../components/HeaderAbout";

export const AboutPage = () => {
  return (
    <>
      <main>
        <HeaderAbout />
        <section className="pb-20 bg-gray-200 -mt-24">
          <div className="container mx-auto px-4 lg:px-20">
            <SectionMap />
          </div>
        </section>
        </main> 
    </>
  );
};