import ThemeButton from "./ThemeButton";
import ThemeProvider from "./ThemeProvider";

const Theme = () => {
  return (
    <>
      <ThemeProvider>
        <div>
          <h2>Theme Context</h2>
        </div>
        <ThemeButton />
      </ThemeProvider>
    </>
  );
};

export default Theme;
