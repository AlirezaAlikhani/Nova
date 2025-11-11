import { ChevronLeft, Upload, RotateCcw, Camera, Image } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

export const HairStyleSelection = () => {
  const navigate = useNavigate();
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<"dashboard" | "categories">(
    "categories"
  );
  const [previousModels, setPreviousModels] = useState<
    { id: number; name: string; image?: string }[]
  >([]);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const raw = localStorage.getItem("previousModels");
    if (raw) {
      try {
        setPreviousModels(JSON.parse(raw));
      } catch {}
    }
  }, []);

  const persistSelected = () => {
    if (!selectedId) return;
    const style = hairstyles.find((s) => s.id === selectedId);
    if (!style) return;
    const next = [{ id: style.id, name: style.name }, ...previousModels].slice(
      0,
      12
    );
    setPreviousModels(next);
    localStorage.setItem("previousModels", JSON.stringify(next));
  };

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
        <button
          onClick={() => setActiveTab("dashboard")}
          className={`flex-1 px-6 py-2 rounded-xl text-sm font-medium transition ${
            activeTab === "dashboard"
              ? "bg-black text-white shadow"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          داشبورد
        </button>
        <button
          onClick={() => setActiveTab("categories")}
          className={`flex-1 px-6 py-2 rounded-xl text-sm font-medium transition ${
            activeTab === "categories"
              ? "bg-black text-white shadow"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          دسته بندی ها
        </button>
      </div>

      {/* Hairstyles Grid */}
      {activeTab === "dashboard" && previousModels.length === 0 ? (
        <div className="mb-8 py-16 text-center text-sm text-gray-500">
          هنوز سابقه‌ای ندارید. از تب «دسته بندی ها» یک مدل انتخاب کنید.
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-4 mb-8">
          {(activeTab === "categories" ? hairstyles : previousModels).map(
            (style) => (
              <div
                key={style.id}
                role="button"
                tabIndex={0}
                onClick={() => {
                  setSelectedId(style.id);
                  if (activeTab === "categories") setDrawerOpen(true);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    setSelectedId(style.id);
                    if (activeTab === "categories") setDrawerOpen(true);
                  }
                }}
                className={`relative bg-white rounded-3xl p-4 shadow-[0_6px_18px_rgba(0,0,0,0.06)] border flex flex-col items-center cursor-pointer transition-all ${
                  selectedId === style.id
                    ? "border-gray-300 ring-2 ring-gray-900/60"
                    : "border-gray-100 hover:border-gray-200"
                }`}
              >
                {activeTab === "dashboard" && (
                  <span className="absolute top-2 left-2 px-2 py-0.5 rounded-full text-[10px] bg-gray-900 text-white/95">
                    سابقه
                  </span>
                )}
                {/* Placeholder for Image */}
                <div className="w-28 h-28 bg-gray-50 border border-gray-200 rounded-2xl mb-3 flex items-center justify-center">
                  <span className="text-gray-400 text-xs">بدون عکس</span>
                </div>
                <span className="text-sm font-medium text-gray-900">
                  {style.name}
                </span>
                {activeTab === "dashboard" && (
                  <span className="mt-1 text-[11px] text-gray-500">
                    انتخاب قبلی
                  </span>
                )}
              </div>
            )
          )}
        </div>
      )}

      {/* Bottom Button */}
      {activeTab === "categories" ? (
        <Drawer open={drawerOpen} onOpenChange={setDrawerOpen}>
          <DrawerTrigger asChild>
            <Button
              disabled={!selectedId}
              className={`w-full mt-10 py-5 rounded-2xl text-lg font-semibold flex items-center justify-center gap-3 ${
                selectedId
                  ? "bg-black hover:bg-gray-900 text-white"
                  : "bg-gray-200 text-gray-500 cursor-not-allowed"
              }`}
              onClick={() => setDrawerOpen(true)}
            >
              <span>ارسال مدل</span>
              <div className="w-7 h-7 rounded-lg bg-white/15 flex items-center justify-center">
                <Upload className="w-4 h-4 text-white" />
              </div>
            </Button>
          </DrawerTrigger>
          <DrawerContent>
            <div className="mx-auto w-full max-w-sm">
              <DrawerHeader>
                <DrawerTitle>ارسال فایل</DrawerTitle>
                <div className="flex justify-center gap-12 mt-6">
                  {/* Camera */}
                  <div className="flex flex-col items-center">
                    <div className="p-[2.5px] rounded-2xl bg-gradient-to-br from-purple-600 via-purple-800 to-black">
                      <Button
                        variant="ghost"
                        className="flex flex-col w-20 h-20 rounded-2xl gap-3 bg-gray-900 group items-center justify-center hover:bg-gray-800 transition p-0"
                      >
                        <Camera className="!w-10 !h-10 text-white" />
                      </Button>
                    </div>
                    <span className="text-sm font-bold text-gray-900 mt-1">
                      دوربین
                    </span>
                  </div>

                  {/* Gallery */}
                  <div className="flex flex-col items-center">
                    <div className="p-[2.5px] rounded-2xl bg-gradient-to-br from-purple-600 via-purple-800 to-black">
                      <Button
                        variant="ghost"
                        className="flex flex-col w-20 h-20 rounded-2xl gap-3 bg-gray-900 group items-center justify-center hover:bg-gray-800 transition p-0"
                      >
                        <Image className="!w-10 !h-10 text-white" />
                      </Button>
                    </div>
                    <span className="text-sm font-bold text-gray-900 mt-1">
                      گالری
                    </span>
                  </div>
                </div>
                <div className="mt-6"></div>
              </DrawerHeader>
            </div>
          </DrawerContent>
        </Drawer>
      ) : (
        <Button
          disabled={!selectedId}
          className={`w-full mt-10 py-5 rounded-2xl text-lg font-semibold flex items-center justify-center ${
            selectedId
              ? "bg-black hover:bg-gray-900 text-white"
              : "bg-gray-200 text-gray-500 cursor-not-allowed"
          }`}
        >
          انتخاب
        </Button>
      )}
    </div>
  );
};

export default HairStyleSelection;
