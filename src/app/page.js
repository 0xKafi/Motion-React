import Button from "@/components/Button";

export default function Page() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900"
      style={{
        backgroundImage: `radial-gradient(circle, rgba(6,182,212,0.2) 0.5px, transparent 1px)`,
        backgroundSize: "8px 8px",
        backgroundRepeat: "repeat"
      }}
      >
      <Button></Button>
    </div>
  );
}