import Loader from "react-loader-spinner";
const Loadercamp = ({ show }) => {
    return (
        (show) ?
            <div className="loader">
            <Loader
            type="TailSpin"
            color="rgb(155, 236, 34)"
            height={300}
            width={300}
            timeout={3000}
            />
        </div> : ""
    )
}
export default Loadercamp;