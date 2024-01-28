import MyProjectCard from "../components/MyProjectCard";


function Projects() {
    return (
        <div className="px-10 pt-2 md:px-20 md:pt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
            <MyProjectCard 
                title="Consultancy Website" 
                date="26/04/2023" 
                description="In the dynamic realm of real estate, finding a reliable partner can make all the difference. Danani Consultancy emerges as a beacon of trust, with a rich portfolio boasting over 10,000 property valuations. As a seasoned website developer tasked with presenting their offerings, allow me to shed light on the essence of their services." 
                imgcount={6} 
            />
            <MyProjectCard 
                title="Green Shop" 
                date="26/06/2023" 
                description='"Green Shop" is a vibrant online platform dedicated to eco-friendly products and sustainable living. From reusable household items to organic skincare, our website showcases a curated selection of environmentally conscious products. With a user-friendly interface and intuitive navigation, browsing through our catalog is a breeze. Whether your a seasoned environmental enthusiast or just starting your green journey, "Green Shop Website" is your one-stop destination for guilt-free shopping that kind to both the planet and your wallet. Join us in making a positive impact, one purchase at a time.' 
                imgcount={6} 
            />
            <MyProjectCard 
                title="Sloat Machine Game 1 Ui-Ux" 
                date="01/07/2023" 
                description='The "Sloat Machine Game 1" project entails the creation of a captivating UI/UX design using Figma. This design will be the cornerstone of an engaging slot machine game, combining sleek aesthetics with seamless user experience. From vibrant graphics to intuitive navigation, every element is meticulously crafted to immerse players in a thrilling gaming adventure. With Figma versatile toolkit, we aim to deliver a visually stunning and user-friendly interface that keeps players hooked for hours of entertainment. Get ready to spin and win with "Sloat Machine Game 1"!'  
                imgcount={5} 
            />
            <MyProjectCard 
                title="Sloat Machine Game 2 Ui-Ux" 
                date="00/07/2023" 
                description='The "Slot Machine Game 2" UI/UX Figma design project focuses on creating a visually engaging and user-friendly interface for an exciting virtual slot machine experience. Leveraging Figma versatile design tools, we aim to craft an interface that seamlessly blends aesthetics with functionality. From vibrant graphics to intuitive controls, every element is meticulously designed to enhance the users gaming experience. With attention to detail and a keen understanding of user behavior, our goal is to deliver a captivating interface that keeps players entertained and immersed in the thrill of the game.' 
                imgcount={5} 
            />
            <MyProjectCard 
                title="Email Client" 
                date="20/12/2023" 
                description='The "Email Client " project powered by Next.js and Next UI aims to revolutionize the way users interact with their emails online. With Next.js providing seamless server-side rendering and Next UI offering a sleek and intuitive user interface, this web application promises a dynamic and efficient email management experience. From streamlined navigation to responsive design, every aspect is meticulously crafted to ensure optimal usability across devices. With cutting-edge technology and user-centric design principles at its core, our goal is to redefine the standard for email clients, making inbox management a breeze for users everywhere.' 
                imgcount={3} 
            />
            <MyProjectCard 
                title="Portfolio Template" 
                date="26/12/2023" 
                description='The "Portfolio Template" offers a modern and versatile solution for showcasing your work and skills. Built using React JS, this template provides a sleek and responsive design, ensuring your portfolio looks great on any device. With easy customization options, you can personalize every aspect of your portfolio to reflect your unique style and brand. Whether your a designer, developer, or freelancer, this template empowers you to create a professional online presence that impresses potential clients and employers. Elevate your portfolio with the power of React JS and stand out in the digital landscape.' 
                imgcount={5} 
            />
        </div>
    )
}

export default Projects