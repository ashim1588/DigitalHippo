"use client";
import React, { useEffect, useState } from 'react'
import { Button } from './ui/button';
import { clear } from 'console';

const AddToCartButton = () => {
    const [isSucess, setIsSuccess] = useState<boolean>(false);
    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsSuccess(false);
        }, 2000);

        return () => clearTimeout(timeout);
    },[isSucess])
  return (
    <Button onClick={() => setIsSuccess(true)} size='lg' className='w-full'>
        {isSucess ? 'Added!' : 'Add to cart'}
    </Button>
  )
}

export default AddToCartButton;