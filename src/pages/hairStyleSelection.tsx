import {
  ChevronLeft,
  Upload,
  RotateCcw,
  Camera,
  Image,
  LogOut,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useNavigate } from "react-router-dom";
import { useEffect, useMemo, useState, useRef } from "react";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import bazkatImage from "../assets/images/category/baz.jpg";
import sidePartImage from "../assets/images/category/side.png";
import mulletImage from "../assets/images/category/molet.jpg";
import curlyImage from "../assets/images/category/curl.jpg";
import spikyImage from "../assets/images/category/spagty.png";
import pompadourImage from "../assets/images/category/pamador.png";

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
  const galleryInputRef = useRef<HTMLInputElement | null>(null);
  const cameraInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const raw = localStorage.getItem("previousModels");
    if (raw) {
      try {
        setPreviousModels(JSON.parse(raw));
      } catch {
        setPreviousModels([]);
      }
    }
  }, []);

  const handlePickFromGallery = () => {
    galleryInputRef.current?.click();
  };

  const handleOpenCamera = () => {
    cameraInputRef.current?.click();
  };

  const handleFileSelected = (file?: File | null) => {
    if (!file) return;
    setDrawerOpen(false);
    navigate("/accsept", { state: { file } });
  };

  const hairstyles = useMemo(
    () => [
      {
        id: 1,
        name: "بازکات",
        image: bazkatImage,
      },
      {
        id: 2,
        name: "ساید پارت",
        image: sidePartImage,
      },
      {
        id: 3,
        name: "مولت",
        image: mulletImage,
      },
      {
        id: 4,
        name: "فر",
        image: curlyImage,
      },
      {
        id: 5,
        name: "اسپایکی",
        image: spikyImage,
      },
      {
        id: 6,
        name: "پامپادور",
        image: pompadourImage,
      },
    ],
    []
  );

  return (
    <div
      dir="ltr"
      className="bg-white h-[100dvh] p-5 flex flex-col font-sans overflow-hidden fixed inset-0"
    >
      {" "}
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
      <main className="flex-1 bg-white flex flex-col overflow-hidden">
        {/* Tabs */}
        <div className="w-full mb-4 bg-[#e7e7e7] rounded-xl py-[7px] flex items-center">
          <button
            onClick={() => setActiveTab("dashboard")}
            className={`flex-1 p-1 text-lg font-semibold rounded-xl mx-1 transition ${
              activeTab === "dashboard"
                ? "bg-black text-white"
                : "text-black bg-[#e7e7e7]"
            }`}
          >
            داشبورد
          </button>
          <button
            onClick={() => setActiveTab("categories")}
            className={`flex-1 p-1 text-lg font-semibold rounded-xl mx-1 transition ${
              activeTab === "categories"
                ? "bg-black text-white"
                : "text-black bg-[#e7e7e7]"
            }`}
          >
            دسته بندی ها
          </button>
        </div>

        {/* Scrollable List */}
        <div className="flex-1 overflow-y-auto px-4 pb-5">
          {activeTab === "dashboard" && previousModels.length === 0 ? (
            <div className="flex items-center justify-center h-full text-sm text-gray-500">
              هنوز سابقه‌ای ندارید. از تب «دسته بندی ها» یک مدل انتخاب کنید.
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-4 pb-5">
              {(activeTab === "categories" ? hairstyles : previousModels).map(
                (style) => (
                  <button
                    key={style.id}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setSelectedId(style.id);
                      if (activeTab === "categories") {
                        navigate("/hair-style-details", {
                          state: { categoryName: style.name },
                        });
                      }
                    }}
                    className={`flex flex-col items-center rounded-3xl bg-white shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition-all px-4 pt-5 pb-4 cursor-pointer ${
                      selectedId === style.id
                        ? "border-2 border-black"
                        : "border border-transparent hover:border-gray-200"
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
                )
              )}
            </div>
          )}
        </div>
      </main>
      {/* Bottom Button */}
      {activeTab === "categories" ? (
        <Drawer open={drawerOpen} onOpenChange={setDrawerOpen}>
          <DrawerTrigger asChild>
            <Button
              className={`w-full mt-3 py-4 text-base font-semibold flex items-center justify-center gap-3`}
              onClick={() => {
                if (!selectedId) return;
                setDrawerOpen(true);
              }}
            >
              <span>ارسال مدل</span>
              <div className="w-7 h-7 bg-white/15 flex items-center justify-center">
                <Upload className="w-4 h-4 text-white" />
              </div>
            </Button>
          </DrawerTrigger>

          <DrawerContent>
            <div className="mx-auto w-full max-w-sm">
              <DrawerHeader>
                <DrawerTitle className="text-center">ارسال فایل</DrawerTitle>
                <div className="flex justify-center gap-12 mt-6">
                  {/* Gallery */}
                  <div className="flex flex-col items-center">
                    <Button
                      variant="outline"
                      className="flex flex-col w-20 h-20 rounded-2xl border-2 border-gray-900 items-center justify-center hover:bg-gray-50 transition p-0 bg-white"
                      onClick={handlePickFromGallery}
                    >
                      <Image className="!w-10 !h-10 text-gray-900" />
                    </Button>
                    <span className="text-sm font-bold text-gray-900 mt-1">
                      گالری
                    </span>
                  </div>

                  {/* Camera */}
                  <div className="flex flex-col items-center">
                    <Button
                      variant="outline"
                      className="flex flex-col w-20 h-20 rounded-2xl border-2 border-gray-900 items-center justify-center hover:bg-gray-50 transition p-0 bg-white"
                      onClick={handleOpenCamera}
                    >
                      <Camera className="!w-10 !h-10 text-gray-900" />
                    </Button>
                    <span className="text-sm font-bold text-gray-900 mt-1">
                      دوربین
                    </span>
                  </div>
                </div>

                {/* Hidden file inputs */}
                <input
                  ref={galleryInputRef}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => handleFileSelected(e.target.files?.[0])}
                />
                <input
                  ref={cameraInputRef}
                  type="file"
                  accept="image/*"
                  capture="environment"
                  className="hidden"
                  onChange={(e) => handleFileSelected(e.target.files?.[0])}
                />
              </DrawerHeader>
            </div>
          </DrawerContent>
        </Drawer>
      ) : (
        <Button
          disabled={!selectedId}
          className={`w-full mt-3 py-4 text-base font-semibold flex items-center justify-center${
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
