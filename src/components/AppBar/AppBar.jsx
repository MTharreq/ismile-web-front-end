export default function AppBar({pageTitle}) {
    return (
      <div className="bg-white w-full shadow-md rounded-lg flex justify-between p-4">
        <div className="bg-red w-full self-center text-2xl">{pageTitle}</div>
        <div className="flex gap-4 basis-full justify-end items-center">
          <div className="flex flex-col items-end">
            <p className="text-[#6E6B7B] font-bold">Alifia Mutia</p>
            <p className="text-[#6E6B7B] font-normal">Selasa, Shift 2 | Kelompok 36</p>
          </div>
          <img src="src\assets\3d_avatar_20.png" alt="picture-profile" />
        </div>
      </div>
    )
  }