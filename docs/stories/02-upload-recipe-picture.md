# User Story: 2 - Upload and Auto-Generate Recipe

**As a** recipe contributor,  
**I want** the system to auto-generate recipe details when I upload a food picture,  
**so that** I can quickly share recipes with minimal effort.

## Acceptance Criteria

### Upload Interface
* "+" button available to initiate new recipe upload
* Modal dialog appears when "+" is clicked
* Support both drag-and-drop AND file selection upload methods
* File upload limited to image formats
* Upload interface works on desktop/laptop (not mobile)

### Auto-Generation
* System automatically generates recipe details after image upload
* For MVP, system randomly selects from pre-canned recipe templates
* Generated details include:
  - Recipe name
  - Description
  - Image preview

### Preview and Acceptance
* System shows preview of the generated recipe before finalizing
* Preview displays:
  - Uploaded image
  - Generated recipe name
  - Generated description
* User can:
  - Accept the generated recipe (submits to collection)
  - Edit the generated details
  - Cancel and try again
* Preview matches the layout used in the recipe gallery

### Storage and Access
* Accepted recipes are stored with:
  - Original uploaded image
  - Generated/edited recipe name
  - Generated/edited description
* New recipes appear immediately in the recipe gallery
* Stored recipes persist between sessions

## Notes
* MVP uses pre-canned recipes instead of real AI generation
* Pre-canned recipes focus on popular Southeast Asian dishes
* Mobile support and camera integration planned for future versions
* Future versions will use AI for actual image recognition and recipe generation

## Technical Notes
* Pre-canned recipe templates stored in `src/app/_data/recipes.json`
* Image storage handled through local file system for MVP
* Preview uses same component as recipe gallery for consistency