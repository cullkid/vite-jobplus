import React, { useEffect, useState } from "react";
import "./sector.scss";
import { useApi } from "../../hooks/useApi";

const BASE_URE = import.meta.env.VITE_BASE_URL;

const sector = () => {
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [sectors, setSectors] = useState([]);

  const { get } = useApi();

  const handleSuccess = (res) => {
    const {
      title,
      subTitle,
      sectors: { data: sectorArray },
    } = res.data.data.attributes;

    setTitle(title);
    setSubTitle(subTitle);
    setSectors(sectorArray);
  };

  const fetchHomeSector = async () => {
    await get("home-sector", {
      onSuccess: (res) => console.log(res),
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
      <h2>{title}</h2>
      <p>{subTitle}</p>

      <div className="sector__types">
        {sectors.map((sector) => {
          const { id, title, smallImage, bigImage, categories } =
            sector.attributes;
          const { url: smallImageUrl } = smallImage.data.attributes;
          const { url: bigImageUrl } = bigImage.data.attributes;
          // console.log(categories);
          return (
            <div key={sector.id} className="sector__wrap">
              <picture className="sector__picture">
                <source
                  srcSet={`${BASE_URE}${bigImageUrl}`}
                  media="(min-width: 767px)"
                />
                <source srcSet={`${BASE_URE}${smallImageUrl}`} />
                <img src={`${BASE_URE}${smallImageUrl}`} alt="" />
              </picture>
              <div className="sector__name">{title}</div>

              <ul className="sector__list">
                {categories.data.map((category) => {
                  // const { title } = category.attributes;
                  console.log("category", category);
                  return (
                    <li key={category.id}>
                      <a href="">
                        {category.attributes.title}
                        <span>{category.attributes.jobs.data.length}</span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}

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
