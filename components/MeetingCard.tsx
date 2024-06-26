"use client";

import Image from "next/image";

import { Button } from "./ui/button";
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
    <div className='flex flex-col bg-dark-1 gap-2 pt-6 p-5 w-full rounded-lg'>
      <div className='gap-2 flex-col flex'>
        <Image src={icon} alt="upcoming" width={28} height={28} />
        <h1 className='font-extrabold'>{title}</h1>
        <p className=' text-sm font-light'>{date}</p>
      </div>
        {!isPreviousMeeting && 
        <div className='gap-2  flex flex-col '>
        <Button onClick={handleClick} className='font-bold bg-blue-500'>
          {buttonText}
        </Button>
        <Button onClick={()=>{navigator.clipboard.writeText( link);
           toast({
                  title: "Link Copied",
                });
        }} className='bg-[#252940] '>
          <Image src={buttonIcon1!} alt="" width={20} height={20} />
          <p className='ml-1'>Copy Invitation</p>
        </Button>
      </div>
        }

    </div>
    // <section className="flex gap-2 w-full flex-col justify-between rounded-[14px] bg-dark-1 px-5 py-8 xl:max-w-[568px]">
    //   <article className="flex flex-col gap-5">
    //     <Image src={icon} alt="upcoming" width={28} height={28} />
    //     <div className="flex justify-between">
    //       <div className="flex flex-col gap-2">
    //         <h1 className="text-2xl font-bold">{title}</h1>
    //         <p className="text-base font-normal">{date}</p>
    //       </div>
    //     </div>
    //   </article>
    //   <article className={cn("flex justify-center relative", {})}>
        
    //     {!isPreviousMeeting && (
    //       <div className="flex gap-2">
    //         <Button onClick={handleClick} className="rounded bg-blue-1 px-6">
    //           {buttonIcon1 && (
    //             <Image src={buttonIcon1} alt="feature" width={20} height={20} />
    //           )}
    //           &nbsp; {buttonText}
    //         </Button>
    //         <Button
    //           onClick={() => {
    //             navigator.clipboard.writeText(link);
    //             toast({
    //               title: "Link Copied",
    //             });
    //           }}
    //           className="bg-dark-4 px-6"
    //         >
    //           <Image
    //             src="/icons/copy.svg"
    //             alt="feature"
    //             width={20}
    //             height={20}
    //           />
    //           &nbsp; Copy Link
    //         </Button>
    //       </div>
    //     )}
    //   </article>
    // </section>
  );
};

export default MeetingCard;

