import { useSelector } from "react-redux";

const Display = () => {
  const { numbers } = useSelector(({ phone }) => phone);

  return <span className="number">{numbers}</span>;
};

export default Display;
