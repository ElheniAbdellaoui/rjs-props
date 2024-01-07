import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Button, Card } from "react-bootstrap";
import StudentList from "./components/StudentList";

function App() {
  const students = [
    {
      id: Math.random(),
      name: "L.Messi",
      attendance: "ARGENTINE",

      imgURL:
        "https://cdn.futbin.com/content/fifa24/img/players/158023.png?v=23",
      pace: "95 PAC",
      shoot: "98 SHO",
      passing: "99 PAS",
      dribling: "99 DRI",
      defense: "41 DEF",
      physique: "81 PHY",
    },
    {
      id: Math.random(),
      name: "K.De bruyne",
      attendance: "BELGIQUE",
      imgURL: "https://cdn.futwiz.com/assets/img/fifa23/faces/201519577.png",
      pace: "76 PAC",
      shoot: "86 SHO",
      passing: "93 PAS",
      dribling: "88 DRI",
      defense: "64 DEF",
      physique: "77 PHY",
    },
    {
      id: Math.random(),
      name: "C.Ronaldo",
      attendance: "PORTOGUAL",
      imgURL: "https://cdn.futbin.com/content/fifa22/img/players/20801.png",
      pace: "98 PAC",
      shoot: "99 SHO",
      passing: "92 PAS",
      dribling: "99 DRI",
      defense: "43 DEF",
      physique: "91 PHY",
    },
    {
      id: Math.random(),
      name: "P.Coutinho",
      attendance: "BRAZIL",
      imgURL: "https://cdn.futbin.com/content/fifa22/img/players/p50520890.png",
      pace: "88 PAC",
      shoot: "88 SHO",
      passing: "90 PAS",
      dribling: "95 DRI",
      defense: "50 DEF",
      physique: "71 PHY",
    },
    {
      id: Math.random(),
      name: "Neymar.Jr",
      attendance: "BRAZIL",

      imgURL:
        "https://cdn.futbin.com/content/fifa22/img/players/p151185815.png?v=23",
      pace: "97 PAC",
      shoot: "99 SHO",
      passing: "98 PAS",
      dribling: "100 DRI",
      defense: "54 DEF",
      physique: "74 PHY",
    },
    {
      id: Math.random(),
      name: "E.HAALAND",
      attendance: "NORWAY",
      imgURL: "https://www.fifplay.com/img/fifa/22/players/p67347949.png",
      pace: "96 PAC",
      shoot: "96 SHO",
      passing: "80 PAS",
      dribling: "88 DRI",
      defense: "60 DEF",
      physique: "94 PHY",
    },
    {
      id: Math.random(),
      name: "S.RAMOS",
      attendance: "ESPAGNE",
      imgURL:
        "https://cdn.futbin.com/content/fifa21/img/players/p134373590.png",
      pace: "94 PAC",
      shoot: "85 SHO",
      passing: "89 PAS",
      dribling: "89 DRI",
      defense: "99 DEF",
      physique: "97 PHY",
    },
    {
      id: Math.random(),
      name: "R.KAKA",
      attendance: "BRASIL",
      imgURL: "https://cdn.futbin.com/content/fifa21/img/players/247075.png",
      pace: "94 PAC",
      shoot: "91 SHO",
      passing: "93 PAS",
      dribling: "96 DRI",
      defense: "48 DEF",
      physique: "78 PHY",
    },
    {
      id: Math.random(),
      name: "L.YASHIN",
      attendance: "RUSSIA",

      imgURL: "https://cdn.futbin.com/content/fifa22/img/players/p246526.png",
      pace: "96 DIV",
      shoot: "90 HAN",
      passing: "77 KIC",
      dribling: "97 REF",
      defense: "62 SPD",
      physique: "96 POS",
    },
    {
      id: Math.random(),
      name: "P.MALDINI",
      attendance: "ITALIE",
      imgURL: "https://cdn.futbin.com/content/fifa22/img/players/238439.png",
      pace: "87 PAC",
      shoot: "57 SHO",
      passing: "76 PAS",
      dribling: "70 DRI",
      defense: "97 DEF",
      physique: "84 PHY",
    },
    {
      id: Math.random(),
      name: "T.A.ARNOLD",
      attendance: "ENGLAND",
      imgURL:
        "https://cdn.fifacm.com/content/media/imgs/fc24/players/p231281.png?v=22",
      pace: "94 PAC",
      shoot: "88 SHO",
      passing: "96 PAS",
      dribling: "93 DRI",
      defense: "93 DEF",
      physique: "90 PHY",
    },
    {
      id: Math.random(),
      name: "A.DAVIES",
      attendance: "CANADA",
      imgURL:
        "https://cdn.futbin.com/content/fifa20/img/players/p50566044.png?v=23",
      pace: "99 PAC",
      shoot: "80 SHO",
      passing: "92 PAS",
      dribling: "94 DRI",
      defense: "88 DEF",
      physique: "88 PHY",
    },
  ];
  return (
    <div className="App">
      <StudentList eleve={students} />
    </div>
  );
}

export default App;
