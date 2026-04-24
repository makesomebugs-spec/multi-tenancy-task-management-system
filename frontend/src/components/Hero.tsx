import Title from "./Title";
import UnorderedList from "./UnorderedList";

export default function Hero() {
  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
      <Title />

      <div className="absolute grid grid-cols-2 w-full justify-items-center gap-8 px-6 lg:px-8">
        <img src="src/assets/h.png" className="w-84 block" />
        <UnorderedList />
      </div>
    </div>
  );
}
