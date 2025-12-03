import LoggingImage from "../assets/images/carchter.png";
import { Camera, Image } from "lucide-react";
import { useEffect, useState } from "react";
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
    state?: { file?: File; imageUrl?: string };
  };
  const selectedFile = location.state?.file;
  const imageUrl = location.state?.imageUrl;
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

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

  return (
    <div
      dir="rtl"
      className="bg-white h-[100dvh] flex flex-col justify-center items-center font-sans overflow-hidden fixed inset-0 px-6"
    >
      <main className="flex flex-col items-center justify-center space-y-8 w-full max-w-sm">
        {/* Illustration + Text */}
        <div className="flex flex-col items-center text-center">
          <img
            src={previewUrl ?? LoggingImage}
            alt="Logging"
            className="w-[200px] h-[254px] object-cover rounded-xl mb-4"
          />

          <h1 className="text-2xl font-bold text-gray-900">عکس دریافت شد!</h1>

          <p className="text-sm text-gray-500 mt-2 leading-relaxed">
            تایید می‌کنید یا ترجیح می‌دهید دوباره ارسال کنید؟
          </p>
        </div>

        {/* Buttons */}
        <div className="w-full space-y-3">
          {/* تایید دکمه مشکی پر */}
          <Button
            className="w-full text-lg font-semibold py-3 "
            onClick={() =>
              navigate("/finalize", { state: { file: selectedFile } })
            }
          >
            تایید
          </Button>

          {/* ارسال دوباره دکمه توخالی */}
          <Drawer>
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
      </main>
    </div>
  );
};
