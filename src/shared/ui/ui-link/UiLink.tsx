import s from "./UiLink.module.scss";

const UiLink = ({ text }: { text: string }) => {
  return <div className={s.text}>{text}</div>;
};

export default UiLink;
