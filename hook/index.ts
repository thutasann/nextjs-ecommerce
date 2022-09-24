import { useReducer } from "react";

const useToggle = () => {
    const [state, dispatch] = useReducer((state: any, action: any) => {
        switch (action) {
        case "on":
            return "on";
        default:
            return "off";
        }
    }, "off");
    return { state, dispatch };
};

export default useToggle;