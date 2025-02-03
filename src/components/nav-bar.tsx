import { CgHomeAlt } from "react-icons/cg";
import MenuButton from "./menu-button";
import ExerciseCard from "./exercise-card";

function NavBar() {
  return (
    <nav className="flex justify-between items-center p-4 fixed w-full top-0 text-primary">
      <MenuButton>
        <div className="flex flex-col gap-3 py-3 px-2">
          <button className="bg-button rounded-lg py-2 my-3">
            New Exercise
          </button>
          {/* Mapping over the array of exercises */}
          <ul className="flex flex-col gap-3">
            <ExerciseCard />
            <ExerciseCard />
            <ExerciseCard />
            <ExerciseCard />
            <ExerciseCard />
            <ExerciseCard />
          </ul>
        </div>
      </MenuButton>
      <CgHomeAlt size={25} className="cursor-pointer" />
    </nav>
  );
}

export default NavBar;
