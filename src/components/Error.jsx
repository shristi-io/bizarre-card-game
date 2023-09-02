function VictoryMessage() {
  return (
    <>
      <div
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-4xl
        max-h-96 bg-pink-500 p-8 pt-2 z-50 transition-all duration-500 rounded-xl shadow-[0_0_10px_5px_rgba(0,0,0,0.3)]"
      >
        <h2 className="font-rubik text-red-700 [text-shadow:_-1px_1px_0_rgb(255_255_255)_,__1px_1px_0_rgb(255_255_255)_,__1px_-1px_0_rgb(255_255_255)_,__-1px_-1px_0_rgb(255_255_255)]">
          Unfortunately we couldn't load the data! <br /> Please try again
          later.
        </h2>
      </div>

      <div className="fixed top-0 left-0 w-full h-full bg-black/[0.40] backdrop-blur-sm z-10 transition-all duration-500"></div>
    </>
  );
}

export default VictoryMessage;
