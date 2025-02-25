import {styled} from "@mui/material"

// styled is a MUI function that allows you to create custom-styled components.
export const VisuallyHiddenInput = styled("input")({
  border: 0,
  clip: 'rect(0 0 0 0)', // So, that the input element doesn't appear on the screen.
  height: 1,
  margin: -1,
  overflow: 'hidden',
  padding: 0,
  position: 'absolute',
  width: 1,
  whiteSpace: 'nowrap', 
});

