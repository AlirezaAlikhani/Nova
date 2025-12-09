import {
  ChevronLeft,
  RotateCcw,
  ArrowRight,
  Scissors,
  Camera,
  User2Icon,
  LogOut,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import testAfterImage from "../assets/images/carchter.png";

export const FinalizePage = () => {
  const navigate = useNavigate();
  const location = useLocation() as { state?: { file?: File } };
  const [notes, setNotes] = useState("");
  const [beforeImageUrl, setBeforeImageUrl] = useState<string | null>(null);

  useEffect(() => {
    const file = location.state?.file;
    if (file) {
      const url = URL.createObjectURL(file);
      setBeforeImageUrl(url);

      // Also convert to base64 and save to localStorage as backup
      const reader = new FileReader();
      reader.onloadend = () => {
        if (reader.result) {
          localStorage.setItem("beforeImage", reader.result as string);
        }
      };
      reader.readAsDataURL(file);

      return () => {
        URL.revokeObjectURL(url);
      };
    }
  }, [location.state?.file]);

  return (
    <div
      dir="rtl"
      className="bg-white h-[100dvh] flex flex-col font-sans fixed inset-0 overflow-y-auto pt-3 sm:pt-4 pb-6 sm:pb-8 md:pb-10 px-4 sm:px-5 md:px-6"
    >
      {/* Header */}
      <header className="flex mb-4 sm:mb-6 items-center justify-between py-2 sm:py-3">
        <button
          onClick={() => navigate("/login")}
          className="flex bg-white items-center gap-1 text-gray-900 px-2 py-1 rounded-xl"
        >
          <LogOut className="w-4 h-4 sm:w-5 sm:h-5" />
          <span className="text-sm sm:text-base font-semibold">خروج</span>
        </button>
        <button
          onClick={() => navigate(-1)}
          className="flex items-center bg-white gap-1 text-gray-900 px-2 py-1 rounded-xl"
        >
          <span className="text-sm sm:text-base font-medium">بازگشت</span>
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </header>

      {/* Preview Images */}
      <div className="flex items-center justify-center gap-3 sm:gap-4 md:gap-5 mb-4 sm:mb-6">
        <div className="flex flex-col items-center">
          <span className="text-xs sm:text-sm font-semibold text-gray-700 mb-1 sm:mb-2">
            بعد
          </span>
          <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-44 lg:w-48 lg:h-48 rounded-2xl sm:rounded-3xl overflow-hidden shadow border border-gray-200">
            <img
              src={testAfterImage}
              alt="after"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 p-2 sm:p-2.5 md:p-3 rounded-full bg-black flex items-center justify-center">
          <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" />
        </div>
        <div className="flex flex-col items-center">
          <span className="text-xs sm:text-sm font-semibold text-gray-700 mb-1 sm:mb-2">
            قبل
          </span>
          <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-44 lg:w-48 lg:h-48 rounded-2xl sm:rounded-3xl overflow-hidden shadow border border-gray-200">
            {beforeImageUrl ? (
              <img
                src={beforeImageUrl}
                alt="before"
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                <span className="text-gray-400 text-xs">بدون عکس</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Title and helper */}
      <div className="text-center mb-3 sm:mb-4">
        <h1 className="text-lg sm:text-xl md:text-2xl font-extrabold text-gray-900 px-2">
          چه چیزی را تغییر می‌دهید؟
        </h1>
        <p className="mt-1 sm:mt-2 text-gray-500 text-xs sm:text-sm leading-5 sm:leading-6 px-2">
          برای ما بنویسید که دقیقا چه تغییراتی را در هر قسمت صورت نیاز دارید
        </p>
      </div>

      {/* Notes input */}
      <textarea
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        placeholder="اینجا بنویسید"
        className="w-full mt-3 sm:mt-4 h-40 sm:h-48 md:h-56 rounded-xl sm:rounded-2xl border bg-white border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-900/80 p-3 sm:p-4 text-sm sm:text-base text-gray-900 placeholder:text-gray-600 mb-auto"
      />

      {/* Actions */}
      <div className="flex mt-auto pt-6 sm:pt-8 md:pt-10 pb-4 sm:pb-6 md:pb-8 items-end justify-center gap-4 sm:gap-5 md:gap-6">
        {/* History */}
        <div className="flex flex-col items-center">
          <div className="p-[2.5px] sm:p-[3px] md:p-[3.5px] rounded-full border-2 border-gray-200">
            <Button
              variant="outline"
              disabled={true}
              className="flex flex-col w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full gap-2 sm:gap-3 group items-center justify-center hover:bg-gray-800 transition p-0"
            >
              <User2Icon className="!w-8 !h-8 sm:!w-9 sm:!h-9 md:!w-10 md:!h-10 text-black" />
            </Button>
          </div>
          <span className="text-sm sm:text-base font-bold text-gray-400 mt-1 sm:mt-1.5">
            مدل
          </span>
        </div>

        {/* Trim - Center & Bigger */}
        <div className="flex flex-col items-center transform -translate-y-4 sm:-translate-y-6 md:-translate-y-8 lg:-translate-y-10">
          <div className="p-[10px] sm:p-[12px] md:p-[14px] lg:p-[16px] rounded-full bg-gradient-to-br from-purple-900 via-purple-900 to-black">
            <Button
              variant="ghost"
              className="flex flex-col w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 rounded-full gap-2 sm:gap-3 bg-black group items-center justify-center hover:bg-gray-900 transition p-0"
              onClick={async () => {
                // Convert file to base64 for better transfer
                let base64Image = beforeImageUrl;
                if (
                  location.state?.file &&
                  !beforeImageUrl?.startsWith("data:")
                ) {
                  const reader = new FileReader();
                  base64Image = await new Promise<string>((resolve) => {
                    reader.onloadend = () => {
                      resolve(reader.result as string);
                    };
                    reader.readAsDataURL(location.state!.file!);
                  });
                }

                navigate("/loading-result", {
                  state: {
                    fromFinalize: true,
                    beforeImageUrl: base64Image,
                    file: location.state?.file,
                  },
                });
              }}
            >
              <Scissors
                className="text-white !h-14 !w-14 sm:!h-16 sm:!w-16 md:!h-[4.5rem] md:!w-[4.5rem] lg:!h-20 lg:!w-20"
                strokeWidth={1.4}
              />
            </Button>
          </div>
          <span className="text-base sm:text-lg font-bold text-gray-900 mt-1 sm:mt-1.5">
            پیرایش
          </span>
        </div>

        {/* Contact */}
        <div className="flex flex-col items-center">
          <div className="p-[2.5px] sm:p-[3px] md:p-[3.5px] rounded-full border-2 border-gray-200">
            <Button
              variant="outline"
              disabled={true}
              className="flex flex-col w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full gap-2 sm:gap-3 group items-center justify-center hover:bg-gray-800 transition p-0"
            >
              <Camera className="!w-9 !h-9 sm:!w-10 sm:!h-10 md:!w-11 md:!h-11 text-black" />
            </Button>
          </div>
          <span className="text-sm sm:text-base font-bold text-gray-400 mt-1 sm:mt-1.5">
            جدید
          </span>
        </div>
      </div>
    </div>
  );
};

export default FinalizePage;
