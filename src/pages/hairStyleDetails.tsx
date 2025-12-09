import { ChevronLeft, LogOut } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useNavigate, useLocation } from "react-router-dom";
import { useMemo, useState } from "react";

// Buzz-Cut images
import buzzCutBaldFade from "../assets/images/Barbery/Buzz-Cut/buz-bald-fade.png";
import buzzCutHighFade1 from "../assets/images/Barbery/Buzz-Cut/buz-high fade 2.png";
import buzzCutHighFade2 from "../assets/images/Barbery/Buzz-Cut/buz-High fade.png";
import buzzCutLowFade from "../assets/images/Barbery/Buzz-Cut/buz-low-fade.png";
import buzzCutMulletFade from "../assets/images/Barbery/Buzz-Cut/buz-mullet-fade.png";

// Side-part images
import sidePartHighFade from "../assets/images/Barbery/Side-part/SIde-high fade.png";
import sidePartLowFade from "../assets/images/Barbery/Side-part/Side-low-fade.png";
import sidePartMidFade from "../assets/images/Barbery/Side-part/Side-mid-fade.png";
import sidePartSkinFade from "../assets/images/Barbery/Side-part/Side-skin fade.png";

// Mullet images
import mulletBurstFade1 from "../assets/images/Barbery/Mullet/Mullet-burst fade.png";
import mulletBurstFade2 from "../assets/images/Barbery/Mullet/Mullet-burst-fade.png";
import mulletHighTaperFade from "../assets/images/Barbery/Mullet/Mullet-high taper-fade.png";
import mulletLowTaperFade from "../assets/images/Barbery/Mullet/Mullet-low taper-fade.png";
import mulletMulletFade1 from "../assets/images/Barbery/Mullet/Mullet-mullet fade.png";
import mulletMulletFade2 from "../assets/images/Barbery/Mullet/Mullet-mullet-fade 2.png";

// Curly images
import curlyBurstFade from "../assets/images/Barbery/Curly/Curly-Busrt-fade.png";
import curlyLowFade from "../assets/images/Barbery/Curly/Curly-low fade.png";
import curlyMidFade from "../assets/images/Barbery/Curly/Curly-mid-fade.png";
import curlyMulletFade from "../assets/images/Barbery/Curly/Curly-mullet-fade.png";
import curlyTaperFade1 from "../assets/images/Barbery/Curly/Curly-taper fade.png";
import curlyTaperFade2 from "../assets/images/Barbery/Curly/Curly-taper-fade.png";

// Spiky images - currently no images available

// Pompadour images
import pompadourClassicFade from "../assets/images/Barbery/Pompadour/Pompadour-classic fade.png";
import pompadourHighFade from "../assets/images/Barbery/Pompadour/Pompadour-High-fade.png";
import pompadourLowFade from "../assets/images/Barbery/Pompadour/Pompadour-low fade.png";
import pompadourMulletFade from "../assets/images/Barbery/Pompadour/Pompadour-mullet fade 2.png";
import pompadourTaperFade from "../assets/images/Barbery/Pompadour/Pompadour-taper fade.png";

export const HairStyleDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const categoryName =
    (location.state as { categoryName?: string })?.categoryName || "استایل";
  const [selectedId, setSelectedId] = useState<number | null>(null);

  // Category to images mapping
  const categoryImages = useMemo(() => {
    const mapping: Record<
      string,
      { id: number; name: string; image: string }[]
    > = {
      بازکات: [
        { id: 1, name: "Bald Fade", image: buzzCutBaldFade },
        { id: 2, name: "High Fade", image: buzzCutHighFade1 },
        { id: 3, name: "High Fade", image: buzzCutHighFade2 },
        { id: 4, name: "Low Fade", image: buzzCutLowFade },
        { id: 5, name: "Mullet Fade", image: buzzCutMulletFade },
      ],
      "ساید پارت": [
        { id: 1, name: "High Fade", image: sidePartHighFade },
        { id: 2, name: "Low Fade", image: sidePartLowFade },
        { id: 3, name: "Mid Fade", image: sidePartMidFade },
        { id: 4, name: "Skin Fade", image: sidePartSkinFade },
      ],
      مولت: [
        { id: 1, name: "Burst Fade", image: mulletBurstFade1 },
        { id: 2, name: "Burst Fade", image: mulletBurstFade2 },
        { id: 3, name: "High Taper Fade", image: mulletHighTaperFade },
        { id: 4, name: "Low Taper Fade", image: mulletLowTaperFade },
        { id: 5, name: "Mullet Fade", image: mulletMulletFade1 },
        { id: 6, name: "Mullet Fade", image: mulletMulletFade2 },
      ],
      فر: [
        { id: 1, name: "Burst Fade", image: curlyBurstFade },
        { id: 2, name: "Low Fade", image: curlyLowFade },
        { id: 3, name: "Mid Fade", image: curlyMidFade },
        { id: 4, name: "Mullet Fade", image: curlyMulletFade },
        { id: 5, name: "Taper Fade", image: curlyTaperFade1 },
        { id: 6, name: "Taper Fade", image: curlyTaperFade2 },
      ],
      اسپایکی: [
        // No images available for Spiky category
      ],
      پامپادور: [
        { id: 1, name: "Classic Fade", image: pompadourClassicFade },
        { id: 2, name: "High Fade", image: pompadourHighFade },
        { id: 3, name: "Low Fade", image: pompadourLowFade },
        { id: 4, name: "Mullet Fade", image: pompadourMulletFade },
        { id: 5, name: "Taper Fade", image: pompadourTaperFade },
      ],
    };
    return mapping[categoryName] || [];
  }, [categoryName]);

  const hairstyles = categoryImages;

  return (
    <div
      dir="ltr"
      className="bg-white h-[100dvh] p-5 flex flex-col font-sans overflow-hidden fixed inset-0"
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
        <button
          onClick={() => navigate("/login")}
          className="flex bg-white items-center gap-1 text-gray-900 px-2 py-1 rounded-xl"
        >
          <span className="text-base font-semibold">خروج</span>
          <LogOut className="w-5 h-5" />
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
          navigate("/choose-image");
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
