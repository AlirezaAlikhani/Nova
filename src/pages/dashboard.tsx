import { ChevronLeft, Camera, Image, LogOut, User2Icon } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useNavigate } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import barberLottieUrl from "../assets/images/character.lottie";

export const Dashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<"upload" | "previous">("upload");
  const [previousFiles, setPreviousFiles] = useState<
    { id: number; name: string; image: string }[]
  >([]);
  const [selectedFile, setSelectedFile] = useState<{
    id: number;
    name: string;
    image: string;
  } | null>(null);
  const [renameModalOpen, setRenameModalOpen] = useState(false);
  const [newFileName, setNewFileName] = useState("");
  const galleryInputRef = useRef<HTMLInputElement | null>(null);
  const cameraInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    // Load previous files from localStorage
    const saved = localStorage.getItem("dashboardFiles");
    if (saved) {
      try {
        setPreviousFiles(JSON.parse(saved));
      } catch {
        setPreviousFiles([]);
      }
    }
  }, []);

  const handlePickFromGallery = () => {
    galleryInputRef.current?.click();
  };

  const handleOpenCamera = () => {
    cameraInputRef.current?.click();
  };

  const handleFileSelected = (file?: File | null) => {
    if (!file) return;
    navigate("/accsept", { state: { file, fromDashboard: true } });
  };

  const handleDeleteFile = () => {
    if (!selectedFile) return;
    const updated = previousFiles.filter((f) => f.id !== selectedFile.id);
    setPreviousFiles(updated);
    localStorage.setItem("dashboardFiles", JSON.stringify(updated));
    setSelectedFile(null);
  };

  const handleRenameFile = () => {
    if (!selectedFile || !newFileName.trim()) return;
    const updated = previousFiles.map((f) =>
      f.id === selectedFile.id ? { ...f, name: newFileName.trim() } : f
    );
    setPreviousFiles(updated);
    localStorage.setItem("dashboardFiles", JSON.stringify(updated));
    setSelectedFile(null);
    setRenameModalOpen(false);
    setNewFileName("");
  };

  const openRenameModal = () => {
    if (selectedFile) {
      setNewFileName(selectedFile.name);
      setRenameModalOpen(true);
    }
  };

  return (
    <div
      dir="rtl"
      className="bg-white h-[100dvh] flex flex-col font-sans overflow-hidden fixed inset-0"
    >
      {/* Header */}
      <header className="flex items-center justify-between px-4 pt-3 pb-2 flex-shrink-0">
        <button
          onClick={() => navigate("/login")}
          className="flex items-center bg-white gap-1 text-gray-900 px-2 py-1 rounded-xl"
        >
          <span className="text-sm sm:text-base font-semibold">خروج</span>
          <LogOut className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
        <button
          onClick={() => navigate("/home-screen")}
          className="flex items-center bg-white gap-1 text-gray-900 px-2 py-1 rounded-xl"
        >
          <span className="text-sm sm:text-base font-medium">بازگشت</span>
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-y-auto px-4 sm:px-6 py-3 sm:py-4">
        {/* Title */}
        <div className="text-center mb-4 sm:mb-6">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 mb-1 sm:mb-2">
            داشبورد
          </h1>
          <p className="text-xs sm:text-sm text-gray-600 px-2">
            مدل های مدنظرتان را جهت دسترسی سریع اضافه کنید
          </p>
        </div>

        {/* Tabs */}
        <div className="w-full mb-4 sm:mb-6 bg-[#e7e7e7] rounded-xl py-[6px] sm:py-[7px] flex items-center">
          <button
            onClick={() => setActiveTab("upload")}
            className={`flex-1 p-1 text-base sm:text-lg font-semibold rounded-xl mx-1 transition ${
              activeTab === "upload"
                ? "bg-black text-white"
                : "text-black bg-[#e7e7e7]"
            }`}
          >
            ارسال فایل
          </button>
          <button
            onClick={() => setActiveTab("previous")}
            className={`flex-1 p-1 text-base sm:text-lg font-semibold rounded-xl mx-1 transition ${
              activeTab === "previous"
                ? "bg-black text-white"
                : "text-black bg-[#e7e7e7]"
            }`}
          >
            فایل های قبلی
          </button>
        </div>

        {activeTab === "upload" ? (
          <>
            {/* Illustration */}
            <div className="flex justify-center mb-4 sm:mb-6">
              <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72">
                <DotLottieReact
                  src={barberLottieUrl}
                  loop
                  autoplay
                  className="w-full h-full"
                />
              </div>
            </div>

            {/* Add New Model Section */}
            <div className="text-center mb-6 sm:mb-8">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2">
                افزودن مدل جدید
              </h2>
              <p className="text-xs sm:text-sm text-gray-600">
                این عکس در داشبورد ذخیره میشود
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex items-end justify-center gap-4 sm:gap-6 md:gap-8 mb-4 sm:mb-6">
              {/* Model - Disabled */}
              <div className="flex flex-col items-center">
                <div className="p-[2.5px] sm:p-[3px] md:p-[3.5px] rounded-full border-2 border-gray-200">
                  <Button
                    variant="outline"
                    disabled={true}
                    className="flex flex-col w-16 h-16 sm:w-20 sm:h-20 rounded-full gap-2 sm:gap-3 group items-center justify-center hover:bg-gray-800 transition p-0"
                  >
                    <User2Icon className="!w-6 !h-6 sm:!w-7 sm:!h-7 md:!w-8 md:!h-8 text-black" />
                  </Button>
                </div>
                <span className="text-xs sm:text-sm font-bold text-gray-400 mt-1">
                  مدل
                </span>
              </div>

              {/* Camera - Active */}
              <div className="flex flex-col items-center transform -translate-y-4 sm:-translate-y-6 md:-translate-y-8">
                <div className="p-[10px] sm:p-[12px] md:p-[14px] rounded-full bg-gradient-to-br from-purple-600 via-purple-800 to-black">
                  <Button
                    variant="ghost"
                    className="flex flex-col w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full gap-2 sm:gap-3 bg-gray-900 group items-center justify-center hover:bg-gray-800 transition p-0"
                    onClick={handleOpenCamera}
                  >
                    <Camera className="!w-10 !h-10 sm:!w-12 sm:!h-12 md:!w-14 md:!h-14 text-white" />
                  </Button>
                </div>
                <span className="text-sm sm:text-base font-bold text-gray-900 mt-1">
                  دوربین
                </span>
              </div>

              {/* Gallery - Active */}
              <div className="flex flex-col items-center transform -translate-y-4 sm:-translate-y-6 md:-translate-y-8">
                <div className="p-[10px] sm:p-[12px] md:p-[14px] rounded-full bg-gradient-to-br from-purple-600 via-purple-800 to-black">
                  <Button
                    variant="ghost"
                    className="flex flex-col w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full gap-2 sm:gap-3 bg-gray-900 group items-center justify-center hover:bg-gray-800 transition p-0"
                    onClick={handlePickFromGallery}
                  >
                    <Image className="!w-10 !h-10 sm:!w-12 sm:!h-12 md:!w-14 md:!h-14 text-white" />
                  </Button>
                </div>
                <span className="text-sm sm:text-base font-bold text-gray-900 mt-1">
                  گالری
                </span>
              </div>
            </div>
          </>
        ) : (
          <div className="flex-1 flex flex-col">
            {previousFiles.length === 0 ? (
              <div className="flex items-center justify-center h-full text-xs sm:text-sm text-gray-500">
                هنوز فایلی اضافه نکرده‌اید
              </div>
            ) : (
              <>
                <div className="grid grid-cols-2 gap-2 sm:gap-2 pb-10 sm:pb-24">
                  {previousFiles.map((file) => (
                    <button
                      key={file.id}
                      onClick={() => {
                        setSelectedFile(file);
                      }}
                      className={`flex flex-col items-center rounded-2xl sm:rounded-3xl bg-white shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition-all px-1 sm:px-3 pt-2 sm:pt-3 pb-2 sm:pb-3 cursor-pointer ${
                        selectedFile?.id === file.id
                          ? "border-2 border-black"
                          : "border border-transparent hover:border-gray-200"
                      }`}
                    >
                      <div className="w-28 h-28 sm:w-24 sm:h-24 mb-1 sm:mb-2 rounded-xl sm:rounded-2xl flex items-center justify-center overflow-hidden">
                        <img
                          src={file.image}
                          alt={file.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <span className="text-xs sm:text-sm font-semibold text-gray-900">
                        {file.name}
                      </span>
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        )}

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

      {/* Action Buttons - Fixed at bottom */}
      {activeTab === "previous" && selectedFile && (
        <div className="flex gap-3 sm:gap-4 px-4 sm:px-6 pt-4 pb-4 sm:pb-6 bg-white border-t border-gray-100">
          <Button
            variant="outline"
            className="flex-1 py-3 sm:py-4 text-base sm:text-lg font-semibold border-2 border-gray-900"
            onClick={openRenameModal}
          >
            تغییر نام
          </Button>
          <Button
            className="flex-1 py-3 sm:py-4 text-base sm:text-lg font-semibold bg-red-600 text-white hover:bg-red-700"
            onClick={handleDeleteFile}
          >
            حذف
          </Button>
        </div>
      )}

      {/* Rename Modal */}
      {renameModalOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => {
              setRenameModalOpen(false);
              setNewFileName("");
            }}
          />
          <div className="relative bg-white rounded-3xl p-6 mx-4 max-w-sm w-full shadow-2xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">
              تغییر نام
            </h2>
            <p className="text-gray-600 text-center mb-4">
              نام جدید را وارد کنید
            </p>
            <input
              type="text"
              value={newFileName}
              onChange={(e) => setNewFileName(e.target.value)}
              placeholder="نام فایل"
              className="w-full px-4 py-3 bg-gray-100 text-lg rounded-2xl border-2 border-gray-200 focus:outline-none focus:border-gray-900 mb-6"
              autoFocus
            />
            <div className="flex gap-4">
              <Button
                variant="outline"
                className="flex-1 py-3 text-lg font-semibold border-2 border-gray-900"
                onClick={() => {
                  setRenameModalOpen(false);
                  setNewFileName("");
                }}
              >
                بازگشت
              </Button>
              <Button
                className="flex-1 py-3 text-lg font-semibold bg-black text-white hover:bg-gray-900"
                onClick={handleRenameFile}
                disabled={!newFileName.trim()}
              >
                تایید
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
