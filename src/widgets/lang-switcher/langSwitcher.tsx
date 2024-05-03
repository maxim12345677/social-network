import { useTranslation } from "react-i18next";
import Button from "shared/ui/button/Button";

interface LoadSwitcherProps {
  className?: string;
}

const ThemeSwitcher = ({ className }: LoadSwitcherProps) => {
  const { t, i18n } = useTranslation();
  const toggleLanguage = () =>
    i18n.changeLanguage((i18n.language = "ru" ? "en" : "ru"));

  return <Button className={className} onClick={toggleLanguage} />;
};

export default ThemeSwitcher;
