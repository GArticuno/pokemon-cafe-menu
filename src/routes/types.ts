import type { ChefProps } from "../screens/Chefs/types";
import type { OfferingProps } from "../screens/Offerings/types";

export type RoutesTab = {
  offerings: undefined;
  chefs: undefined;
  dev: undefined;
}

export type RoutesOfferStack = {
  offerDetails: {
    offer: OfferingProps;
  };
  offeringsHome: undefined;
};

export type RoutesChefStack = {
  chefDetails: {
    chef: ChefProps;
  };
  chefsHome: undefined;
};