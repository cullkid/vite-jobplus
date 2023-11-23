import React, { useEffect, useState } from "react";
import "./sector.scss";

import {
  TechBig,
  TechSmall,
  EngBig,
  EngSmall,
  HealthBig,
  HealthSmall,
} from "../images";
import { useApi } from "../../hooks/useApi";

// export default function
const sector = () => {
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [sectors, setSectors] = useState([]);

  const { get } = useApi();

  const handleSuccess = (res) => {
    setTitle(res.data.data.data.attributes.tittle);
    setSubTitle(res.data.data.attributes.subTittle);
    setSectors(res.data.data.attributes.sectors.data);
  };

  console.log("title", title);

  const fetchHomeSector = async () => {
    await get("home-sector", {
      onSuccess: (res) => handleSuccess(res),
      params: {
        "populate[sectors][populate][categories][populate][jobs]": true,
        "populate[sectors][populate][smallImage]": true,
        "populate[sectors][populate][bigImage]": true,
      },
    });
  };

  useEffect(() => {
    fetchHomeSector();
  }, []);

  return (
    <div className="sector">
      <h2>{title}ee</h2>
      <p>{subTitle}</p>

      <div className="sector__types">
        <div className="sector__wrap">
          <picture className="sector__picture">
            <source srcSet={TechBig} media="(min-width: 767px)" />
            <source srcSet={TechSmall} />
            <img src={TechSmall} alt="" />
          </picture>
          <div className="sector__name">Technology</div>
          <ul className="sector__list">
            <li>
              <a href="">
                Accountancy jobs <span>5, 757</span>
              </a>
            </li>
            <li>
              <a href="">
                Acturial jobs <span>5, 757</span>
              </a>
            </li>
            <li>
              <a href="">
                Admin, Secretarial jobs <span>5, 757</span>
              </a>
            </li>
          </ul>
        </div>

        <a href="">
          <div className="sector__browse">Browse all sectors</div>
        </a>

        <ul className="sector__mlist">
          <li>
            <a href="">
              Accountancy jobs <span>5, 757</span>
            </a>
          </li>
          <li>
            <a href="">
              Acturial jobs <span>5, 757</span>
            </a>
          </li>
          <li>
            <a href="">
              Admin, Secretarial jobs <span>5, 757</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default sector;

{
  /* <div className="sector__wrap">
          <picture className="sector__picture">
            <source srcSet={EngBig} media="(min-width: 767px)" />
            <source srcSet={EngSmall} />
            <img src={EngSmall} alt="" />
          </picture>
          <div className="sector__name">Engineering</div>
          <ul className="sector__list">
            <li>
              <a href="">
                Accountancy jobs <span>5, 757</span>
              </a>
            </li>
            <li>
              <a href="">
                Acturial jobs <span>5, 757</span>
              </a>
            </li>
            <li>
              <a href="">
                Admin, Secretarial jobs <span>5, 757</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="sector__wrap">
          <picture className="sector__picture">
            <source srcSet={HealthBig} media="(min-width: 767px)" />
            <source srcSet={HealthSmall} />
            <img src={HealthSmall} alt="" />
          </picture>
          <div className="sector__name">Health</div>
          <ul className="sector__list">
            <li>
              <a href="">
                Accountancy jobs <span>5, 757</span>
              </a>
            </li>
            <li>
              <a href="">
                Acturial jobs <span>5, 757</span>
              </a>
            </li>
            <li>
              <a href="">
                Admin, Secretarial jobs <span>5, 757</span>
              </a>
            </li>
          </ul>
        </div> */
}
