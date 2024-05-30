"use client"
import React, { useState } from 'react'
import HomeCards from './HomeCards'
import { useRouter } from 'next/navigation'
import MeetingModal from './MeetingModal'
import { useUser } from '@clerk/nextjs'
import { Call, useStreamVideoClient } from '@stream-io/video-react-sdk'
import { useToast } from "@/components/ui/use-toast"

const MeetingTypeList = () => {
  const { toast } = useToast()
  const router = useRouter();
  const [meetingState, setMeetingState] = useState<'isScheduleMeeting' | 'isJoiningMeeting' | 'isInstantMeeting' | undefined>();
  const [Meeting, setMeeting] = useState({
    dateTime: new Date(),
    description: '',
    link: ''
  });
  const [callDetails, setCallDetails] = useState<Call>();
  const {user} = useUser();
  const client = useStreamVideoClient();
  const createMeeting = async () =>{
    if(!client || !user) return;
    try {
      if(!Meeting.dateTime){
        toast({title: "Please select a date and time"})
        return;
      }
      const id = crypto.randomUUID();
      const call = client.call('default', id);

      if(!call) throw new Error("Failed to create call");
      const startsAt = Meeting.dateTime.toISOString() || new Date(Date.now()).toISOString();
      const description = Meeting.description || 'Instant meeting';
      
      await call.getOrCreate({
        data:{
          starts_at: startsAt,
          custom: {
            description: description
          }
        }
      })
      setCallDetails(call);
      if(!Meeting.description){
        router.push(`/meeting/${call.id}`)
      }
      toast({title: "Meeting created!"})

    } catch (error) {
      console.log(error);
      toast({title: "Failed to create meeting"})
    }
  }
  return (
    <section className='grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4'>
      <HomeCards
        img='/icons/add-meeting.svg'
        title="New Meeting"
        description= "Start an instant meeting"
        handleClick= {()=>{
          setMeetingState('isInstantMeeting')
        }}
        className = "bg-orange-1"
      />
      <HomeCards 
        img='/icons/schedule.svg'
        title="Schedule a Meeting"
        description= "Plan your meeting"
        handleClick= {()=>{
          setMeetingState('isScheduleMeeting')
        }}
        className = "bg-blue-1"
      />
      <HomeCards 
        img='/icons/recordings.svg'
        title="View Recordings"
        description= "Check out your recordings"
        handleClick= {()=>{
          router.push('/recordings');
        }}
        className = "bg-purple-1"
      />
      <HomeCards 
        img='/icons/join-meeting.svg'
        title="Join Meeting"
        description= "Via invitation link"
        handleClick= {()=>{
          setMeetingState('isJoiningMeeting')
        }}
        className = "bg-yellow-1"
      />
      <MeetingModal
        isOpen= {meetingState === 'isInstantMeeting'} 
        onClose= {() => setMeetingState(undefined)}
        title="Start an Instant Meeting"
        className="text-center"
        buttonText = "Start Meeting"
        handleClick ={createMeeting}

      />
    </section>
  )
}

export default MeetingTypeList