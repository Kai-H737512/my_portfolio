import React from "react";
import { toast } from "./use-toast";

export function ToastDemo() {
  const showSuccessToast = () => {
    toast({
      variant: "success",
      title: "成功！",
      description: "操作已成功完成。",
    });
  };

  const showErrorToast = () => {
    toast({
      variant: "error",
      title: "错误！",
      description: "操作失败，请重试。",
    });
  };

  return (
    <div className="flex gap-4">
      <button
        onClick={showSuccessToast}
        className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
      >
        显示成功提示
      </button>
      <button
        onClick={showErrorToast}
        className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
      >
        显示错误提示
      </button>
    </div>
  );
} 