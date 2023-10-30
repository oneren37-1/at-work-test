import type { Meta, StoryObj } from '@storybook/react';
import {Platform, PlatformContext} from "../components/PlatformContext/PlatformContext";
import {ComponentProps} from "react";
import Card from "../components/Card/Card";

const meta = {
    title: 'Card',
    component: Card,
    decorators: [
        (Story, { args }) => (
            <PlatformContext.Provider value={args.platformContextValue}>
                <div style={{
                    padding: "100px",
                    background: "#eee",
                    width: args.platformContextValue === 'mobile' ? "200px" : "450px"
                }} >
                    <Story />
                </div>
            </PlatformContext.Provider>
        ),
    ],
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        platformContextValue: { control: 'inline-radio', options: ['desktop', 'mobile'] },
    },
} satisfies Meta< ComponentProps<typeof Card> & { platformContextValue: Platform }>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Desktop: Story = {
    args: {
        id: "0",
        status: "active",
        username: "Ivan1234",
        avatar: "https://s3-alpha-sig.figma.com/img/4d47/8bb4/c4df08734f93921230736e92b21788b4?Expires=1699228800&Signature=kLX9Bc5Nx4797G3wkRf1ANUssBLk7KBauB1Qgh~vlSRncgGbu7d2lkKMkHELvckNp4dv0hDwQraf2Gw1rC7UAXAFjWPS9JGGKAzXPdxL26xlFGOph94larjoBXAWqmjWi9k5WwAZC7DOAb7-npVco5u2VP83Xl6hxD~UndS9tnHPcF-hECMwoOKCafGMkTFRe7fmhHxqxtIeExl-7Xek~kpw4d8RxXDU~82JeMzP9L4IWR1q-7kdmLRxdEZ7zIB1-k70b07sGjVknYSlCjjGg3BBTccNui2Q5NE-njtOv7q62zlJk4YFvoKVrSJWRMuz9hI1XzqpO-rhFoaVOPHjIg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        company: "At-Work",
        location: "Санкт-Петербург",
        platformContextValue: 'desktop',
    },
};

export const Mobile: Story = {
    args: {
        id: "0",
        status: "active",
        username: "Ivan1234",
        avatar: "https://s3-alpha-sig.figma.com/img/4d47/8bb4/c4df08734f93921230736e92b21788b4?Expires=1699228800&Signature=kLX9Bc5Nx4797G3wkRf1ANUssBLk7KBauB1Qgh~vlSRncgGbu7d2lkKMkHELvckNp4dv0hDwQraf2Gw1rC7UAXAFjWPS9JGGKAzXPdxL26xlFGOph94larjoBXAWqmjWi9k5WwAZC7DOAb7-npVco5u2VP83Xl6hxD~UndS9tnHPcF-hECMwoOKCafGMkTFRe7fmhHxqxtIeExl-7Xek~kpw4d8RxXDU~82JeMzP9L4IWR1q-7kdmLRxdEZ7zIB1-k70b07sGjVknYSlCjjGg3BBTccNui2Q5NE-njtOv7q62zlJk4YFvoKVrSJWRMuz9hI1XzqpO-rhFoaVOPHjIg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        company: "At-Work",
        location: "Санкт-Петербург",
        platformContextValue: 'mobile',
    },
};

export const Disabled: Story = {
    args: {
        id: "0",
        status: "active",
        username: "Ivan1234",
        avatar: "https://s3-alpha-sig.figma.com/img/4d47/8bb4/c4df08734f93921230736e92b21788b4?Expires=1699228800&Signature=kLX9Bc5Nx4797G3wkRf1ANUssBLk7KBauB1Qgh~vlSRncgGbu7d2lkKMkHELvckNp4dv0hDwQraf2Gw1rC7UAXAFjWPS9JGGKAzXPdxL26xlFGOph94larjoBXAWqmjWi9k5WwAZC7DOAb7-npVco5u2VP83Xl6hxD~UndS9tnHPcF-hECMwoOKCafGMkTFRe7fmhHxqxtIeExl-7Xek~kpw4d8RxXDU~82JeMzP9L4IWR1q-7kdmLRxdEZ7zIB1-k70b07sGjVknYSlCjjGg3BBTccNui2Q5NE-njtOv7q62zlJk4YFvoKVrSJWRMuz9hI1XzqpO-rhFoaVOPHjIg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        company: "At-Work",
        location: "Санкт-Петербург",
        disabled: true,
        platformContextValue: 'desktop',
    },
};