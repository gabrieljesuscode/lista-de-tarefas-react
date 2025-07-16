import github from "../assets/github.svg";

function WaterMark() {
  return (
    <a
      href="https://github.com/gabrieljesuscode"
      target="_blank"
      className="py-2 px-3 rounded-lg text-white fixed bottom-12 flex gap-2 bg-slate-700 xl:right-10 active:scale-95 transition"
    >
      Visite meu github <strong>gabrieljesuscode</strong>
      <img src={github} alt="Logo do GitHub" className="w-6 h-6 invert" />
    </a>
  );
}

export default WaterMark;
