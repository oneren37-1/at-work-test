import type { Meta, StoryObj } from '@storybook/react';
import {Platform, PlatformContext} from "../components/PlatformContext/PlatformContext";
import {ComponentProps} from "react";
import Input from "../components/Input/Input";

const meta = {
    title: 'Input',
    component: Input,
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
        label: { control: 'text' },
        platformContextValue: { control: 'inline-radio', options: ['desktop', 'mobile'] },
    },
} satisfies Meta< ComponentProps<typeof Input> & { platformContextValue: Platform }>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Desktop: Story = {
    args: {
        placeholder: 'Placeholder',
        label: 'Heading',
        platformContextValue: 'desktop',
    },
};

export const Mobile: Story = {
    args: {
        placeholder: 'Placeholder',
        label: 'Heading',
        platformContextValue: 'mobile',
    },
};