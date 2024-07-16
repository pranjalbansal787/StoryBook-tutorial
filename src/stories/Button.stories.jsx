import Button from "../components/Button" // Importing the Button component from the components directory

export default {
  title: "Components/Button", // Storybook title for the Button component
  component: Button, // The component to be rendered in Storybook
  argTypes: { handleClick: { action: "handleClick" } }, // Argument types and actions for Storybook controls
}

// Template function that renders the Button component with given args
const Template = args => <Button {...args} />

// Exporting different variations of the Template component as individual stories

export const Red = Template.bind({}) // Red Button variation
Red.args = {
  backgroundColor: "red",
  label: "Press Me",
  size: "md",
}

export const Green = Template.bind({}) // Green Button variation
Green.args = {
  backgroundColor: "green",
  label: "Press Me",
  size: "md",
}

export const Small = Template.bind({}) // Small Button variation
Small.args = {
  backgroundColor: "red",
  label: "Press Me",
  size: "sm",
}

export const Large = Template.bind({}) // Large Button variation
Large.args = {
  backgroundColor: "red",
  label: "Press Me",
  size: "lg",
}

export const LongLabel = Template.bind({}) // Button with a long label variation
LongLabel.args = {
  backgroundColor: "red",
  label: "Press Me adsf asdf asdf asdfasdfasd fasd fasd fasd", // Example of a long label
  size: "md",
}
