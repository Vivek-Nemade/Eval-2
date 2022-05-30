import React from "react";
import { Button,Modal,ModalBody,Input,Select,RadioGroup,Radio, useDisclosure } from "@chakra-ui/react";
import {
  
  
  ModalHeader,
  
} from '@chakra-ui/react'

const AddProduct = () => {
  // TODO: Remove below const and instead import them from chakra
  //  Button = () => <div />;
  //  Modal = () => <div />;
  //  ModalBody = () => <div />;
  //  Input = () => <div />;
  //  Select = () => <div />;
  //  RadioGroup = () => <div />;
  //  Radio = () => <div />;
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Button my={4} data-cy="add-product-button" onClick={onOpen}>Add New Product</Button>
      <Modal  isOpen={isOpen} onClose={onClose}>
      
        <ModalBody pb={6}>
        <ModalHeader>Add New Product</ModalHeader>
          <Input data-cy="add-product-title" placeholder="Title" onChange={(e)=>e.target.value} />
          <ModalHeader>Category</ModalHeader>
          <Select data-cy="add-product-category">
            <option data-cy="add-product-category-shirt">Shirt</option>
            <option data-cy="add-product-category-pant">Pant</option>
            <option data-cy="add-product-category-jeans">Jeans</option>
          </Select>
          <ModalHeader>Gender</ModalHeader>
          <RadioGroup data-cy="add-product-gender">
            <Radio data-cy="add-product-gender-male">Male</Radio>
            <Radio data-cy="add-product-gender-female">Female</Radio>
            <Radio data-cy="add-product-gender-unisex">Unisex</Radio>
          </RadioGroup>
          <Input data-cy="add-product-price" />
          <Button data-cy="add-product-submit-button" onClick={onClose} >Submit</Button>
        </ModalBody>
      </Modal>
    </>
  );
};

export default AddProduct;
