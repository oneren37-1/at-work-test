import type { Meta, StoryObj } from '@storybook/react';
import Text from "../components/Typography/Text/Text";
import {Platform, PlatformContext} from "../components/PlatformContext/PlatformContext";
import {ComponentProps} from "react";
import Headline from "../components/Typography/Headline/Headline";

const meta = {
    title: 'Typography/Text',
    component: Text,
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
        size: { control: 'inline-radio', options: ['medium', 'large'] },
        weight: { control: 'inline-radio', options: ['regular', 'semi-bold'] },
        platformContextValue: { control: 'inline-radio', options: ['desktop', 'mobile'] },
    },
} satisfies Meta<ComponentProps<typeof Text> & { platformContextValue: Platform }>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {
    args: {
        children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        size: 'medium',
        weight: 'regular',
        platformContextValue: 'desktop',
    },
};
