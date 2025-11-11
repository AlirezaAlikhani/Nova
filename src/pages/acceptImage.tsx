import LoggingImage from "../assets/images/carchter.png";
import { Camera, Image } from "lucide-react";
// import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/Button";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";

export const Accsept = () => {
  // const navigate = useNavigate();

  return (
    <div
      dir="rtl"
      className="bg-white h-[100dvh] flex flex-col justify-center items-center font-sans overflow-hidden fixed inset-0 px-6"
    >
      <main className="flex flex-col items-center justify-center space-y-8 w-full max-w-sm">
        {/* Illustration + Text */}
        <div className="flex flex-col items-center text-center">
          <img
            src={LoggingImage}
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
            className="w-full text-lg font-semibold py-3 rounded-lg"
          >
            تایید
          </Button>

          {/* ارسال دوباره دکمه توخالی */}
          <Drawer>
            <DrawerTrigger asChild>
              <Button
                variant="outline"
                className="w-full  text-lg font-semibold py-3 rounded-lg"
              >
                ارسال دوباره
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
                </DrawerHeader>
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </main>
    </div>
  );
};
