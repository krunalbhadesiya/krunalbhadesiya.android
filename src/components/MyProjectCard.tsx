import React from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

interface carddetail {
    title: string;
    // department:string;
    date: string | null;
    imgwidth: string;
}

const MyProjectCard = (props: carddetail) => {
    return (
        <Card className="py-4 flex ">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                {/* <p className="text-tiny uppercase font-bold">Daily Mix</p> */}
                <h4 className="font-bold text-large">{props.title}</h4>
                <small className="text-default-500">{props.date}</small>
            </CardHeader>
            <CardBody className="overflow-visible py-2">
                <Image
                    alt="Card background"
                    className="object-cover rounded-md"
                    src={"/assets/projects/" + props.title + ".png"}
                    width={props.imgwidth}
                />
            </CardBody>
        </Card>
    )
}

export default MyProjectCard