import MyProjectCard from "../components/MyProjectCard";


function Projects() {
    return (
        <div className="px-10 pt-2 md:px-20 md:pt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
            <MyProjectCard title="Consultancy Website" date="26/04/2023" imgwidth="540" />
            <MyProjectCard title="Green Shop" date="26/06/2023" imgwidth="540" />
            <MyProjectCard title="Sloat Machine Game 1 Ui-Ux" date="01/07/2023" imgwidth="240" />
            <MyProjectCard title="Sloat Machine Game 2 Ui-Ux" date="00/07/2023" imgwidth="240" />
            <MyProjectCard title="Email Client" date="20/12/2023" imgwidth="540" />
            <MyProjectCard title="Portfolio Template" date="26/12/2023" imgwidth="540" />
        </div>
    )
}

export default Projects