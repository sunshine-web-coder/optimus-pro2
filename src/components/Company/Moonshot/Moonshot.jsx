import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { IoBagHandleSharp, IoSchool } from "react-icons/io5";
import { FaStar } from "react-icons/fa";

export default function Moonshot() {

  return (
    <div className="w-full relative overflow-hidden px-4 min-h-[811px] py-[50px] md:py-[30px]">
      <div className="w-[530.69px] h-[648.20px] absolute top-0 -left-[50%] sm:left-0 rotate-[-75deg] bg-[#006dd9]/20 rounded-[100px] blur-[240px]" />
      <div className="w-[530.69px] h-[648.20px] absolute top-0 -right-[120%] sm:-right-[20%] rotate-[-75deg] bg-[#006dd9]/20 rounded-[100px] blur-[240px]" />
      <div className="w-[530.69px] h-[648.20px] absolute -bottom-[30%] -left-[50%] sm:left-0 rotate-[-75deg] bg-[#006dd9]/20 rounded-[100px] blur-[240px]" />
      <div className="w-[530.69px] h-[648.20px] absolute -bottom-[30%] -right-[120%] sm:-right-[20%] rotate-[-75deg] bg-[#006dd9]/20 rounded-[100px] blur-[240px]" />

      <div className="custom-container relative z-10">
        <div className="">
          <h3 className="gradient-text boxed_round_fonts text-center mb-6">Moonshot</h3>
          <p className="text-white text-center sub-heading">Unveiling our ambitious roadmap towards groundbreaking solutions that will revolutionize the Web3 ecosystem.</p>
        </div>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date={<span className='timelineDate'>2011 - present</span>}
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<IoBagHandleSharp />}
          >
            <h3 className="vertical-timeline-element-title">Creative Director</h3>
            <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
            <p>Creative Direction, User Experience, Visual Design, Project Management, Team Leading</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement className="vertical-timeline-element--work" 
          date={<span className='timelineDate'>2010 - 2011</span>} 
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }} icon={<IoBagHandleSharp />}>
            <h3 className="vertical-timeline-element-title">Art Director</h3>
            <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
            <p>Creative Direction, User Experience, Visual Design, SEO, Online Marketing</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement className="vertical-timeline-element--work" date={<span className='timelineDate'>2008 - 2010</span>} iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }} icon={<IoBagHandleSharp />}>
            <h3 className="vertical-timeline-element-title">Web Designer</h3>
            <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
            <p>User Experience, Visual Design</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement className="vertical-timeline-element--work" date={<span className='timelineDate'>2006 - 2008</span>} iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }} icon={<IoBagHandleSharp />}>
            <h3 className="vertical-timeline-element-title">Web Designer</h3>
            <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
            <p>User Experience, Visual Design</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement className="vertical-timeline-element--education" date={<span className='timelineDate'>April 2013</span>} iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }} icon={<IoSchool />}>
            <h3 className="vertical-timeline-element-title">Content Marketing for Web, Mobile and Social Media</h3>
            <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
            <p>Strategy, Social Media</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement className="vertical-timeline-element--education" date={<span className='timelineDate'>November 2012</span>} iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }} icon={<IoSchool />}>
            <h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>
            <h4 className="vertical-timeline-element-subtitle">Certification</h4>
            <p>Creative Direction, User Experience, Visual Design</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement className="vertical-timeline-element--education" date={<span className='timelineDate'>2002 - 2006</span>} iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }} icon={<IoSchool />}>
            <h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
            <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
            <p>Creative Direction, Visual Design</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }} icon={<FaStar />} />
        </VerticalTimeline>
      </div>
      <div className="w-[530.69px] h-[648.20px] absolute top-[20%] -left-[50%] sm:left-0 rotate-[-75deg] bg-[#006dd9]/20 rounded-[100px] blur-[240px]" />
      <div className="w-[530.69px] h-[648.20px] absolute top-[20%] -right-[120%] sm:-right-[20%] rotate-[-75deg] bg-[#006dd9]/20 rounded-[100px] blur-[240px]" />
      <div className="w-[530.69px] h-[648.20px] absolute bottom-[10%] -left-[50%] sm:left-0 rotate-[-75deg] bg-[#006dd9]/20 rounded-[100px] blur-[240px]" />
      <div className="w-[530.69px] h-[648.20px] absolute bottom-[10%] -right-[10%] sm:-right-[20%] rotate-[-75deg] bg-[#006dd9]/20 rounded-[100px] blur-[240px]" />
    </div>
  );
}
