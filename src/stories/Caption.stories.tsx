import type { Meta, StoryObj } from '@storybook/react';
import {Platform, PlatformContext} from "../components/PlatformContext/PlatformContext";
import {ComponentProps} from "react";
import Caption from "../components/Typography/Caption/Caption";

const meta = {
    title: 'Typography/Caption',
    component: Caption,
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
        children: { control: 'text' },
        platformContextValue: { control: 'inline-radio', options: ['desktop', 'mobile'] },
    },
} satisfies Meta<ComponentProps<typeof Caption> & { platformContextValue: Platform }>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {
    args: {
        platformContextValue: 'desktop',
        children: 'Caption',
    },
};
