import { LifeLine } from "react-loading-indicators";
import BarberImage from "../assets/images/barberImage.gif";

export const Loading = () => {
  return (
    <div
      dir="rtl"
      className="bg-white h-[100dvh] flex flex-col font-sans overflow-hidden fixed inset-0"
    >
      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 space-y-8">
        {/* Barber Illustration (SVG) */}
        <div className="w-44 h-44">
          <img
            src={BarberImage}
            alt="Logging"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
        <LifeLine color="#020202" size="small" text="" textColor="#000000" />
        <h5 className="text-black text-sm font-bold mb-3">در حال فرستادن</h5>
      </main>

      {/* Safe Area Bottom */}
      <div className="h-8"></div>
    </div>
  );
};
