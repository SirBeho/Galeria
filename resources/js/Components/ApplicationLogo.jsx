import logo from "/public/assets/colorfullLogo.png";
export default function ApplicationLogo(props) {
    return (
        <span className="h-80 w-9/12 mb-5">
            <img src={logo} height={256} width={256} alt="Logo" className="w-80 " />
        </span>
    );
}
