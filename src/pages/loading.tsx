import { LifeLine } from "react-loading-indicators";
import BarberImage from "../assets/images/barberImage.gif";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const Loading = () => {
  const navigate = useNavigate();
  const location = useLocation() as {
    state?: { file?: File; fromHome?: boolean; fromFinalize?: boolean };
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (location.state?.fromHome || location.state?.fromFinalize) {
        navigate("/result");
      } else {
        navigate("/accsept", { state: { file: location.state?.file } });
      }
    }, 1200);
    return () => clearTimeout(timeout);
  }, [
    location.state?.file,
    location.state?.fromHome,
    location.state?.fromFinalize,
    navigate,
  ]);

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
