

import {Page} from "@/models/Page";
import {User} from "@/models/User";
import {Event} from "@/models/Event";
import {btoa} from "next/dist/compiled/@edge-runtime/primitives";
import { FaDiscord, FaEnvelope, FaFacebook, FaGithub, FaInstagram, FaMobile, FaPlus, FaSave, FaTelegram, FaTrash, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoDocumentText } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLink } from "react-icons/fa";

import mongoose from "mongoose";

import Image from "next/image";
import Link from "next/link";

export const buttonsIcons = {
  email: <FaEnvelope className="w-5 h-5"/>,
  mobile: <FaPhoneAlt className="w-5 h-5"/>,
  instagram:  <FaInstagram className="w-5 h-5"/>,
  facebook:  <FaFacebook className="w-5 h-5"/>,
  discord: <FaDiscord className="w-5 h-5"/>,
  resume:<IoDocumentText className="w-5 h-5"/>,
  youtube: <FaYoutube className="w-5 h-5"/>,
  whatsapp: <FaWhatsapp className="w-5 h-5"/>,
  github: <FaGithub className="w-5 h-5"/>,
  telegram: <FaTelegram className="w-5 h-5"/>,
};

function buttonLink(key, value) {
  if (key === 'mobile') {
    return 'tel:'+value;
  }
  if (key === 'email') {
    return 'mailto:'+value;
  }
  return value;
}

export default async function UserPage({params}) {
  const uri = params.uri;
  mongoose.connect(process.env.MONGO_URI);
  const page = await Page.findOne({uri});

  const user = await User.findOne({email:page.owner});
  console.log(user)
  await Event.create({uri:uri, page:uri, type:'view'}); 
  return (
    <div className="bg-blue-950 text-white min-h-screen">
      <Link href="/">
      <button className="relative left-2 top-1 border-2 rounded p-2 border-zinc-600 shadow-md">Create Your Page</button>
      </Link>
     
      <div
        className="h-80 bg-gray-400 bg-cover bg-center "
        style={
          page.bgType === 'color'
            ? {backgroundColor:page.bgColor}
            : {backgroundImage:`url(${page.bgImage})`}
        }
      >
      </div>
      <div className="aspect-square w-36 h-36 mx-auto relative -top-20 -mb-16">
        <Image
          className="rounded-full w-full h-full border-4 border-white object-cover"
          src={user.image}
          alt="avatar"
          width={256} height={256}
        />
      </div>
      <h2 className="text-2xl text-center mb-1">{page.displayName}</h2>
      <h3 className="text-md flex gap-2 justify-center items-center text-white/70">
        
        <FaLocationDot className="h-4"/>
        <span>
          {page.location}
        </span>
      </h3>
      <div className="max-w-xs mx-auto text-center my-2">
        <p>{page.bio}</p>
      </div>
       <div className="flex gap-2 justify-center mt-4 pb-4">

        {Object.keys(page.buttons).map(buttonKey => (
          <Link target="_blank" key={buttonKey} href={buttonLink(buttonKey, page.buttons[buttonKey])}
                className={`rounded-full bg-white text-blue-950 p-2 flex items-center justify-center `}>
            
            {buttonsIcons[buttonKey]}
            

          </Link>
        ))}
      </div>
      <div className="max-w-2xl mx-auto grid md:grid-cols-2 gap-6 p-4 px-8">
        {page.links.map(link => (
          <Link
            key={link.url}
            target="_blank"
            ping={process.env.URL+'api/click?url='+ btoa(link.url)+'&page='+page.uri}
            className="bg-indigo-800 p-2  flex"
            href={link.url}>
            <div className="relative -left-4 overflow-hidden w-16">
              <div className="w-16 h-16 bg-blue-700  relative flex items-center justify-center aspect-square">
                {link.icon && (
                  <Image
                    className="w-full h-full object-cover"
                    src={link.icon}
                    alt={'icon'} width={64} height={64} />
                )}
                {!link.icon && (
                 <FaLink className="w-8 h-8" />
                )}
              </div>
            </div>
            <div className="flex items-center justify-center shrink grow-0 overflow-hidden">
              <div>
                <h3>{link.title}</h3>
                <p className="text-white/50 h-6 overflow-hidden">{link.subtitle}</p>
              </div>
            </div>
          </Link>
        ))}
      </div> 
    </div>
  );
}