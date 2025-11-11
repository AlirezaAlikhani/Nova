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
      <div className="text-center m-10 mb-4">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-2">
          عکس آماده شد !
        </h1>
        <p className="text-gray-600 text-sm mb-1">
          در استایل جدید اینگونه دیده میشوید
        </p>
        <p className="text-gray-500 text-xs">بازكات - ميدل فید</p>
      </div>

      {/* Before/After Toggle */}
      <div className="flex items-center justify-center mb-6">
        <div className="flex bg-gray-100 rounded-xl p-1 gap-1">
          <button
            onClick={() => setViewMode("before")}
            className={`px-6 py-2 rounded-lg text-sm font-medium transition ${
              viewMode === "before"
                ? "bg-white text-gray-900 shadow-sm"
                : "text-gray-600"
            }`}
          >
            قبل
          </button>
          <button
            onClick={() => setViewMode("after")}
            className={`px-6 py-2 rounded-lg text-sm font-medium transition ${
              viewMode === "after"
                ? "bg-black text-white shadow-sm"
                : "text-gray-600"
            }`}
          >
            بعد
          </button>
        </div>
      </div>

      {/* Main Image */}
      <div className="w-full mb-6">
        <div className="w-3/4 mx-auto aspect-[4/4] rounded-3xl overflow-hidden shadow-lg border border-gray-200">
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

      {/* Action Icons */}
      <div className="flex flex-row-reverse items-center gap-0">
        <button
          onClick={() => {
            // Save functionality
          }}
          className="flex flex-col bg-white items-center gap-1 focus:outline-none focus:border-none"
          tabIndex={0}
        >
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition shadow-none">
            <Download className="w-5 h-5 text-gray-700" />
          </div>
          <span className="text-xs text-gray-600">Save</span>
        </button>

        <button
          onClick={() => {
            // Share functionality
          }}
          className="flex flex-col bg-white items-center gap-1 focus:outline-none focus:border-none"
          tabIndex={0}
        >
          <div className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-200 transition shadow-none">
            <Share2 className="w-5 h-5 text-gray-700" />
          </div>
          <span className="text-xs text-gray-600">Share</span>
        </button>

        <button
          onClick={() => setLiked(liked === true ? null : true)}
          className="flex flex-col bg-white items-center gap-1 focus:outline-none focus:border-none"
          tabIndex={0}
        >
          <div
            className={`w-10 h-10 bg-white rounded-full flex items-center justify-center transition shadow-none ${
              liked === true
                ? "bg-green-100 hover:bg-green-200"
                : "hover:bg-gray-200"
            }`}
          >
            <ThumbsUp
              className={`w-5 h-5 ${
                liked === true ? "text-green-600" : "text-gray-700"
              }`}
            />
          </div>
          <span className="text-xs text-gray-600">Like</span>
        </button>

        <button
          onClick={() => setLiked(liked === false ? null : false)}
          className="flex bg-white flex-col items-center gap-1 focus:outline-none focus:border-none"
          tabIndex={0}
        >
          <div
            className={`w-10 h-10 bg-white rounded-full flex items-center justify-center transition shadow-none ${
              liked === false
                ? "bg-red-100 hover:bg-red-200"
                : "hover:bg-gray-200"
            }`}
          >
            <ThumbsDown
              className={`w-5 h-5  ${
                liked === false ? "text-red-600" : "text-gray-700"
              }`}
            />
          </div>
          <span className="text-xs text-gray-600">Dislike</span>
        </button>
      </div>

      {/* Bottom Buttons */}
      <div className="flex gap-4 mt-auto">
        <Button
          variant="outline"
          className="flex-1 py-4 text-lg font-semibold border-2 border-gray-900"
          onClick={() => navigate("/home-screen")}
        >
          خروج
        </Button>
        <Button
          className="flex-1 py-4 text-lg font-semibold bg-black hover:bg-gray-900 text-white"
          onClick={() => navigate("/finalize")}
        >
          امتحان مجدد
        </Button>
      </div>
    </div>
  );
};

export default ResultPage;
