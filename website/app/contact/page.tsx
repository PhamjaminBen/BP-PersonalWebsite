"use client";
import { useState } from "react";
import axios from "axios";

export default function Form() {
  const [name, setName] = useState("");
  const [selectedImage, setSelectedImage] = useState("");
  const [uploading, setUploading] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File>();

  const handleUpload = async () => {
    setUploading(true);
    try {
      if (!selectedFile) {
        setUploading(false);
        return;
      }
      const formData = new FormData();
      formData.append("myImage", selectedFile);
      const { data } = await axios.post("/api.image", formData);
      console.log(data);
    } catch (error: any) {
      console.log(error.response?.data);
    }
    setUploading(false);
  };

  return (
    <main className="m-auto  w-fit flex-col items-center justify-center space-y-5">
      <label>
        <input
          type="file"
          hidden
          onChange={({ target }) => {
            if (target.files) {
              const file = target.files[0];
              setSelectedImage(URL.createObjectURL(file));
              setSelectedFile(file);
            }
          }}
        />

        <div
          className="w-40 aspect-video m-auto rounded flex items-center justify-center 
        border-2 border-dashed cursor-pointer"
        >
          {selectedImage ? (
            <img src={selectedImage} alt="" />
          ) : (
            <span>Select Image </span>
          )}
        </div>
      </label>

      <div className=" w-fit m-auto">
        <button
          onClick={handleUpload}
          disabled={uploading}
          style={{ opacity: uploading ? ".5" : "1" }}
          className="bg-indigo-600 w-32 p-3 rounded text-white"
        >
          {uploading ? "Uploading.." : "Upload"}
        </button>
      </div>
    </main>
  );
}
