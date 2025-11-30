export default function InfoCard({ image, title, subtitle, onClick }) {
  return (
    <div
      onClick={onClick}
      className="relative w-64 h-64 md:w-72 md:h-72 rounded-2xl overflow-hidden shadow-lg cursor-pointer group transition-all"
    >
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover filter blur-sm brightness-75 group-hover:blur-none transition-all duration-500"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black/30 group-hover:bg-black/10 transition-colors duration-500 px-2">
        <h3 className="text-xl md:text-2xl font-semibold mb-2 drop-shadow-lg">{title}</h3>
        <p className="text-sm md:text-base italic text-gray-200">{subtitle}</p>
      </div>
    </div>
  );
}
