import LoggingImage from "../assets/images/carchter.png";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/Button";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  DrawerClose,
} from "@/components/ui/drawer";

export const Accsept = () => {
  const navigate = useNavigate();

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
            onClick={() => navigate("/login")}
            className="w-full text-lg font-semibold py-3 rounded-lg"
          >
            تایید
          </Button>

          {/* ارسال دوباره دکمه توخالی */}
          <Drawer>
            <DrawerTrigger asChild>
              <Button
                variant="outline"
                className="w-full text-lg font-semibold py-3 rounded-lg"
              >
                ارسال دوباره
              </Button>
            </DrawerTrigger>

            <DrawerContent>
              <div className="mx-auto w-full max-w-sm">
                <DrawerHeader>
                  <DrawerTitle>عنوان Drawer</DrawerTitle>
                  <DrawerDescription>
                    توضیح کوتاه یا محتوای اولیه اینجا قرار می‌گیرد.
                  </DrawerDescription>
                </DrawerHeader>

                {/* اینجا می‌تونی هر محتوایی که خواستی بذاری */}
                <div className="p-4">
                  <p>این محتوای ساده Drawer است.</p>
                </div>

                <DrawerFooter>
                  <DrawerClose asChild>
                    <Button variant="outline">بستن</Button>
                  </DrawerClose>
                </DrawerFooter>
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </main>
    </div>
  );
};
