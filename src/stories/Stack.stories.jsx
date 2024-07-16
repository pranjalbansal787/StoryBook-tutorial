import Stack from "../components/Stack" // Importing the Stack component from the components directory

export default {
  title: "Components/Stack", // Storybook title for the component
  component: Stack, // The component to be rendered in Storybook
  argTypes: {
    numberOfChildren: { type: "number", defaultValue: 4 }, // Argument types and default values for Storybook controls
  },
}

// Template function that generates a stack of child elements
const Template = ({ numberOfChildren, ...args }) => (
  <Stack {...args}> {/* Rendering the Stack component with spread props */}
    {[...Array(numberOfChildren).keys()].map(n => (
      <div
        style={{
          width: "50px",
          height: "50px",
          backgroundColor: "red",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {n + 1} {/* Displaying child index number */}
      </div>
    ))}
  </Stack>
)

// Exporting different variations of the Template component as individual stories

export const Horizontal = Template.bind({}) // Horizontal stack with specific args
Horizontal.args = {
  direction: "row",
  spacing: 2,
  wrap: false,
}

export const Vertical = Template.bind({}) // Vertical stack with specific args
Vertical.args = {
  direction: "column",
  spacing: 2,
  wrap: false,
}

export const NoSpacing = Template.bind({}) // Stack with no spacing between items
NoSpacing.args = {
  direction: "row",
  spacing: 0,
  wrap: false,
}

export const WrapOverflow = Template.bind({}) // Stack with wrapping enabled and more children
WrapOverflow.args = {
  numberOfChildren: 40,
  direction: "row",
  spacing: 2,
  wrap: true,
}

export const Empty = Template.bind({}) // Stack with zero children
Empty.args = {
  numberOfChildren: 0,
  direction: "row",
  spacing: 2,
  wrap: false,
}
