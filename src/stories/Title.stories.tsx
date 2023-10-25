import type { Meta, StoryObj } from '@storybook/react';
import Title from "../components/Typography/Title/Title";
import {Platform, PlatformContext} from "../components/PlatformContext/PlatformContext";
import {ComponentProps} from "react";

const meta = {
    title: 'Typography/Title',
    component: Title,
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
} satisfies Meta<ComponentProps<typeof Title> & { platformContextValue: Platform }>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {
    args: {
        text: 'Заголовок',
        platformContextValue: 'desktop',
    },
};

