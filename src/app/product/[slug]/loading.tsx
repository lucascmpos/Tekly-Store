import { Progress } from "@/components/ui/progress";

const Loading = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="h-16 w-16 animate-spin rounded-full border-t-4 border-solid border-purple-800"></div>
    </div>
  );
};

export default Loading;
