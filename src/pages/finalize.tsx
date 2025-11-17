import { ChevronLeft, RotateCcw, ArrowRight, Scissors, Camera, User2Icon } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const FinalizePage = () => {
  const navigate = useNavigate();
  const [notes, setNotes] = useState("");

  return (
    <div
      dir="rtl"
      className="bg-white h-[100dvh] flex flex-col font-sans fixed inset-0 overflow-y-auto pt-4 pb-10 px-6"
    >
      {/* Header */}
      <header className="flex items-center justify-between mb-4">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-1 text-gray-900"
        >
          <ChevronLeft className="w-5 h-5" />
          <span className="text-base font-medium">بازگشت</span>
        </button>
        <button className="flex items-center gap-1 text-gray-900">
          <span className="text-base font-semibold">خروج</span>
          <RotateCcw className="w-5 h-5" />
        </button>
      </header>

      {/* Preview Images */}
      <div className="flex items-center justify-center gap-8 mb-6">
        <div className="w-36 h-36 rounded-3xl overflow-hidden shadow border border-gray-200">
          <img
            src="https://images.unsplash.com/photo-1608889175157-6b9b7ddfb4b4?q=80&w=600&auto=format&fit=crop"
            alt="before"
            className="w-full h-full object-cover"
          />
        </div>
        <ArrowRight className="w-6 h-6 rotate-180 text-gray-700" />
        <div className="w-36 h-36 rounded-3xl overflow-hidden shadow border border-gray-200">
          <img
            src="https://images.unsplash.com/photo-1616394584738-909c21d0d5de?q=80&w=600&auto=format&fit=crop"
            alt="after"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Title and helper */}
      <div className="text-center mb-4">
        <h1 className="text-2xl font-extrabold text-gray-900">
          چه چیزی را تغییر می‌دهید؟
        </h1>
        <p className="mt-2 text-gray-500 text-sm leading-6">
          برای ما بنویسید که دقیقا چه تغییراتی را در هر قسمت صورت نیاز دارید
        </p>
      </div>

      {/* Notes input */}
      <textarea
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        placeholder="اینجا بنویسید"
        className="w-full mt-4 h-56 rounded-2xl border bg-white border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-900/80 p-4 text-gray-900 placeholder:text-gray-600 mb-10"
      />

      {/* Actions */}
      <div className="flex !mt-20 items-end justify-center gap-6">
        {/* History */}
        <div className="flex flex-col items-center">
          <div className="p-[2.5px] rounded-full bg-gradient-to-br from-purple-600 via-purple-800 to-black">
            <Button
              variant="outline"
              className="flex flex-col w-20 h-20 rounded-full gap-3 group items-center justify-center hover:bg-gray-800 transition p-0"
            >
              <User2Icon className="!w-8 !h-8 text-black" />
            </Button>
          </div>
          <span className="text-sm font-bold text-gray-900 mt-1">مدل</span>
        </div>

        {/* Trim - Center & Bigger */}
        <div className="flex flex-col items-center transform -translate-y-6 sm:-translate-y-10">
          <div className="p-[5px] rounded-full bg-gradient-to-br from-purple-600 via-purple-800 to-black">
            <Button
              variant="ghost"
              className="flex flex-col w-28 h-28 rounded-full gap-3 bg-black group items-center justify-center hover:bg-gray-900 transition p-0"
              onClick={() => navigate("/loading", { state: { fromFinalize: true } })}
            >
              <Scissors className="text-white !h-14 !w-14" strokeWidth={1.4} />
            </Button>
          </div>
          <span className="text-base font-bold text-gray-900 mt-1">پیرایش</span>
        </div>

        {/* Contact */}
        <div className="flex flex-col items-center">
          <div className="p-[2.5px] rounded-full bg-gradient-to-br from-purple-600 via-purple-800 to-black">
            <Button
              variant="outline"
              className="flex  flex-col w-20 h-20 rounded-full gap-3 group items-center justify-center hover:bg-gray-800 transition p-0"
            >
              <Camera className="!w-9 !h-9 text-black" />
            </Button>
          </div>
          <span className="text-sm font-bold text-gray-900 mt-1">
           جدید
          </span>
        </div>
      </div>
      <div className="h-8"></div>
    </div>
  );
};

export default FinalizePage;
