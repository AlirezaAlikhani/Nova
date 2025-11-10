import { ArrowRight, ChevronLeft, Upload, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useNavigate } from "react-router-dom";

export const HairStyleSelection = () => {
  const navigate = useNavigate();

  const hairstyles = [
    { id: 1, name: "بازکات" },
    { id: 2, name: "ساید پارت" },
    { id: 3, name: "مولت" },
    { id: 4, name: "فر" },
    { id: 5, name: "اسپایکی" },
    { id: 6, name: "پامپادور" },
  ];

  return (
    <div
      dir="rtl"
      className="bg-white min-h-screen flex flex-col font-sans pt-4 pb-8 overflow-hidden fixed inset-0 px-6"
    >
      {/* Header */}
      <header className="flex items-center justify-between mb-4">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center bg-white gap-1 text-gray-900"
        >
          <ChevronLeft className="w-5 h-5" />
          <span className="text-base font-medium">بازگشت</span>
        </button>
        <button className="flex bg-white items-center gap-1 text-gray-900">
          <span className="text-base font-semibold">خروج</span>
          <RotateCcw className="w-5 h-5" />
        </button>
      </header>

      {/* انتخاب مدل */}
      {/* <div className="rounded-2xl px-4 py-3 mb-4 flex items-center justify-center shadow-sm border border-gray-100 bg-white">
        <div className="relative inline-flex items-center">
          <span className="text-rose-500 font-bold text-lg">انتخاب مدل</span>
          <span className="absolute -left-16 top-1/2 -translate-y-1/2 hidden" />
        </div> */}
        {/* Right indicator */}
        {/* <div className="ml-auto flex items-center gap-2">
          <span className="h-1 w-10 rounded-full bg-rose-400" />
          <span className="size-2 rounded-full bg-rose-400" />
          <span className="size-2 rounded-full bg-rose-400" />
        </div>
      </div> */}

      {/* Tabs */}
      <div className="flex gap-2 mt-10 mb-6">
        <button className="flex-1 px-6 py-2 rounded-xl bg-gray-200 text-gray-700 text-sm font-medium">
          داشبورد
        </button>
        <button className="flex-1 px-6 py-2 rounded-xl bg-black text-white text-sm font-medium shadow">
          دسته بندی ها
        </button>
      </div>

      {/* Hairstyles Grid */}
      <div className="grid grid-cols-2 gap-4 mb-8">
        {hairstyles.map((style) => (
          <div
            key={style.id}
            className="bg-white rounded-3xl p-4 shadow-[0_6px_18px_rgba(0,0,0,0.06)] border border-gray-100 flex flex-col items-center"
          >
            {/* Placeholder for Image */}
            <div className="w-28 h-28 bg-gray-50 border border-gray-200 rounded-2xl mb-3 flex items-center justify-center">
              <span className="text-gray-400 text-xs">بدون عکس</span>
            </div>
            <span className="text-sm font-medium text-gray-900">{style.name}</span>
          </div>
        ))}
      </div>

      {/* Bottom Button */}
      <Button className="w-full mt-10 bg-black hover:bg-gray-900 text-white py-5 rounded-2xl text-lg font-semibold flex items-center justify-center gap-3">
        <span>ارسال مدل</span>
        <div className="w-7 h-7 rounded-lg bg-white/15 flex items-center justify-center">
          <Upload className="w-4 h-4 text-white" />
        </div>
      </Button>
    </div>
  );
};

export default HairStyleSelection;