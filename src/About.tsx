import "./App.css"

function About() {
  return (
    <>
      <main>
        <section className="flex items-center flex-col w-full">
          <img className="bg-cover" src="./image_54.png" alt="" />
          <div className="w-5/6 mt-6">
            <p className="text-xl font-bold">Don’t squeeze in a sedan when you could relax in a van.</p>
            <p className="text-sm mt-4">
              Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified
              before each trip to ensure your travel plans can go off without a hitch. (Hitch costs extra 😉)
            </p>
            <p className="text-sm mt-4">
              Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.
            </p>
          </div>
          <div className="bg-orange-200 w-5/6 mt-6 p-6">
            <p className="text-xl font-bold leading-6">
              Your destination is waiting. <br /> Your van is ready.
            </p>
            <button className="bg-black py-2 px-6 mt-6 text-white font-bold rounded-lg text-sm">
              Explore our vans
            </button>
          </div>
        </section>
      </main>
    </>
  )
}

export default About
