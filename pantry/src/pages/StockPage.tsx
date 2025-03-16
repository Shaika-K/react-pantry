import { FC, MouseEventHandler, useState } from "react";

interface Props {
    change?: number;
    onClick?: MouseEventHandler;
}

const CountingButton: FC<Props> = ({ change = 2, onClick }) => {
    const [count, setCount] = useState(0);
    const incrementCount = () => setCount((count) => count + 1)

    const shouldChange = count === change;

    const handleOnClick: MouseEventHandler = (e) => {
        incrementCount();
        onClick?.(e);
    };
    return (
        <button onClick={handleOnClick} style={{ backgroundColor: shouldChange ? "green" : "inherit" }}>
            count is {count}
        </button>
    );
}

export default CountingButton;