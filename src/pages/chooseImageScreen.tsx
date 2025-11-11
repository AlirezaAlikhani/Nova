import { ChevronRight, Camera, Image } from "lucide-react";
import LoggingImage from "../assets/images/Logging.jpg";
import { Button } from "@/components/ui/Button";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

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
      <header className="flex items-center justify-end px-4 pt-3 pb-2">
        {/* <div className="flex-1 text-center pr-8">
          <ChevronRight className="inline w-4 h-4 text-red-500 -rotate-90 mx-1" />
          <span className="text-sm text-red-500 font-medium">فرستادن عکس</span>
        </div> */}
        <Button
          variant="ghost"
          className="flex items-center text-black bg-white gap-1 text-lg font-semibold"
          onClick={() => navigate(-1)}
        >
          بازگشت
          <ChevronRight className="w-5 h-5 rotate-180" />
        </Button>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 space-y-8">
        {/* Barber Illustration (SVG) */}
        <div className="w-72 h-72">
          <img
            src={LoggingImage}
            alt="Logging"
            className="w-full h-full object-cover rounded-xl"
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
