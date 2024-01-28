import { Card, CardHeader, CardBody, CardFooter, Button } from "@nextui-org/react";
import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, useDisclosure } from "@nextui-org/react";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import { ArrowLeft2, ArrowRight2 } from "iconsax-react";

interface carddetail {
    title: string;
    date: string | null;
    description: string | null;
    imgcount: number; // Corrected to number
}

const MyProjectCard = (props: carddetail) => {


    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const imageUrls = Array.from({ length: props.imgcount }, (_, index) => `/assets/projects/${props.title}/0${index + 1}.png`);

    return (
        <>
            <Card className="py-4 flex">
                <CardHeader className="pb-0 pt-2 px-4 flex flex-row justify-between">
                    <div className="flex flex-col items-start">
                        <h4 className="font-bold text-large">{props.title}</h4>
                        <small className="text-default-500">{props.date}</small>
                    </div>
                    <div className="">
                        <Button className="max-sm:hidden" color="primary" variant="faded" onPress={onOpen}>
                            Read More
                        </Button>
                    </div>
                </CardHeader>
                <CardBody className="overflow-visible py-2 flex justify-center items-center">
                    <Carousel
                        showThumbs={false}
                        autoPlay
                        infiniteLoop
                        dynamicHeight={false}
                        showArrows={false}
                        showStatus={false} // Hide page index
                    >
                        {imageUrls.map((imageUrl, index) => (
                            <div key={index}>
                                <img src={imageUrl} alt={`Image ${index + 1}`} className="rounded-xl w-full h-full" />
                            </div>
                        ))}
                    </Carousel>
                </CardBody>
                <CardFooter className="md:hidden lg:hidden">
                    <Button color="primary" variant="faded" onPress={onOpen}>
                        Read More
                    </Button>
                </CardFooter>
            </Card>

            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                scrollBehavior="inside"
                placement="center"
                backdrop="blur"
            >
                <ModalContent>
                    <ModalHeader className="flex flex-col gap-1">
                        <small className="text-default-500">{props.date}</small>
                    </ModalHeader>
                    <ModalBody>
                        <Carousel
                            showThumbs={false}
                            autoPlay
                            infiniteLoop
                            dynamicHeight={false}
                            showArrows={false}
                            showStatus={false} // Hide page index
                        >
                            {imageUrls.map((imageUrl, index) => (
                                <div key={index}>
                                    <img src={imageUrl} alt={`Image ${index + 1}`} className="rounded-xl w-full h-full" />
                                </div>
                            ))}
                        </Carousel>
                        <h4 className="font-bold text-large">{props.title}</h4>
                        <p className="text-justify">{props.description}</p>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
};

export default MyProjectCard;
