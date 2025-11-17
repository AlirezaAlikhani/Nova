import { Download, Share2, ThumbsUp, ThumbsDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const ResultPage = () => {
  const navigate = useNavigate();
  const [viewMode, setViewMode] = useState<"before" | "after">("before");
  const [liked, setLiked] = useState<boolean | null>(null);

  return (
    <div
      dir="rtl"
      className="bg-white h-[100dvh] flex flex-col font-sans fixed inset-0 overflow-y-auto pt-4 pb-8 px-6"
    >
      {/* Title Section */}
      <div className="text-center mt-6 mb-4">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-2">
          عکس آماده شد !
        </h1>
        <p className="text-gray-600 text-sm mb-1">
          در استایل جدید اینگونه دیده میشوید
        </p>
        <p className="text-gray-500 text-xs">بازکات - میدل فید</p>
      </div>

      {/* Before/After Toggle */}
      {/* Before / After Toggle */}
      <div className="w-full bg-[#e7e7e7] rounded-3xl p-2 flex items-center">
        <button
          onClick={() => setViewMode("before")}
          className={`flex-1 py-3 text-lg font-semibold rounded-2xl transition ${
            viewMode === "before"
              ? "bg-black text-white"
              : "text-black bg-[#e7e7e7]"
          }`}
        >
          قبل
        </button>

        <button
          onClick={() => setViewMode("after")}
          className={`flex-1 py-3 text-lg font-semibold rounded-2xl transition ${
            viewMode === "after"
              ? "bg-black text-white"
              : "text-black bg-[#e7e7e7]"
          }`}
        >
          بعد
        </button>
      </div>

      {/* Main Image */}
      <div className="w-full mb-6 flex justify-center">
        <div className="w-[85%] aspect-square rounded-3xl overflow-hidden shadow-lg border border-gray-200">
          <img
            src={
              viewMode === "before"
                ? "https://images.unsplash.com/photo-1608889175157-6b9b7ddfb4b4?q=80&w=600&auto=format&fit=crop"
                : "https://images.unsplash.com/photo-1616394584738-909c21d0d5de?q=80&w=600&auto=format&fit=crop"
            }
            alt={viewMode === "before" ? "قبل" : "بعد"}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Actions */}
      {/* Actions - چپ‌چین، بدون بک‌گراند، کنار هم چسبیده */}
      <div className="flex items-center justify-end mt-4">
        <button
          onClick={() => {}}
          className="flex flex-col items-center p-2 bg-transparent focus:outline-none"
        >
          <Download className="w-6 h-6 text-gray-500" />
          <span className="text-xs text-gray-500 mt-1">Save</span>
        </button>

        <button
          onClick={() => {}}
          className="flex flex-col items-center p-2 bg-transparent -ml-2 focus:outline-none"
        >
          <Share2 className="w-6 h-6 text-gray-500" />
          <span className="text-xs text-gray-500 mt-1">Share</span>
        </button>

        <button
          onClick={() => {}}
          className="flex flex-col items-center p-2 bg-transparent -ml-2 focus:outline-none"
        >
          <ThumbsUp className="w-6 h-6 text-gray-500" />
          <span className="text-xs text-gray-500 mt-1">Like</span>
        </button>

        <button
          onClick={() => {}}
          className="flex flex-col items-center p-2 bg-transparent -ml-2 focus:outline-none"
        >
          <ThumbsDown className="w-6 h-6 text-gray-500" />
          <span className="text-xs text-gray-500 mt-1">Dislike</span>
        </button>
      </div>

      {/* Bottom Buttons */}
      <div className="flex gap-4 mt-auto">
        <Button
          variant="outline"
          className="flex-1 py-4 text-lg font-semibold border-2 border-gray-900 rounded-xl"
          onClick={() => navigate("/home-screen")}
        >
          خروج
        </Button>

        <Button
          className="flex-1 py-4 text-lg font-semibold bg-black text-white rounded-xl hover:bg-gray-900"
          onClick={() => navigate("/finalize")}
        >
          امتحان مجدد
        </Button>
      </div>
    </div>
  );
};

export default ResultPage;
