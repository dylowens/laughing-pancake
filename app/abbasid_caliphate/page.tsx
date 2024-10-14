import React from 'react'; // Import React
import Image from 'next/image'; // Import the Image component

export default function AbbasidCaliphatePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg overflow-hidden">
        <Image 
          src="/images/Abbasid_Caliphate_Gif.gif" 
          alt="Abbasid Caliphate Map"
          layout="responsive" // Optional: Adjust layout as needed
          width={500} // Set appropriate width
          height={300} // Set appropriate height
        />
      </div>
    </div>
  );
}
