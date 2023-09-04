export default function InputNilai() {
    return (
        <>  
            <div className="w-full rounded-md shadow-md flex gap-8 mb-16 bg-white py-4 h-[1000px]">
                {/* PDF VIEW */}
                <div className="w-2/5 pl-10 flex flex-col gap-4">
                    <div className="border-2 border-[#484E51] rounded-lg">
                        <select id="tp-jurnal" name="tp-jurnal" className="border-2 border-r-[16px] px-4 py-3 border-white rounded-lg">
                            <option selected className="hidden">TP/Jurnal</option>
                            <option value="1">TP</option>
                            <option value="2">Jurnal</option>
                        </select>
                    </div>
                    {/* TA/JURNAL */}
                    <div className="flex justify-between">
                        <button className="text-2xl">◀️</button>
                        <p>Muhammad Tharreq An Nahl</p>
                        <button className="text-2xl">▶️</button>
                    </div>

                    {/* PDF */}
                    <object data="upload\Note 01 - Pengenalan Sinyal dan Sistem Digital.pdf" type="application/pdf" width="100%" height="80%">
                        <p>Unable to display PDF file. <a href="upload\Note 01 - Pengenalan Sinyal dan Sistem Digital.pdf">Download</a> instead.</p>
                    </object>
                </div>
                
                {/* INPUT VIEW */}
                <div className="w-3/5 px-16 py-16 gap-8 flex flex-col">
                    {/* FORM */}
                    <form action="" className="flex justify-center font-normal gap-4">
                        <div className="border-2 border-[#484E51] rounded-lg">
                            <input type="date" id="tanggal-input" name="tanggal-input" className="border-2 border-r-[16px] px-4 py-3 border-white rounded-lg"></input>
                        </div>
                        <div className="border-2 border-[#484E51] rounded-lg">
                            <select id="modul" name="modul" className="border-2 border-r-[16px] px-4 py-3 border-white rounded-lg">
                                <option selected className="hidden">Modul</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                            </select>
                        </div>
                    </form>

                    {/* TABLE */}
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <table className="w-full text-sm text-left text-gray-500">
                            <thead className="text-sm text-white uppercase bg-[#4DD7BE]">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                Group
                                </th>
                                <th scope="col" className="px-6 py-3">
                                Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                TP
                                </th>
                                <th scope="col" className="px-6 py-3">
                                TA
                                </th>
                                <th scope="col" className="px-6 py-3">
                                Jurnal
                                </th>
                                <th scope="col" className="px-6 py-3">
                                Keaktifan
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr className="bg-white border-b">
                                <th rowSpan="4" 
                                scope="row"
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                                >
                                32
                                </th>
                                <td className="px-6 py-4">Muhammad Tharreq An Nahl</td>
                                <td className="px-6 py-4 text-center">
                                    <input type="text" className="w-8 h-10 border-2 border-gray-200 rounded-md text-center" placeholder="..."/>
                                </td>
                                <td className="px-6 py-4 text-center">
                                    <input type="text" className="w-8 h-10 border-2 border-gray-200 rounded-md text-center" placeholder="..."/>
                                </td>
                                <td className="px-6 py-4 text-center">
                                    <input type="text" className="w-8 h-10 border-2 border-gray-200 rounded-md text-center" placeholder="..."/>
                                </td>
                                <td className="px-6 py-4 text-center">
                                    <input type="text" className="w-8 h-10 border-2 border-gray-200 rounded-md text-center" placeholder="..."/>
                                </td>
                            </tr>
                            <tr className="bg-white border-b">
                                <td className="px-6 py-4">Muhammad Tharreq An Nahl</td>
                                <td className="px-6 py-4 text-center">
                                    <input type="text" className="w-8 h-10 border-2 border-gray-200 rounded-md text-center" placeholder="..."/>
                                </td>
                                <td className="px-6 py-4 text-center">
                                    <input type="text" className="w-8 h-10 border-2 border-gray-200 rounded-md text-center" placeholder="..."/>
                                </td>
                                <td className="px-6 py-4 text-center">
                                    <input type="text" className="w-8 h-10 border-2 border-gray-200 rounded-md text-center" placeholder="..."/>
                                </td>
                                <td className="px-6 py-4 text-center">
                                    <input type="text" className="w-8 h-10 border-2 border-gray-200 rounded-md text-center" placeholder="..."/>
                                </td>
                            </tr>
                            <tr className="bg-white border-b">
                                <td className="px-6 py-4">Muhammad Tharreq An Nahl</td>
                                <td className="px-6 py-4 text-center">
                                    <input type="text" className="w-8 h-10 border-2 border-gray-200 rounded-md text-center" placeholder="..."/>
                                </td>
                                <td className="px-6 py-4 text-center">
                                    <input type="text" className="w-8 h-10 border-2 border-gray-200 rounded-md text-center" placeholder="..."/>
                                </td>
                                <td className="px-6 py-4 text-center">
                                    <input type="text" className="w-8 h-10 border-2 border-gray-200 rounded-md text-center" placeholder="..."/>
                                </td>
                                <td className="px-6 py-4 text-center">
                                    <input type="text" className="w-8 h-10 border-2 border-gray-200 rounded-md text-center" placeholder="..."/>
                                </td>
                            </tr>
                            <tr className="bg-white border-b">
                                <td className="px-6 py-4">Muhammad Tharreq An Nahl</td>
                                <td className="px-6 py-4 text-center">
                                    <input type="text" className="w-8 h-10 border-2 border-gray-200 rounded-md text-center" placeholder="..."/>
                                </td>
                                <td className="px-6 py-4 text-center">
                                    <input type="text" className="w-8 h-10 border-2 border-gray-200 rounded-md text-center" placeholder="..."/>
                                </td>
                                <td className="px-6 py-4 text-center">
                                    <input type="text" className="w-8 h-10 border-2 border-gray-200 rounded-md text-center" placeholder="..."/>
                                </td>
                                <td className="px-6 py-4 text-center">
                                    <input type="text" className="w-8 h-10 border-2 border-gray-200 rounded-md text-center" placeholder="..."/>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* SUBMIT */}
                    <div className="flex">
                        <input type="checkbox" name="" id="" /><p>Data input sudah benar</p>
                    </div>
                    <button className="text-sm py-3 px-5 rounded-lg shadow-md cursor-pointer bg-[#4DD7BE] text-white font-bold">
                        Submit
                    </button>
                </div>
            </div>
        </>
    )
}