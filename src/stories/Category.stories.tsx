import type { Meta, StoryObj } from '@storybook/react';
import {Platform, PlatformContext} from "../components/PlatformContext/PlatformContext";
import {ComponentProps} from "react";
import Category from "../components/Category/Category";
import Title from "../components/Typography/Title/Title";

const meta = {
    title: 'Category',
    component: Category,
    decorators: [
        (Story, { args }) => (
            <PlatformContext.Provider value={args.platformContextValue}>
                <div style={{ width: "300px" }}>
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
} satisfies Meta< ComponentProps<typeof Category> & { platformContextValue: Platform }>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Desktop: Story = {
    args: {
        children: (<Title>Категория</Title>),
        platformContextValue: 'desktop',
    },
};

export const Mobile: Story = {
    args: {
        children: (<Title>Категория</Title>),
        platformContextValue: 'mobile',
    },
};