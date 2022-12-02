import { Box, Button, Input, InputGroup, InputLeftElement, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Text, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import { FaLock, FaUserNinja } from "react-icons/fa";
import SocialLogin from "./SocialLogin";
import { useForm } from "react-hook-form";

interface LoginModalProps {
    isOpen: boolean;
    onClose: () => void;
}

interface ILoginModalForm {
    username: string;
    password: string;
}

export default function LoginModal({ isOpen, onClose }:
    LoginModalProps) {
    const { register,
        handleSubmit,
        formState: {errors}
    } = useForm<ILoginModalForm>();
    const onSubmit = (data: ILoginModalForm) => {
        console.log(data);
    }
    console.log(errors);
    return(
        <Modal
        isOpen={isOpen}
        onClose={onClose}
    >
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Log In</ModalHeader>
                <ModalCloseButton />
                <ModalBody
                    as="form"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <VStack>
                        <InputGroup>
                            <InputLeftElement children={
                                <Box color="gray.500">
                                    <FaUserNinja />
                                </Box>
                            }
                            />
                            <Input
                                required
                                isInvalid={Boolean(errors.username?.message)}
                                {...register("username", {
                                    required: "Please write a username.",
                                })}
                                variant={"filled"}
                                placeholder="Username"
                            />
                        </InputGroup>
                        <Text
                            w="100%"
                            fontSize={"sm"}
                            color="red.500"
                        >
                            {errors.username?.message}
                        </Text>
                        <InputGroup>
                        <InputLeftElement children={
                                <Box color="gray.500">
                                    <FaLock />
                                </Box>
                            }
                            />
                            <Input
                                required
                                isInvalid={Boolean(errors.password?.message)}
                                {...register("password", {
                                    required: "Please write a password.",
                                })}
                                type="password"
                                variant={"filled"}
                                placeholder="Password"
                            />
                        </InputGroup>
                        <Text
                            w="100%"
                            fontSize={"sm"}
                            color="red.500"
                        >
                            {errors.password?.message}
                        </Text>
                    </VStack>
                    <Button
                        mt={4}
                        w="100%"
                        colorScheme={"red"}
                        type="submit"
                    >
                        Log in
                    </Button>
                    <SocialLogin />
                </ModalBody>
            </ModalContent>
        </Modal>
    );
}