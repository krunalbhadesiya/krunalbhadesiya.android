import React from 'react'
import { Button } from "@nextui-org/react";
import { IconBrandGithub, IconBrandLinkedin, IconBrandX, IconMail, IconPhoneCall } from '@tabler/icons-react';

function ContectCard() {
    const iconClasses = "text-xl text-default-500 pointer-events-none flex-shrink-0";
    return (
        <div className='grid grid-cols-1 font-montserrat'>
            <div className='pt-2 md:pt-12 flex justify-center mb-3'>
                <h1 className='font-sans font-bold text-4xl'>Contect Us</h1>
            </div>
            <Button variant="light" startContent={<IconPhoneCall />}>
                <a href='tel:+919725636621' target="_blank" rel="noopener noreferrer">
                    +91 9725636621
                </a>
            </Button>
            <Button variant="light" startContent={<IconMail />}>
                <a href='mailto:krunalbhadesiya.socialmedia@gmail.com' target="_blank" rel="noopener noreferrer">
                    krunalbhadesiya.socialmedia@gmail.com
                </a>
            </Button>
            <Button variant="light" startContent={<IconBrandLinkedin />}>
                <a href='https://www.linkedin.com/in/krunal-bhadesiya/' target="_blank" rel="noopener noreferrer">
                    linkedin.com/in/krunal-bhadesiya
                </a>
            </Button>
            <Button variant="light" startContent={<IconBrandGithub />}>
                <a href='https://github.com/krunalbhadesiya' target="_blank" rel="noopener noreferrer">
                    github.com/krunalbhadesiya
                </a>
            </Button>
            <Button variant="light" startContent={<IconBrandX />}>
                <a href='https://twitter.com/krunalbhadesiya' target="_blank" rel="noopener noreferrer">
                    github.com/krunalbhadesiya
                </a>
            </Button>
        </div>
    );
}

export default ContectCard