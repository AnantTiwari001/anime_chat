import { useState } from "react";
import PointContext from "./PointContext";

const PointState = (props) => {
  // const state= 12;
  const [point, setPoint] = useState(15);
  const [rough, setRough] = useState("whatever");

  const [login, setLogin] = useState(false);

  const handleSetRough = (newValue) => {
    setRough(newValue);
  };

  const handleSetPoint = (newValue) => {
    setPoint(newValue);
  };
  const handleSetlogin = () => {
    setLogin(!login);
  };
  return (
    <PointContext.Provider
      value={{
        point: { value: point, setFunc: handleSetPoint },
        rough: { value: rough, setFunc: handleSetRough },
        login: { value: login, setFunc: handleSetlogin },
      }}
    >
      {props.children}
    </PointContext.Provider>
  );
};

export default PointState;
