const Banner = () => {
    return (
        <div className="mt-8 ml-8 mr-8 ">
            <div className="hero  bg-[url('/image/banner.png')] h-[450px] lg:h-[600px] rounded-2xl " >
       <div className="hero-overlay bg-opacity-60 rounded-2xl"></div>
       <div className="hero-content text-center text-neutral-content">
    <div className="">
      <h1 className="mb-5 text-xl lg:text-5xl font-bold">Discover an exceptional cooking <br></br> class tailored for you!</h1>
      <p className="mb-5">We provide various types of dishes. and we also have lot's of traditional dishes. Our dishes items are from all over the world.<br></br>We always ensure our customer satisfaction. So if you want take the feel of real taste visit our restuarent Recipe Calories.</p>

      <div className="flex flex-col lg:flex-row justify-center gap-6">
      <button className="btn btn-success rounded-full">Explore Now</button>
      <button className="btn btn-outline text-white rounded-full">Our Feedback</button>
      </div>
    </div>
  </div>
</div>
<div>
  <h1 className="text-center text-4xl font-extrabold mt-8">Our Recipes</h1>
  <p className="text-center">Our Recipes are given below. There are many types of recipes here and all kind of recipes are available.<br></br>Choose your favourite dishes and click on the preparing option so that your order will add in the preparing list.</p>
</div>
        </div>
    );
};

export default Banner;