import { useNavigate } from "react-router-dom";
import BarberImage from "../assets/images/barberImage.gif";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
// import BarberImage from "./assets/images/barber-illustration.png"; // تصویر آرایشگر رو اینجا بذار

export const LoginScreen = () => {
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const isFormValid = account.trim().length > 0 && password.trim().length > 0;

  return (
    <div
      dir="rtl"
      className="bg-white h-[100dvh] flex flex-col justify-center items-center font-sans overflow-hidden fixed inset-0 px-6"
    >
      <main className="flex flex-col items-center justify-center space-y-8 w-full max-w-sm">
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
        <div className="w-full space-y-5">
          {/* Account */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-800 pr-1 text-right">
              حساب کاربری
            </label>
            <input
              type="text"
              value={account}
              onChange={(e) => setAccount(e.target.value)}
              placeholder="09XXXXXXXXX"
              className="w-full px-4 py-3 text-black text-base bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 transition-all placeholder-gray-400"
              style={{ direction: "ltr" }}
            />
          </div>

          {/* Password */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-800 pr-1 text-right">
              رمز ورود
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-4 py-3 text-black text-base bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 transition-all placeholder-gray-400"
              style={{ direction: "ltr" }}
            />
          </div>

          {/* Submit Button */}
          <Button
            onClick={() => {
              if (isFormValid) navigate("/home-screen");
            }}
            disabled={!isFormValid}
            className={`w-full py-3 rounded-lg font-bold text-base sm:text-lg md:text-xl shadow-md ${
              !isFormValid ? "bg-gray-200 text-gray-500" : ""
            }`}
          >
            تأیید
          </Button>
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
