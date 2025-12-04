import { ChevronLeft, Camera, Image } from "lucide-react";
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
    navigate("/loading", { state: { file, fromDashboard: true } });
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
      <header className="flex items-center justify-end px-4 pt-3 pb-2">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center bg-white gap-1 text-gray-900 px-2 py-1 rounded-xl"
        >
          <span className="text-base font-medium">بازگشت</span>
          <ChevronLeft className="w-5 h-5" />
        </button>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-y-auto px-6 py-4">
        {/* Title */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-extrabold text-gray-900 mb-2">
            داشبورد
          </h1>
          <p className="text-sm text-gray-600">
            مدل های مدنظرتان را جهت دسترسی سریع اضافه کنید
          </p>
        </div>

        {/* Tabs */}
        <div className="w-full mb-6 bg-[#e7e7e7] rounded-xl py-[7px] flex items-center">
          <button
            onClick={() => setActiveTab("upload")}
            className={`flex-1 p-1 text-lg font-semibold rounded-xl mx-1 transition ${
              activeTab === "upload"
                ? "bg-black text-white"
                : "text-black bg-[#e7e7e7]"
            }`}
          >
            ارسال فایل
          </button>
          <button
            onClick={() => setActiveTab("previous")}
            className={`flex-1 p-1 text-lg font-semibold rounded-xl mx-1 transition ${
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
            <div className="flex justify-center mb-6">
              <div className="w-72 h-72">
                <DotLottieReact
                  src={barberLottieUrl}
                  loop
                  autoplay
                  className="w-full h-full"
                />
              </div>
            </div>

            {/* Add New Model Section */}
            <div className="text-center mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-2">
                افزودن مدل جدید
              </h2>
              <p className="text-sm text-gray-600">
                این عکس در داشبورد ذخیره میشود
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-center gap-8 mb-6">
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
                <span className="text-sm font-bold text-gray-900 mt-1">
                  دوربین
                </span>
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
                <span className="text-sm font-bold text-gray-900 mt-1">
                  گالری
                </span>
              </div>
            </div>
          </>
        ) : (
          <div className="flex-1">
            {previousFiles.length === 0 ? (
              <div className="flex items-center justify-center h-full text-sm text-gray-500">
                هنوز فایلی اضافه نکرده‌اید
              </div>
            ) : (
              <>
                <div className="grid grid-cols-2 gap-4 pb-5">
                  {previousFiles.map((file) => (
                    <button
                      key={file.id}
                      onClick={() => {
                        setSelectedFile(file);
                      }}
                      className={`flex flex-col items-center rounded-3xl bg-white shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition-all px-4 pt-5 pb-4 cursor-pointer ${
                        selectedFile?.id === file.id
                          ? "border-2 border-black"
                          : "border border-transparent hover:border-gray-200"
                      }`}
                    >
                      <div className="w-24 h-24 mb-3 rounded-2xl flex items-center justify-center overflow-hidden">
                        <img
                          src={file.image}
                          alt={file.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <span className="text-sm font-semibold text-gray-900">
                        {file.name}
                      </span>
                    </button>
                  ))}
                </div>

                {/* Action Buttons */}
                {selectedFile && (
                  <div className="flex gap-4 mt-auto pb-4">
                    <Button
                      variant="outline"
                      className="flex-1 py-3 text-lg font-semibold border-2 border-gray-900"
                      onClick={openRenameModal}
                    >
                      تغییر نام
                    </Button>
                    <Button
                      className="flex-1 py-3 text-lg font-semibold bg-red-600 text-white hover:bg-red-700"
                      onClick={handleDeleteFile}
                    >
                      حذف
                    </Button>
                  </div>
                )}
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
              className="w-full px-4 py-3 text-lg rounded-2xl border-2 border-gray-200 focus:outline-none focus:border-gray-900 mb-6"
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
