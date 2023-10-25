import type { Meta, StoryObj } from '@storybook/react';
import Button from "../components/Button/Button";
import {Platform, PlatformContext} from "../components/PlatformContext/PlatformContext";
import {ComponentProps} from "react";

const meta = {
    title: 'Example/Button',
    component: Button,
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
        text: { control: 'text' },
        platformContextValue: { control: 'inline-radio', options: ['desktop', 'mobile'] },
    },
} satisfies Meta< ComponentProps<typeof Button> & { platformContextValue: Platform }>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Desktop: Story = {
    args: {
        text: 'Button',
        platformContextValue: 'desktop',
    },
};

export const Mobile: Story = {
    args: {
        text: 'Button',
        platformContextValue: 'mobile',
    },
};