import React from "react";
import Logo from "../Assets/Vectors/logo.png";
import Row from "./Util/Row";
import Tile from "./Util/Tile";
import { ReactComponent as Facebook } from "../Assets/Icons/facebook.svg";
import { ReactComponent as Instagram } from "../Assets/Icons/instagram.svg";

export default function Footer(props) {
  return (
    <div className="footer">
      <div className="social-line">
        <div className="social-icons">
          <a href="https://www.facebook.com/FightClubTownsville/">
            <Facebook />
          </a>
          <a href="https://www.instagram.com/fightclubtownsville/">
            <Instagram />
          </a>
        </div>
      </div>
      <footer>
        <Row>
          <Tile>
            <img src={Logo} alt="Fight Club Jiu-Jitsu" />
          </Tile>
          <Tile>
            <p>
              <strong>Email:</strong>
              <a href="mailto: fightclubtsv@hotmail.com">
                fightclubtsv@hotmail.com
              </a>
            </p>
            <p>
              <strong>Phone:</strong> 0484 062 027
            </p>
            <p>
              <strong>Address:</strong> 50 Bamford Lane, Townsville - QLD,
              Australia
            </p>
            <p>
              <strong>Abn:</strong> 85 937 401 694
            </p>
            <br />
            <strong>Fight Club Jiu-Jitsu | Townsville 2019 ©</strong>
          </Tile>
        </Row>
      </footer>
    </div>
  );
}
