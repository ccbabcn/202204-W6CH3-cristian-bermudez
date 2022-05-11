import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import PhoneContext from "../../contexts/PhoneContext";
import {
  addNumberActionCreator,
  deleteNumberActionCreator,
} from "../../redux/features/phone/phoneSlice";
import Key from "../Key/Key";

const Keyboard = () => {
  const dispatch = useDispatch();
  const { numbers: inputedNumbers } = useSelector(({ phone }) => phone);

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const { calling } = useContext(PhoneContext);

  const numberAdder = (number) => {
    if (inputedNumbers.length < 9) {
      dispatch(addNumberActionCreator(number));
    }
  };

  const numberDeletter = () => {
    dispatch(deleteNumberActionCreator());
  };

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
        actionOnClick={numberDeletter}
        disabled={calling}
      />
    </ol>
  );
};

export default Keyboard;
