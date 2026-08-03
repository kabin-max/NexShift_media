export default function Background() {
  return (
    <div className="fixed inset-0 z-0 bg-[#FAFAFA]">
      {/* Top-left ambient glow */}
      <div className="absolute -top-[10%] -left-[10%] w-[55%] h-[55%] bg-[#4C1D95]/5 blur-[160px] rounded-full pointer-events-none transform-gpu" />
      {/* Bottom-right ambient glow */}
      <div className="absolute -bottom-[10%] -right-[10%] w-[60%] h-[60%] bg-[#4C1D95]/5 blur-[180px] rounded-full pointer-events-none transform-gpu" />
      {/* Center depth layer */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[50%] bg-[#4C1D95]/5 blur-[200px] rounded-full pointer-events-none transform-gpu" />
    </div>
  );
}
