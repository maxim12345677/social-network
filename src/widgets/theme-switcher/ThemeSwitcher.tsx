import { useTheme } from "app/provider/ThemeProvider";
import Button from "shared/ui/button/Button";

interface ThemeSwitcherProps {
  className?: string;
}

const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { toggleTheme } = useTheme();

  return <Button className={className} onClick={toggleTheme} />;
};

export default ThemeSwitcher;
