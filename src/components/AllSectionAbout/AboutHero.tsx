import React from "react";

const AboutHero: React.FC = () => {
  return (
    <section className="relative bg-[#4A2501]">
      
      <div className="absolute inset-0">
        <img
          src="https://res.cloudinary.com/dtpw00be5/image/upload/v1733515578/0dc41fd0b139d6febbacfc0b4375f28f_y0ukww.jpg" // Remplacez par votre image Cloudinary
          alt="Hero Background"
          className="w-full h-[415px] object-cover bg-black bg-opacity-40"
        />
        
      </div>

     
      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white py-20 px-6 sm:py-32 sm:px-12">
        <h1 className="text-3xl sm:text-4xl font-bold mt-9">
          À propos de Ndaku Proche
        </h1>
        
      </div>
    </section>
  );
};

export default AboutHero;
