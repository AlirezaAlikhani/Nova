import {
  Menu,
  Scissors,
  MessageCircle,
  History,
  Plus,
  CheckCircle2,
  Settings,
} from "lucide-react";
import LoggingImage from "../assets/images/Logging.jpg";
import { Button } from "@/components/ui/Button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const HomeScreen = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div
      dir="rtl"
      className="bg-white h-[100dvh] flex flex-col font-sans overflow-hidden fixed inset-0"
    >
      {/* Header */}
      <header className="flex items-center justify-between px-4 pt-3 pb-2">
        <Button
          variant="ghost"
          size="icon"
          className="p-0 bg-transparent hover:bg-transparent focus:bg-transparent active:bg-transparent"
          onClick={() => setMenuOpen(true)}
        >
          <Menu className="!w-6 !h-6 text-2xl text-gray-900" />
        </Button>
        <span className="text-xl font-bold text-gray-900">تغییر صورت</span>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 space-y-6">
        {/* Barber Illustration (SVG) */}
        <div className="w-72 h-72">
          <img
            src={LoggingImage}
            alt="Logging"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex !mt-20 items-end justify-center gap-6">
          {/* History */}
          <div className="flex flex-col items-center">
            <div className="p-[2.5px] rounded-full bg-gradient-to-br from-purple-600 via-purple-800 to-black">
              <Button
                variant="ghost"
                className="flex flex-col w-20 h-20 rounded-full gap-3 bg-gray-900 group items-center justify-center hover:bg-gray-800 transition p-0"
              >
                <History className="!w-8 !h-8 text-white" />
              </Button>
            </div>
            <span className="text-sm font-bold text-gray-900 mt-1">
              تاریخچه
            </span>
          </div>

          {/* Trim - Center & Bigger */}
          <div className="flex flex-col items-center transform -translate-y-6 sm:-translate-y-10">
            <div className="p-[11px] rounded-full bg-gradient-to-br from-purple-900 via-purple-900 to-black">
              <Button
                variant="ghost"
                className="flex flex-col w-28 h-28 rounded-full gap-3 bg-black group items-center justify-center hover:bg-gray-900 transition p-0"
                onClick={() => navigate("/choose-image")}
              >
                <Scissors
                  className="text-white !h-14 !w-14"
                  strokeWidth={1.4}
                />
              </Button>
            </div>
            <span className="text-base font-bold text-gray-900 mt-1">
              پیرایش
            </span>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center">
            <div className="p-[2.5px] rounded-full bg-gradient-to-br from-purple-600 via-purple-800 to-black">
              <Button
                variant="ghost"
                className="flex flex-col w-20 h-20 rounded-full gap-3 bg-gray-900 group items-center justify-center hover:bg-gray-800 transition p-0"
              >
                <MessageCircle className="!w-8 !h-8 text-white" />
              </Button>
            </div>
            <span className="text-sm font-bold text-gray-900 mt-1">
              ارتباط با ادمین
            </span>
          </div>
        </div>
      </main>

      {/* Safe Area Bottom */}
      <div className="h-8"></div>

      {/* Side Menu */}
      <div
        className={`fixed inset-0 z-50 transition-opacity duration-200 ${
          menuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/50"
          onClick={() => setMenuOpen(false)}
        />
        <div
          className={`absolute inset-y-0 right-0 w-[82%] sm:w-[360px] bg-white rounded-l-[30px] shadow-2xl flex flex-col overflow-hidden transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="bg-gradient-to-br from-[#221056] via-[#3c0d6f] to-[#020923] text-white p-4 relative">
            <div className="flex items-center justify-between text-sm">
              <div>
                <p className="text-xs uppercase tracking-[0.15em] text-white/80">
                  Credits :
                </p>
                <p className="text-5xl font-extrabold mt-1">150</p>
              </div>
              <div className="absolute top-6 left-6">
                <Scissors className="text-white w-7 h-7" strokeWidth={1.6} />
              </div>
            </div>

            <div className="flex items-center justify-between text-sm mt-4">
              <div>
                <span className="text-white/80">Ends date :</span>
                <span className="font-semibold">09/25</span>
              </div>
              <div>
                <p className="text-lg font-semibold">علیرضا رضایی</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col flex-1 px-6 py-6 gap-1">
            <button className="flex bg-white items-center justify-between py-4 border-b border-gray-100 text-lg font-semibold text-green-600">
              <div className="flex items-center gap-3">
                <Plus className="w-5 h-5" />
                <span>افزایش موجودی</span>
              </div>
              <span className="text-2xl leading-none">+</span>
            </button>

            <button className="flex bg-white items-center justify-between py-4 border-b border-gray-100 text-lg font-semibold text-gray-900">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5" />
                <span>گزارش مشکل فنی</span>
              </div>
            </button>

            <button className="flex bg-white items-center justify-between py-4 text-lg font-semibold text-gray-900">
              <div className="flex items-center gap-3">
                <Settings className="w-5 h-5" />
                <span>تنظیمات</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
