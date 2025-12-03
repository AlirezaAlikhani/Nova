import {
  ChevronLeft,
  RotateCcw,
  ArrowRight,
  Scissors,
  Camera,
  User2Icon,
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
      className="bg-white h-[100dvh] flex flex-col font-sans fixed inset-0 overflow-y-auto pt-4 pb-10 px-6"
    >
      {/* Header */}
      <header className="flex mb-9 items-center justify-between py-3">
        <button className="flex bg-white items-center gap-1 text-gray-900 px-2 py-1 rounded-xl">
          <RotateCcw className="w-5 h-5" />
          <span className="text-base font-semibold">خروج</span>
        </button>
        <button
          onClick={() => navigate(-1)}
          className="flex items-center bg-white gap-1 text-gray-900 px-2 py-1 rounded-xl"
        >
          <span className="text-base font-medium">بازگشت</span>
          <ChevronLeft className="w-5 h-5" />
        </button>
      </header>

      {/* Preview Images */}
      <div className="flex items-center justify-center gap-5 mb-6">
        <div className="flex flex-col items-center">
          <span className="text-sm font-semibold text-gray-700 mb-2">بعد</span>
          <div className="w-36 h-36 rounded-3xl overflow-hidden shadow border border-gray-200">
            <img
              src={testAfterImage}
              alt="after"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="w-10 p-2 rounded-full bg-black flex items-center justify-center">
          <ArrowRight className="w-5 h-5 text-white" />
        </div>
        <div className="flex flex-col items-center">
          <span className="text-sm font-semibold text-gray-700 mb-2">قبل</span>
          <div className="w-36 h-36 rounded-3xl overflow-hidden shadow border border-gray-200">
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
      <div className="text-center mb-4">
        <h1 className="text-2xl font-extrabold text-gray-900">
          چه چیزی را تغییر می‌دهید؟
        </h1>
        <p className="mt-2 text-gray-500 text-sm leading-6">
          برای ما بنویسید که دقیقا چه تغییراتی را در هر قسمت صورت نیاز دارید
        </p>
      </div>

      {/* Notes input */}
      <textarea
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        placeholder="اینجا بنویسید"
        className="w-full mt-4 h-56 rounded-2xl border bg-white border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-900/80 p-4 text-gray-900 placeholder:text-gray-600 mb-10"
      />

      {/* Actions */}
      <div className="flex !mt-20 items-end justify-center gap-6">
        {/* History */}
        <div className="flex flex-col items-center">
          <div className="p-[2.5px] rounded-full border-2 border-gray-200">
            <Button
              variant="outline"
              disabled={true}
              className="flex flex-col w-20 h-20 rounded-full gap-3 group items-center justify-center hover:bg-gray-800 transition p-0"
            >
              <User2Icon className="!w-8 !h-8 text-black" />
            </Button>
          </div>
          <span className="text-sm font-bold text-gray-400 mt-1">مدل</span>
        </div>

        {/* Trim - Center & Bigger */}
        <div className="flex flex-col items-center transform -translate-y-6 sm:-translate-y-10">
          <div className="p-[11px] rounded-full bg-gradient-to-br from-purple-900 via-purple-900 to-black">
            <Button
              variant="ghost"
              className="flex flex-col w-28 h-28 rounded-full gap-3 bg-black group items-center justify-center hover:bg-gray-900 transition p-0"
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
              <Scissors className="text-white !h-14 !w-14" strokeWidth={1.4} />
            </Button>
          </div>
          <span className="text-base font-bold text-gray-900 mt-1">پیرایش</span>
        </div>

        {/* Contact */}
        <div className="flex flex-col items-center">
          <div className="p-[2.5px] rounded-full border-2 border-gray-200">
            <Button
              variant="outline" disabled={true}
              className="flex  flex-col w-20 h-20 rounded-full gap-3 group items-center justify-center hover:bg-gray-800 transition p-0"
            >
              <Camera className="!w-9 !h-9 text-black" />
            </Button>
          </div>
          <span className="text-sm font-bold text-gray-400 mt-1">جدید</span>
        </div>
      </div>
      <div className="h-8"></div>
    </div>
  );
};

export default FinalizePage;
