import { LuLoader2 } from "react-icons/lu";

const Loading = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <LuLoader2 size={100} className="animate-spin text-primary/50" />
    </div>
  );
};

export default Loading;
