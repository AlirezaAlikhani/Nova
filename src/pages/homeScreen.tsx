import { Menu, Scissors, MessageCircle, History } from "lucide-react";
import LoggingImage from "../assets/images/Logging.jpg";
import { Button } from "@/components/ui/Button";

export const HomeScreen = () => {
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
            <div className="p-[5px] rounded-full bg-gradient-to-br from-purple-600 via-purple-800 to-black">
              <Button
                variant="ghost"
                className="flex flex-col w-28 h-28 rounded-full gap-3 bg-black group items-center justify-center hover:bg-gray-900 transition p-0"
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
    </div>
  );
};
