import React, { Suspense, useState } from "react";
import {CRSIcon} from '../assets/icons/Icons';
<img src={LoaderGif}/>
import LoaderGif from "../assets/images/loader.gif"
import Button from '../components/Button';

const CRS = () => {
  const [data, setData] = useState({
    n: "",
    p: "",
    k: "",
    temperature: "",
    humidity: "",
    ph: "",
    rainfall: "",
  });
  const [cropresult, setCrop] = useState(null);
  const [cropImg, setCropImg] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log(data);

    try {
      const response = await fetch("https://huhu-ukg8.onrender.com/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      console.log("Crop Recommendation Result:", result);
      const localStorageCropImages = JSON.parse(
        localStorage.getItem("cropImages")
      );
      if (!localStorageCropImages || !localStorageCropImages[cropresult]) {
        const res = await fetch(
          `https://api.unsplash.com/search/photos?page=1&query=${
            result.crop
          }&client_id=${import.meta.env.VITE_UNSPLASH_CLIENT_ID}`,
          {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          }
        );
        const imgData = await res.json();
        console.log("imgData", imgData);
        const imgaes = imgData.results
          .slice(0, 4)
          .map((img) => img.urls.regular);
        setCropImg(imgaes);
        if (localStorageCropImages) {
          localStorage.setItem(
            "cropImages",
            JSON.stringify({ ...localStorageCropImages, [result.crop]: imgaes })
          );
        } else {
          localStorage.setItem(
            "cropImages",
            JSON.stringify({ [result.crop]: imgaes })
          );
        }
      } else {
        setCropImg(localStorageCropImages[result.crop]);
      }
      setCrop(result.crop);
      await wait(3500);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const wait = async (time = 3500) => new Promise((resolve) => setTimeout(resolve, time));

  console.log("crop", cropresult);
  console.log("cropImg", cropImg);

  return (
    <>
      <div className="box m-10 p-4 grid grid-cols-2 gap-4">
        <div>
          <div className="space-y-1 text-left mb-4">
            <h2 className="font-kumbh text-2xl font-bold inline-flex">
              <CRSIcon/> Crop Recommendation
            </h2>
            <p className="text-placeholder">
              Fill out your the following details about your land to recieve
              personalized results
            </p>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col">
              <label className="flex items-center text-base mb-1 font-semibold">
                Nitrogen
              </label>
              <input
                type="text"
                id="nitrogen"
                name="nitrogen"
                value={data.n}
                onChange={(e) => setData({ ...data, n: e.target.value })}
                className="input-div px-3 p-2"
              />
            </div>
            <div className="flex flex-col">
              <label className="flex items-center text-base mb-1 font-semibold">
                Phosphorous
              </label>
              <input
                type="text"
                id="phosphorous"
                name="phosphorous"
                value={data.p}
                onChange={(e) => setData({ ...data, p: e.target.value })}
                className="input-div px-3 p-2"
              />
            </div>
            <div className="flex flex-col">
              <label className="flex items-center text-base mb-1 font-semibold">
                Potassium
              </label>
              <input
                type="text"
                id="potassium"
                name="potassium"
                value={data.k}
                onChange={(e) => setData({ ...data, k: e.target.value })}
                className="input-div px-3 p-2"
              />
            </div>
            <div className="flex flex-col">
              <label className="flex items-center text-base mb-1 font-semibold">
                Temperature
              </label>
              <input
                type="text"
                id="temperature"
                name="temperature"
                value={data.temperature}
                onChange={(e) =>
                  setData({ ...data, temperature: e.target.value })
                }
                className="input-div px-3 p-2"
              />
            </div>
            <div className="flex flex-col">
              <label className="flex items-center text-base mb-1 font-semibold">
                Humidity
              </label>
              <input
                type="text"
                id="humidity"
                name="humidity"
                value={data.humidity}
                onChange={(e) => setData({ ...data, humidity: e.target.value })}
                className="input-div px-3 p-2"
              />
            </div>
            <div className="flex flex-col">
              <label className="flex items-center text-base mb-1 font-semibold">
                Rainfall
              </label>
              <input
                type="text"
                id="rainfall"
                name="rainfall"
                value={data.rainfall}
                onChange={(e) => setData({ ...data, rainfall: e.target.value })}
                className="input-div px-3 p-2"
              />
            </div>
            <div className="flex flex-col">
              <label className="flex items-center text-base mb-1 font-semibold">
                pH Level
              </label>
              <input
                type="text"
                id="phLevel"
                name="phLevel"
                value={data.ph}
                onChange={(e) => setData({ ...data, ph: e.target.value })}
                className="input-div px-3 py-2"
              />
            </div>
            <Button loading={loading} type={"submit"} text={'Start Analysis'} />
          </form>
        </div>
        <div className="white-box p-4 flex items-center justify-center">
          {loading ? (
            <img src={LoaderGif} className="relative object-contain"/>
          ) : (
            <>
              <div className="grid grid-cols-2 gap-2 w-full h-full">
                <h2 className="text-left capitalize font-bold text-2xl font-kumbh">
                  {cropresult}
                </h2>
                <div></div>
                {cropImg &&
                  cropImg.map((img) => (
                      <img
                        className="w-full rounded-lg aspect-square object-cover h-full"
                        src={img}
                        alt="crop"
                      />
                  ))}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default CRS;