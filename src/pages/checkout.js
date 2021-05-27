import Header from "../components/Header";
import Image from "next/image";

const checkout = () => {
  return (
    <div className="bg-gray-100">
      <Header />
      <main className="lg:flex max-w-screen-2xl mx-auto">
        {/* Left */}
        <div>
          <Image
            src="https://links.papareact.com/ikj"
            width={1020}
            height={250}
            objectFit="contain"
          />
        </div>
        {/* Right */}
        <div></div>
      </main>
    </div>
  );
};

export default checkout;
