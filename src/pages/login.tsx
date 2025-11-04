import { useNavigate } from "react-router-dom";
import BarberImage from "../assets/images/barberImage.gif";
import { useState } from "react";
// import BarberImage from "./assets/images/barber-illustration.png"; // تصویر آرایشگر رو اینجا بذار

export const LoginScreen = () => {
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const isFormValid = account.trim().length > 0 && password.trim().length > 0;

  return (
    <div
      dir="rtl"
      className="bg-white h-[100dvh] flex flex-col justify-center items-center font-sans overflow-hidden fixed inset-0"
    >
      {/* Status Bar - شبیه iOS/Android */}
      <header className="absolute top-0 left-0 right-0 flex justify-between items-center px-4 pt-3 pb-1 text-sm font-medium">
        <span className="font-semibold">۹:۴۱</span>
        <div className="flex items-center gap-1">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 5h16v2H2V5zm0 4h16v2H2V9zm0 4h16v2H2v-2z" />
          </svg>
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 11h16v2H2v-2zm0-4h16v2H2V7zm0 8h16v2H2v-2z" />
          </svg>
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9 9h2v4H9V9zm1 6a1 1 0 100-2 1 1 0 000 2z" />
          </svg>
        </div>
      </header>

      <main className="flex flex-col items-center justify-center px-6 space-y-6 sm:space-y-8 w-full max-w-xs">
        {/* Title */}
        <div className="text-center space-y-1">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
            ورود به حساب کاربری
          </h1>
          <p className="text-xs sm:text-sm text-gray-500">
            اطلاعاتی که از ادمین دریافت کرده اید را وارد کنید
          </p>
        </div>

        {/* Form */}
        <div className="w-full space-y-4">
          {/* Account */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1 pr-1">
              حساب کاربری
            </label>
            <input
              type="text"
              value={account}
              onChange={(e) => setAccount(e.target.value)}
              placeholder="09XXXXXXXXX"
              className="w-full px-4 py-3 text-black text-base text-center bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-black transition-all placeholder-gray-400"
              style={{ direction: "ltr" }}
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1 pr-1">
              رمز ورود
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="09XXXXXXXXX"
              className="w-full px-4 py-3 text-black text-base text-center bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-black transition-all placeholder-gray-400"
              style={{ direction: "ltr" }}
            />
          </div>

          {/* Submit Button */}
          <button
            onClick={() => {
              if (isFormValid) navigate("/choose-image");
            }}
            className={`w-full py-3 rounded-full font-bold text-base sm:text-lg md:text-xl transition-all duration-300 active:scale-95 shadow-md ${
              isFormValid
                ? "bg-black text-white hover:bg-gray-800"
                : "bg-gray-200 text-gray-500 cursor-not-allowed"
            }`}
            disabled={!isFormValid}
          >
            تأیید
          </button>
        </div>

        {/* Barber Illustration */}
        <div className="w-44 h-44 sm:w-48 sm:h-48 flex-shrink-0 mt-48">
          <img
            src={BarberImage}
            alt="آرایشگر"
            className="w-full h-full object-contain mt-12"
          />
        </div>
      </main>

      {/* Safe Area Bottom */}
      <div className="h-8 sm:h-10"></div>
    </div>
  );
};
