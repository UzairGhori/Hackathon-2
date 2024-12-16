import Image from "next/image";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import Card from "../Component/Cards/page";

const ProductDetails: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-0 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Product Gallery */}
        <div className="flex flex-col md:w-1/2">
          <div className="w-full aspect-square bg-[#F9F1E7] mb-4 rounded-lg">
            <Image
              src="/Asgaard sofa 3.png"
              alt="Asgaard Sofa"
              width={1200}
              height={600}
              className="w-full h-full object-contain"
            />
          </div>
          {/* Thumbnails */}
          <div className="grid grid-cols-4 gap-2">
            <Image
              src="/Group 94.png"
              alt="Thumbnail"
              width={100}
              height={100}
              className="w-full h-auto rounded-lg cursor-pointer"
            />
            <Image
              src="/Group 96.png"
              alt="Thumbnail"
              width={100}
              height={100}
              className="w-full h-auto rounded-lg cursor-pointer"
            />
            <Image
              src="/Group 97.png"
              alt="Thumbnail"
              width={100}
              height={100}
              className="w-full h-auto rounded-lg cursor-pointer"
            />
            <Image
              src="/Mask group (2).png"
              alt="Thumbnail"
              width={100}
              height={100}
              className="w-full h-auto rounded-lg bg-[#F9F1E7] cursor-pointer"
            />
          </div>
        </div>

        {/* Product Details */}
        <div className="flex-1 space-y-6">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">Asgaard Sofa</h1>
          <p className="text-xl font-medium text-[#9F9F9F]">Rs. 250,000.00</p>
          <div className="flex items-center space-x-2">
            <Image
              src="/Group 88.png"
              alt="Rating"
              width={120}
              height={30}
              className="border-r border-gray-300 pr-4"
            />
            <span className="text-sm text-gray-500">5 Customer Reviews</span>
          </div>

          <p className="text-gray-700 leading-relaxed">
            Setting the bar as one of the loudest speakers in its class, the Kilburn
            is a compact, stout-hearted hero with a well-balanced audio which boasts
            a clear midrange and extended highs for a sound.
          </p>

          {/* Size Selector */}
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Size</h3>
            <div className="flex space-x-2">
              <button className="w-12 h-12 bg-yellow-500 text-black font-semibold rounded-md">
                L
              </button>
              <button className="w-12 h-12 bg-gray-200 text-black font-semibold rounded-md">
                XL
              </button>
              <button className="w-12 h-12 bg-gray-200 text-black font-semibold rounded-md">
                XS
              </button>
            </div>
          </div>

          {/* Color Selector */}
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Color</h3>
            <div className="flex space-x-2">
              <div className="w-12 h-12 bg-[#816DFA] rounded-full"></div>
              <div className="w-12 h-12 bg-black rounded-full"></div>
              <div className="w-12 h-12 bg-[#B88E2F] rounded-full"></div>
            </div>
          </div>

          {/* Quantity Selector */}
          <div className="flex items-center space-x-6">
            <h3 className="text-lg font-medium text-gray-900">Quantity</h3>
            <div className="flex items-center border rounded-md">
              <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200">-</button>
              <span className="px-4">1</span>
              <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200">+</button>
            </div>
            <button className="px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800">
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* Description and Tabs */}
      <div className="mt-16">
        <div className="flex justify-center space-x-10 border-b">
          <button className="pb-2 border-b-2 border-black font-semibold">
            Description
          </button>
          <button className="pb-2 text-gray-500">Additional Information</button>
          <button className="pb-2 text-gray-500">Reviews [5]</button>
        </div>

        <div className="mt-6 text-gray-700 space-y-4">
          <p>
            Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable
            active stereo speaker takes the unmistakable look and sound of Marshall
            and unplugs the chords for a clear sound experience.
          </p>
          <p>
            Setting the bar as one of the loudest speakers in its class, the Kilburn
            is compact yet delivers clear midrange and extended highs for a crisp
            sound experience.
          </p>
        </div>
         {/* Product Images */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <Image
          src="/Group 107.png"
          alt="Product"
          width={500}
          height={300}
          className="w-full h-auto rounded-lg shadow-md"
        />
        <Image
          src="/Group 106.png"
          alt="Product"
          width={500}
          height={300}
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div>
      
      </div>
      <div className="max-w-7xl mx-auto px-4 lg:px-0 my-16">
    <h1 className="text-center text-2xl lg:text-3xl font-bold font-Poppins">
      Our Products
    </h1>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
      <Card
        img="/image 1.png"
        title="Syltherine"
        description="Stylish cafe chair"
        price="Rp 2,500,000"
        oldprice="Rp 3,500,000"
      />
      <Card
        img="/Featured Products.png"
        title="Leviosa"
        description="Stylish cafe chair"
        price="Rp 2,500,000"
        oldprice=""
      />
      <Card
        img="/image 3.png"
        title="Lolito"
        description="Stylish cafe chair"
        price="Rp 7,000,000"
        oldprice="Rp 14,000,000"
      />
      <Card
        img="/images.png"
        title="Syltherine"
        description="Stylish cafe chair"
        price="Rp 5,000,000"
      />
      </div>
    </div>

    </div>
  );
};

export default ProductDetails;
