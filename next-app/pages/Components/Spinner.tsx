export default function Spinner() {
  return (
    <div className="flex justify-center items-center space-x-2">
      <div className="
        spinner-border
        animate-spin
        inline-block
        w-10
        h-10
        border-5
        rounded-full
        text-purple-500" 
        role="status">
        <span className="visually-hidden">🪄</span>
      </div>
    </div>
  );
}