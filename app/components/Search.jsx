import Image from "next/image";
import { useState } from "react";

const cities = [
  {
    name: "臺北市",
    value: "TaipeiCity",
  }, 
  {
    name: "新北市",
    value: "NewTaipeiCity",
  }, 
  {
    name: "桃園市",
    value: "TaoyuanCity",
  }, 
  {
    name: "新竹縣",
    value: "HsinchuCounty",
  }, 
  {
    name: "新竹科學圈區",
    value: "HsinchuSciencePark",
  }, 
  {
    name: "新竹市",
    value: "HsinchuCity",
  }, 
  {
    name: "苗栗縣",
    value: "MiaoliCounty",
  }, 
  {
    name: "臺中市",
    value: "TaichungCity",
  }, 
  {
    name: "嘉義市",
    value: "ChiayiCity",
  }, 
  {
    name: "臺南市",
    value: "TainanCity",
  }, 
  {
    name: "高雄市",
    value: "KaohsiungCity",
  }, 
  {
    name: "屏東縣",
    value: "PingtungCounty",
  }, 
];

export default function Search({ selectedArea, setSelectedArea, handleSearchStation, allAreas}) {
  const [station, setStation] = useState();

  const handleSelectAllAreas = () => {
    if (selectedArea.length !== allAreas.length) {
      setSelectedArea(allAreas);
    } else {
      setSelectedArea([]);
    };
  };

  const handleSelectArea = (e) => {
    const choseArea = e.target.value;
    if (e.target.checked) {
      setSelectedArea(prev => [...prev, choseArea]);
    } else {
      setSelectedArea(prev => prev.filter(area => area !== choseArea));
    }
  };

  const searchStation = (e) => {
    const inputStation = e.target.value;
    setStation(inputStation);
  };

  return (
    <div className="py-5 px-8 md:px-14 lg:px-20 flex justify-between min-h-[400px]">
      <section className="flex flex-col gap-5">
        <h2 className="text-2xl font-bold text-[#B5CC22]">站點資訊</h2>
        <div className="flex flex-col-reverse md:flex-row gap-3 md:gap-5">
          <select name="chooseCity" id="chooseCity" className="w-full md:w-[175px] h-[40px] p-2 bg-[#F6F6F6] rounded-[8px]">
            {cities.map((city) => {
              return <option value={city.value} key={city.value}>{city.name}</option>
            })}
          </select>
          <div className="relative">
            <input type="text" className="w-full md:w-[277px] h-[40px] p-2 bg-[#F6F6F6] rounded-[8px]" placeholder="搜尋站點" onChange={searchStation} />
            <button className="absolute inset-y-1/4 right-4" onClick={() => handleSearchStation(station)}>
              <Image width={20} height={20} src="/search.svg" alt="search" />
            </button>
          </div>
        </div>
        <div className="flex gap-2">
          <input type="checkbox" name="all" id="all" className="accent-[#B5CC22]" onClick={handleSelectAllAreas} defaultChecked />
          <label htmlFor="all">全部勾選</label>
        </div>
        <div className="flex flex-wrap gap-5 max-w-[500px]">
          {allAreas && allAreas.map((area) => {
            return (
              <div key={area} className="flex gap-2">
                <input type="checkbox" name={area} id={area} value={area} className="accent-[#B5CC22]" onChange={handleSelectArea} checked={selectedArea.includes(area)} />
                <label htmlFor={area}>{area}</label>
              </div>
            )
          })}
        </div>
      </section>
      <Image src="/bike.png" width={502} height={172} className="self-end hidden md:block" alt="bike" />
    </div>
  );
};