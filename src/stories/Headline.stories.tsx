import type { Meta, StoryObj } from '@storybook/react';
import Headline from "../components/Typography/Headline/Headline";
import {Platform, PlatformContext} from "../components/PlatformContext/PlatformContext";
import {ComponentProps} from "react";
import Button from "../components/Button/Button";

const meta = {
    title: 'Typography/Headline',
    component: Headline,
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
} satisfies Meta<ComponentProps<typeof Headline> & { platformContextValue: Platform }>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {
    args: {
        children: 'Заголовок',
        platformContextValue: 'desktop',
    },
};
