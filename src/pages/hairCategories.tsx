import { ChevronLeft, Upload, Camera, Image, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

export const HairStyleCategories = () => {
  const navigate = useNavigate();
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const hairstyles = [
    { id: 1, name: "Middle Fade" },
    { id: 2, name: "High Fade" },
    { id: 3, name: "Low Fade" },
    { id: 4, name: "Taper Fade" },
    { id: 5, name: "Burst Fade" },
    { id: 6, name: "Mullet Fade" },
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

      {/* Title */}
      <h1 className="text-center text-2xl font-bold text-gray-900 mb-6">
        استایل
      </h1>

      {/* Grid */}
      <div className="grid grid-cols-2 gap-4 mb-8">
        {hairstyles.map((style) => (
          <div
            key={style.id}
            role="button"
            tabIndex={0}
            onClick={() => setSelectedId(style.id)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") setSelectedId(style.id);
            }}
            className={`relative bg-white rounded-3xl p-4 shadow-[0_6px_18px_rgba(0,0,0,0.06)] border flex flex-col items-center cursor-pointer transition-all ${
              selectedId === style.id
                ? "border-gray-300 ring-2 ring-gray-900/60"
                : "border-gray-100 hover:border-gray-200"
            }`}
          >
            <div className="w-28 h-28 bg-gray-50 border border-gray-200 rounded-2xl mb-3 flex items-center justify-center">
              <span className="text-gray-400 text-xs">بدون عکس</span>
            </div>
            <span className="text-sm font-medium text-gray-900">
              {style.name}
            </span>
          </div>
        ))}
      </div>

      {/* Bottom Action (Drawer) */}

      <div className="mt-10">
        <Button
          disabled={!selectedId}
          className={`w-full mt-2 py-5 rounded-2xl text-lg font-semibold flex items-center justify-center gap-3 ${
            selectedId
              ? "bg-black hover:bg-gray-900 text-white"
              : "bg-gray-200 text-gray-500 cursor-not-allowed"
          }`}
        >
          <span>انتخاب</span>
          <div className="w-7 h-7 rounded-lg bg-white/15 flex items-center justify-center">
            <Upload className="w-4 h-4 text-white" />
          </div>
        </Button>
      </div>
    </div>
  );
};

export default HairStyleCategories;
