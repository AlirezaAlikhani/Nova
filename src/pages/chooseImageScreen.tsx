import { ChevronRight, Camera, Image, LogOut, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import barberLottieUrl from "../assets/images/character.lottie?url";

export const ChooseImageScreen = () => {
  const navigate = useNavigate();
  const galleryInputRef = useRef<HTMLInputElement | null>(null);
  const cameraInputRef = useRef<HTMLInputElement | null>(null);

  const handlePickFromGallery = () => {
    galleryInputRef.current?.click();
  };

  const handleOpenCamera = () => {
    cameraInputRef.current?.click();
  };

  const handleFileSelected = (file?: File | null) => {
    if (!file) return;
    navigate("/loading", { state: { file } });
  };

  return (
    <div
      dir="rtl"
      className="bg-white h-[100dvh] flex flex-col font-sans overflow-hidden fixed inset-0"
    >
      {/* Header: Back + Title */}
      <header className="flex items-center justify-between px-5 pt-4 pb-2">
        <button
          onClick={() => navigate("/login")}
          className="flex items-center bg-white gap-1 text-gray-900 px-2 py-1 rounded-xl"
        >
          <LogOut className="w-5 h-5" />
          <span className="text-base font-semibold">خروج</span>
        </button>
        <Button
          variant="ghost"
          className="flex items-center text-black bg-white gap-1 text-lg font-semibold"
          onClick={() => navigate(-1)}
        >
          <span className="text-base font-medium">بازگشت</span>
          <ChevronLeft className="w-5 h-5" />
        </Button>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 space-y-8">
        {/* Barber Illustration (Lottie) */}
        <div className="w-72 h-72">
          <DotLottieReact
            src={barberLottieUrl}
            loop
            autoplay
            className="w-full h-full"
          />
        </div>

        {/* Title */}
        <div className="text-center space-y-2">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
            چه کسی رو اصلاح کنیم؟
          </h1>
          <p className="text-sm text-gray-500 max-w-xs mx-auto">
            عکسی از فردی که می‌خواهید اصلاح کنید بفرستید
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex !mt-10 gap-10">
          {/* Camera */}
          <div className="flex flex-col items-center">
            <div className="p-[2.5px] rounded-full bg-gradient-to-br from-purple-600 via-purple-800 to-black">
              <Button
                variant="ghost"
                className="flex flex-col w-20 h-20 rounded-full gap-3 bg-gray-900 group items-center justify-center hover:bg-gray-800 transition p-0"
                onClick={handleOpenCamera}
              >
                <Camera className="!w-10 !h-10 text-white" />
              </Button>
            </div>
            <span className="text-sm font-bold text-gray-900 mt-1">دوربین</span>
          </div>

          {/* Gallery */}
          <div className="flex flex-col items-center">
            <div className="p-[2.5px] rounded-full bg-gradient-to-br from-purple-600 via-purple-800 to-black">
              <Button
                variant="ghost"
                className="flex flex-col w-20 h-20 rounded-full gap-3 bg-gray-900 group items-center justify-center hover:bg-gray-800 transition p-0"
                onClick={handlePickFromGallery}
              >
                <Image className="!w-10 !h-10 text-white" />
              </Button>
            </div>
            <span className="text-sm font-bold text-gray-900 mt-1">گالری</span>
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
      </main>

      {/* Safe Area Bottom */}
      <div className="h-8"></div>
    </div>
  );
};
