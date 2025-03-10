import React from 'react'
//import Image1 from '../assets/plusicon.png'


import Profile_left_part from '../components/Profile_left_part';
import Header from '../components/Header'
import Image12 from '../assets/logout.png'
import Image11 from '../assets/profilepho.png'
import { Link } from "react-router-dom";
import Image13 from '../assets/Group_114.png'


function Profile() {

    return (
        <>
            <div>

                <div className='flex'>

                    <Profile_left_part />
                    <div className=' h-screen w-[75%] overflow-scroll'>

                        <div class="  bg-white rounded-[20px] shadow-[0px_4px_10px_0px_rgba(54,54,54,0.10)] mx-[2.7vw] overflow-hidden mt-[3vh]">
                            <div class="   bg-gradient-to-l from-[#364ef2] to-[#534ff2] flex items-center px-[2.5vw] py-[2vh] " >
                                <div class=" pr-[7.75px] pt-[15.81px] pb-[0.16px] left-[36px] top-[28px]  bg-[#292929] rounded-[63.23px] shadow-[0px_12.772851943969727px_10px_0px_rgba(0,0,0,0.10)] border border-white justify-center items-center inline-flex overflow-hidden">
                                    <img class="w-[80.76px] h-[75px]" src={Image11} />
                                </div>
                                <div class=" ">
                                    <div class="w-[0px] h-[0px]  bg-white rounded-full"></div>
                                    <div data-svg-wrapper class="left-[3px] top-[3px] ">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5 19H6.425L16.2 9.225L14.775 7.8L5 17.575V19ZM4 21C3.71667 21 3.47933 20.904 3.288 20.712C3.09667 20.52 3.00067 20.2827 3 20V17.575C3 17.3083 3.05 17.054 3.15 16.812C3.25 16.57 3.39167 16.3577 3.575 16.175L16.2 3.575C16.4 3.39167 16.621 3.25 16.863 3.15C17.105 3.05 17.359 3 17.625 3C17.891 3 18.1493 3.05 18.4 3.15C18.6507 3.25 18.8673 3.4 19.05 3.6L20.425 5C20.625 5.18333 20.7707 5.4 20.862 5.65C20.9533 5.9 20.9993 6.15 21 6.4C21 6.66667 20.954 6.921 20.862 7.163C20.77 7.405 20.6243 7.62567 20.425 7.825L7.825 20.425C7.64167 20.6083 7.429 20.75 7.187 20.85C6.945 20.95 6.691 21 6.425 21H4ZM15.475 8.525L14.775 7.8L16.2 9.225L15.475 8.525Z" fill="#364EF2" />
                                        </svg>
                                    </div>
                                </div>
                                <div className='flex flex-col'>
                                    <div class="  text-white text-[22px] font-semibold font-['Poppins']">Abhinav Sharma</div>
                                    <div class="  text-white text-lg font-light font-['Poppins']">Member since October 2022</div>
                                </div>
                            </div>

                            <div className='flex justify-evenly items-center py-[2.7vh]' >

                                <div class="">
                                    <div class="  h-[15vh] w-[15vw]  bg-[#fbfbfb]/25 rounded-xl shadow-[0px_4px_10px_0px_rgba(0,0,0,0.12)]  flex flex-col justify-center items-center">
                                        <div class="  text-black text-xl font-semibold font-['Poppins']">12</div>
                                        <div class=" text-black text-xl font-light font-['Poppins']">Product Listed</div>
                                    </div>
                                </div>
                                <div class=" ">
                                    <div class=" h-[15vh] w-[15vw]  bg-[#fbfbfb] rounded-xl shadow-[0px_4px_10px_0px_rgba(0,0,0,0.12)] flex flex-col justify-center items-center">
                                        <div class=" text-black text-xl font-semibold font-['Poppins']">8</div>
                                        <div class=" text-black text-xl font-light font-['Poppins']">Orders</div>
                                    </div>
                                </div>
                                <div class=" ">
                                    <div class="  h-[15vh] w-[15vw]  bg-[#fbfbfb] rounded-xl shadow-[0px_4px_10px_0px_rgba(0,0,0,0.12)]  flex flex-col justify-center items-center">
                                        <div class=" text-black text-xl font-semibold font-['Poppins']">4.8</div>
                                        <div class=" text-black text-xl font-light font-['Poppins']">Rating</div>
                                    </div>
                                </div>
                            </div>
                        </div>





                        <div class=" bg-white rounded-[20px] shadow-[0px_4px_10px_0px_rgba(101,101,101,0.10)] mx-[2.7vw] mt-[3.7vh] pt-[4vh] pb-[2vh] relative">

                            <div class="  text-[#2d3339] text-xl font-semibold font-['Poppins'] ml-[2.6vw] mb-[2vh]">Personal Information</div>
                            <div className='grid grid-cols-2 grid-rows-2 ml-[3.5vw]'>
                                <div class="">
                                    <div class="  text-[#848484] text-lg font-normal font-['Poppins']">Name</div>
                                    <div class="  text-[#2d3339] text-[20px] font-medium font-['Poppins'] mb-[2.7vh]">Abhinav Sharma</div>
                                </div>

                                <div class=" ">
                                    <div class=" text-[#848484] text-lg font-normal font-['Poppins']">Email</div>
                                    <div class="  text-[#2d3339] text-[20px] font-medium font-['Poppins']">abhisheksharma2022@gmail.com</div>
                                </div>
                                <div class="">
                                    <div class=" text-[#848484] text-lg font-normal font-['Poppins']">Phone</div>
                                    <div class="  text-[#2d3339] text-[20px] font-medium font-['Poppins']">+91 91588 66325</div>
                                </div>
                                <div class="mb-[2.7vh]">
                                    <div class=" text-[#848484] text-xl font-normal font-['Poppins']">Gender</div>
                                    <div class="  text-[#2d3339] text-[20px] font-medium font-['Poppins']">Male</div>
                                </div>
                            </div>
                            <div class=" absolute top-[2vh] right-[1vw]">
                                <div class="  bg-[#ebedff] rounded-[50px] flex items-center">
                                    <div class="  text-[#4a4a4a] text-sm font-normal font-['Poppins'] mr-[0.5vw] ml-[1vw]">Edit</div>
                                    <div class=" ">
                                        <div class="  bg-[#4d4ef2] rounded-full p-[3px]">
                                            <div data-svg-wrapper class=" ">
                                                <svg width="25" height="25" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M5.35901 20.3695H6.88673L17.3663 9.88992L15.8386 8.3622L5.35901 18.8418V20.3695ZM4.28693 22.5137C3.98317 22.5137 3.72873 22.4108 3.5236 22.2049C3.31848 21.9991 3.21556 21.7447 3.21484 21.4416V18.8418C3.21484 18.5559 3.26845 18.2833 3.37566 18.0238C3.48286 17.7644 3.63474 17.5367 3.83129 17.3409L17.3663 3.83265C17.5808 3.6361 17.8177 3.48422 18.0771 3.37701C18.3366 3.26981 18.6089 3.2162 18.8941 3.2162C19.1792 3.2162 19.4562 3.26981 19.7249 3.37701C19.9937 3.48422 20.2259 3.64504 20.4218 3.85945L21.8959 5.36037C22.1103 5.55692 22.2665 5.7892 22.3644 6.05722C22.4623 6.32524 22.5116 6.59326 22.5123 6.86129C22.5123 7.14717 22.463 7.41984 22.3644 7.67929C22.2658 7.93873 22.1096 8.1753 21.8959 8.389L8.38765 21.8973C8.1911 22.0938 7.9631 22.2457 7.70366 22.3529C7.44421 22.4601 7.1719 22.5137 6.88673 22.5137H4.28693ZM16.5891 9.13946L15.8386 8.3622L17.3663 9.88992L16.5891 9.13946Z" fill="white" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>






                        <div class=" bg-white rounded-[20px] shadow-[0px_4px_10px_0px_rgba(101,101,101,0.10)] mx-[2.7vw] mt-[3.7vh] pt-[4vh] pb-[2vh] relative">

                            <div class="  text-[#2d3339] text-xl font-semibold font-['Poppins'] ml-[2.6vw] mb-[2vh]">Security</div>
                            <div className='grid grid-cols-2 grid-rows-2 ml-[3.5vw]'>
                                <div class="">
                                    <div class="  text-[#1e1e1e] text-[20px] font-medium font-['Poppins']">Password</div>
                                    <div class="  text-[#64707d] text-lg font-medium font-['Poppins'] mb-[2.7vh]">●●●●●●●●●●</div>
                                </div>

                                <div class="flex items-center justify-end mr-[3.5vw]">
                                    <div class="text-[#64707d] text-lg font-normal font-['Poppins']">Updated 2 months ago</div>
                                </div>

                                <div class=" ">
                                    <div class=" text-[#1e1e1e] text-[20px] font-medium font-['Poppins']">Two-Factor Authentication</div>
                                    <div class=" text-[#64707d] text-lg font-medium font-['Poppins']">Enhance your account security</div>
                                </div>

                                <div class=" flex items-center justify-end mr-[3.5vw]">
                                    <div class="text-[#64707d] text-lg font-normal font-['Poppins']">Enabled</div>

                                </div>
                            </div>
                            <div class=" absolute top-[2vh] right-[1vw]">
                                <div class="  bg-[#ebedff] rounded-[50px] flex items-center">
                                    <div class="  text-[#4a4a4a] text-sm font-normal font-['Poppins'] mr-[0.5vw] ml-[1vw]">Edit</div>
                                    <div class=" ">
                                        <div class="  bg-[#4d4ef2] rounded-full p-[3px]">
                                            <div data-svg-wrapper class=" ">
                                                <svg width="25" height="25" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M5.35901 20.3695H6.88673L17.3663 9.88992L15.8386 8.3622L5.35901 18.8418V20.3695ZM4.28693 22.5137C3.98317 22.5137 3.72873 22.4108 3.5236 22.2049C3.31848 21.9991 3.21556 21.7447 3.21484 21.4416V18.8418C3.21484 18.5559 3.26845 18.2833 3.37566 18.0238C3.48286 17.7644 3.63474 17.5367 3.83129 17.3409L17.3663 3.83265C17.5808 3.6361 17.8177 3.48422 18.0771 3.37701C18.3366 3.26981 18.6089 3.2162 18.8941 3.2162C19.1792 3.2162 19.4562 3.26981 19.7249 3.37701C19.9937 3.48422 20.2259 3.64504 20.4218 3.85945L21.8959 5.36037C22.1103 5.55692 22.2665 5.7892 22.3644 6.05722C22.4623 6.32524 22.5116 6.59326 22.5123 6.86129C22.5123 7.14717 22.463 7.41984 22.3644 7.67929C22.2658 7.93873 22.1096 8.1753 21.8959 8.389L8.38765 21.8973C8.1911 22.0938 7.9631 22.2457 7.70366 22.3529C7.44421 22.4601 7.1719 22.5137 6.88673 22.5137H4.28693ZM16.5891 9.13946L15.8386 8.3622L17.3663 9.88992L16.5891 9.13946Z" fill="white" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>





                        <div class=" bg-white rounded-[20px] shadow-[0px_4px_10px_0px_rgba(101,101,101,0.10)] mx-[2.7vw] mt-[3.7vh] pt-[4vh] pb-[4.5vh] relative">

                            <div class="  text-[#2d3339] text-xl font-semibold font-['Poppins'] ml-[2.6vw] mb-[2vh]">Address</div>

                              <div className='flex   ml-[10vw] gap-[10vw]'>
                              <div class=" ">
                                    <div class="   bg-[#f2f3ff] rounded-[18px] shadow-[0px_4px_10px_0px_rgba(0,0,0,0.12)] flex flex-col justify-center   w-[19.5vw] h-[21vh] relative pl-[2vw]">
                                        <div class=" text-[#2d3339] text-[16px] font-semibold font-['Poppins'] mb-[0.3vh] ">Campus Address</div>
                                        <div class=" text-[#64707d] text-sm font-normal font-['Poppins']">Room 203,Block B <br />IIT Jodhpur Campus <br />Karwar, Rajasthan 342037</div>
                                        <button className="text-white text-[12px] font-normal font-['Poppins'] bg-[#4d4ef2] rounded-[5px] px-[0.8vw] absolute top-[2vh] right-[0.8vw] ">Primary</button>
                                        <div class="  bg-[#4d4ef2] rounded-full p-[3px] absolute bottom-[1.4vh] right-[1vw]">
                                            <div data-svg-wrapper class=" ">
                                                <svg width="18" height="18" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M5.35901 20.3695H6.88673L17.3663 9.88992L15.8386 8.3622L5.35901 18.8418V20.3695ZM4.28693 22.5137C3.98317 22.5137 3.72873 22.4108 3.5236 22.2049C3.31848 21.9991 3.21556 21.7447 3.21484 21.4416V18.8418C3.21484 18.5559 3.26845 18.2833 3.37566 18.0238C3.48286 17.7644 3.63474 17.5367 3.83129 17.3409L17.3663 3.83265C17.5808 3.6361 17.8177 3.48422 18.0771 3.37701C18.3366 3.26981 18.6089 3.2162 18.8941 3.2162C19.1792 3.2162 19.4562 3.26981 19.7249 3.37701C19.9937 3.48422 20.2259 3.64504 20.4218 3.85945L21.8959 5.36037C22.1103 5.55692 22.2665 5.7892 22.3644 6.05722C22.4623 6.32524 22.5116 6.59326 22.5123 6.86129C22.5123 7.14717 22.463 7.41984 22.3644 7.67929C22.2658 7.93873 22.1096 8.1753 21.8959 8.389L8.38765 21.8973C8.1911 22.0938 7.9631 22.2457 7.70366 22.3529C7.44421 22.4601 7.1719 22.5137 6.88673 22.5137H4.28693ZM16.5891 9.13946L15.8386 8.3622L17.3663 9.88992L16.5891 9.13946Z" fill="white" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class=" ">
                                    <div class=" bg-[#f2f3ff] rounded-[18px]  shadow-[0px_4px_10px_0px_rgba(0,0,0,0.12)] flex flex-col justify-center  w-[18.5vw] h-[21vh]  pl-[2.6vw]">
                                        <div class=" text-[#2d3339] text-[16px] font-semibold font-['Poppins'] mb-[0.3vh]">Home Address</div>
                                        <div class=" text-[#64707d] text-sm font-normal font-['Poppins']">23,Park Street <br />New Delhi,110001</div>
                                    </div>
                                </div>
                              </div>


                            <div class=" absolute top-[2vh] right-[1vw]">
                                <div class="  bg-[#ebedff] rounded-[50px] flex items-center">
                                    <div class="  text-[#4a4a4a] text-sm font-normal font-['Poppins'] mr-[0.5vw] ml-[1vw]">Add New</div>
                                    <div class=" ">
                                        <div class="  bg-[#4d4ef2] rounded-full p-[3px]">
                                            <div data-svg-wrapper class=" ">
                                                <svg width="25" height="25" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M5.35901 20.3695H6.88673L17.3663 9.88992L15.8386 8.3622L5.35901 18.8418V20.3695ZM4.28693 22.5137C3.98317 22.5137 3.72873 22.4108 3.5236 22.2049C3.31848 21.9991 3.21556 21.7447 3.21484 21.4416V18.8418C3.21484 18.5559 3.26845 18.2833 3.37566 18.0238C3.48286 17.7644 3.63474 17.5367 3.83129 17.3409L17.3663 3.83265C17.5808 3.6361 17.8177 3.48422 18.0771 3.37701C18.3366 3.26981 18.6089 3.2162 18.8941 3.2162C19.1792 3.2162 19.4562 3.26981 19.7249 3.37701C19.9937 3.48422 20.2259 3.64504 20.4218 3.85945L21.8959 5.36037C22.1103 5.55692 22.2665 5.7892 22.3644 6.05722C22.4623 6.32524 22.5116 6.59326 22.5123 6.86129C22.5123 7.14717 22.463 7.41984 22.3644 7.67929C22.2658 7.93873 22.1096 8.1753 21.8959 8.389L8.38765 21.8973C8.1911 22.0938 7.9631 22.2457 7.70366 22.3529C7.44421 22.4601 7.1719 22.5137 6.88673 22.5137H4.28693ZM16.5891 9.13946L15.8386 8.3622L17.3663 9.88992L16.5891 9.13946Z" fill="white" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>





                        <div class=" bg-white rounded-[20px] shadow-[0px_4px_10px_0px_rgba(101,101,101,0.10)] mx-[2.7vw] mt-[3.7vh] pt-[4vh] pb-[2vh] relative">

                            <div class="  text-[#2d3339] text-xl font-semibold font-['Poppins'] ml-[2.6vw] mb-[2vh]">Account Actions</div>
                            <div className='grid grid-cols-2 grid-rows-2 ml-[3.5vw]'>
                                <div class="">
                                    <div class="  text-[#1e1e1e] text-[20px] font-medium font-['Poppins']">Logout</div>
                                    <div class="  text-[#64707d] text-lg font-medium font-['Poppins'] mb-[2.7vh]">Sign out from all devices</div>
                                </div>

                                <div class="flex items-center justify-end mr-[3.5vw] ">
                                    <button className=" text-[#313131] text-[17px] font-normal font-['Poppins']   bg-[#e5e8ff] rounded-[7px] px-[0.8vw] py-[0.8vh] flex justify-center items-center"> < svg className='m-[0.2vw]' width="15" height="14" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.47934 1H1.93492C1.42071 1 1 1.39705 1 1.88234V14.2351C1 14.7204 1.42071 15.1174 1.93492 15.1174H8.47934" stroke="#364EF2" stroke-width="1.86983" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M5.67578 8.05859H16.4273" stroke="#364EF2" stroke-width="1.86983" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M13.1543 4.97058L16.4265 8.05877L13.1543 11.147" stroke="#364EF2" stroke-width="1.86983" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>Logout</button>
                                </div>

                                <div class=" ">
                                    <div class=" text-[#1e1e1e] text-[20px] font-medium font-['Poppins']">Delete Account</div>
                                    <div class=" text-[#64707d] text-lg font-medium font-['Poppins']">Permanently delete your account and all data</div>
                                </div>

                                <div class=" flex items-center justify-end mr-[3.5vw]">
                                    <button className="text-[#e30000] text-[15px] font-normal font-['Poppins'] bg-[#ffdddd] rounded-[7px] px-[0.8vw] py-[0.8vh]">Delete Account</button>

                                </div>
                            </div>

                        </div>

                    </div>

                </div>
            </div>

        </>
    )



}

export default Profile



