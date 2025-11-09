import { ArrowRight, ChevronLeft } from "lucide-react";
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
      className="bg-white min-h-screen flex flex-col font-sans px-6 pt-4 pb-8"
    >
      {/* Header */}
      <header className="flex items-center justify-between mb-6">
        <button
          onClick={() => navigate(-1)}
          className="p-2 rounded-full hover:bg-gray-100 transition"
        >
          <ChevronLeft className="w-6 h-6 text-gray-700" />
        </button>
        <h1 className="text-lg font-bold text-gray-900">خروج</h1>
        <div className="w-10" /> {/* Spacer */}
      </header>

      {/* انتخاب مدل */}
      <div className="bg-orange-50 rounded-2xl px-4 py-3 mb-6 flex items-center justify-between">
        <span className="text-orange-600 font-semibold text-sm">انتخاب مدل</span>
        <ArrowRight className="w-5 h-5 text-orange-600 rotate-180" />
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-8">
        <button className="px-6 py-2 rounded-full bg-gray-200 text-gray-600 text-sm font-medium">
          داشبورد
        </button>
        <button className="px-6 py-2 rounded-full bg-black text-white text-sm font-medium">
          دسته بندی ها
        </button>
      </div>

      {/* Hairstyles Grid */}
      <div className="grid grid-cols-2 gap-4 mb-8">
        {hairstyles.map((style) => (
          <div
            key={style.id}
            className="bg-white rounded-3xl p-4 shadow-sm border border-gray-100 flex flex-col items-center"
          >
            {/* Placeholder for Image */}
            <div className="w-28 h-28 bg-gray-200 border-2 border-dashed border-gray-300 rounded-2xl mb-3 flex items-center justify-center">
              <span className="text-gray-400 text-xs">بدون عکس</span>
            </div>
            <span className="text-sm font-medium text-gray-900">{style.name}</span>
          </div>
        ))}
      </div>

      {/* Bottom Button */}
      <Button className="w-full bg-black hover:bg-gray-900 text-white py-6 rounded-2xl text-lg font-semibold flex items-center justify-center gap-2">
        <span>ارسال مدل</span>
        <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
          <ArrowRight className="w-4 h-4 text-white rotate-180" />
        </div>
      </Button>
    </div>
  );
};

export default HairStyleSelection;