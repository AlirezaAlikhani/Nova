import {
  Menu,
  Scissors,
  MessageCircle,
  History,
  Settings,
  LayoutDashboard,
  FileText,
  LogOut,
} from "lucide-react";
import LoggingImage from "../assets/images/Logging.jpg";
import { Button } from "@/components/ui/Button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const HomeScreen = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [logoutModalOpen, setLogoutModalOpen] = useState(false);

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
            <div className="p-[2.5px] rounded-full   bg-[#9B9B95]">
              <Button
                variant="ghost"
                disabled={true}
                className="flex flex-col w-20 h-20 rounded-full gap-3 bg-gray-400 group items-center justify-center hover:bg-gray-400 transition p-0 cursor-not-allowed"
              >
                <History className="!w-8 !h-8 text-white" />
              </Button>
            </div>
            <span className="text-sm font-bold text-gray-400 mt-1">
              تاریخچه
            </span>
          </div>

          {/* Trim - Center & Bigger */}
          <div className="flex flex-col items-center transform -translate-y-6 sm:-translate-y-10">
            <div className="p-[11px] rounded-full bg-gradient-to-br from-purple-900 via-purple-900 to-black">
              <Button
                variant="ghost"
                className="flex flex-col w-28 h-28 rounded-full gap-3 bg-black group items-center justify-center hover:bg-gray-900 transition p-0"
                onClick={() => navigate("/hair-style")}
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
            <div className="p-[2.5px] rounded-full  bg-[#9B9B95]">
              <Button
                variant="ghost"
                disabled={true}
                className="flex flex-col w-20 h-20 rounded-full gap-3 bg-gray-400 group items-center justify-center hover:bg-gray-400 transition p-0 cursor-not-allowed"
              >
                <MessageCircle className="!w-8 !h-8 text-white" />
              </Button>
            </div>
            <span className="text-sm font-bold text-gray-400 mt-1">
              تاریخچه
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
          <div className="bg-gradient-to-br from-[#000000] via-[#160628] to-[#000000] text-white p-4 relative">
            <div className="flex items-center justify-between text-sm">
              <div>
                <div className="absolute top-6 left-6">
                  <Scissors className="text-white w-7 h-7" strokeWidth={1.6} />
                </div>
                <p className="text-xs uppercase tracking-[0.15em] text-white/80">
                  Credits :
                </p>
                <p className="text-5xl font-extrabold mt-1">150</p>
              </div>
            </div>

            <div className="flex items-center justify-between text-sm mt-4">
              <div>
                {/* <span className="text-white/80">Ends date :</span>   */}
                {/* <span className="font-semibold">09/25</span> */}
              </div>
              <div>
                <p className="text-lg font-semibold">علیرضا رضایی</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col flex-1 px-6 py-6 gap-1">
            <button className="flex bg-black items-center justify-between py-4 text-lg font-semibold text-white hover:bg-gray-900 transition-colors">
              <div className="flex items-center gap-3">
                <MessageCircle className="w-5 h-5" />
                <span>ارتباط با ادمین</span>
              </div>
            </button>

            <button
              onClick={() => {
                setMenuOpen(false);
                navigate("/dashboard");
              }}
              className="flex bg-white items-center justify-between py-4 text-lg font-semibold text-gray-900 hover:text-black transition-colors"
            >
              <div className="flex items-center gap-3">
                <LayoutDashboard className="w-5 h-5" />
                <span>داشبورد</span>
              </div>
            </button>

            <button className="flex bg-white items-center justify-between py-4 text-lg font-semibold text-gray-900 hover:text-black transition-colors">
              <div className="flex items-center gap-3">
                <FileText className="w-5 h-5" />
                <span>گزارش فنی</span>
              </div>
            </button>

            <button className="flex bg-white items-center justify-between py-4 text-lg font-semibold text-gray-900 hover:text-black transition-colors">
              <div className="flex items-center gap-3">
                <Settings className="w-5 h-5" />
                <span>تنظیمات</span>
              </div>
            </button>

            <button
              onClick={() => {
                setMenuOpen(false);
                setLogoutModalOpen(true);
              }}
              className="flex bg-white items-center justify-between py-4 text-lg font-semibold text-red-600 hover:text-red-700 transition-colors"
            >
              <div className="flex items-center gap-3">
                <LogOut className="w-5 h-5" />
                <span>خروج از حساب کاربری</span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Logout Confirmation Modal */}
      {logoutModalOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setLogoutModalOpen(false)}
          />
          <div className="relative bg-white rounded-3xl p-6 mx-4 max-w-sm w-full shadow-2xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">
              خروج از حساب کاربری
            </h2>
            <p className="text-gray-600 text-center mb-6">مطمئن هستید؟</p>
            <div className="flex gap-4">
              <Button
                variant="outline"
                className="flex-1 py-3 text-lg font-semibold border-2 border-gray-900"
                onClick={() => setLogoutModalOpen(false)}
              >
                بازگشت
              </Button>
              <Button
                className="flex-1 py-3 text-lg font-semibold bg-black text-white hover:bg-gray-900"
                onClick={() => {
                  // Handle logout logic here
                  navigate("/login");
                }}
              >
                بله
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
