import type { Meta, StoryObj } from '@storybook/react';
import {Platform, PlatformContext} from "../components/PlatformContext/PlatformContext";
import {ComponentProps} from "react";
import Icon from "../components/Icon/Icon";
import {faArrowLeft, faBell, faEllipsisVertical, faHeart, faXmark } from '@fortawesome/free-solid-svg-icons';

const meta = {
    title: 'Icon',
    component: Icon,
    decorators: [
        (Story, { args }) => (
            <PlatformContext.Provider value={args.platformContextValue}>
                <Story />
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
} satisfies Meta< ComponentProps<typeof Icon> & { platformContextValue: Platform }>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Desktop: Story = {
    args: {
        i: faEllipsisVertical,
        platformContextValue: 'desktop',
    },
};

export const Mobile: Story = {
    args: {
        i: faEllipsisVertical,
        platformContextValue: 'mobile',
    },
};
export const Heart: Story = {
    args: {
        i: faHeart,
        platformContextValue: 'desktop',
    },
};
export const Bell: Story = {
    args: {
        i: faBell,
        platformContextValue: 'desktop',
    },
};

export const Xmark: Story = {
    args: {
        i: faXmark,
        platformContextValue: 'desktop',
    },
};
export const LArrow: Story = {
    args: {
        i: faArrowLeft,
        platformContextValue: 'desktop',
    },
};