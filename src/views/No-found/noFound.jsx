import { useNavigate } from "react-router-dom";

function NoFound() {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex items-center h-60">
        <h1 className="mx-auto text-center py-auto my-auto text-4xl">
          Error 404
        </h1>
      </div>
      <div className="mx-auto flex justify-center">
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          {"< Volver al inicio"}
        </button>
      </div>
    </>
  );
}

export default NoFound;
