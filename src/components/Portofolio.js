import { useNavigate } from "react-router";

const Portofolio = () => {
  const navigate = useNavigate();

  const handleToPortofolio = () => {
    navigate("/portofolio");
  };

  return (
    <div
      id="portofolio"
      className="bg-slate-200 flex flex-col items-center justify-center p-8 gap-6"
    >
      <h1
        className="text-3xl font-bold text-center"
      >
        Portofolio
      </h1>

      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleToPortofolio}
      >
        Portofolio Projects
      </button>
    </div>
  );
};

export default Portofolio;
