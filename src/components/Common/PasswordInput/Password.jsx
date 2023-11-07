import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Input from "@material-ui/core/Input";
import { useState } from "react";
import "./Password.css";

export const Password = () => {
    const [values, setValues] = useState(false);

    const handleClickShowPassword = () => {
        setValues(!values);
    };
    
    return (
        <Input
            className="pinput"
            placeholder="Contraseña"
            type={values ? "text" : "password"}
            // onChange={handleLoginFormChange}
            endAdornment={
            <InputAdornment position="end">
                <IconButton
                onClick={handleClickShowPassword}
                >
                {values ? <Visibility /> : <VisibilityOff />}
                </IconButton>
            </InputAdornment>
            }
        />
    );
} 