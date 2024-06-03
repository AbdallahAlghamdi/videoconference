"use client";

import Image from "next/image";

import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { avatarImages } from "@/constants";
import { useToast } from "./ui/use-toast";

interface MeetingCardProps {
  title: string;
  date: string;
  icon: string;
  isPreviousMeeting?: boolean;
  buttonIcon1?: string;
  buttonText?: string;
  handleClick: () => void;
  link: string;
}

const MeetingCard = ({
  icon,
  title,
  date,
  isPreviousMeeting,
  buttonIcon1,
  handleClick,
  link,
  buttonText,
}: MeetingCardProps) => {
  const { toast } = useToast();

  return (
    <section className="flex min-h-[258px] w-full flex-col justify-between rounded-[14px] bg-dark-1 px-5 py-8 xl:max-w-[568px]">
      <article className="flex flex-col gap-5">
        <Image src={icon} alt="upcoming" width={28} height={28} />
        <div className="flex justify-between">
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-bold">{title}</h1>
            <p className="text-base font-normal">{date}</p>
          </div>
        </div>
      </article>
      <article className={cn("flex justify-center relative", {})}>
        <div className="relative flex w-full max-sm:hidden">
          {avatarImages.map((img, index) => (
            <Image
              key={index}
              src={img}
              alt="attendees"
              width={40}
              height={40}
              className={cn("rounded-full", { absolute: index > 0 })}
              style={{ top: 0, left: index * 28 }}
            />
          ))}
          <div className="flex-center absolute left-[136px] size-10 rounded-full border-[5px] border-dark-3 bg-dark-4">
            +5
          </div>
        </div>
        {!isPreviousMeeting && (
          <div className="flex gap-2">
            <Button onClick={handleClick} className="rounded bg-blue-1 px-6">
              {buttonIcon1 && (
                <Image src={buttonIcon1} alt="feature" width={20} height={20} />
              )}
              &nbsp; {buttonText}
            </Button>
            <Button
              onClick={() => {
                navigator.clipboard.writeText(link);
                toast({
                  title: "Link Copied",
                });
              }}
              className="bg-dark-4 px-6"
            >
              <Image
                src="/icons/copy.svg"
                alt="feature"
                width={20}
                height={20}
              />
              &nbsp; Copy Link
            </Button>
          </div>
        )}
      </article>
    </section>
  );
};

export default MeetingCard;

// <div className='flex flex-col bg-dark-1 gap-2 pt-6 p-5 w-full rounded-lg'>
//       <div className='gap-2 flex-col flex'>
//         {isUpcoming? <CalendarClock />: <CalendarFold />}
//         <h1 className='font-extrabold'>Team Sync: Sprint Planning & Updates</h1>
//         <p className=' text-sm font-light'>March 15, 2024 - 10:00 AM</p>
//       </div>
//       <div className='flex flex-col gap-2  xl:flex-row xl:justify-between'>
//         <div className="flex mr-2">
//           <Image className='border-2 hover:border-[#400273] filter hover:filter-none  hover:z-10 border-[#161925] h-15 w-10 rounded-full -mr-4' alt='avatar' src='/images/avatar-3.png' width={32} height={32} />
//           <img className="border-2 hover:border-[#400273] hover:z-10 border-[#161925] rounded-full h-15 w-10 -mr-4" width={1} height={1} src="https://randomuser.me/api/portraits/men/32.jpg" alt="" />
//           <img className="border-2 hover:border-[#400273] hover:z-10 border-[#161925] rounded-full h-15 w-10 -mr-4" width={16} height={16} src="https://randomuser.me/api/portraits/women/31.jpg" alt="" />
//           <img className="border-2 hover:border-[#400273] hover:z-10 border-[#161925] rounded-full h-15 w-10 -mr-4" width={16} height={16} src="https://randomuser.me/api/portraits/men/33.jpg" alt="" />
//           <span className="flex hover:border-[#400273] items-center justify-center -mr-4 hover:z-10 bg-dark-1 text-sm text-white text-gray-800 font-semibold border-2 border-[#161925] rounded-full h-15 w-10">+99</span>
//         </div>
//         {isUpcoming && 
//         <div className='gap-2  flex flex-col xl:flex-row'>
//         <Button className='font-bold bg-blue-500'>
//           Start
//         </Button>
//         <Button className='bg-[#252940] '>
//           <Copy width={14}/>

//           <p className='ml-1'>Copy Invitation</p>
//         </Button>
//       </div>
//         }
//       </div>

//     </div>