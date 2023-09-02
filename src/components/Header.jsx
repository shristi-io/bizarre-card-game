function Header({ score, highscore }) {
  return (
    <header className="grid md:grid-cols-2 md:order-1 h-64 bg-gradient-to-b from-black/50 to-fuchsia-400 p-5 mb-8 md:mb-0">
      <h1>
        <span className="inline-block text-6xl font-rubik text-transparent bg-clip-text bg-gradient-to-b from-pink-500 to-slate-50 translate-y-5">
          <span className="text-8xl">Jo</span>
          Jo's
        </span>{" "}
        <br />
        <span
          className="inline-block text-4xl text-red-700 translate-x-[70px] -translate-y-3 font-condensed 
          animate-[zoom_0.5s_2s_linear_6_alternate]
        [text-shadow:_-1px_1px_0_rgb(255_255_255)_,__1px_1px_0_rgb(255_255_255)_,__1px_-1px_0_rgb(255_255_255)_,__-1px_-1px_0_rgb(255_255_255)]  
        "
        >
          Bizarre Card Game
        </span>
      </h1>
      <ul
        className="text-center md:text-right order-3 md:order-2 font-rubik text-red-700
      [text-shadow:_-1px_1px_0_rgb(255_255_255)_,__1px_1px_0_rgb(255_255_255)_,__1px_-1px_0_rgb(255_255_255)_,__-1px_-1px_0_rgb(255_255_255)] "
      >
        <li>Score: {score}</li>
        <li>Highscore: {highscore}</li>
      </ul>
      <p className="md:col-start-1 md:col-end-3 md:order-3 font-sans font-bold text-xl mt-7 text-pink-700">
        Get points by clicking on an image but don't click on any more than
        once!
      </p>
    </header>
  );
}

export default Header;
