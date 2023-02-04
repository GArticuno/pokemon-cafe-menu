export type OfferingProps = {
  objectId: string;
  name: string;
  image: {
    __type: string;
    name: string;
    url: string;
  };
  chef_id: {
    __type: string;
    className: "Chefs";
    objectId: string;
  };
  category: string;
  description: string
};

export type ResponseProps = {
  results: OfferingProps[];
};
