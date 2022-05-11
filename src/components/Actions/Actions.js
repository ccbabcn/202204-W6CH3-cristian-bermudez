import { useContext } from "react";
import { useSelector } from "react-redux";
import PhoneContext from "../../contexts/PhoneContext";
import Action from "../Action/Action";
import Display from "../Display/Display";

const Actions = () => {
  const { call, hang } = useContext(PhoneContext);
  const { numbers, onCall } = useSelector(({ phone }) => phone);
  return (
    <>
      <Display />
      {!onCall && (
        <Action
          action="call"
          isActive={numbers.length === 9}
          actionOnClick={call}
        />
      )}
      {onCall && <Action action="hang" isActive={true} actionOnClick={hang} />}
    </>
  );
};

export default Actions;
