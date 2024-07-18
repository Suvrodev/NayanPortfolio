import React, { useContext, useEffect, useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { AuthContext } from "../../../Provider/AuthProvider";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";

const portfolioContent = [
  "Web Design & Development",
  "Ui/UX",
  "Business Card",
  "Logo Design",
  "Flyer",
];

const UpdatePortfolio = () => {
  const { baseUrl, successfullToast } = useContext(AuthContext);
  const { id } = useParams();
  const location = useLocation();
  const { category } = location.state || {};

  const [portfolio, setPortfolio] = useState("");
  useEffect(() => {
    axios
      .get(`${baseUrl}/portfolios/${id}`)
      .then((res) => setPortfolio(res.data));
  }, []);
  // console.log("Portfolio: ", portfolio);

  const [selected, setSelected] = useState(category);

  const handleChange = (event) => {
    const value = event.target.value;
    setSelected(value);
  };

  const handleUpdatePortfolio = (e) => {
    e.preventDefault();

    const form = e.target;
    const category = selected;
    const image = form.image.value;

    let newPortfolio = { category, image };
    console.log("New Portfolio: ", newPortfolio);

    axios
      .patch(`${baseUrl}/portfolios/${id}`, newPortfolio, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.modifiedCount > 0) {
          successfullToast("Portfolio updated Successfully");
        }
      });
  };
  return (
    <div className="p-28">
      <h1 className="text-2xl text-white font-bold">Update Portfolio</h1>
      <div className="py-10">
        <div className="flex justify-center mb-10">
          <img src={portfolio?.image} alt="" className="w-[450px] h-[320px]" />
        </div>

        <div className="w-full">
          <h1 className="text-xl text-white">Select a service</h1>
          <div className="relative">
            <select
              value={selected}
              onChange={handleChange}
              className="dropdown dropdown-end p-2 mt-5"
            >
              <option value="" disabled>
                Select an option
              </option>
              {portfolioContent.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <ArrowDropDownIcon />
            </div>
          </div>
        </div>

        <form onSubmit={handleUpdatePortfolio}>
          <input
            type="url"
            name="image"
            id=""
            className="w-full bg-transparent border p-5 mt-10"
            placeholder="Image url"
            defaultValue={portfolio?.image}
          />

          <button className="btn text-white w-[250px] mt-10 bg-[#222222] hover:bg-[#444444] border-0">
            Update Portfolio
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdatePortfolio;
