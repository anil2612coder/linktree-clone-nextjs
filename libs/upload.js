"use client";

import { CldUploadWidget } from "next-cloudinary";




const MediaUpload = ({
  onChange,
  children,
}) => {
  const handleUpload = (results) => {
    // console.log('secure_url', results.info.secure_url);
    onChange(results.info.secure_url);
  };

  return (
    <CldUploadWidget
    onSuccess={handleUpload}
      uploadPreset="tvherc1x"
      options={{ maxFiles: 1 }}
    >
      {({ open }) => {
        return (
          <div onClick={() => open && open()} className="inline-block">
            {children}
          </div>
        );
      }}
    </CldUploadWidget>
  );
};

export default MediaUpload;