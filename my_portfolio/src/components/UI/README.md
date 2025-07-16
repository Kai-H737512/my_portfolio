# Toast 组件使用说明

## 功能特性

- ✅ 右下角显示小提示
- ✅ 支持成功和失败两种类型
- ✅ 圆角设计，适配深色/浅色模式
- ✅ 弹跳进入动画，自动淡出
- ✅ 响应式设计，适配不同屏幕尺寸
- ✅ 自动关闭功能

## 使用方法

### 1. 在应用中添加 Toaster 组件

在你的主应用组件中添加 `Toaster` 组件：

```jsx
import { Toaster } from "./components/UI/toaster";

function App() {
  return (
    <div>
      {/* 你的应用内容 */}
      <Toaster />
    </div>
  );
}
```

### 2. 使用 toast 函数显示提示

```jsx
import { toast } from "./components/UI/use-toast";

// 显示成功提示
const showSuccessToast = () => {
  toast({
    variant: "success",
    title: "成功！",
    description: "操作已成功完成。",
  });
};

// 显示错误提示
const showErrorToast = () => {
  toast({
    variant: "error",
    title: "错误！",
    description: "操作失败，请重试。",
  });
};
```

### 3. 在表单提交中使用

```jsx
import { toast } from "./components/UI/use-toast";

const handleSubmit = async (formData) => {
  try {
    // 提交表单逻辑
    await submitForm(formData);
    
    // 显示成功提示
    toast({
      variant: "success",
      title: "提交成功",
      description: "您的消息已成功发送。",
    });
  } catch (error) {
    // 显示错误提示
    toast({
      variant: "error",
      title: "提交失败",
      description: "请检查网络连接后重试。",
    });
  }
};
```

## API 参考

### toast 函数参数

```jsx
toast({
  variant: "success" | "error", // 提示类型
  title: string,                // 标题
  description: string,          // 描述
  duration: number,             // 显示时长（毫秒），默认 5 秒
})
```

### 组件文件结构

- `toast.jsx` - 核心 Toast 组件
- `toaster.jsx` - Toaster 容器组件
- `use-toast.jsx` - Toast 状态管理 Hook
- `toast-demo.jsx` - 使用示例

## 样式定制

Toast 组件使用 Tailwind CSS 类名，支持深色/浅色模式自动切换：

- 成功类型：绿色主题
- 错误类型：红色主题
- 响应式设计：移动端和桌面端适配
- 动画效果：弹跳进入，淡出退出 