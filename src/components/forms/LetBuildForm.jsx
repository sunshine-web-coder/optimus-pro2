import { MdEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";

export default function LetBuildForm() {
  return (
    <div>
      <h2 className="text-center font-['BoxedRound'] text-3xl">Let Build</h2>
      <p className="text-gray-700 text-center !text-lg mt-3 sub-heading mb-4">Founders, join the waitlist for exclusive updates on co-building opportunities, events, and networking.</p>
      <form className="space-y-2">
        <div className="relative flex flex-col gap-1">
          <label className="block text-gray-700">Email</label>
          <MdEmail className="w-[18px] h-[18px] text-gray-700 absolute top-[40px] left-[10px]" />
          <input type="email" placeholder="Enter email address" className="w-full pl-10 px-3 py-2 border bg-[#dadada] text-gray-700 rounded-full focus:outline-none focus:ring focus:border-blue-300" />
        </div>

        {/* Telegram Username Field */}
        <div className="relative flex flex-col gap-1">
          <label className="block text-gray-700">Telegram Username</label>
          <FaTelegram className="w-[18px] h-[18px] text-gray-700 absolute top-[40px] left-[10px]" />
          <input type="text" placeholder="Enter telegram username" className="w-full pl-10 px-3 py-2 border bg-[#dadada] rounded-full focus:outline-none focus:ring focus:border-blue-300" />
        </div>

        {/* LinkedIn Profile Field */}
        <div className="relative flex flex-col gap-1">
          <label className="block text-gray-700">LinkedIn Profile</label>
          <FaLinkedinIn className="w-[18px] h-[18px] text-gray-700 absolute top-[40px] left-[10px]" />
          <input type="url" placeholder="Enter linkedin profile" className="w-full pl-10 px-3 py-2 border bg-[#dadada] rounded-full focus:outline-none focus:ring focus:border-blue-300" />
        </div>
        <div className="w-full pt-5">
          <button type="submit" className="w-full text-lg px-4 py-3 gradient-background text-white rounded-full">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
