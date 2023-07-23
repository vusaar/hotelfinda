import {SearchButton} from "../components/SearchButton";

export default {
    title: 'Example/SearchButton',
    component:SearchButton,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
      },
      // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
      tags: ['autodocs'],
      // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
      argTypes: {
        backgroundColor: { control: 'color' },
      },
};

export const Primary = {
    args: {
      primary: true,
      label: 'Button',
    },
  };