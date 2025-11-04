import LoggingImage from "../assets/images/Logging.jpg";
import { useNavigate } from "react-router-dom";

export const FaceChanger = () => {
  const navigate = useNavigate();

  return (
    <div
      dir="rtl"
      className="bg-white h-[100dvh] flex flex-col justify-center items-center font-sans overflow-hidden fixed inset-0"
    >
      <main className="flex flex-col items-center justify-center px-6 space-y-6 sm:space-y-8 w-full max-w-xs">
        {/* Title */}
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 text-center">
          Face Changer
        </h1>

        {/* Illustration */}
        <div className="w-44 h-44 sm:w-40 sm:h-40 md:w-48 md:h-48 flex-shrink-0">
          <img
            src={LoggingImage}
            alt="Logging"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>

        {/* Buttons */}
        <div className="w-full space-y-3 sm:space-y-4">
          <button
            onClick={() => navigate("/login")}
            className="w-full bg-black text-white text-base sm:text-lg md:text-xl font-bold py-2.5 sm:py-3 rounded-full hover:bg-gray-800 transition active:scale-95"
          >
            ورود
          </button>
          <button className="w-full bg-red-200 text-red-700 text-base sm:text-lg md:text-xl font-bold py-2.5 sm:py-3 rounded-full hover:bg-red-300 transition active:scale-95">
            ارتباط با ادمین
          </button>
        </div>
      </main>
    </div>
  );
};
