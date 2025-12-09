import { ChevronLeft, LogOut, RotateCcw } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const HairStyleCategories = () => {
  const navigate = useNavigate();

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
            استایل
          </h1>
        </div>

        {/* Scrollable Grid */}
        <div className="flex-1 overflow-y-auto px-4 pb-5">
          <div className="grid grid-cols-2 gap-4 pt-4">
            {hairstyles.map((style) => (
              <button
                key={style.id}
                onClick={() =>
                  navigate("/hair-style-details", {
                    state: { categoryName: style.name },
                  })
                }
                className="flex flex-col items-center rounded-3xl bg-white shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition-all px-4 pt-5 pb-4 border border-transparent hover:border-gray-200"
              >
                <div className="w-24 h-24 mb-3 rounded-2xl flex items-center justify-center overflow-hidden bg-gray-50 border border-gray-200">
                  <span className="text-gray-400 text-xs">بدون عکس</span>
                </div>
                <span className="text-sm font-semibold text-gray-900">
                  {style.name}
                </span>
              </button>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default HairStyleCategories;
