import SweetsIcon from "../assets/sweets-icon.png";
import PlatesIcon from "../assets/plates-icon.png";
import EntreesIcon from "../assets/entrees-icon.png";
import DrinksIcon from "../assets/drinks-icon.png";

export const offerCategory = (category: string) => {
  switch(category) {
    case 'plates':
      return {
        name: 'Small plates',
        icon: PlatesIcon,
      };
    case 'entrees':
      return {
        name: 'Entreés',
        icon: EntreesIcon,
      };
    case 'drinks':
      return {
        name: 'Drinks',
        icon: DrinksIcon,
      };
    default:
      return {
        name: 'Sweets',
        icon: SweetsIcon,
      }
  };
};