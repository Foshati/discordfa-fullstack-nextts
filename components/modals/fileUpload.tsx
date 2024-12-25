import { UploadDropzone } from "@/lib/uploadthing";
import "@uploadthing/react/styles.css";
import { X } from "lucide-react";
import Image from "next/image";

interface FileUploadProps {
  onChange: (url?: string) => void;
  value: string;
  endpoint: "messageFile" | "serverImage";
}

export const FileUplaod = ({ onChange, value, endpoint }: FileUploadProps) => {
  const fileType = value?.split(".").pop();

  if (value && fileType !== "pdf") {
    return (
      <div
        className="
      
      relative  h-20 w-20"
      >
        <Image
          fill
          src={value}
          alt="Upload"
          className="object-cover rounded-full"
        />
        <button
          onClick={() => onChange("")}
          className="bg-rose-500 text-white p-1
          absolute top-0 right-0 rounded-full shadow-sm"
          type="button"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    );
  }

  return (
    <div>
 <UploadDropzone 
  endpoint={endpoint}
  onClientUploadComplete={(res) => {
    onChange(res?.[0].url);
  }}
  onUploadError={(error: Error) => {
    alert(`ERROR! ${error.message}`);
  }}
  appearance={{
    button: {
      backgroundColor: "#F97316",
    }
    
  }}
/>
    </div>
  );
};
