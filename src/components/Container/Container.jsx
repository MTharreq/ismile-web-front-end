import AppBar from "../AppBar/AppBar"
import TP from "../Content/TP"
import TA from "../Content/TA"
import About from "../Content/About"

export default function Container() {
  return (
    <div className="flex flex-col bg-[#F2F2F2] w-full font-bold p-8 gap-8">
      <AppBar />
      <TP />
      {/* <TA /> */}
      {/* <About /> */}
    </div>
  )
}