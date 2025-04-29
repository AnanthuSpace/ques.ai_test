import { Plus, PenLine, Radio, ArrowUp, HelpCircle, ChevronLeft } from "lucide-react"

export default function Sidebar() {
  return (
    <div className="w-64 bg-white h-screen flex flex-col border-r border-gray-200 relative">
      <div className="p-10 flex items-center">
        <div className="w-8 h-8 rounded-full  flex items-center justify-center">
        <img src="/Icone.svg" alt="Logo" className="w-10 h-10" />
        </div>
        <div className="ml-2 main-text text-2xl">
          <span className="font-bold">Ques.</span>
          <span className=" font-normal">AI</span>
        </div>
      </div>

      <div className="flex-1 ps-7">
        <button className="flex items-center gap-2 text-purple-600 font-medium p-4 hover:bg-purple-50 w-full text-left">
          <Plus size={18} className="text-purple-600" />
          Add your Podcast(s)
        </button>

        <div className="flex flex-col">
          <button className="flex items-center gap-3 p-4 text-gray-700 hover:bg-gray-50 w-full text-left">
            <PenLine size={18} className="text-gray-500" />
            Create & Repurpose
          </button>
          <button className="flex items-center gap-3 p-4 text-gray-700 hover:bg-gray-50 w-full text-left">
            <Radio size={18} className="text-gray-500" />
            Podcast Widget
          </button>
          <button className="flex items-center gap-3 p-4 text-gray-700 hover:bg-gray-50 w-full text-left">
            <ArrowUp size={18} className="text-gray-500" />
            Upgrade
          </button>
        </div>

        <div className="border-t border-gray-200 my-2"></div>
      </div>

      <div className="ps-7">
        <button className="flex items-center gap-3 p-4 text-gray-700 hover:bg-gray-50 w-full text-left">
          <HelpCircle size={18} className="text-gray-500" />
          Help
        </button>

        <div className="border-t border-gray-200 my-2"></div>

        <div className="p-4 flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-green-500 overflow-hidden">
            <img src="/placeholder.svg?height=32&width=32" alt="User avatar" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium text-gray-800">Username</span>
            <span className="text-xs text-gray-500">username@gmail.com</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-24 right-[-16px]">
        <button className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center shadow-md">
          <ChevronLeft size={16} className="text-white" />
        </button>
      </div>
    </div>
  )
}
