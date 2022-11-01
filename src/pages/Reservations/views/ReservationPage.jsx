import { SectionReservation } from "../components/SectionReservation";
import { HeaderReservation } from "../components/HeaderReservation";

export const ReservationPage = () => {
  return (
    <>
      <main>
        <HeaderReservation />
        <section className="pb-20 bg-gray-200 -mt-24">
          <div className="container mx-auto px-4 lg:px-20">
            <SectionReservation />
          </div>
        </section>
      </main>
    </>
  );
};
