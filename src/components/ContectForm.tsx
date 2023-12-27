import { useState,useMemo } from 'react';
import { Button, Card, CardBody, CardFooter, CardHeader, Input, Textarea, } from "@nextui-org/react";
import { IconMailFilled, IconMailQuestion, IconNotes, IconUserFilled } from "@tabler/icons-react";


const ContectForm = () => {
    const [value, setValue] = useState("a@gmail.com");

    const validateEmail = (value: any) => value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

    const isInvalid = useMemo(() => {
        if (value === "") return false;

        return validateEmail(value) ? false : true;
    }, [value]);

    const [user, setUser] = useState({
        username: "",
        email: "",
        subject: "",
        description: ""
    })

    // const [status, setStatus] = useState<null | string>(null);

    function handleChange(e: any): void {
        const username = e.target.name;
        const value = e.target.value;

        setUser((prevUser: any) => ({ ...prevUser, [username]: value }));
    }

    const handleSubmit = async (e:any) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { "Content_Type": "application/json" },
                body: JSON.stringify({
                    username: user.username,
                    email: user.email,
                    subject: user.subject,
                    description: user.description
                })
            })
            // Set the status based on the response from the API route
            if (response.status === 200) {
                setUser({
                    username: "",
                    email: "",
                    subject: "",
                    description: ""
                })
                // setStatus("success");
            } else {
                // setStatus("error");
            }

        } catch (e) {
            console.log(e)
        }

    }


    return (
        <form onSubmit={handleSubmit}>
            <Card className="w-fit p-4 justify-self-center">
                <CardHeader >
                    <h2 className="font-bold text-xl">Contect Form</h2>
                </CardHeader>
                <CardBody className="gap-2">
                    <Input
                        id='username'
                        type="text"
                        label="Name"
                        variant="bordered"
                        placeholder="your name"
                        labelPlacement="outside"
                        startContent={
                            <IconUserFilled />
                        }
                        classNames={{
                            base: "max-w-xs",
                            input: "resize-y min-h-[40px]",
                        }}
                        name="username"
                        value={user.username}
                        onChange={handleChange}
                        autoComplete="off"
                        isRequired
                    />
                    <Input
                        id='email'
                        type="email"
                        label="Email"
                        variant="bordered"
                        placeholder="you@example.com"
                        labelPlacement="outside"
                        startContent={
                            < IconMailFilled />
                        }
                        isInvalid={isInvalid}
                        color={isInvalid ? "danger" : "success"}
                        errorMessage={isInvalid && "Please enter a valid email"}
                        onValueChange={setValue}
                        classNames={{
                            base: "max-w-xs",
                            input: "resize-y min-h-[40px]",
                        }}
                        name="email"
                        value={user.email}
                        onChange={handleChange}
                        autoComplete="off"
                        isRequired
                    />
                    <Input
                        id='subject'
                        type="subject"
                        label="Subject"
                        variant="bordered"
                        placeholder="subject"
                        labelPlacement="outside"
                        startContent={
                            <IconMailQuestion />
                        }
                        classNames={{
                            base: "max-w-xs",
                            input: "resize-y min-h-[40px]",
                        }}
                        name="subject"
                        value={user.subject}
                        onChange={handleChange}
                        autoComplete="off"
                        isRequired
                    />
                    <Textarea
                        id='description'
                        label="Description"
                        variant="bordered"
                        placeholder="Enter your description"
                        disableAnimation
                        disableAutosize
                        labelPlacement="outside"
                        startContent={
                            <IconNotes />
                        }
                        classNames={{
                            base: "max-w-xs",
                            input: "resize-y min-h-[40px]",
                        }}
                        name="description"
                        value={user.description}
                        onChange={handleChange}
                        autoComplete="off"
                        isRequired
                    />
                </CardBody>
                <CardFooter >
                    <Button className="justify-self-center" variant="bordered" type="submit">
                        Submit
                    </Button>
                </CardFooter>
            </Card>
        </form>
    )
}

export default ContectForm