function Footer() {
  return (
    <footer className="mt-8 flex justify-center items-center h-28 bg-gradient-to-t from-black/50 to-fuchsia-400 font-sans font-bold text-lg text-pink-700">
      <p className="text-center">
        A memory card game based on the anime and manga series JoJos's Bizarre
        Adventure by Hirohiko Araki.
        <br />
        Created by{" "}
        <a
          target="_blank"
          className="text-xl hover:text-pink-300 underline"
          href="https://shristi-io.netlify.app/"
        >
          Sibashis Barman
        </a>
      </p>
    </footer>
  );
}

export default Footer;
