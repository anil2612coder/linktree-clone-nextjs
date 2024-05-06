'use client';

import {savePageButtons} from "@/actions/pageActions";
import SubmitButton from "@/components/buttons/SubmitButton";
import SectionBox from "@/components/layout/SectionBox";

import { FaDiscord, FaEnvelope, FaFacebook, FaGithub, FaInstagram, FaMobile, FaPlus, FaSave, FaTelegram, FaTrash, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";
import { FaGripLines } from "react-icons/fa6";


import {useState} from "react";
import toast from "react-hot-toast";

export const allButtons = [
  {key: 'email', 'label': 'e-mail', icon: <FaEnvelope />, placeholder: 'test@example.com'},
  {key: 'mobile', 'label': 'mobile', icon: <FaMobile />, placeholder: '+46 123 123 123'},
  {key: 'resume', 'label': 'resume', icon: <CgFileDocument />, placeholder: '+46 123 123 123'},

  {key: 'instagram', 'label': 'instagram', icon: <FaInstagram />, placeholder: 'https://facebook.com/profile/...'},
  {key: 'facebook', 'label': 'facebook', icon: <FaFacebook />},
  {key: 'discord', 'label': 'discord', icon: <FaDiscord />},
  {key: 'youtube', 'label': 'youtube', icon: <FaYoutube />},
  {key: 'whatsapp', 'label': 'whatsapp', icon: <FaWhatsapp />},
  {key: 'github', 'label': 'github', icon: <FaGithub />},
  {key: 'telegram', 'label': 'telegram', icon: <FaTelegram />},
];

function upperFirst(str) {
  return str.slice(0,1).toUpperCase() + str.slice(1);
}

export default function PageButtonsForm({user,page}) { 

    // console.log(page)
  const pageSavedButtonsKeys = Object.keys(page.buttons) || [];
  // const pageSavedButtonsKeys = page.buttons
  const pageSavedButtonsInfo = pageSavedButtonsKeys.filter((k)=> k !== "page").map(k => allButtons.find(b => b.key === k));
  const [activeButtons, setActiveButtons] = useState(pageSavedButtonsInfo)

  function addButtonToProfile(button) {
    setActiveButtons(prevButtons => {
      return [...prevButtons, button];
    });
  }

  async function saveButtons(formData) {
    await savePageButtons(formData);
    toast.success('Settings saved!');
  }

  function removeButton({key:keyToRemove}) {
    setActiveButtons(prevButtons => {
      return prevButtons
        .filter(button => button.key !== keyToRemove);
    });
  }

  const availableButtons = allButtons.filter(b1 => !activeButtons.find(b2 => b1.key === b2.key));

  return (
    <SectionBox>
      <form action={saveButtons}>
        <h2 className="text-2xl font-bold mb-4">Buttons</h2>
       
          {activeButtons.map(b => (
            <div key={b.key} className="mb-4 md:flex items-center">
              <div className="w-56 flex h-full text-gray-700 p-2 gap-2 items-center">
              <FaGripLines />
               
                {b.icon}
                <span>{upperFirst(b.label)}:</span>
              </div>
              <div className="grow flex">
                <input
                  placeholder={b.placeholder}
                  name={b.key}
                  defaultValue={page.buttons[b.key]}
                  type="text" style={{marginBottom:'0'}} />
                <button
                  onClick={() => removeButton(b)}
                  type="button"
                  className="py-2 px-4  bg-gray-300 cursor-pointer">
                  <FaTrash />
                </button>
              </div>
            </div>
          ))}
       
        <div className="flex flex-wrap gap-2 mt-4 border-y py-4">
          {availableButtons.map(b => (
            <button
              key={b.key}
              type="button"
              onClick={() => addButtonToProfile(b)}
              className="flex items-center gap-1 p-2 bg-gray-200">
              {b.icon}
              <span className="">
                {upperFirst(b.label)}
              </span>
              <FaPlus />
            </button>
          ))}
        </div>
        <div className="max-w-xs mx-auto mt-8">
          <SubmitButton>
          <FaSave />
            <span>Save</span>
          </SubmitButton>
        </div>
      </form>
    </SectionBox>
  );
}