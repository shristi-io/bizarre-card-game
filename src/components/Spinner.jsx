import SpinningGif from "../assets/spinner.gif";

function Spinner() {
  return (
    <div className="flex justify-center items-center">
      <img src={SpinningGif} alt="Loading" />
    </div>
  );
}

export default Spinner;
