import { ChevronLeft, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useNavigate, useLocation } from "react-router-dom";
import { useMemo, useState } from "react";

export const HairStyleDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const categoryName =
    (location.state as { categoryName?: string })?.categoryName || "استایل";
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const hairstyles = useMemo(
    () => [
      {
        id: 1,
        name: "بازکات",
        image:
          "https://res.cloudinary.com/dzjkgjjut/image/upload/v1731490307/haircuts/bazkat.png",
      },
      {
        id: 2,
        name: "ساید پارت",
        image:
          "https://res.cloudinary.com/dzjkgjjut/image/upload/v1731490307/haircuts/side-part.png",
      },
      {
        id: 3,
        name: "مولت",
        image:
          "https://res.cloudinary.com/dzjkgjjut/image/upload/v1731490307/haircuts/mullet.png",
      },
      {
        id: 4,
        name: "فر",
        image:
          "https://res.cloudinary.com/dzjkgjjut/image/upload/v1731490307/haircuts/curly.png",
      },
      {
        id: 5,
        name: "اسپایکی",
        image:
          "https://res.cloudinary.com/dzjkgjjut/image/upload/v1731490307/haircuts/spiky.png",
      },
      {
        id: 6,
        name: "پامپادور",
        image:
          "https://res.cloudinary.com/dzjkgjjut/image/upload/v1731490307/haircuts/pompadour.png",
      },
    ],
    []
  );

  return (
    <div
      dir="rtl"
      className="bg-white h-[100dvh] p-10 flex flex-col font-sans overflow-hidden fixed inset-0"
    >
      {/* Header */}
      <header className="flex items-center justify-between py-3">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center bg-white gap-1 text-gray-900 px-2 py-1 rounded-xl"
        >
          <ChevronLeft className="w-5 h-5" />
          <span className="text-base font-medium">بازگشت</span>
        </button>
        <button className="flex bg-white items-center gap-1 text-gray-900 px-2 py-1 rounded-xl">
          <span className="text-base font-semibold">خروج</span>
          <RotateCcw className="w-5 h-5" />
        </button>
      </header>

      {/* Main */}
      <main className="flex-1 bg-white rounded-3xl flex flex-col overflow-hidden">
        {/* Title */}
        <div className="px-4 pt-4 pb-2">
          <h1 className="text-center text-2xl font-bold text-gray-900">
            {categoryName}
          </h1>
        </div>

        {/* Scrollable List */}
        <div className="flex-1 overflow-y-auto px-4 pb-5">
          <div className="grid grid-cols-2 gap-4 pt-4 pb-5">
            {hairstyles.map((style) => (
              <button
                key={style.id}
                onClick={() => setSelectedId(style.id)}
                className={`flex flex-col items-center rounded-3xl bg-white shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition-all px-4 pt-5 pb-4 ${
                  selectedId === style.id
                    ? "border-2 border-black"
                    : "border border-transparent"
                }`}
              >
                <div className="w-24 h-24 mb-3 rounded-2xl flex items-center justify-center overflow-hidden">
                  {style.image ? (
                    <img
                      src={style.image}
                      alt={style.name}
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <span className="text-gray-400 text-xs">بدون عکس</span>
                  )}
                </div>
                <span className="text-sm font-semibold text-gray-900">
                  {style.name}
                </span>
              </button>
            ))}
          </div>
        </div>
      </main>

      {/* Bottom Button */}
      <Button
        disabled={!selectedId}
        onClick={() => {
          if (!selectedId) return;
          navigate("/finalize");
        }}
        className={`w-full mt-3 py-4 rounded-2xl text-base font-semibold flex items-center justify-center ${
          selectedId
            ? "bg-black hover:bg-gray-900 text-white"
            : "bg-gray-200 text-gray-500 cursor-not-allowed"
        }`}
      >
        انتخاب
      </Button>
    </div>
  );
};

export default HairStyleDetails;
