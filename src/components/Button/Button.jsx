import './Button.css'

const Button = ({onClick, isDisabled, title, size = 'small', variant = 'secondary' }) => {
    return (
        <button
            className={`btn btn_${size} btn_${variant}`}
            onClick={!isDisabled ? onClick : null}
            disabled={isDisabled}
        >
            {title}
        </button>
    );
}

export default Button;