import LoggingImage from "../assets/images/carchter.png";
import { Camera, ChevronLeft, Image, LogOut } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/Button";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";

export const Accsept = () => {
  const navigate = useNavigate();
  const location = useLocation() as {
    state?: { file?: File; imageUrl?: string; fromDashboard?: boolean };
  };
  const selectedFile = location.state?.file;
  const imageUrl = location.state?.imageUrl;
  const fromDashboard = location.state?.fromDashboard;
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [fileName, setFileName] = useState("");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const galleryInputRef = useRef<HTMLInputElement | null>(null);
  const cameraInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (imageUrl) {
      setPreviewUrl(imageUrl);
    } else if (selectedFile) {
      const url = URL.createObjectURL(selectedFile);
      setPreviewUrl(url);
      return () => {
        URL.revokeObjectURL(url);
      };
    } else {
      setPreviewUrl(null);
    }
  }, [selectedFile, imageUrl]);

  const handlePickFromGallery = () => {
    galleryInputRef.current?.click();
  };

  const handleOpenCamera = () => {
    cameraInputRef.current?.click();
  };

  const handleFileSelected = (file?: File | null) => {
    if (!file) return;
    setDrawerOpen(false);
    navigate("/loading", { state: { file, fromDashboard: true } });
  };

  const compressImage = (
    file: File,
    maxWidth: number = 400,
    quality: number = 0.7
  ): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = document.createElement("img");
        img.onload = () => {
          const canvas = document.createElement("canvas");
          let width = img.width;
          let height = img.height;

          // Calculate new dimensions
          if (width > maxWidth) {
            height = (height * maxWidth) / width;
            width = maxWidth;
          }

          canvas.width = width;
          canvas.height = height;

          const ctx = canvas.getContext("2d");
          if (!ctx) {
            reject(new Error("Could not get canvas context"));
            return;
          }

          ctx.drawImage(img, 0, 0, width, height);
          const compressed = canvas.toDataURL("image/jpeg", quality);
          resolve(compressed);
        };
        img.onerror = reject;
        img.src = e.target?.result as string;
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  const handleConfirm = async () => {
    if (fromDashboard && selectedFile) {
      try {
        // Compress image before saving
        const compressedImage = await compressImage(selectedFile, 400, 0.7);

        const saved = localStorage.getItem("dashboardFiles");
        const previousFiles = saved ? JSON.parse(saved) : [];

        // Limit to last 10 files to prevent quota issues
        const limitedFiles = previousFiles.slice(0, 9);

        const newFile = {
          id: Date.now(),
          name: fileName || selectedFile.name || "عکس جدید",
          image: compressedImage,
        };
        const updated = [newFile, ...limitedFiles];
        localStorage.setItem("dashboardFiles", JSON.stringify(updated));
        navigate("/dashboard");
      } catch (error) {
        console.error("Error saving file:", error);
        alert("خطا در ذخیره فایل. لطفا دوباره تلاش کنید.");
      }
    } else {
      navigate("/finalize", { state: { file: selectedFile } });
    }
  };

  return (
    <div
      dir="ltr"
      className="bg-white h-[100dvh] flex flex-col font-sans overflow-hidden fixed inset-0 px-4 sm:px-6"
    >
      {/* Header */}
      <header className="flex items-center justify-between py-3 sm:py-4 flex-shrink-0">
        <button
          onClick={() => {
            if (fromDashboard) {
              navigate("/dashboard");
            } else {
              navigate(-1);
            }
          }}
          className="flex items-center bg-white gap-1 text-gray-900 px-2 py-1 rounded-xl"
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          <span className="text-sm sm:text-base font-medium">بازگشت</span>
        </button>
        <button
          onClick={() => navigate("/login")}
          className="flex bg-white items-center gap-1 text-gray-900 px-2 py-1 rounded-xl"
        >
          <span className="text-sm sm:text-base font-semibold">خروج</span>
          <LogOut className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </header>
      <main className="flex flex-col items-center justify-center space-y-6 sm:space-y-8 w-full max-w-sm mx-auto flex-1">
        {/* Illustration + Text */}
        <div className="flex flex-col items-center text-center">
          <img
            src={previewUrl ?? LoggingImage}
            alt="Logging"
            className="w-[200px] h-[254px] object-cover rounded-xl mb-4"
          />

          <h1 className="text-2xl font-bold text-gray-900">عکس دریافت شد!</h1>

          {fromDashboard ? (
            <p className="text-sm text-gray-500 mt-2 leading-relaxed">
              یک نام کوتاه مانند کد عددی برای آن انتخاب کنید
            </p>
          ) : (
            <p className="text-sm text-gray-500 mt-2 leading-relaxed">
              تایید می‌کنید یا ترجیح می‌دهید دوباره ارسال کنید؟
            </p>
          )}
        </div>

        {/* Name Input (only for dashboard) */}
        {fromDashboard && (
          <div className="w-full mb-4">
            <input
              type="text"
              value={fileName}
              onChange={(e) => setFileName(e.target.value)}
              placeholder="...نام یا عدد وارد کنید"
              className="w-full px-4 py-4 bg-gray-100 text-lg placeholder:text-gray-500 font-bold rounded-full border-2 border-gray-200  text-center"
            />
          </div>
        )}

        {/* Buttons */}
        <div className="w-full space-y-3">
          {/* تایید دکمه مشکی پر */}
          <Button
            className="w-full text-lg font-semibold py-3 "
            onClick={handleConfirm}
          >
            تایید
          </Button>

          {/* ارسال دوباره دکمه توخالی */}
          <Drawer open={drawerOpen} onOpenChange={setDrawerOpen}>
            <DrawerTrigger asChild>
              <Button
                variant="outline"
                className="w-full text-lg font-semibold py-3 "
              >
                ارسال دوباره
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
                </DrawerHeader>
              </div>
            </DrawerContent>
          </Drawer>
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
    </div>
  );
};
