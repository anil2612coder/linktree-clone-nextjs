'use client';

import SubmitButton from "@/components/buttons/SubmitButton";
import { MdCloudUpload } from "react-icons/md";

import { IoColorPalette } from "react-icons/io5";
import { FaImage } from "react-icons/fa6";



import { FaSave } from "react-icons/fa";
import Image from "next/image";
import { useState} from "react";
import toast from "react-hot-toast";
import RadioTogglers from "../formItems/RadioTogglers";
import SectionBox from "../layout/SectionBox";

import { savePageSettings } from "@/actions/pageActions";
import MediaUpload, { upload } from "@/libs/upload";



export default  function PageSettingsForm({page,user}) {
  const [bgType, setBgType] = useState(page.bgType);
  const [bgColor, setBgColor] = useState(page.bgColor);
  const [bgImage, setBgImage] = useState(page.bgImage);
  const [avatar, setAvatar] = useState(user?.image);
  async function saveBaseSettings(formData) {
  
    const result = await savePageSettings(formData);
    // console.log(avatar)
    if (result) {
      toast.success('Saved!');
    }
    
  }

 

 
  return (
    <div>
      <SectionBox>
        
        <form action={saveBaseSettings}>
          <div
            className="py-4 -m-4 min-h-[300px] flex justify-center items-center bg-cover bg-center"
            style={
              bgType === 'color'
                ? {backgroundColor:bgColor}
                : {backgroundImage:`url(${bgImage})`}
            }
          >
            <div>
              <RadioTogglers 
                defaultValue={page.bgType}
                options={[
                  {value:'color', icon: <IoColorPalette />, label: 'Color'},
                  {value:'image', icon: <FaImage />, label: 'Image'},
                ]}
                onChange={val => setBgType(val)}
              />
              {bgType === 'color' && (
                <div className="bg-gray-200 shadow text-gray-700 p-2 mt-2">
                  <div className="flex gap-2 justify-center">
                    <span>Background color:</span>
                    <input
                      type="color"
                      name="bgColor"
                      onChange={ev => setBgColor(ev.target.value)}
                      defaultValue={page.bgColor} />
                  </div>
                </div>
              )}
              {bgType === 'image' && (
                
                <div className="flex justify-center">
                   <MediaUpload
          onChange={(value) => setBgImage(value)}
        >
                  <label
                    className="bg-white shadow px-4 py-2 mt-2 flex gap-2"
                  >
                      <input type="hidden" name="bgImage" value={bgImage}/>
                    
                 
                   
                    <div className="flex gap-2 items-center cursor-pointer">
                    <MdCloudUpload />
                      <span>Change image</span>
                    </div>
                  </label>
                  </MediaUpload>
                </div>
               
              )}
            </div>
          </div>
          <div className="flex justify-center -mb-12">
           
            <div className="relative -top-8 w-[128px] h-[128px]">
          
              <div className="overflow-hidden h-full rounded-full border-4 border-white shadow shadow-black/50">
                <Image
                  className="w-full h-full object-cover"
                  src={avatar}
                  alt={'avatar'}
                  width={128} height={128} />
              </div>
              <MediaUpload
          onChange={(value) => setAvatar(value)}>
              <label
                htmlFor="avatarIn"
                className="absolute bottom-0 -right-2 bg-gray-300 p-2 rounded-full shadow shadow-black/50 aspect-square flex items-center cursor-pointer">
               <MdCloudUpload className="h-7 w-7" />
              </label>
              <input type="hidden" name="avatar" value={avatar}/>
              
              </MediaUpload>
            </div>
          
          </div>
          <div className="p-0">
            <label className="input-label" htmlFor="nameIn">Display name</label>
            <input
              type="text"
              id="nameIn"
              name="displayName"
              defaultValue={page.displayName}
              placeholder="Anil Kumar"/>
            <label className="input-label" htmlFor="locationIn">Location</label>
            <input
              type="text"
              id="locationIn"
              name="location"
              defaultValue={page.location}
              placeholder="Somewhere in the world"/>
            <label className="input-label" htmlFor="bioIn">Bio</label>
            <textarea
              name="bio"
              defaultValue={page.bio}
              id="bioIn"
              placeholder="Your bio goes here..." />
            <div className="max-w-[200px] mx-auto">
              <SubmitButton>
              <FaSave />
                <span>Save</span>
              </SubmitButton>
            </div>
          </div>
        </form>
      </SectionBox>
    </div>
  );
}