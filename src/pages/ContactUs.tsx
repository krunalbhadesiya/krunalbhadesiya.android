import ContectCard from "../components/ContectCard";
import ContectForm from "../components/ContectForm";

function ContactUs() {
  return (
    <div className="pt-6 grid grid-cols-1 justify-items-stretch">
        <div className="sm:px-3 md:px-10 grid grid-cols-1 md:grid-cols-3 md:gap-16">
          <img src="/assets/contectus/contectus.png" alt="contect us vector" width={350} height={350} />
          <ContectCard />
          <ContectForm/>
        </div>
      </div>
  )
}

export default ContactUs