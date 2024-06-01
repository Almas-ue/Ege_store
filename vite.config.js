import { defineConfig } from "vite";
import React from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    React({
      rollupPluginVueOptions: {
        template: {
          compilerOptions: {
            // Добавляем игнорирование предупреждений о недопустимых свойствах DOM
            allowedElements: [
              "svg",
              "path",
              "g",
              "circle",
              "line",
              "rect",
              "text",
              "linearGradient",
              "stop",
              "fillRule",
            ],
          },
        },
      },
    }),
  ],
});
