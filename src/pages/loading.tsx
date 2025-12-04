import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import barberLottieUrl from "../assets/images/chair.lottie?url";

export const Loading = () => {
  const navigate = useNavigate();
  const location = useLocation() as {
    state?: {
      file?: File;
      fromHome?: boolean;
      fromFinalize?: boolean;
      fromDashboard?: boolean;
    };
  };
  const [filledCount, setFilledCount] = useState(0);

  useEffect(() => {
    // Animate loading bars
    const interval = setInterval(() => {
      setFilledCount((prev) => {
        if (prev >= 10) {
          clearInterval(interval);
          return 10;
        }
        return prev + 1;
      });
    }, 120); // Fill one bar every 120ms (total 1200ms for 10 bars)

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (location.state?.fromHome || location.state?.fromFinalize) {
        navigate("/result");
      } else if (location.state?.fromDashboard) {
        navigate("/accsept", {
          state: { file: location.state?.file, fromDashboard: true },
        });
      } else {
        navigate("/accsept", { state: { file: location.state?.file } });
      }
    }, 1200);
    return () => clearTimeout(timeout);
  }, [
    location.state?.file,
    location.state?.fromHome,
    location.state?.fromFinalize,
    location.state?.fromDashboard,
    navigate,
  ]);

  return (
    <div
      dir="ltr"
      className="bg-white h-[100dvh] flex flex-col font-sans overflow-hidden fixed inset-0"
    >
      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 space-y-8">
        {/* Barber Illustration (SVG) */}
        <div className="w-72 h-72">
          <DotLottieReact
            src={barberLottieUrl}
            loop
            autoplay
            className="w-full h-full"
          />
        </div>
        <div className="flex items-center gap-2">
          {Array.from({ length: 10 }).map((_, index) => (
            <span
              key={index}
              className={`w-6 h-6 rounded-lg border transition-colors duration-200 ${
                index < filledCount
                  ? "bg-black border-black"
                  : "bg-white border-black"
              }`}
            />
          ))}
        </div>
        <h5 className="text-black text-sm font-bold mb-3">در حال فرستادن</h5>
      </main>

      {/* Safe Area Bottom */}
      <div className="h-8"></div>
    </div>
  );
};
