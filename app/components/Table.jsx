

export default function Table({filteredData}) {
  return (
    <section className="py-10 px-8 md:px-14 lg:px-20">
      <table className="w-full border-separate border-spacing-0  border-l-[0.5px] border-r-[0.5px] border-b-[0.5px] border-solid border-[#AEAEAE] rounded-[8px] md:rounded-[28px] overflow-hidden">
        <thead>
          <tr className="text-center text-base md:text-lg font-medium bg-[#B5CC22] text-white">
            <th scope="col" className="py-2 md:py-4 px-4 md:px-6">縣市</th>
            <th scope="col" className="w-4/12 md:w-2/12 py-4 px-4 md:px-6 text-nowrap">區域</th>
            <th scope="col" className="md:w-4/12 py-4 px-4 md:px-6">站點名稱</th>
            <th scope="col" className="hidden md:table-cell py-4 px-6">可借車輛</th>
            <th scope="col" className="hidden md:table-cell py-4 px-6">可還空位</th>
          </tr>
        </thead>
        <tbody>
          {filteredData && filteredData.map((item) => (
            <tr key={item.sno} className="text-center text-sm md:text-base font-normal even:bg-[#F6F6F6]">
              <td className="py-2 md:py-4 px-4 md:px-6 text-nowrap">台北市</td>
              <td className="py-2 md:py-4 px-4 md:px-6 ">{item.sarea}</td>
              <td className="py-2 md:py-4 px-4 md:px-6 text-left">{item.sna}</td>
              <td className="hidden md:table-cell py-4 px-6 text-[#B5CC22]">{item.sbi}</td>
              <td className="hidden md:table-cell py-4 px-6 text-[#B5CC22]">{item.bemp}</td>
            </tr>
          ))}
          {filteredData?.length === 0 && (
            <>
              <tr className="text-center text-base font-normal even:bg-[#F6F6F6]">
                <td className="py-4 px-6">台北市</td>
                <td className="py-4 px-6">不分區</td>
                <td className="py-4 px-6 text-left">從上面選個區吧～</td>
                <td className="hidden md:table-cell py-4 px-6 text-[#B5CC22]">00</td>
                <td className="hidden md:table-cell py-4 px-6 text-[#B5CC22]">00</td>
              </tr>
              <tr className="text-center text-base font-normal even:bg-[#F6F6F6]">
                <td className="py-4 px-6">台北市</td>
                <td className="py-4 px-6">不分區</td>
                <td className="py-4 px-6 text-left">從上面選個區吧～</td>
                <td className="hidden md:table-cell py-4 px-6 text-[#B5CC22]">00</td>
                <td className="hidden md:table-cell py-4 px-6 text-[#B5CC22]">00</td>
              </tr>
              <tr className="text-center text-base font-normal even:bg-[#F6F6F6]">
                <td className="py-4 px-6">台北市</td>
                <td className="py-4 px-6">不分區</td>
                <td className="py-4 px-6 text-left">從上面選個區吧～</td>
                <td className="hidden md:table-cell py-4 px-6 text-[#B5CC22]">00</td>
                <td className="hidden md:table-cell py-4 px-6 text-[#B5CC22]">00</td>
              </tr>
            </>
          )}
        </tbody>
      </table>
    </section>
  );
};