import {Hero,Footer,SuperQuality,PopularProducts,Services,Subscribe,SpecialOffer,CustomerReview} from "./sections";

import Nav from "./components/Nav";

function App() {
  return (
    <main className="relative">
      <Nav/>
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero/>
      </section>
      <section className="padding">
        <PopularProducts/>
      </section>
      <section className="padding">
        <SuperQuality/>
      </section>
      <section className="padding-x py-10">
        <Services/>
      </section>
      <section className="padding">
        <SpecialOffer/>
      </section>
      <section className="padding bg-pale-blue">
        <CustomerReview/>
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe/>
      </section>
      <section className="padding-x pb-4 bg-black">
        <Footer/>
      </section>
    </main>
  )
}

export default App;