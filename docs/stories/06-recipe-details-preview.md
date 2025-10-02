# User Story: 6 - Preview Recipe Details During Upload

**As a** recipe contributor,
**I want** to preview and review my recipe's name and description during the upload process,
**so that** I can ensure the recipe information is accurate before sharing it with others.

## Acceptance Criteria

### During Upload:
* A form is presented after image selection requesting:
  * Recipe name (required field)
  * Recipe description (required field)
* Before final submission:
  * The selected image is displayed alongside the entered details
  * The preview matches the layout of existing recipe cards
  * An option to edit the details is provided
  * A confirmation button is available to proceed with upload

### After Upload:
* The new recipe appears in the gallery with other recipes
* Clicking the recipe image shows the full details view
* The recipe details are displayed in the same format as pre-existing recipes
* The name and description are visible and properly formatted

### Validation:
* Cannot proceed without providing both name and description
* Cannot submit the form without reviewing the preview
* Preview accurately reflects how the recipe will appear in the gallery

## Notes
* This story delivers end-to-end value by ensuring recipe contributors can:
  * Enter recipe details
  * Review how their recipe will appear
  * Confirm the submission
  * See their recipe displayed consistently with others
* The story is independent as it builds on existing upload functionality but delivers complete new value
* It is small enough to complete in one sprint while delivering meaningful functionality
* Success can be clearly tested through the acceptance criteria