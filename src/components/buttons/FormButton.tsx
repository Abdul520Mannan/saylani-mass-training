import { type } from "@testing-library/user-event/dist/type";

type ButtonProps = {
    type: "submit"| "button",
    children: String, 
    click?: ()=> void
}

function FormButton({type, children, click}: ButtonProps) {
    return (
        <>
            <button type={type} className="btn btn-primary" onClick={click}>{children}</button>
        </>
    );
}

export default FormButton;