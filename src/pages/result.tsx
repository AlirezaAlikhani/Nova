import { Download, Share2, ThumbsUp, ThumbsDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import testAfterImage from "../assets/images/carchter.png";

export const ResultPage = () => {
  const navigate = useNavigate();
  const location = useLocation() as {
    state?: { beforeImageUrl?: string; file?: File };
  };
  const [viewMode, setViewMode] = useState<"before" | "after">("after");
  const [beforeImageUrl, setBeforeImageUrl] = useState<string | null>(null);
  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);

  useEffect(() => {
    // Get before image from state or file
    const loadBeforeImage = async () => {
      if (location.state?.beforeImageUrl) {
        // If we have a URL string (base64 or blob URL)
        setBeforeImageUrl(location.state.beforeImageUrl);
      } else if (location.state?.file) {
        // If we have a File object, create a blob URL
        const url = URL.createObjectURL(location.state.file);
        setBeforeImageUrl(url);
        return () => {
          URL.revokeObjectURL(url);
        };
      } else {
        // Try to get from localStorage as fallback
        const savedImage = localStorage.getItem("beforeImage");
        if (savedImage) {
          setBeforeImageUrl(savedImage);
        }
      }
    };

    loadBeforeImage();
  }, [location.state]);

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
      <div className="w-full mb-4 bg-[#e7e7e7] rounded-xl py-[7px] flex items-center">
        <button
          onClick={() => setViewMode("after")}
          className={`flex-1 p-1 text-lg font-semibold rounded-xl mx-1 transition ${
            viewMode === "after"
              ? "bg-black text-white"
              : "text-black bg-[#e7e7e7]"
          }`}
        >
          بعد
        </button>

        <button
          onClick={() => setViewMode("before")}
          className={`flex-1 p-1 text-lg font-semibold rounded-xl mx-1 transition ${
            viewMode === "before"
              ? "bg-black text-white"
              : "text-black bg-[#e7e7e7]"
          }`}
        >
          قبل
        </button>
      </div>

      {/* Main Image */}
      <div className="w-full h-[450px] mb-6 flex p-10 justify-center">
        <div className="w-full max-w-md aspect-square rounded-3xl overflow-hidden shadow-lg border border-gray-200">
          {viewMode === "before" ? (
            beforeImageUrl ? (
              <img
                src={beforeImageUrl}
                alt="قبل"
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                <span className="text-gray-400 text-sm">
                  عکس قبل موجود نیست
                </span>
              </div>
            )
          ) : (
            <img
              src={testAfterImage}
              alt="بعد"
              className="w-full h-full object-cover"
            />
          )}
        </div>
      </div>

      {/* Actions */}
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
          onClick={() => {
            setIsLiked(!isLiked);
            if (!isLiked) {
              setIsDisliked(false);
            }
          }}
          className="flex flex-col items-center p-2 bg-transparent -ml-2 focus:outline-none"
        >
          <ThumbsUp
            className={`w-6 h-6 transition-colors ${
              isLiked ? "text-black fill-black" : "text-gray-500"
            }`}
            fill={isLiked ? "currentColor" : "none"}
          />
          <span
            className={`text-xs mt-1 transition-colors ${
              isLiked ? "text-black" : "text-gray-500"
            }`}
          >
            Like
          </span>
        </button>

        <button
          onClick={() => {
            setIsDisliked(!isDisliked);
            if (!isDisliked) {
              setIsLiked(false);
            }
          }}
          className="flex flex-col items-center p-2 bg-transparent -ml-2 focus:outline-none"
        >
          <ThumbsDown
            className={`w-6 h-6 transition-colors ${
              isDisliked ? "text-black fill-black" : "text-gray-500"
            }`}
            fill={isDisliked ? "currentColor" : "none"}
          />
          <span
            className={`text-xs mt-1 transition-colors ${
              isDisliked ? "text-black" : "text-gray-500"
            }`}
          >
            Dislike
          </span>
        </button>
      </div>

      {/* Bottom Buttons */}
      <div className="flex gap-4 mt-auto">
        <Button
          variant="outline"
          className="flex-1 py-4 text-lg font-semibold border-2 border-gray-900 "
          onClick={() => navigate("/home-screen")}
        >
          خروج
        </Button>

        <Button
          className="flex-1 py-4 text-lg font-semibold bg-black text-white  hover:bg-gray-900"
          onClick={() => navigate("/finalize")}
        >
          امتحان مجدد
        </Button>
      </div>
    </div>
  );
};

export default ResultPage;
