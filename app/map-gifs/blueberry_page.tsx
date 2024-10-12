import Image from 'next/image'; // Import the Image component

export default function BlueberryUS() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg overflow-hidden">
        <Image 
          src="/images/Blueberry U.S. Map.gif" 
          alt="Blueberry U.S. Map" 
          layout="responsive" // Use layout for responsive behavior
          width={500} // Specify width
          height={300} // Specify height
        />
      </div>
    </div>
  );
}
