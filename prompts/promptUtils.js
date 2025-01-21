export function getSystemPrompt() {
  return {
    role: "system",
    content: "You are a helpful assistant that specializes in generating Fujifilm custom recipe.",
  };
}

export function getUserPrompt(input) {
  return {
    role: "user",
    content: `Generate a Fujifilm custom recipe suggestion related to "${input}".`,
  };
}

export function getFunctions() {
  return [
    {
      name: "generate_fujifilm_recipe",
      description: "Generate a Fujifilm suggestion based on user input.",
      parameters: {
        type: "object",
        properties: {
          title: {
            type: "string",
            description: "The name of the custom recipe"
          },
          description: {
            type: "string",
            description: "A brief description of the suggested film recipe.",
          },
          effectAndAesthetic: {
            type: "string",
            description: "Short explanation of the effect after applying the film recipe"
          },
          exampleUse: {
            type: "string",
            description: "Curated use case of said film recipe"
          },
          colorProfile: {
            type: "string",
            description: "The color profile of the film (e.g., Classic Chrome, Velvia, etc.)",
          },
          iso: {
            type: "string",
            description: "ISO ranges from certain number to a maximum",
          },
          dynamicRange: {
            type: "string",
            description: "The dynamic range required to increase highlight detail and preserve shadow",
            enum: ["dr100", "dr200", "dr400"]
          },
          highlight: {
            type: "integer",
            description: " Adjusts the brightness of the brightest areas in the image (highlights). Lower values reduce the intensity of highlights.",
            minimum: -2,
            maximum: 4
          },
          shadow: {
            type: "integer",
            description: "Controls the brightness of the darker areas of the image (shadows). Raising this value brightens the shadows, while lowering it deepens them.",
            minimum: -2,
            maximum: 4
          },
          color: {
            type: "integer",
            description: "Adjusts the overall saturation (intensity) of colors in the image. Higher values increase saturation, while lower values desaturate the colors.\nAdjusts the overall saturation (intensity) of colors in the image. Higher values increase saturation, while lower values desaturate the colors.",
            minimum: -2,
            maximum: 4
          },
          noiseReduction: {
            type: "integer",
            description: "Controls the level of noise reduction applied to the image. Lower values preserve grain (which adds a film-like texture), while higher values smooth out noise.",
            minimum: -4,
            maximum: 4
          },
          sharpening: {
            type: "integer",
            description: "Adjusts the sharpness of the image. Higher values will make fine details more pronounced.",
            minimum: -2,
            maximum: 2
          },
          clarity: {
            type: "integer",
            description: "Adjusts the midtone contrast and adds a bit of local contrast. This is useful for enhancing texture and detail in the mid-tones.",
            minimum: -2,
            maximum: 3
          },
          grain: {
            type: "string",
            description: "Adds grain (film-like texture) to the image. You can control both the strength and size of the grain.",
            enum: ["off", "weak-small", "weak-large", "strong-small", "strong-large"]
          },
          colorChromeFx: {
            type: "string",
            description: "Enhances the depth and vibrancy of certain colors, typically reds and yellows, making them more intense and lifelike.",
            enum: ["off", "weak", "strong"]
          },
          colorChromeBlueFx: {
            type: "string",
            description: "Enhances the vibrancy of blues in the image. You can adjust it to give blues more depth and vibrancy.",
            enum: ["off", "weak", "strong"]
          },
          whiteBalance: {
            type: "string",
            description: "Controls white balance of the image based on Fujifilm WB menu",
            enum: ["awb", "daylight", "cloudy", "shade", "direct-sunlight", "fluorescent-lights", "incandescent-lighting", "under-water"]
          },
          whiteBalanceShiftBlue: {
            type: "integer",
            description: "Control images cooler tint",
            minimum: -7,
            maximum: 7
          },
          whiteBalanceShiftRed: {
            type: "integer",
            description: "Control images warmer tint",
            minimum: -7,
            maximum: 7
          },
          whiteBalanceTemperature: {
            type: "integer",
            description: "Control images temperature using Kelvin",
            minimum: 2000,
            maximum: 15000
          },
          exposureCompensation: {
            type: "array",
            description: "Exposure Compensation ranges from certain number to a maximum (e.g. -1/3 to 2/3)",
            tags: ["-2/3", "-1/3", "0", "+1/3", "+2/3"],
            items: {
              type: "string"
            },
          },
          optionalAdjustments: {
            type: "string",
            description: "Additional adjustment if you want to take the recipe to the next level",
          }
        },
        required: ["description", "colorProfile", "dynamicRange", "shadow", "highlight", "color", "sharpening", "clarity", "whiteBalance"]
      },
    },
  ];
}
