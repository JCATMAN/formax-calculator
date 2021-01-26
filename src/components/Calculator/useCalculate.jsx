import { useContext, useState } from "react";
import { useSnackbar } from "notistack";
import { useHistory } from "react-router-dom";
import ResultContext from "../../context/ResultContext";

export default function useCalculate() {
  const { result, onSetResult } = useContext(ResultContext);
  const history = useHistory();
  const [actionToUse, setActionToUse] = useState("");
  const [firstValue, setFirstValue] = useState("");
  const [secondValue, setSecondValue] = useState("");
  const { enqueueSnackbar } = useSnackbar();

  const pressedButton = (val) => () => {
    if (
      ["+", "-", "*", "/"].some((action) =>
        actionToUse.toString().includes(action)
      )
    ) {
      setFirstValue(result.toString());
      setSecondValue(secondValue + val.toString());
      onSetResult(secondValue + val.toString());
    } else {
      onSetResult(result.toString() + val.toString());
    }
  };

  const pressedAction = (action) => () => {
    switch (action) {
      case "CE":
        onSetResult("");
        setActionToUse("");
        break;
      case "C":
        onSetResult(
          result.length > 1
            ? Array.from(result)
                .splice(0, result.length - 1)
                .join("")
            : ""
        );
        setActionToUse("");
        break;

      default:
        setActionToUse(action);
        break;
    }
  };

  const equalsView = () => {
    switch (actionToUse) {
      case "+":
        setActionToUse("");
        onSetResult(parseInt(firstValue, 10) + parseInt(secondValue, 10));
        setSecondValue("");
        history.push("/show-result");
        break;
      case "-":
        setActionToUse("");
        onSetResult(parseInt(firstValue, 10) - parseInt(secondValue, 10));
        setSecondValue("");
        history.push("/show-result");
        break;
      case "*":
        setActionToUse("");
        onSetResult(parseInt(firstValue, 10) * parseInt(secondValue, 10));
        setSecondValue("");
        history.push("/show-result");
        break;
      case "/":
        setActionToUse("");
        if (parseInt(secondValue) > 0) {
          onSetResult(parseInt(firstValue, 10) + parseInt(secondValue, 10));
          setSecondValue("");
          history.push("/show-result");
        } else {
          enqueueSnackbar("No puedes dividir por cero", { variant: "error" });
        }
        break;

      default:
        setActionToUse("");
        history.push("/show-result");
        break;
    }
  };

  return { result, pressedButton, pressedAction, equalsView };
}
