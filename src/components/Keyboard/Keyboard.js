import { useContext } from "react";
import { useDispatch } from "react-redux";
import PhoneContext from "../../contexts/PhoneContext";
import { addNumberActionCreator } from "../../redux/features/phone/phoneSlice";
import Key from "../Key/Key";

const Keyboard = () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const { removeLastDigit, calling } = useContext(PhoneContext);

  const dispatch = useDispatch();
  const numberAdder = (number) => dispatch(addNumberActionCreator(number));

  return (
    <ol className="keyboard">
      {numbers.map((number) => (
        <Key
          key={number}
          text={number}
          disabled={calling}
          actionOnClick={() => numberAdder(number)}
        />
      ))}
      <Key
        text="delete"
        big={true}
        actionOnClick={removeLastDigit}
        disabled={calling}
      />
    </ol>
  );
};

export default Keyboard;
