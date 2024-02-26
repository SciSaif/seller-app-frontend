import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MyButton from "./Button";
import { Link } from "react-router-dom";

const BackNavigationButton = ({ onClick }) => {
    return (
        <div className="w-fit">
            <MyButton
                className="!text-black"
                icon={<ArrowBackIcon />}
                title="BACK"
                onClick={onClick}
            />
        </div>
    );
};

export default BackNavigationButton;
