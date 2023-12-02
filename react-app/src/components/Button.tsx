interface Props {
  children: string;
  color?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark";
  onclick: () => void;
}

const Button = ({ children, onclick, color = "primary" }: Props) => {
  return (
    <button className={"btn btn-" + color} onClick={onclick}>
      {children}
    </button>
  );
};

export default Button;
