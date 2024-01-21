import { Inter } from 'next/font/google';
import { EB_Garamond } from 'next/font/google';
import { Open_Sans } from 'next/font/google';

export const title = Inter({
    subsets: ['latin'],
    weight: ['400'],
});

export const body = Open_Sans({
    subsets: ['latin'],
    weight: ['400'],
});

export const flair = EB_Garamond({
    subsets: ['latin'],
    style: ['italic'],
    weight: ['400'],
});