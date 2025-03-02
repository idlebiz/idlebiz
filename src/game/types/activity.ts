import type { Building, BuildingCost } from "@/game/types/building";

export type Activity = {
  platform: ActivityPlatform;
  profile: ActivityProfile;
  metadata: ActivityMetadata;
} & {
  [K in keyof ActivityDataMap]: { action: K; data: ActivityDataMap[K] };
}[keyof ActivityDataMap];

type ActivityDataMap = {
  [ActivityAction.BuildingPurchase]: BuildingPurchaseData;
  [ActivityAction.BuildingUpgrade]: BuildingUpgradeData;
};

export enum ActivityPlatform {
  Discord = "discord",
}

export enum ActivityAction {
  // Building
  BuildingPurchase = "buildingPurchase",
  BuildingUpgrade = "buildingUpgrade",
}

export type BuildingPurchaseData = {
  building: Building["canonicalName"];
  cost: BuildingCost;
};

export type BuildingUpgradeData = {
  building: Building["canonicalName"];
  // TODO: add typings
};

export type ActivityMetadata = {
  createdAt: Date;
};

export type ActivityProfile = {
  // TODO: add typings
};
