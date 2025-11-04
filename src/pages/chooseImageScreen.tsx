import { ChevronRight, Camera, Image } from "lucide-react";
import LoggingImage from "../assets/images/Logging.jpg";



export const ChooseImageScreen = () => {

  return (
    <div
      dir="rtl"
      className="bg-white h-[100dvh] flex flex-col font-sans overflow-hidden fixed inset-0"
    >
      {/* Header: Back + Title */}
      <header className="flex items-center justify-between px-4 pt-3 pb-2">
        <button className="flex items-center gap-1 text-lg font-semibold text-gray-900">
          <ChevronRight className="w-5 h-5 rotate-180" />
          بازگشت
        </button>
        <div className="flex-1 text-center pr-8">
          <span className="text-sm text-red-500 font-medium">فرستادن عکس</span>
          <ChevronRight className="inline w-4 h-4 text-red-500 -rotate-90 mx-1" />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 space-y-8">
        {/* Barber Illustration (SVG) */}
        <div className="w-64 h-64 border-4 border-purple-600 rounded-2xl p-6 bg-white shadow-lg">
          <svg
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            {/* Barber */}
            <g transform="translate(60, 20)">
              <path
                d="M40 60c0-15-12-27-27-27s-27 12-27 27v30h54V60z"
                fill="#fff"
                stroke="#000"
                strokeWidth="2"
              />
              <circle cx="13" cy="50" r="8" fill="#000" />
              <path
                d="M13 58v5m-5-3h10"
                stroke="#000"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path d="M0 90h54" stroke="#000" strokeWidth="2" />
              <path
                d="M10 90v30c0 10 10 15 20 15s20-5 20-15V90"
                fill="#fff"
                stroke="#000"
                strokeWidth="2"
              />
              {/* Scissors */}
              <path
                d="M5 45l-10-10 5-5 10 10-5 5z"
                fill="#fff"
                stroke="#000"
                strokeWidth="2"
              />
              <path d="M5 45l-10 10" stroke="#000" strokeWidth="2" />
              <path d="M5 35l-10-10" stroke="#000" strokeWidth="2" />
              {/* Comb */}
              <path
                d="M45 40h10v5h-10v10h-5v-10h-10v-5h10v-10h5v10z"
                fill="#fff"
                stroke="#000"
                strokeWidth="2"
              />
            </g>
            {/* Client */}
            <g transform="translate(90, 100)">
              <circle
                cx="0"
                cy="0"
                r="25"
                fill="#fff"
                stroke="#000"
                strokeWidth="2"
              />
              <path
                d="M-20 25h40v40c0 15-18 25-20 25s-20-10-20-25v-40z"
                fill="#fff"
                stroke="#000"
                strokeWidth="2"
              />
            </g>
          </svg>
        </div>

        {/* Title */}
        <div className="text-center space-y-2">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
            چه کسی رو اصلاح کنیم؟
          </h1>
          <p className="text-sm text-gray-500 max-w-xs mx-auto">
            عکسی از فردی که می‌خواهید اصلاح کنید بفرستید
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-8 mt-6">
          {/* Camera */}
          <button className="flex flex-col items-center gap-3 group">
            <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center group-hover:bg-gray-800 transition active:scale-95 shadow-lg">
              <Camera className="w-10 h-10 text-white" />
            </div>
            <span className="text-base font-medium text-gray-900">Camera</span>
          </button>

          {/* Gallery */}
          <button className="flex flex-col items-center gap-3 group">
            <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center group-hover:bg-gray-800 transition active:scale-95 shadow-lg">
              <Image className="w-10 h-10 text-white" />
            </div>
            <span className="text-base font-medium text-gray-900">Gallery</span>
          </button>
        </div>
      </main>

      {/* Safe Area Bottom */}
      <div className="h-8"></div>
    </div>
  );
};
