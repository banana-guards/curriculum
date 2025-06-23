import "./Button.css";

interface ButtonTypes {
  text: string;
  color: string;
  backgroundColor: string;
  link: string;
}

export const Button = ({ text, color, backgroundColor, link }: ButtonTypes) => {
  return (
    <button style={{ backgroundColor }} className="button">
      <a href={link} target="_blank" style={{ color }} className="button__link">
        {text}
      </a>
    </button>
  );
};
