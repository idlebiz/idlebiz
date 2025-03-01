import type { Material } from "@/game/types/material";

export type Building = {
  name: string;
  canonicalName: string;
  description: string;
  cost: BuildingCost;
  input: BuildingMaterial[];
  output: BuildingMaterial[];
};

export type BuildingCost = {
  cash: number;
  materials: BuildingMaterial[];
};

export type BuildingMaterial = {
  name: Material["canonicalName"];
  amount: number;
};
