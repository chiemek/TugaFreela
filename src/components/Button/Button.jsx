import "./Button.css";

const Button = ({
  textColor,
  bgColor,
  onClick,
  children,
  size,
  margin,
  width,
  height,
  padding,
  font,
  borderRadius,
}) => {
  return (
    <button
      style={{
        backgroundColor: bgColor,
        color: textColor,
        fontWeight: size,
        margin: margin,
        width: width,
        height: height,
        padding: padding,
        fontSize: font,
        borderRadius: borderRadius,
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
