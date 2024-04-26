import { TTag } from "@/types/data";

export function Tag({ title, color, descriptions }: TTag) {
  return (
    <div
      className="flex flex-col p-2 rounded "
      style={{ backgroundColor: color }}
    >
      <span className="text-white font-bold">{title}</span>
      <span className="text-sm text-white/70">{descriptions}</span>
    </div>
  );
}
