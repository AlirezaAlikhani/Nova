import { ChevronLeft, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useNavigate, useLocation } from "react-router-dom";
import { useMemo, useState } from "react";

// Buzz-Cut images
import buzzCutHighFade1 from "../assets/images/Barbery/Buzz-Cut/high fade.jpg";
import buzzCutHighFade2 from "../assets/images/Barbery/Buzz-Cut/High-fade.jpg";
import buzzCutMiddleFade from "../assets/images/Barbery/Buzz-Cut/Middle-fade.jpg";
import buzzCutMulletFade from "../assets/images/Barbery/Buzz-Cut/mullet-fade.jpg";
import buzzCutNoFade from "../assets/images/Barbery/Buzz-Cut/no-fade.jpg";
import buzzCutSkinFade1 from "../assets/images/Barbery/Buzz-Cut/skin fade.jpg";
import buzzCutSkinFade2 from "../assets/images/Barbery/Buzz-Cut/skin-fade.jpg";
import buzzCutTaperFade from "../assets/images/Barbery/Buzz-Cut/taper fade.jpg";

// Side-part images
import sidePartHighFade from "../assets/images/Barbery/Side-part/high-fade.jpg";
import sidePartLowFade from "../assets/images/Barbery/Side-part/low-fade.jpeg";
import sidePartMidFade from "../assets/images/Barbery/Side-part/mid-fade.png";
import sidePartSkinFade from "../assets/images/Barbery/Side-part/skin fade.jpg";

// Mullet images
import mulletBurstFade1 from "../assets/images/Barbery/Mullet/burst fade.jpg";
import mulletBurstFade2 from "../assets/images/Barbery/Mullet/burst-fade.jpg";
import mulletHighTaperFade from "../assets/images/Barbery/Mullet/high taper-fade.jpg";
import mulletLowTaperFade from "../assets/images/Barbery/Mullet/low taper-fade.jpg";
import mulletMulletFade1 from "../assets/images/Barbery/Mullet/mullet fade.jpg";
import mulletMulletFade2 from "../assets/images/Barbery/Mullet/mullet-fade.jpg";
import mulletSkinFade from "../assets/images/Barbery/Mullet/skin fade.jpg";

// Curly images
import curlyBurstFade from "../assets/images/Barbery/Curly/Busrt-fade.jpg";
import curlyLowFade from "../assets/images/Barbery/Curly/low fade.jpg";
import curlyMidFade from "../assets/images/Barbery/Curly/mid-fade.jpg";
import curlyMulletFade from "../assets/images/Barbery/Curly/mullet-fade.jpg";
import curlySkinFade from "../assets/images/Barbery/Curly/skin-fade.jpg";
import curlyTaperFade1 from "../assets/images/Barbery/Curly/taper fade.jpg";
import curlyTaperFade2 from "../assets/images/Barbery/Curly/taper-fade.jpg";

// Spiky images
import spikyBaldFade from "../assets/images/Barbery/Spiky/bald-fade.jpg";
import spikyHighFade from "../assets/images/Barbery/Spiky/high-fade.jpg";
import spikyLowFade from "../assets/images/Barbery/Spiky/low fade.jpg";
import spikyMidFade1 from "../assets/images/Barbery/Spiky/mid fade.jpg";
import spikyMidFade2 from "../assets/images/Barbery/Spiky/mid-fade.jpg";

// Pompadour images
import pompadourClassicFade from "../assets/images/Barbery/Pompadour/classic fade.jpg";
import pompadourHighFade from "../assets/images/Barbery/Pompadour/High-fade.jpg";
import pompadourLowFade from "../assets/images/Barbery/Pompadour/low fade.jpg";
import pompadourMidFade from "../assets/images/Barbery/Pompadour/mid fade.jpg";
import pompadourMulletFade from "../assets/images/Barbery/Pompadour/mullet fade.jpg";
import pompadourTaperFade from "../assets/images/Barbery/Pompadour/taper fade.jpg";

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
        { id: 1, name: "High Fade", image: buzzCutHighFade1 },
        { id: 2, name: "High Fade", image: buzzCutHighFade2 },
        { id: 3, name: "Middle Fade", image: buzzCutMiddleFade },
        { id: 4, name: "Mullet Fade", image: buzzCutMulletFade },
        { id: 5, name: "No Fade", image: buzzCutNoFade },
        { id: 6, name: "Skin Fade", image: buzzCutSkinFade1 },
        { id: 7, name: "Skin Fade", image: buzzCutSkinFade2 },
        { id: 8, name: "Taper Fade", image: buzzCutTaperFade },
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
        { id: 7, name: "Skin Fade", image: mulletSkinFade },
      ],
      فر: [
        { id: 1, name: "Burst Fade", image: curlyBurstFade },
        { id: 2, name: "Low Fade", image: curlyLowFade },
        { id: 3, name: "Mid Fade", image: curlyMidFade },
        { id: 4, name: "Mullet Fade", image: curlyMulletFade },
        { id: 5, name: "Skin Fade", image: curlySkinFade },
        { id: 6, name: "Taper Fade", image: curlyTaperFade1 },
        { id: 7, name: "Taper Fade", image: curlyTaperFade2 },
      ],
      اسپایکی: [
        { id: 1, name: "Bald Fade", image: spikyBaldFade },
        { id: 2, name: "High Fade", image: spikyHighFade },
        { id: 3, name: "Low Fade", image: spikyLowFade },
        { id: 4, name: "Mid Fade", image: spikyMidFade1 },
        { id: 5, name: "Mid Fade", image: spikyMidFade2 },
      ],
      پامپادور: [
        { id: 1, name: "Classic Fade", image: pompadourClassicFade },
        { id: 2, name: "High Fade", image: pompadourHighFade },
        { id: 3, name: "Low Fade", image: pompadourLowFade },
        { id: 4, name: "Mid Fade", image: pompadourMidFade },
        { id: 5, name: "Mullet Fade", image: pompadourMulletFade },
        { id: 6, name: "Taper Fade", image: pompadourTaperFade },
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
