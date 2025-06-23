import "./Button.css";

interface ButtonTypes {
  text: string;
  color: string;
  backgroundColor: string;
  link: string;
}

export const Button = ({ text, color, backgroundColor, link }: ButtonTypes) => {
  return (
    <a
      href={link}
      target="_blank"
      style={{ color, backgroundColor }}
      className="button"
    >
      {text}
    </a>
  );
};
