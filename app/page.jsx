import Feed from '@components/Feed'

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">
            Discover and Share
            <br classname = "max-md:hidden" />
            <span className = "orange_gradient text-center"> Your Interview Process </span>
        </h1>
        <p className = "desc text-center">
            Internvu is a site to share and discover interview
            experiences and processes at different companies
            to help better prepare for your future career.
        </p>

        <Feed />
    </section>
  )
}

export default Home