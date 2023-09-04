export default function PilihGrup() {
    return (
        <>
            <div className="w-full bg-white rounded-md shadow-md px-16 py-16 flex flex-col gap-8 mb-16">
                {/* FORM */}
                <form action="" className="flex justify-center font-normal gap-4">
                    <div className="border-2 border-[#484E51] rounded-lg">
                        <select id="day" name="day" className="border-2 border-r-[16px] px-4 py-3 border-white rounded-lg">
                            <option selected className="hidden">Hari</option>
                            <option value="senin">Senin</option>
                            <option value="selasa">Selasa</option>
                            <option value="rabu">Rabu</option>
                            <option value="kamis">Kamis</option>
                            <option value="jumat">Jumat</option>
                            <option value="sabtu">Sabtu</option>
                        </select>
                    </div>
                    <div className="border-2 border-[#484E51] rounded-lg">
                        <select id="shift" name="shift" className="border-2 border-r-[16px] px-4 py-3 border-white rounded-lg">
                            <option selected className="hidden">Shift</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                    </div>
                    <button className="text-sm py-3 px-5 rounded-lg shadow-md cursor-pointer bg-[#4DD7BE] text-white font-bold">
                        Find
                    </button>
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
                            Action
                            </th>
                            {/* <th scope="col" className="px-6 py-3">
                            Price
                            </th>
                            <th scope="col" className="px-6 py-3">
                            <span className="sr-only">Edit</span>
                            </th> */}
                        </tr>
                        </thead>
                        <tbody>
                        {/* GROUP 1 */}
                        <tr className="bg-white border-b">
                            <th rowSpan="4" 
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                            >
                            32
                            </th>
                            <td className="px-6 py-4">Muhammad Tharreq An Nahl</td>
                            <td rowSpan="4" className="px-6 py-4">
                                <button className="text-sm py-2 px-5 rounded-lg shadow-md cursor-pointer bg-[#4DD7BE] text-white font-bold hover:shadow-none">
                                    Input
                                </button>
                            </td>
                        </tr>
                        <tr className="bg-white border-b">
                            <td className="px-6 py-4">White</td>
                        </tr>
                        <tr className="bg-white border-b">
                            <td className="px-6 py-4">Black</td>
                        </tr>
                        <tr className="bg-white border-b">
                            <td className="px-6 py-4">Black</td>
                        </tr>
                        {/* GROUP 2 */}
                        <tr className="bg-white border-b">
                            <th rowSpan="4" 
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                            >
                            32
                            </th>
                            <td className="px-6 py-4">Muhammad Tharreq An Nahl</td>
                            <td rowSpan="4" className="px-6 py-4">
                                <button className="text-sm py-2 px-5 rounded-lg shadow-md cursor-pointer bg-[#4DD7BE] text-white font-bold hover:shadow-none">
                                    Input
                                </button>
                            </td>
                        </tr>
                        <tr className="bg-white border-b">
                            <td className="px-6 py-4">White</td>
                        </tr>
                        <tr className="bg-white border-b">
                            <td className="px-6 py-4">Black</td>
                        </tr>
                        <tr className="bg-white border-b">
                            <td className="px-6 py-4">Black</td>
                        </tr>

                        {/* GROUP 3 */}
                        <tr className="bg-white border-b">
                            <th rowSpan="4" 
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                            >
                            32
                            </th>
                            <td className="px-6 py-4">Muhammad Tharreq An Nahl</td>
                            <td rowSpan="4" className="px-6 py-4">
                                <button className="text-sm py-2 px-5 rounded-lg shadow-md cursor-pointer bg-[#4DD7BE] text-white font-bold hover:shadow-none">
                                    Input
                                </button>
                            </td>
                        </tr>
                        <tr className="bg-white border-b">
                            <td className="px-6 py-4">White</td>
                        </tr>
                        <tr className="bg-white border-b">
                            <td className="px-6 py-4">Black</td>
                        </tr>
                        <tr className="bg-white border-b">
                            <td className="px-6 py-4">Black</td>
                        </tr>
                        {/* GROUP 4 */}
                        <tr className="bg-white border-b">
                            <th rowSpan="4" 
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                            >
                            32
                            </th>
                            <td className="px-6 py-4">Muhammad Tharreq An Nahl</td>
                            <td rowSpan="4" className="px-6 py-4">
                                <button className="text-sm py-2 px-5 rounded-lg shadow-md cursor-pointer bg-[#4DD7BE] text-white font-bold hover:shadow-none">
                                    Input
                                </button>
                            </td>
                        </tr>
                        <tr className="bg-white border-b">
                            <td className="px-6 py-4">White</td>
                        </tr>
                        <tr className="bg-white border-b">
                            <td className="px-6 py-4">Black</td>
                        </tr>
                        <tr className="bg-white border-b">
                            <td className="px-6 py-4">Black</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}