import LoggingImage from "../assets/images/carchter.png";
import { useNavigate } from "react-router-dom";

export const Accsept = () => {
  const navigate = useNavigate();

  return (
    <div
      dir="rtl"
      className="bg-white h-[100dvh] flex flex-col justify-center items-center font-sans overflow-hidden fixed inset-0 px-6"
    >
      <main className="flex flex-col items-center justify-center space-y-8 w-full max-w-sm">
        {/* Illustration + Text */}
        <div className="flex flex-col items-center text-center">
          <img
            src={LoggingImage}
            alt="Logging"
            className="w-[200px] h-[254px] object-cover rounded-xl mb-4"
          />

          <h1 className="text-2xl font-bold text-gray-900">
            عکس دریافت شد!
          </h1>

          <p className="text-sm text-gray-500 mt-2 leading-relaxed">
            تایید می‌کنید یا ترجیح می‌دهید دوباره ارسال کنید؟
          </p>
        </div>

        {/* Buttons */}
        <div className="w-full space-y-3">
          {/* تایید دکمه مشکی پر */}
          <button
            onClick={() => navigate("/login")}
            className="w-full bg-black text-white text-lg font-semibold py-3 rounded-2xl hover:bg-gray-900 transition active:scale-95"
          >
            تایید
          </button>

          {/* ارسال دوباره دکمه توخالی */}
          <button
            onClick={() => navigate("/choose-image")}
            className="w-full border-2 border-black text-black text-lg font-semibold py-3 rounded-2xl bg-white hover:bg-gray-100 transition active:scale-95"
          >
            ارسال دوباره
          </button>
        </div>
      </main>
    </div>
  );
};
