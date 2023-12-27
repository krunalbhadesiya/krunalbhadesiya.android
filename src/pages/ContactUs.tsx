import ContectCard from "../components/ContectCard";
import ContectForm from "../components/ContectForm";

function ContactUs() {
  return (
    <div className="grid grid-cols-1 justify-items-stretch">
        <div className="md:px-20  bg-foreground-50 grid grid-cols-1 md:grid-cols-2">
          <img src="/assets/contectus/contectus.png" alt="contect us vector" width={400} height={400} />
          <ContectCard />
        </div>
        <div className="py-4 justify-self-center">
          <ContectForm/>
        </div>
      </div>
  )
}

export default ContactUs