import image1 from "../../assets/1.avif";
import image2 from "../../assets/2.avif";
import image3 from "../../assets/3.avif";
import image4 from "../../assets/4.avif";
import image5 from "../../assets/5.avif";
import image6 from "../../assets/6.avif";

const TopCategories = () => {
  // Array with objects containing category names and corresponding image URLs
  const categories = [
    { name: "Cadeaux pour maman", image: image1 },
    { name: "Accessoires pour la maison", image: image2 },
    { name: "Articles de sport", image: image3 },
    { name: "Électronique", image: image4 },
    { name: "Vêtements pour enfants", image: image5 },
    { name: "Produits de beauté", image: image6 },
  ];

  return (
    <div className="container mx-auto px-4 mt-[80px] mb-[80px]">
      <p className="text-center text-xl font-bold mb-[50px]">
        Célébrez CHAQUE moment avec des cadeaux venant de petites boutiques !
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {categories.map((category, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center text-center cursor-pointer transform transition-transform duration-300 hover:scale-110"
          >
            <img
              className="block w-24 h-24 rounded-full mb-2"
              src={category.image}
              alt={category.name}
            />
            <h3 className="text-sm font-semibold">{category.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopCategories;
