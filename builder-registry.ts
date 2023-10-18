"use client";
import { Builder } from "@builder.io/react";
import Counter from "./components/Counter/Counter";
import MegaMenu from "./components/Megamenu/MegaMenu";

Builder.registerComponent(Counter, {
  name: "Counter",
  inputs: [
    {
      name: "initialCount",
      type: "number",
    },
  ],
});

Builder.registerComponent(MegaMenu, {
  name: "MegaMenu",
});
