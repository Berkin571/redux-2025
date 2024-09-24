import "./App.css";
import { Button } from "antd";
import { useEffect, useState } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const getRandomText = () => {
    const words = [
      "ist",
      "schön",
      "Haus",
      "Auto",
      "Leben",
      "Reise",
      "Schaden",
      "Polizei",
      "Gesundheit",
      "Risiko",
      "Beruf",
      "Freizeit",
      "Vertrag",
      "wird",
      "erledigt",
      "sein",
      "Er",
      "Sie",
      "macht",
      "Gebäude",
      "Liebe",
    ];
    const randomLength = Math.floor(Math.random() * 10) + 5;
    return Array.from(
      { length: randomLength },
      () => words[Math.floor(Math.random() * words.length)]
    ).join(" ");
  };

  const List = () => {
    const randomTexts = Array.from({ length: 1000 }, () => getRandomText()); // 50 zufällige Texte

    return (
      <ul
        style={{
          textDecoration: "none",
          listStyle: "none",
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
          textAlign: "left",
        }}
      >
        {randomTexts.map((text, index) => (
          <li key={index} style={{ borderBottom: "1px solid #ddd" }}>
            {text}
          </li>
        ))}
      </ul>
    );
  };

  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        setIsLoading(false);
        setIsClicked(true);
      }, 2000);
    }
  }, [isLoading]);
  return (
    <>
      <Button
        type="primary"
        loading={isLoading}
        onClick={() => setIsLoading(!isLoading)}
      >
        {isLoading
          ? "Loading"
          : isClicked
          ? "Daten aktualisieren"
          : "Lade Daten"}
      </Button>
      {!isLoading && isClicked && <List />}
    </>
  );
}

export default App;
